import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { FiSearch, FiTruck, FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar ">
      <img
        src={Logo}
        alt="Orange Lily"
        className="nav-logo "
        onClick={() => navigate("/landing")}
      />

      {/* Center - Search */}
      <div className="nav-center">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      {/* Right - Icons */}
      <div className="nav-right" ref={dropdownRef}>
        <FiTruck
          className="nav-icon clickable"
          onClick={() => navigate("/order-tracking")}
        />

        <div className="cart-wrapper">
          <FiShoppingCart
            className="nav-icon"
            onClick={() => navigate("/Products")}
          />
          {/* <span className="cart-badge">3</span> */}
        </div>

        {/* PROFILE */}
        <div className="profile-circle" onClick={() => setOpen(!open)}>
          <FiUser />
        </div>

        {/* 🔥 DROPDOWN */}
        {open && (
          <div className="profile-dropdown">
            <div
              className="dropdown-item"
              onClick={() => {
                navigate("/account-settings");
                setOpen(false); // optional: close dropdown
              }}
            >
              Account Settings
            </div>

            <div className="dropdown-item">My wishlist</div>
            <div
              className="dropdown-item logout "
              onClick={() => navigate("/")}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
