import photoFrames from "../assets/images/photoFrames.jpg";
import customGifts from "../assets/images/customGifts.jpg";
import bouquets from "../assets/images/bouquets.jpg";
import cakes from "../assets/images/cakes.jpg";
import dolls from "../assets/images/dolls.jpg";
import chocolates from "../assets/images/chocolates.jpg";
import occasions from "../assets/images/occasions.jpg";
import moreGifts from "../assets/images/moreGifts.jpg";

const categories = [
  { name: "Photo Frames", image: photoFrames },
  { name: "Customized Gifts", image: customGifts },
  { name: "Bouquets", image: bouquets },
  { name: "Cakes", image: cakes },
  { name: "Dolls", image: dolls },
  { name: "Chocolates", image: chocolates },
  { name: "Special Occasions", image: occasions },
  { name: "More Gifts", image: moreGifts },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Categories
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 text-sm md:text-base">
            Browse through our selection of gift categories including dolls,
            photo frames, cakes, customized bouquets made of flowers,
            chocolates, and more. Find the perfect personalized gift for any
            occasion!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.name}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm md:text-base font-semibold">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
