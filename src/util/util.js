import PRODUCTS from "../data/productList";

export const nofCategories = [...new Set(PRODUCTS.map(product => product.category))];
export const numberOfPages = Math.ceil(PRODUCTS.length/9);
export function productsByCategory(category) {
  return PRODUCTS.filter(product => product.category === category);
}
export function productsByName(name) {
  return [...PRODUCTS].filter(product => (product.name.toLowerCase().includes(name.toLowerCase()))||(product.category.toLowerCase().includes(name.toLowerCase())) ||(product.description.toLowerCase().includes(name.toLowerCase())));
}
export function removeLastSegment(path) {
  const lastSlash = path.lastIndexOf("/");
  return path.slice(0, lastSlash + 1);
}