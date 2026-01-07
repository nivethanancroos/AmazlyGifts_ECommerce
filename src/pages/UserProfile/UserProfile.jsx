import "./UserProfile.css";
import { FiEdit, FiUser, FiMapPin } from "react-icons/fi";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserProfile() {
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
              {/* <span className="change-photo">Change</span> */}
            </label>
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
              onClick={() =>
                navigate("/account-settings/profile-edit")
              }
            />
          </div>

          <div className="profile-form">
            <label>Your Full Name</label>
            <input value="Jane Rachel" disabled />

            <label>Your Email Address</label>
            <input value="officialmail@gmail.com" disabled />

            <label>Your Mobile Number</label>
            <input value="07x xxxxxxx" disabled />

            <div className="dob-row">
              <label>Date of Birth</label>
            </div>

            <input type="date" value="2022-11-25" disabled />

            <div className="logout-wrapper flex justify-end">
              <button
                className="logout-btn"
                onClick={() => navigate("/")}
              >
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
