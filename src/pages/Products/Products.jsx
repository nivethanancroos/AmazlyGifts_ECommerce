import Navbar from "../../components/Navbar";
import FiltersSidebar from "../../components/Filters/FiltersSidebar";
import ProductGrid from "../../components/Product/ProductGrid";
import SortDropdown from "../../components/Common/SortDropdown";
import Pagination from "../../components/Common/Pagination";

function Products() {
  return (
    <>
      <Navbar />

      {/* PAGE BACKGROUND */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* LEFT FILTERS */}
            <aside className="w-64 hidden md:block py-13">
              <FiltersSidebar />
            </aside>

            {/* RIGHT CONTENT */}
            <main className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">
                  Showing 1–12 of 120 results
                </p>
                <SortDropdown />
              </div>

              <ProductGrid />
              <Pagination />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
