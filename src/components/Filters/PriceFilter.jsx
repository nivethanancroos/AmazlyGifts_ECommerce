function PriceFilter() {
  return (
    <div>
      <h3 className="font-medium mb-2">Price</h3>
      <input type="range" min="500" max="5000" className="w-full" />
      <div className="flex justify-between text-sm mt-1">
        <span>Rs. 500</span>
        <span>Rs. 5000</span>
      </div>
    </div>
  );
}

export default PriceFilter;
