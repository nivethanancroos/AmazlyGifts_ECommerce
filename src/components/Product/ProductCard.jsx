import { Heart, Star } from "lucide-react";
import { useState } from "react";

function ProductCard() {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      {/* IMAGE SECTION */}
      <div className="relative p-4">
        <img
          src="https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg"
          alt="Frame"
          className="w-full h-64 object-cover rounded-xl"
        />

        {/* WISHLIST BUTTON */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-md"
        >
          <Heart
            size={18}
            className={
              wishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }
          />
        </button>
      </div>

      {/* CONTENT */}
      <div className="px-5 pb-5">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-800 font-medium">Frame</h3>
          <p className="text-gray-800 font-semibold">Rs.900</p>
        </div>

        <p className="text-sm text-gray-500 mt-1">5 types of shoes available</p>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-gray-500">(121)</span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-[#8B3A3A] hover:bg-[#742F2F] text-white text-sm py-2 rounded-full transition">
            Add To Cart
          </button>

          <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-sm py-2 rounded-full transition">
            Add Shortlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
