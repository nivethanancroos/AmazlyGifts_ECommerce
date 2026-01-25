const orders = [
  { id: "#1001", customer: "Anton", total: "LKR 5,200", status: "Pending" },
  { id: "#1002", customer: "Kumar", total: "LKR 7,800", status: "Completed" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4 border-b font-semibold flex justify-between items-center">
        <span>Recent Orders</span>
        <span className="text-xs text-gray-400 md:hidden italic">
          Scroll right →
        </span>
      </div>

      {/* Wrapping div with overflow-x-auto makes the table scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[500px] md:min-w-full">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4 text-left font-medium">Order</th>
              <th className="p-4 text-left font-medium">Customer</th>
              <th className="p-4 text-left font-medium">Total</th>
              <th className="p-4 text-left font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 whitespace-nowrap font-medium text-gray-700">
                  {order.id}
                </td>
                <td className="p-4 whitespace-nowrap text-gray-600">
                  {order.customer}
                </td>
                <td className="p-4 whitespace-nowrap text-gray-900 font-medium">
                  {order.total}
                </td>
                <td className="p-4 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
