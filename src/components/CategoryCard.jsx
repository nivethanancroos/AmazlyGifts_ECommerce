export default function CategoryCard({ name, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-sm md:text-base font-semibold">
          {name}
        </span>
      </div>
    </div>
  );
}
