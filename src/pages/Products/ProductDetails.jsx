import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../data/products";
import Navbar from "../../components/Navbar";
import { Star, Heart, Share2, Check, ShoppingCart } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="p-10 text-center">Product not found</p>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT IMAGE */}
          <div>
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={selectedImage}
                alt=""
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-lg object-cover cursor-pointer border-2 transition
                    ${
                      selectedImage === img
                        ? "border-[#8B3A3A]"
                        : "border-transparent hover:border-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div>
            {/* TITLE */}
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-semibold text-gray-900">
                {product.name}
              </h1>

              <div className="flex gap-3">
                <button className="p-2 rounded-full border hover:bg-gray-100">
                  <Heart size={18} />
                </button>
                <button className="p-2 rounded-full border hover:bg-gray-100">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-1">{product.brand}</p>

            <hr className="my-4 border-gray-200" />

            {/* PRICE */}
            <div className="flex items-center gap-4 mt-5">
              <span className="text-3xl font-bold text-[#3D4C8C]">
                LKR {product.price}.00
              </span>
              <span className="line-through text-gray-400 text-lg">
                {product.oldPrice}.00
              </span>
            </div>

            <hr className="my-4 border-gray-200" />

            {/* RATING */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-semibold">
                <Star size={14} fill="currentColor" />
                {product.rating}
              </div>

              <span className="text-sm text-gray-500">
                {product.reviews} Reviews
              </span>
            </div>

            <p className="text-green-600 text-sm mt-2">
              {product.recommendPercent}% of buyers have recommended this
            </p>

            <hr className="my-4 border-gray-200" />

            {/* COLORS */}
            <div className="mt-4">
              <p className="font-medium text-sm mb-2">Choose a Color</p>
              <div className="flex gap-4">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setColor(c)}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center
                      ${color === c ? "border-black" : "border-gray-300"}`}
                    style={{ backgroundColor: c }}
                  >
                    {color === c && <Check size={14} className="text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-7">
              <p className="font-medium text-sm mb-2">Choose a Size</p>
              <div className="flex gap-3 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-5 py-1.5 rounded-full border text-sm font-medium transition
                      ${
                        size === s
                          ? "border-[#8B3A3A] text-[#8B3A3A]"
                          : "border-gray-300 text-gray-500 hover:border-gray-400"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY + ADD TO CART */}
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center border rounded-full px-4 py-1 gap-4">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-lg"
                >
                  -
                </button>
                <span className="font-medium">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="text-lg"
                >
                  +
                </button>
              </div>

              <button className="flex-1 flex items-center justify-center gap-2 bg-[#8B3A3A] hover:bg-[#732f2f] transition text-white py-3 rounded-full font-semibold">
                <ShoppingCart size={18} />
                Add To Cart
              </button>
            </div>

            {/* DELIVERY */}
            <div className="mt-6 border rounded-lg p-4 text-sm text-gray-600">
              🚚 <span className="font-medium">Free Delivery</span>
              <p className="text-xs text-gray-400 mt-1">
                Enter your postal code for delivery availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
