import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  X, // Added for a mobile close button
} from "lucide-react";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/products", label: "Products", icon: Package },
  { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ onClose }) {
  // Added onClose prop
  return (
    <aside className="w-64 bg-white border-r flex flex-col h-full">
      {/* Header: Logo + Close Button */}
      <div className="px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#7B1E3A]">Amazly Admin</h1>

        {/* Close button - Only visible on mobile */}
        <button
          onClick={onClose}
          className="p-2 -mr-2 rounded-lg hover:bg-gray-100 lg:hidden text-gray-500"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end
            onClick={onClose} // Closes sidebar when a link is clicked on mobile
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 lg:py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#7B1E3A] text-white"
                  : "text-gray-700 hover:bg-[#F5E6EA] hover:text-[#7B1E3A]"
              }`
            }
          >
            <Icon size={18} />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Optional: Footer info for mobile */}
      <div className="p-4 border-t lg:hidden">
        <p className="text-xs text-center text-gray-400">© 2026 Amazly Admin</p>
      </div>
    </aside>
  );
}
