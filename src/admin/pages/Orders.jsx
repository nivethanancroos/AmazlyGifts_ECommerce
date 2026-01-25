import { useState } from "react";
import AdminLayout from "../AdminLayout";
import { Eye } from "lucide-react";

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD-1001",
      customer: "K. Suresh",
      phone: "077 123 4567",
      total: 4500,
      status: "Pending",
      date: "2026-01-24",
      address: "Jaffna, Sri Lanka",
      items: [
        { name: "Wooden Photo Frame", qty: 1, price: 2500 },
        { name: "Canvas Portrait", qty: 1, price: 2000 },
      ],
    },
    {
      id: "ORD-1002",
      customer: "N. Priya",
      phone: "071 987 6543",
      total: 3200,
      status: "Completed",
      date: "2026-01-23",
      address: "Colombo, Sri Lanka",
      items: [{ name: "Custom Illustration", qty: 1, price: 3200 }],
    },
  ];

  /* STATUS COLORS */
  const statusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#7b1e2b]">Orders</h1>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#7b1e2b]/10 text-[#7b1e2b]">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{order.id}</td>

                <td className="p-4">
                  <div>{order.customer}</div>
                  <div className="text-xs text-gray-500">{order.phone}</div>
                </td>

                <td className="p-4">{order.date}</td>

                <td className="p-4 font-semibold text-[#7b1e2b]">
                  LKR {order.total}
                </td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${statusStyle(
                      order.status,
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-4 text-right">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-[#7b1e2b] hover:text-[#641822]"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No orders available
          </div>
        )}
      </div>

      {/* ORDER DETAILS MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#7b1e2b]">
              Order Details – {selectedOrder.id}
            </h2>

            <div className="text-sm space-y-2">
              <p>
                <strong>Customer:</strong> {selectedOrder.customer}
              </p>
              <p>
                <strong>Phone:</strong> {selectedOrder.phone}
              </p>
              <p>
                <strong>Delivery Address:</strong> {selectedOrder.address}
              </p>
            </div>

            <div className="mt-4 border-t pt-4">
              <h3 className="font-medium mb-2">Items</h3>

              {selectedOrder.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm mb-2">
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>LKR {item.price}</span>
                </div>
              ))}

              <div className="flex justify-between font-semibold border-t pt-3 mt-3 text-[#7b1e2b]">
                <span>Total</span>
                <span>LKR {selectedOrder.total}</span>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 bg-[#7b1e2b] text-white rounded hover:bg-[#641822]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
