import { useState, useRef } from "react";
import { useUser } from "../../context/UserContext";

export default function LoginViewModal() {

    const { sendOtp, verifyOtp, resetOtpFlow, otpStep, otpSending, otpVerifying } = useUser();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const otpRefs = [useRef(), useRef(), useRef(), useRef()];

    // Send OTP
    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (!phoneNumber.trim()) return;
        await sendOtp(phoneNumber.trim());
    };

    // OTP digit input handler
    const handleOtpChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const updated = [...otp];
        updated[index] = value;
        setOtp(updated);
        if (value && index < 3) otpRefs[index + 1].current.focus();
    };

    const handleOtpKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            otpRefs[index - 1].current.focus();
        }
    };

    // Verify OTP
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const otpString = otp.join("");
        if (otpString.length < 4) return;
        const success = await verifyOtp(otpString);
        if (success) {
            // close offcanvas
            document.querySelector("#login .btn-close")?.click();
            setPhoneNumber("");
            setOtp(["", "", "", ""]);
        }
    };

    const handleBack = () => {
        resetOtpFlow();
        setOtp(["", "", "", ""]);
    };

    return (
        <div className="offcanvas offcanvas-end popup-style-1 popup-login" id="login">
            <div className="canvas-wrapper">

                {/* Header */}
                <div className="canvas-header popup-header">
                    <span className="title">
                        {otpStep === "PHONE" ? "Log in" : "Enter OTP"}
                    </span>
                    <button
                        className="icon-close icon-close-popup btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>

                <div className="canvas-body popup-inner">

                    {/* Request Phone Number */}
                    {otpStep === "PHONE" && (
                        <form onSubmit={handleSendOtp} className="form-login">
                            <p className="text-sm text-main-2 mb_16">
                                Enter your registered phone number to receive an OTP.
                            </p>
                            <div>
                                <fieldset className="mb_12">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        maxLength={10}
                                        minLength={10}
                                        required
                                    />
                                </fieldset>
                            </div>
                            <div className="bot">
                                <div className="button-wrap">
                                    <button
                                        className="tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                                        type="submit"
                                        disabled={otpSending}
                                    >
                                        {otpSending ? "Sending OTP..." : "Send OTP"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                    {/* OTP Verification */}
                    {otpStep === "OTP" && (
                        <form onSubmit={handleVerifyOtp} className="form-login">
                            <p className="text-sm text-main-2 mb_8">
                                OTP sent to <strong>{phoneNumber}</strong>
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: "0 0 3px 6px",
                                        color: "inherit",
                                        verticalAlign: "middle",
                                    }}
                                    title="Edit phone number"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            </p>

                            {/* 4-digit OTP boxes */}
                            <div className="d-flex gap-2 justify-content-center mb_0">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={otpRefs[index]}
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                                        style={{
                                            width: "55px",
                                            height: "52px",
                                            textAlign: "center",
                                            fontSize: "1.4rem",
                                            fontWeight: "600",
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                        }}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-main-2 mb_16 text-end">
                                OTP expires in <strong>5 minutes</strong>.
                            </p>

                            <div className="bot">
                                <div className="button-wrap">
                                    <button
                                        className="tf-btn animate-btn d-inline-flex bg-dark-2 w-100"
                                        type="submit"
                                        disabled={otpVerifying || otp.join("").length < 4}
                                    >
                                        {otpVerifying ? "Verifying..." : "Verify OTP"}
                                    </button>
                                </div>

                                <div className="button-wrap pt-3">
                                    {/* Resend OTP */}
                                    <button
                                        type="button"
                                        className="tf-btn btn-out-line-dark2 w-100 mt_8"
                                        onClick={handleSendOtp}
                                        disabled={otpSending}
                                    >
                                        {otpSending ? "Resending..." : "Resend OTP"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
}