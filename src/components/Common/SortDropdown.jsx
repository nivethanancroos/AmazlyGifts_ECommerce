function SortDropdown() {
  return (
    <select className="border rounded-md px-3 py-2 text-sm">
      <option>Popularity</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  );
}

export default SortDropdown;
