import "./UserProfile.css";
import { FiEdit, FiUser, FiMapPin } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const navigate = useNavigate();

  const profileImage = "https://i.pravatar.cc/150?img=47"; // static avatar (view only)

  return (
    <>
      <Navbar />

      <div className="profile-page">
        {/* LEFT SIDEBAR */}
        <div className="profile-sidebar">
          {/* PROFILE IMAGE (VIEW ONLY) */}
          <div className="profile-avatar">
            <img src={profileImage} alt="Profile" />
          </div>

          <h4>Hello, Jane</h4>
          <span className="verified">Verified account</span>

          <div className="sidebar-item active">
            <FiUser /> My Details
          </div>

          <div
            className="sidebar-item"
            onClick={() => navigate("/address-book")}
          >
            <FiMapPin /> Address Book
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <div className="profile-header">
            <h2>My Profile</h2>
            <FiEdit
              className="edit-icon"
              onClick={() => navigate("/account-settings/profile-edit")}
            />
          </div>

          <div className="profile-form">
            <label>Your Full Name</label>
            <input value="Jane Rachel" disabled />

            <label>Your Email Address</label>
            <input value="officialmail@gmail.com" disabled />

            <label>Your Mobile Number</label>
            <input value="07x xxxxxxx" disabled />

            <label>Date of Birth</label>
            <input type="date" value="2022-11-25" disabled />

            <div className="logout-wrapper">
              <button className="logout-btn" onClick={() => navigate("/")}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
