import ProductCard from "./ProductCard";

function ProductGrid() {
  const products = Array(8).fill(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}

export default ProductGrid;
