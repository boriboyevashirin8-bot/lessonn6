import { products } from "./products";

export const fetchProducts = async ({ pageParam = 1, limit = 8 }) => {
  await new Promise((res) => setTimeout(res, 600));

  const start = (pageParam - 1) * limit;
  const end = start + limit;
  const data = products.slice(start, end);
  const hasNext = end < products.length;

  return {
    data,
    total: products.length,
    nextPage: hasNext ? pageParam + 1 : undefined,
  };
};

