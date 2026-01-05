import "./ProfileEdit.css";
import { FiUser, FiMapPin } from "react-icons/fi";
import Navbar from "../../components/Navbar";

function ProfileEdit() {
  return (
    <>
      <Navbar />

      <div className="profile-page">
        {/* LEFT SIDEBAR */}
        <div className="profile-sidebar">
          <h4>Hello, Jane</h4>
          <span className="verified">Verified account</span>

          <div className="sidebar-item active">
            <FiUser /> My Details
          </div>

          <div className="sidebar-item">
            <FiMapPin /> Address Book
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <div className="profile-header">
            <h2>My Profile</h2>
          </div>

          <div className="profile-form">
            <label>Your Full Name <span className="change">Change</span></label>
            <input defaultValue="Jane Rachel" />

            <label>Your Email <span className="change">Change</span></label>
            <input defaultValue="example@gmail.com" />

            <label>Mobile Number <span className="change">Change</span></label>
            <input defaultValue="071 234 5678" />

            <label>Date of Birth <span className="change">Change</span></label>
            <input type="date" defaultValue="2022-11-25" />

            <div className="save-wrapper">
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
