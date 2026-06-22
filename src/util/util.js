import PRODUCTS from "../data/productList";

export const categories = [...new Set(PRODUCTS.map(product => product.category))];
