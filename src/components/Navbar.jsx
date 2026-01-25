import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { FiSearch, FiTruck, FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import products from "../data/products";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <img
        src={Logo}
        alt="Orange Lily"
        className="nav-logo"
        onClick={() => navigate("/landing")}
      />

      {/* Center - Search (Added 'relative' for popup positioning) */}
      <div className="nav-center relative" ref={searchRef}>
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
        />

        {/* 🔥 SEARCH RESULTS UI POPUP - Tailwind Enhanced */}
        {showResults && searchQuery.length > 0 && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="max-h-[400px] overflow-y-auto">
              {filteredProducts.length > 0 ? (
                <div className="flex flex-col">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-none"
                      onClick={() => {
                        // navigate(`/product/${product.id}`);
                        setShowResults(false);
                        setSearchQuery("");
                      }}
                    >
                      <div className="w-12 h-12 flex-shrink-0">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-sm font-semibold text-gray-800 truncate">
                          {product.name}
                        </span>
                        <span className="text-xs text-orange-600 font-bold">
                          ₹{product.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-400 italic flex flex-col items-center gap-2">
                  <FiSearch className="text-xl opacity-20" />
                  <span className="text-sm">No products found</span>
                </div>
              )}
            </div>
          </div>
        )}
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
            onClick={() => navigate("/cart")}
          />
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
                setOpen(false);
              }}
            >
              Account Settings
            </div>
            <div className="dropdown-item">My wishlist</div>
            <div className="dropdown-item logout" onClick={() => navigate("/")}>
              Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
