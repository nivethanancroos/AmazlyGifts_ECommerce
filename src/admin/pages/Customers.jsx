import { useState } from "react";
import AdminLayout from "../AdminLayout";
import { Eye, User } from "lucide-react";

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
        <h1 className="text-2xl font-semibold text-[#7b1e2b]">Customers</h1>
      </div>

      {/* CUSTOMERS TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
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
              <tr key={customer.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7b1e2b]/10 flex items-center justify-center">
                      <User size={18} className="text-[#7b1e2b]" />
                    </div>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-xs text-gray-500">
                        ID: {customer.id}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="p-4">
                  <div>{customer.email}</div>
                  <div className="text-xs text-gray-500">{customer.phone}</div>
                </td>

                <td className="p-4">{customer.orders}</td>

                <td className="p-4 font-semibold text-[#7b1e2b]">
                  LKR {customer.totalSpent}
                </td>

                <td className="p-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${statusStyle(
                      customer.status,
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="p-4 text-right">
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className="text-[#7b1e2b] hover:text-[#641822]"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {customers.length === 0 && (
              <tr>
                <td colSpan="6" className="p-6 text-center text-gray-500">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* CUSTOMER DETAILS MODAL */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-lg p-6">
            <h2 className="text-lg font-semibold mb-4 text-[#7b1e2b]">
              Customer Details – {selectedCustomer.name}
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> {selectedCustomer.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedCustomer.phone}
              </p>
              <p>
                <strong>City:</strong> {selectedCustomer.city}
              </p>
              <p>
                <strong>Address:</strong> {selectedCustomer.address}
              </p>
              <p>
                <strong>Joined:</strong> {selectedCustomer.joined}
              </p>
              <p>
                <strong>Total Orders:</strong> {selectedCustomer.orders}
              </p>
              <p>
                <strong>Total Spent:</strong>{" "}
                <span className="text-[#7b1e2b] font-semibold">
                  LKR {selectedCustomer.totalSpent}
                </span>
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedCustomer(null)}
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
