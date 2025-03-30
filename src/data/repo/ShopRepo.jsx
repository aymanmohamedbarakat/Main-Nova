// // import { indexCategories } from "../apis/index_categories";
// import { indexProduct } from "../apis/index_product";

// export const ShopRepo = {
//   // categories_index: async () => {
//   //   return await indexCategories();
//   // },

//   products_index: async () => {
//     return await indexProduct();
//   },
// };

import { indexCategories } from "../apis/index_categories";
import { getAllProducts } from "../apis/index_getAllProducts";
import { indexProduct } from "../apis/index_product";

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
};

// import { indexProduct } from "../apis/index_product";

// export const ShopRepo = {
//   products_index: async (pageNo = 1, pageSize = 5, sortBy = "name", sortOrder = "asc", filters = []) => {
//     return await indexProduct(pageNo, pageSize, sortBy, sortOrder, filters);
//   },
// };
