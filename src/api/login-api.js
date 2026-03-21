import { BASE_URLS, handleApi } from "./axios";

const userApi = handleApi(BASE_URLS.USER);

// USER LOGIN API
export const sendOtpApi = (data) =>
    userApi.post("/api/v1/user/login", data);

// VERIFY OTP API
export const verifyOtpApi = (data) =>
    userApi.post("/api/v1/user/verify-otp", data);

// REFRESH TOKEN API
export const refreshTokenApi = (refreshToken) =>
    userApi.post("/api/v1/user/token/refresh", {}, {
        headers: { refreshToken }
    });

// USER LOGOUT
export const logoutApi = () => {
    const refreshToken = sessionStorage.getItem("refreshToken");

    return userApi.post("/api/v1/user/logout", {}, {
        headers: {
            accessToken: sessionStorage.getItem("accessToken"),
            refreshToken: refreshToken ?? "",
        }
    });
};