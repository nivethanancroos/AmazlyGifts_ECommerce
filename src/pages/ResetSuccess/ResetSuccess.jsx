import { useNavigate } from "react-router-dom";
import "./ResetSuccess.css";
import bgImage from "../../assets/images/gift.jpg";

function ResetSuccess() {
  const navigate = useNavigate();

  return (
    <div
      className="reset-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="reset-card">

        {/* Header */}
        <div className="reset-header">
          <button
            className="reset-back"
            onClick={() => navigate("/verify-otp")}
          >
            &larr;
          </button>

          <button
            className="reset-close"
            onClick={() => navigate("/")}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="reset-content">
          <h2>Password reset</h2>

          <p>
            Your password has been successfully reset.
            <br />
            Click confirm to continue.
          </p>

          <button
            className="reset-btn"
            onClick={() => navigate("/new-password")}
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}

export default ResetSuccess;
