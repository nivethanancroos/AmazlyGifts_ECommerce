import {
  Bell,
  Search,
  LogOut,
  Settings,
  Package,
  UserPlus,
  CheckCircle,
  Menu, // Added Menu icon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Topbar({ onMenuClick }) {
  // Destructure onMenuClick prop
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b px-4 md:px-6 py-4 flex items-center justify-between">
      {/* Left: Mobile Menu + Title */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Toggle - Only visible on small screens */}
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg hover:bg-gray-100 lg:hidden"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
            Admin Dashboard
          </h2>
          <p className="text-xs md:text-sm text-gray-500 hidden xs:block">
            Manage orders, products & settings
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-6">
        {/* Search - Hidden on mobile/tablet, shown on md+ */}
        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search orders, products..."
            className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg hover:bg-gray-100"
          >
            <Bell size={20} className="text-gray-600 hover:text-blue-600" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
              3
            </span>
          </button>

          {/* Notification Dropdown - Responsive width */}
          {showNotifications && (
            <div className="absolute right-[-60px] md:right-0 mt-3 w-[280px] md:w-80 bg-white border rounded-xl shadow-lg z-50">
              <div className="px-4 py-3 border-b">
                <h4 className="font-semibold text-sm">Notifications</h4>
              </div>

              <div className="max-h-72 overflow-y-auto">
                {/* Notification Items remain same */}
                <div className="flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full h-fit">
                    <Package size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New order received</p>
                    <p className="text-xs text-gray-500">
                      Order #AG120 • 5 mins ago
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full h-fit">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Order completed</p>
                    <p className="text-xs text-gray-500">
                      Order #AG118 delivered
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-full h-fit">
                    <UserPlus size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      New customer registered
                    </p>
                    <p className="text-xs text-gray-500">10 minutes ago</p>
                  </div>
                </div>
              </div>

              <div className="border-t px-4 py-3 text-center">
                <button className="text-sm text-blue-600 hover:underline">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Admin Profile */}
        <div className="flex items-center gap-2 md:gap-3 border-l pl-3 md:pl-6">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
            A
          </div>

          {/* Hidden on small mobile */}
          <div className="hidden xl:block">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-gray-500">admin@amazly.com</p>
          </div>

          <div className="flex gap-0 md:gap-2">
            <Link to="/admin/settings">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings size={18} className="text-gray-600" />
              </button>
            </Link>

            <Link to="/">
              <button className="p-2 rounded-lg hover:bg-gray-100 text-red-500">
                <LogOut size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
