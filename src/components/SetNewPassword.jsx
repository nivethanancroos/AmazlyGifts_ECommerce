import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SetNewPassword.css";
import bgImage from "../assets/images/gift.jpg";

function SetNewPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // ✅ Replace with API call later
    navigate("/login");
  };

  return (
    <div
      className="password-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="password-card">

        {/* Header */}
        <div className="password-header">
          <button onClick={() => navigate(-1)}>←</button>
          <button onClick={() => navigate("/")}>×</button>
        </div>

        <h2>Set a new password</h2>

        <p className="password-subtitle">
          Create a new password. Ensure it differs from<br />
          previous ones for security
        </p>

        <div className="password-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="password-field">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="password-btn" onClick={() => navigate("/password-reset-success")}>
          Update Password
        </button>

      </div>
    </div>
  );
}

export default SetNewPassword;
