import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
    >
      {/* IMAGE SECTION
      <div className="relative p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-xl"
        /> */}

      {/* IMAGE */}
      <div className="relative p-4">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-64 object-cover rounded-xl"
        />

        {/* WISHLIST BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // IMPORTANT
            setWishlisted(!wishlisted);
          }}
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
          <h3 className="text-gray-800 font-medium">{product.name}</h3>
          <p className="text-gray-800 font-semibold">Rs.{product.price}</p>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          {product.variants} types available
        </p>

        {/* RATING */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(product.rating)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex-1 bg-[#8B3A3A] hover:bg-[#742F2F] text-white text-sm py-2 rounded-full transition"
          >
            Add To Cart
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            className="flex-1 border border-gray-300 hover:bg-gray-50 text-sm py-2 rounded-full transition"
          >
            Add Shortlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
