import { useState } from "react";
import AdminLayout from "../AdminLayout";
import { Eye, User, X } from "lucide-react"; // Added X for modal

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const customers = [
    {
      id: "CUS-001",
      name: "K. Suresh",
      email: "suresh@gmail.com",
      phone: "077 123 4567",
      city: "Jaffna",
      orders: 5,
      totalSpent: 15800,
      status: "Active",
      joined: "2025-11-12",
      address: "Jaffna, Sri Lanka",
    },
    {
      id: "CUS-002",
      name: "N. Priya",
      email: "priya@gmail.com",
      phone: "071 987 6543",
      city: "Colombo",
      orders: 2,
      totalSpent: 6200,
      status: "Inactive",
      joined: "2025-12-05",
      address: "Colombo, Sri Lanka",
    },
  ];

  /* STATUS COLORS */
  const statusStyle = (status) =>
    status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-600";

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-[#7b1e2b]">
          Customers
        </h1>
      </div>

      {/* CUSTOMERS TABLE - Added horizontal scroll for mobile */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-175 md:min-w-full">
            <thead className="bg-[#7b1e2b]/10 text-[#7b1e2b]">
              <tr>
                <th className="p-4 text-left">Customer</th>
                <th className="p-4 text-left">Contact</th>
                <th className="p-4 text-left">Orders</th>
                <th className="p-4 text-left">Total Spent</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#7b1e2b]/10 flex items-center justify-center shrink-0">
                        <User size={18} className="text-[#7b1e2b]" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {customer.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ID: {customer.id}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <div className="text-gray-700">{customer.email}</div>
                    <div className="text-xs text-gray-500">
                      {customer.phone}
                    </div>
                  </td>

                  <td className="p-4 whitespace-nowrap text-gray-700">
                    {customer.orders}
                  </td>

                  <td className="p-4 whitespace-nowrap font-semibold text-[#7b1e2b]">
                    LKR {customer.totalSpent.toLocaleString()}
                  </td>

                  <td className="p-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-medium ${statusStyle(
                        customer.status,
                      )}`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="p-4 text-right whitespace-nowrap">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="p-2 text-[#7b1e2b] hover:bg-[#7b1e2b]/10 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {customers.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-10 text-center text-gray-500">
                    No customers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CUSTOMER DETAILS MODAL - Responsive sizing */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-[#7b1e2b]">
                Customer Details
              </h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#7b1e2b]/10 flex items-center justify-center">
                  <User size={24} className="text-[#7b1e2b]" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    {selectedCustomer.name}
                  </h3>
                  <p className="text-xs text-gray-500">{selectedCustomer.id}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 border-t pt-4">
                <DetailRow label="Email" value={selectedCustomer.email} />
                <DetailRow label="Phone" value={selectedCustomer.phone} />
                <DetailRow label="City" value={selectedCustomer.city} />
                <DetailRow label="Address" value={selectedCustomer.address} />
                <DetailRow label="Joined" value={selectedCustomer.joined} />
                <DetailRow
                  label="Total Orders"
                  value={selectedCustomer.orders}
                />
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500">Total Spent:</span>
                  <span className="text-[#7b1e2b] font-bold text-base">
                    LKR {selectedCustomer.totalSpent.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 flex justify-end">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="w-full sm:w-auto px-6 py-2 bg-[#7b1e2b] text-white rounded-lg hover:bg-[#641822] font-medium transition-colors"
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

// Helper component for cleaner Modal code
function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between items-start py-1">
      <span className="text-gray-500 font-medium">{label}:</span>
      <span className="text-gray-900 text-right">{value}</span>
    </div>
  );
}
