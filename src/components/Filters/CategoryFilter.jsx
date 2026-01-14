import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function CategoryFilter() {
  const [selected, setSelected] = useState(["Man", "Woman"]);
  const [isOpen, setIsOpen] = useState(true);

  const categories = [
    { name: "Kid", count: 18 },
    { name: "Man", count: 12 },
    { name: "Woman", count: 23 },
    { name: "Casual", count: 67 },
    { name: "Sport", count: 34 },
    { name: "Rainbow", count: 12 },
  ];

  const toggleCategory = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <div className="border-b pb-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between mb-4"
      >
        <h3 className="text-lg font-semibold text-[#1E1B4B]">Category</h3>

        {isOpen ? (
          <FiChevronUp className="text-xl text-[#1E1B4B]" />
        ) : (
          <FiChevronDown className="text-xl text-[#1E1B4B]" />
        )}
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.name} className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selected.includes(cat.name)}
                    onChange={() => toggleCategory(cat.name)}
                    className="w-4 h-4 accent-[#4C1D95]"
                  />
                  <span className="text-sm text-[#1E1B4B]">{cat.name}</span>
                </label>

                <span className="text-sm text-gray-500">({cat.count})</span>
              </li>
            ))}
          </ul>

          <button className="mt-4 text-sm text-[#6366F1] hover:underline">
            Show more
          </button>
        </>
      )}
    </div>
  );
}

export default CategoryFilter;
