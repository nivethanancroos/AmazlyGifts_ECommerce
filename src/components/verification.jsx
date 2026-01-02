import { useState, useRef } from "react";
import "./Verification.css";
import bgImage from "../assets/images/gift.jpg";
import { useNavigate } from "react-router-dom";

function Verification() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div
      className="otp-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="otp-card">
        {/* Header */}
        <div className="otp-header">
          <button onClick={() => navigate("/forgot-password")}>&larr;</button>
          <button onClick={() => navigate("/")}>✕</button>
        </div>

        {/* Title */}
        <h2>Check your Email</h2>
        <p className="otp-subtitle">
          We sent a reset link to <strong>contact@dscode...com</strong><br />
          Enter the 5-digit code mentioned in the email
        </p>

        {/* OTP Inputs */}
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        {/* Button */}
        <button className="otp-btn">Verify Code</button>

        {/* Resend */}
        <p className="otp-resend">
          Haven&apos;t got the email yet? <span>Resend email</span>
        </p>
      </div>
    </div>
  );
}

export default Verification;
