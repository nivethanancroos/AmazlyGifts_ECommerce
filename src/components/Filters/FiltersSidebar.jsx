import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";

function FiltersSidebar() {
  return (
    <div className="bg-white border rounded-lg p-4 space-y-6">
      <h2 className="font-semibold text-lg">Filters</h2>

      <CategoryFilter />
      <RatingFilter />
      <PriceFilter />
    </div>
  );
}

export default FiltersSidebar;
