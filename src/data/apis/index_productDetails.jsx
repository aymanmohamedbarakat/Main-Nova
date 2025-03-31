import axios from "axios";
import { domain } from "../../store";

export const indexProductDetails = async (product_id) => {
  if (!product_id) {
    console.error("Product ID is required");
    return null;
  }

  const response = await axios.get(`${domain}/products/${product_id}`);
  return response.data || null;
};
