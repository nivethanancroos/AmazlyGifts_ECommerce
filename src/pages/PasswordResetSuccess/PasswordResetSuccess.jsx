import { useNavigate } from "react-router-dom";
import "./PasswordResetSuccess.css";
import bgImage from "../../assets/images/gift.jpg";


function PasswordResetSuccess() {
  const navigate = useNavigate();

  return (
    <div
      className="success-overlay"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="success-card">

        {/* Header */}
        <div className="success-header">
          <button onClick={() => navigate(-1)}>←</button>
          <button onClick={() => navigate("/")}>×</button>
        </div>

        {/* Content */}
        <h2>
          Password Reset <br /> Successfully
        </h2>

        <div className="success-icon">
          ✓
        </div>

      </div>
    </div>
  );
}

export default PasswordResetSuccess;
