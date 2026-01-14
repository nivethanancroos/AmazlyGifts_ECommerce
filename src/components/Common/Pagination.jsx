function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {[1, 2, 3, 4].map((n) => (
        <button key={n} className="px-3 py-1 border rounded hover:bg-gray-100">
          {n}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
