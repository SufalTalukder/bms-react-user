import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { sendOtpApi, verifyOtpApi, logoutApi } from "../api/login-api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserContext = createContext({
    user: null,
    loading: true,
    otpStep: "PHONE",
    otpSending: false,
    otpVerifying: false,
    sendOtp: async () => { },
    verifyOtp: async () => { },
    resetOtpFlow: () => { },
    logout: async () => { },
});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // OTP step state
    const [otpStep, setOtpStep] = useState("PHONE");
    const [pendingUserId, setPendingUserId] = useState(null);
    const [otpSending, setOtpSending] = useState(false);
    const [otpVerifying, setOtpVerifying] = useState(false);

    const navigate = useNavigate();

    // Send OTP
    const sendOtp = async (phoneNumber) => {
        setOtpSending(true);
        try {
            const res = await sendOtpApi({ phone_number: phoneNumber });
            const { user_id, is_new_user } = res.data.data;

            setPendingUserId(user_id);
            setOtpStep("OTP");

            toast.success(is_new_user ? "Welcome! OTP sent." : "Welcome back! OTP sent.");
            return true;
        } catch (err) {
            const msg = err.response?.data?.message || "Failed to send OTP.";
            toast.error(msg);
            return false;
        } finally {
            setOtpSending(false);
        }
    };

    // Verify OTP
    const verifyOtp = async (otp) => {
        setOtpVerifying(true);
        try {
            const res = await verifyOtpApi({
                user_id: pendingUserId,
                otp,
            });

            const { access_token, refresh_token, user: userData } = res.data.data;

            sessionStorage.setItem("accessToken", access_token);
            sessionStorage.setItem("refreshToken", refresh_token);
            sessionStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
            setOtpStep("PHONE");
            setPendingUserId(null);

            toast.success("Login successful!");
            return true;
        } catch (err) {
            const msg = err.response?.data?.message || "Invalid or expired OTP.";
            toast.error(msg);
            return false;
        } finally {
            setOtpVerifying(false);
        }
    };

    // Reset OTP
    const resetOtpFlow = () => {
        setOtpStep("PHONE");
        setPendingUserId(null);
    };

    // LOGOUT
    const logout = async () => {
        try {
            await logoutApi();
        } catch {
            // silent fail — clear session anyway
        } finally {
            sessionStorage.clear();
            setUser(null);
            resetOtpFlow();
            navigate("/", { replace: true });
        }
    };

    // INIT Again
    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        const storedToken = sessionStorage.getItem("accessToken");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    return (
        <UserContext.Provider value={{
            user,
            loading,
            otpStep,
            otpSending,
            otpVerifying,
            sendOtp,
            verifyOtp,
            resetOtpFlow,
            logout,
        }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);