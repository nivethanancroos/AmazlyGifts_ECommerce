import { useState } from "react";
import AdminLayout from "../AdminLayout";
import { Save, Edit } from "lucide-react";

export default function Settings() {
  const [isEditing, setIsEditing] = useState(false);

  const inputClass =
    "w-full mt-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#7b1e2b] focus:outline-none disabled:bg-gray-100 disabled:text-gray-500";

  const handleSave = () => {
    // 🔥 later: API call here
    setIsEditing(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-[#7b1e2b]">
            Admin Settings
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your store preferences and configurations
          </p>
        </div>

        {/* Store Information */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#7b1e2b]">
            Store Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Store Name</label>
              <input
                disabled={!isEditing}
                type="text"
                defaultValue="Amazly Gifts"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Contact Email</label>
              <input
                disabled={!isEditing}
                type="email"
                defaultValue="support@amazlygifts.com"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <input
                disabled={!isEditing}
                type="text"
                defaultValue="+94 77 123 4567"
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Store Location</label>
              <input
                disabled={!isEditing}
                type="text"
                defaultValue="Sri Lanka"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Order Settings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#7b1e2b]">
            Order Settings
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Cash on Delivery</p>
                <p className="text-sm text-gray-500">
                  Allow customers to pay on delivery
                </p>
              </div>
              <input
                disabled={!isEditing}
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-[#7b1e2b]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Order Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive email alerts for new orders
                </p>
              </div>
              <input
                disabled={!isEditing}
                type="checkbox"
                defaultChecked
                className="w-5 h-5 accent-[#7b1e2b]"
              />
            </div>
          </div>
        </div>

        {/* Security Settings
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#7b1e2b]">
            Security
          </h2>

          <div className="space-y-4">
            <input
              disabled={!isEditing}
              type="password"
              placeholder="New Password"
              className={inputClass}
            />
            <input
              disabled={!isEditing}
              type="password"
              placeholder="Confirm Password"
              className={inputClass}
            />
          </div>
        </div> */}

        {/* Action Button */}
        <div className="flex justify-end">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 border border-[#7b1e2b] text-[#7b1e2b] px-6 py-2 rounded-lg hover:bg-[#7b1e2b] hover:text-white transition"
            >
              <Edit size={18} />
              Edit Settings
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#7b1e2b] text-white px-6 py-2 rounded-lg hover:bg-[#641822] transition"
            >
              <Save size={18} />
              Save Changes
            </button>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
