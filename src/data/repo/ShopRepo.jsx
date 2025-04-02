import { indexCategories } from "../apis/index_categories";
import { getAllProducts } from "../apis/index_getAllProducts";
import { indexProduct } from "../apis/index_product";
import { indexProductDetails } from "../apis/index_productDetails";
import axios from "axios";  // Add this import
import { domain } from "../../store";  // Add this import

export const ShopRepo = {
  categories_index: async () => {
    return await indexCategories();
  },

  products_index: async (page = 1, perPage = 5) => {
    return await indexProduct(page, perPage);
  },

  getAllProducts: async () => {
    return await getAllProducts();
  },

  productDetails: async (productId) => {
    // Instead of implementing the logic directly, use the imported function
    return await indexProductDetails(productId);
  }
};
