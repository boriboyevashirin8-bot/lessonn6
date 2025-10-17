export const products = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 200 + 50).toFixed(2),
    category: ["Clothing", "Electronics", "Shoes", "Accessories"][
      Math.floor(Math.random() * 4)
    ],
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));
  