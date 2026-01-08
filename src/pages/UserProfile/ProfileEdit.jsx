import "./ProfileEdit.css";
import { FiUser, FiMapPin } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/150?img=47" // default avatar
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <Navbar />

      <div className="profile-page">
        {/* LEFT SIDEBAR */}
        <div className="profile-sidebar">
{/* PROFILE IMAGE */}
<div className="profile-avatar">
  <label htmlFor="profile-upload">
    <img src={profileImage} alt="Profile" />
  </label>

  <p
    className="change-photo-text"
    onClick={() => document.getElementById("profile-upload").click()}
  >
    Click to change photo
  </p>

  <input
    type="file"
    id="profile-upload"
    accept="image/*"
    onChange={handleImageChange}
    hidden
  />
</div>
          
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
            <label>Your Full Name </label>
            <input defaultValue="Jane Rachel" />

            <label>Your Email </label>
            <input defaultValue="example@gmail.com" />

            <label>Mobile Number </label>
            <input defaultValue="071 234 5678" />

            <label>Date of Birth </label>
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
