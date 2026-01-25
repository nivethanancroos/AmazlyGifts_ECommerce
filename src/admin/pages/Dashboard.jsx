import AdminLayout from "../AdminLayout";
import StatCard from "../components/StatCard";
import RecentOrders from "../components/RecentOrders";
import { ShoppingCart, Users, DollarSign, Package } from "lucide-react";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Orders" value="1,245" icon={ShoppingCart} />
        <StatCard title="Customers" value="820" icon={Users} />
        <StatCard title="Revenue" value="LKR 420,000" icon={DollarSign} />
        <StatCard title="Products" value="56" icon={Package} />
      </div>

      <RecentOrders />
    </AdminLayout>
  );
}
