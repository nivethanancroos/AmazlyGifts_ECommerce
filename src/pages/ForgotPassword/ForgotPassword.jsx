import { useState } from "react";
import "./ForgotPassword.css";
import bgImage from "../../assets/images/gift.jpg";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [method, setMethod] = useState("email");
  const navigate = useNavigate();

  return (
    <div
      className="fp-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="fp-card">
        {/* Header */}
        <div className="fp-header">
          <button className="fp-back" onClick={() => navigate("/")}>
            &#8592;
          </button>
          <button className="fp-close" onClick={() => navigate("/")}>
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className="fp-title">Forgot password</h2>
        <p className="fp-subtitle">
          Please enter your email or phone number you used to get registered
          to reset the password
        </p>

        {/* Tabs */}
        <div className="fp-tabs">
          <button
            className={`fp-tab ${method === "email" ? "active" : ""}`}
            onClick={() => setMethod("email")}
          >
            email
          </button>
          <button
            className={`fp-tab ${method === "phone" ? "active" : ""}`}
            onClick={() => setMethod("phone")}
          >
            phone
          </button>
        </div>

        {/* Input */}
        <div className="fp-input">
          <label>
            {method === "email" ? "Your Email" : "Your Phone"}
          </label>
          <input
            type={method === "email" ? "email" : "tel"}
            placeholder={
              method === "email"
                ? "Enter your email"
                : "Enter your phone number"
            }
          />
        </div>

        {/* Button */}
       <button
  className="fp-button" onClick={() => navigate("/verify-otp")}>
       Reset Password
      </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
