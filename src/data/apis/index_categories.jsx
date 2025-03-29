import axios from "axios";
import { domain } from "../../store";

export const indexCategories = async () => {
  let final = [];
  
  try {
    const response = await axios.get(`${domain}/products?category=category`);
    
    // Adjust based on your API response structure
    final = response.data.categories;
    
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
  
  return final;
};