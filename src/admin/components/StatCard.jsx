export default function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition w-full">
      <div className="flex items-center gap-3 md:gap-4">
        {/* Icon - Slightly smaller on mobile */}
        <div className="p-2.5 md:p-3 rounded-full bg-[#f5e6e8] text-[#7b1e2b] shrink-0">
          <Icon size={18} className="md:w-5 md:h-5" />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <p className="text-xs md:text-sm text-gray-500 truncate">{title}</p>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
            {value}
          </h3>
        </div>
      </div>
    </div>
  );
}
