import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function RatingFilter() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState("4.0");

  const ratings = [
    { value: "4.5", label: "4.5 & up", count: 1991 },
    { value: "4.0", label: "4.0 & up", count: 200 },
    { value: "3.5", label: "3.5 & up", count: 300 },
    { value: "3.0", label: "3.0 & up", count: 500 },
  ];

  return (
    <div className="border-b pb-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between mb-4"
      >
        <h3 className="text-lg font-semibold text-[#1E1B4B]">Ratings</h3>

        {isOpen ? (
          <FiChevronUp className="text-xl text-[#1E1B4B]" />
        ) : (
          <FiChevronDown className="text-xl text-[#1E1B4B]" />
        )}
      </button>

      {/* Rating Options */}
      {isOpen && (
        <ul className="space-y-4">
          {ratings.map((rating) => (
            <li
              key={rating.value}
              className="flex items-center justify-between"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                {/* Radio */}
                <input
                  type="radio"
                  name="rating"
                  checked={selectedRating === rating.value}
                  onChange={() => setSelectedRating(rating.value)}
                  className="w-4 h-4 accent-[#4C1D95]"
                />

                {/* Stars */}
                <div className="flex items-center gap-2">
                  <div className="flex text-[#F59E0B]">
                    {"★★★★★".split("").map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-[#1E1B4B]">{rating.label}</span>
                </div>
              </label>

              {/* Count */}
              <span className="text-sm text-gray-500">({rating.count})</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RatingFilter;
