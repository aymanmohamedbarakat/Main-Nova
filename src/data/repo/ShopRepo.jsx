

// import { indexCategories } from "../apis/index_categories";
// import { getAllProducts } from "../apis/index_getAllProducts";
// import { indexProduct } from "../apis/index_product";
// import { indexProductDetails } from "../apis/index_productDetails";

// export const ShopRepo = {
//   categories_index: async () => {
//     return await indexCategories();
//   },

//   products_index: async (page = 1, perPage = 5) => {
//     return await indexProduct(page, perPage);
//   },

//   getAllProducts: async () => {
//     return await getAllProducts();
//   },

//   productDetails: async(product_id) => {
//     return await indexProductDetails(product_id);
//   },
// };


import { indexCategories } from "../apis/index_categories";
import { getAllProducts } from "../apis/index_getAllProducts";
import { indexProduct } from "../apis/index_product";
import { indexProductDetails } from "../apis/index_productDetails";

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
    // Validate input
    if (!productId || productId === 'undefined') {
      console.error("Invalid Product ID");
      return null;
    }

    try {
      const response = await axios.get(`${domain}/products/${productId}`);
      return response.data || null;
    } catch (error) {
      console.error(`Error fetching product details for ID ${productId}:`, error);
      return null;
    }
  },
};
