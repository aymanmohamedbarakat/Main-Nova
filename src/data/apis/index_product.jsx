import axios from "axios";
import { domain } from "../../store";

export const indexProduct = async () => {
  let final = [];
  await axios.get(domain + "/products").then((res) => {
    final = res.data;
    console.log(final);
  });
  return final;
};



// import axios from "axios";
// import { domain } from "../../store";

// export const indexProduct = async (pageNo = 1, pageSize = 5, sortBy = "name", sortOrder = "asc", filters = []) => {
//   let final = {total: 0, data: []};
  
//   try {
//     // Build query parameters
//     const params = new URLSearchParams();
//     params.append("page", pageNo);
//     params.append("pageSize", pageSize);
//     params.append("sort", sortBy);
//     params.append("order", sortOrder);
    
//     // Add category filters if any exist
//     if (filters && filters.length > 0) {
//       filters.forEach(filter => {
//         params.append("category", filter);
//       });
//     }
    
//     const response = await axios.get(`${domain}/products?${params.toString()}`);
    
//     final = {
//       total: response.data.meta?.pagination?.total || response.data.total || 0,
//       data: response.data.products || response.data.data || response.data
//     };
    
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
  
//   return final;
// };