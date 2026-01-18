// const products = [
//   {
//     id: "frame-001",
//     name: "Classic Wooden Frame",
//     price: 900,
//     image:
//       "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
//     description: "Premium wooden frame with glass",
//     rating: 5,
//     reviews: 121,
//     variants: 5,
//   },
//   {
//     id: "frame-002",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JsI4kp9iSXW_eXl5lOsYg-VtU0onkWVraA&s",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-003",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://images.meesho.com/images/products/398013006/erzbd_512.webp?width=512",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-004",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVw8uXEdo0j4qYI3PTp48uwtuodyJi6k13A&s",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-005",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUakD_6G2lmKTl4XPc2K34rNvDsMVyBQifUQ&s",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-006",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-007",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-008",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
//   {
//     id: "frame-009",
//     name: "Premium Canvas Frame",
//     price: 1500,
//     image:
//       "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
//     description: "High quality canvas print",
//     rating: 4,
//     reviews: 89,
//     variants: 3,
//   },
// ];

// export default products;

const products = [
  {
    id: "frame-001",
    name: "Classic Wooden Frame",
    brand: "Amazly",
    price: 900,
    oldPrice: 1200,
    rating: 5,
    reviews: 121,
    recommendPercent: 92,

    images: [
      "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
      "https://i.pinimg.com/736x/2f/e9/24/2fe9247324a778e4392aafcd480b84ee.jpg",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
    ],

    colors: ["#8B4513", "#000000", "#6F69F9"],
    sizes: ["Small", "Medium", "Large"],
    description: "Premium wooden frame with glass finish",
  },

  {
    id: "frame-002",
    name: "Premium Canvas Frame",
    brand: "Amazly",
    price: 1500,
    oldPrice: 1800,
    rating: 4,
    reviews: 89,
    recommendPercent: 87,

    images: [
      "https://images.meesho.com/images/products/398013006/erzbd_512.webp",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
      "https://images.meesho.com/images/products/398013006/erzbd_512.webp",
      "https://i.pinimg.com/1200x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
    ],

    colors: ["#2F4F4F", "#A0522D"],
    sizes: ["Medium", "Large"],
    description: "High quality canvas print",
  },
  {
    id: "frame-003",
    name: "Classic Wooden Frame",
    brand: "Amazly",
    price: 900,
    oldPrice: 1200,
    rating: 5,
    reviews: 121,
    recommendPercent: 92,

    images: [
      "https://cdn.printshoppy.com/image/catalog/v9/jpg/classic-photo-frames/classic-photo-frames-s2.jpg",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
      "https://i.pinimg.com/736x/2f/e9/24/2fe9247324a778e4392aafcd480b84ee.jpg",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
    ],

    colors: ["#8B4513", "#000000", "#FFFFFF"],
    sizes: ["Small", "Medium", "Large"],
    description: "Premium wooden frame with glass finish",
  },

  {
    id: "frame-004",
    name: "Premium Canvas Frame",
    brand: "Amazly",
    price: 1500,
    oldPrice: 1800,
    rating: 4,
    reviews: 89,
    recommendPercent: 87,

    images: [
      "https://images.meesho.com/images/products/398013006/erzbd_512.webp",
      "https://i.pinimg.com/736x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
      "https://images.meesho.com/images/products/398013006/erzbd_512.webp",
      "https://i.pinimg.com/1200x/4b/74/ad/4b74add6a58e49916a2d5e14c56c06fd.jpg",
    ],

    colors: ["#2F4F4F", "#A0522D"],
    sizes: ["Medium", "Large"],
    description: "High quality canvas print",
  },
];

export default products;
