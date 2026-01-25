import { useState } from "react";
import AdminLayout from "../AdminLayout";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import { Plus, Trash2, Image, Pencil, X } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic Wooden Frame",
      price: 2500,
      stock: 12,
      category: "Photo Frames",
      size: "8 × 12 inches",
      material: "Wood",
      customizable: true,
      images: [],
      description: "Premium wooden frame for preserving memories.",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [editTarget, setEditTarget] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    size: "",
    material: "",
    customizable: false,
    images: [],
    description: "",
  });

  /* =====================
     IMAGE UPLOAD (MULTIPLE)
  ====================== */
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const newImages = files.map((file) => URL.createObjectURL(file));

    setForm({
      ...form,
      images: [...form.images, ...newImages],
    });
  };

  /* =====================
     REMOVE SINGLE IMAGE
  ====================== */
  const removeImage = (index) => {
    setForm({
      ...form,
      images: form.images.filter((_, i) => i !== index),
    });
  };

  /* =====================
     ADD / UPDATE PRODUCT
  ====================== */
  const handleAddOrUpdateProduct = () => {
    if (!form.name || !form.price || !form.category) return;

    if (editTarget) {
      setProducts(
        products.map((p) =>
          p.id === editTarget
            ? {
                ...p,
                ...form,
                price: Number(form.price),
                stock: Number(form.stock),
              }
            : p,
        ),
      );
    } else {
      setProducts([
        ...products,
        {
          id: Date.now(),
          ...form,
          price: Number(form.price),
          stock: Number(form.stock),
        },
      ]);
    }

    resetForm();
  };

  /* =====================
     EDIT PRODUCT
  ====================== */
  const handleEdit = (product) => {
    setForm(product);
    setEditTarget(product.id);
    setShowAddForm(true);
  };

  /* =====================
     RESET FORM
  ====================== */
  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      stock: "",
      category: "",
      size: "",
      material: "",
      customizable: false,
      images: [],
      description: "",
    });
    setEditTarget(null);
    setShowAddForm(false);
  };

  /* =====================
     DELETE PRODUCT
  ====================== */
  const confirmDelete = () => {
    setProducts(products.filter((p) => p.id !== deleteTarget));
    setDeleteTarget(null);
  };

  return (
    <AdminLayout>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Products</h1>

        <button
          onClick={() => {
            resetForm();
            setShowAddForm(true);
          }}
          className="flex items-center gap-2 bg-[#7B1E3A] text-white px-4 py-2 rounded-lg hover:bg-[#65182F]"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* ADD / EDIT FORM */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border">
          <h2 className="font-semibold mb-4 text-[#7B1E3A]">
            {editTarget ? "Edit Product" : "Add New Product"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              ["Product name", "name"],
              ["Price (LKR)", "price"],
              ["Stock", "stock"],
              ["Category", "category"],
              ["Size (e.g. 8 × 12 inches)", "size"],
              ["Material", "material"],
            ].map(([placeholder, key]) => (
              <input
                key={key}
                placeholder={placeholder}
                type={key === "price" || key === "stock" ? "number" : "text"}
                className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#7B1E3A]"
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            ))}
          </div>

          {/* IMAGE UPLOAD */}
          <div className="mt-4">
            <label className="text-sm font-medium block mb-2">
              Product Images
            </label>

            <label className="flex items-center gap-2 px-4 py-2 border rounded cursor-pointer w-fit hover:bg-[#F5E6EA]">
              <Image size={18} />
              Upload Images
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>

            {form.images.length > 0 && (
              <div className="flex gap-3 mt-3 flex-wrap">
                {form.images.map((img, index) => (
                  <div key={index} className="relative w-16 h-16">
                    <img
                      src={img}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded border"
                    />

                    <button
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <textarea
            placeholder="Short product description"
            className="border rounded px-3 py-2 w-full mt-4"
            rows="3"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <div className="flex items-center gap-3 mt-4">
            <input
              type="checkbox"
              checked={form.customizable}
              onChange={(e) =>
                setForm({ ...form, customizable: e.target.checked })
              }
            />
            <span className="text-sm">Customizable Product</span>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button onClick={resetForm} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button
              onClick={handleAddOrUpdateProduct}
              className="px-4 py-2 bg-[#7B1E3A] text-white rounded"
            >
              {editTarget ? "Update Product" : "Save Product"}
            </button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
        <table className="w-full text-sm">
          <thead className="bg-[#F5E6EA] text-[#7B1E3A]">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Custom</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="p-4 flex items-center gap-3">
                  {product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded">
                      <Image size={16} />
                    </div>
                  )}

                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-xs text-gray-500">
                      {product.size} · {product.material}
                    </div>
                  </div>
                </td>

                <td className="p-4">{product.category}</td>
                <td className="p-4">LKR {product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">{product.customizable ? "Yes" : "No"}</td>

                <td className="p-4 text-right flex justify-end gap-3">
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => setDeleteTarget(product.id)}
                    className="text-[#7B1E3A] hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteConfirmModal
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
      />
    </AdminLayout>
  );
}
