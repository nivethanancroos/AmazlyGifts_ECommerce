export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="p-3 rounded-full bg-[#f5e6e8] text-[#7b1e2b]">
          <Icon size={20} />
        </div>

        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
        </div>
      </div>
    </div>
  );
}
