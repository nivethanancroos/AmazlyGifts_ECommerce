import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { categories } from "../data/categories";

export default function CategoriesSection() {
  const navigate = useNavigate();

  const handleCategoryClick = (slug) => {
    navigate(`/products?category=${slug}`);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Categories
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 text-sm md:text-base">
            Browse through our selection of personalized gift categories and
            find the perfect gift for any occasion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              name={item.name}
              image={item.image}
              onClick={() => handleCategoryClick(item.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
