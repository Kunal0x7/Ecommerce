import PRODUCTS from "../data/productList";

export const categories = [...new Set(PRODUCTS.map(product => product.category))];
export const numberOfPages = Math.ceil(PRODUCTS.length/9);
export function productsByCategory(category) {
  return PRODUCTS.filter(product => product.category === category);
}
export function getSortedProducts() {
  const sortedProducts = [...PRODUCTS].sort((a, b) => a.price - b.price);
    return sortedProducts;
}