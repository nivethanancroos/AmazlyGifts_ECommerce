import AdminLayout from "../AdminLayout";
import StatCard from "../components/StatCard";
import RecentOrders from "../components/RecentOrders";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";

export default function Dashboard() {
  return (
    <AdminLayout>
      {/* Page Title - Consistent with other pages */}
      <h1 className="text-xl md:text-2xl font-semibold text-[#7b1e2b] mb-6">
        Dashboard Overview
      </h1>

      {/* StatCards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        <StatCard title="Orders" value="1,245" icon={ShoppingCart} />
        <StatCard title="Customers" value="820" icon={Users} />
        <StatCard title="Revenue" value="LKR 420,000" icon={DollarSign} />
        <StatCard title="Products" value="56" icon={Package} />
      </div>

      {/* Recent Orders Table Section */}
      <div className="w-full">
        <RecentOrders />
      </div>
    </AdminLayout>
  );
}
