// import axios from "axios";
// import { domain } from "../../store";

import axios from "axios";
import { domain } from "../../store";

// // Get all orders for the authenticated user
// export const getUserOrders = async () => {
//   try {
//     const response = await axios.get(`${domain}/orders`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     throw error;
//   }
// };

// // Get a specific order details
// export const getOrderDetails = async (orderId) => {
//   try {
//     const response = await axios.get(`${domain}/orders/${orderId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching order details:", error);
//     throw error;
//   }
// };

// // Place a new order
// export const placeOrder = async (orderData) => {
//   try {
//     const response = await axios.post(`${domain}/orders`, orderData);
//     return response.data;
//   } catch (error) {
//     console.error("Error placing order:", error);
//     throw error;
//   }
// };


// Get all orders for the authenticated user
export const getUserOrders = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found");
    }
    
    const response = await axios.get(`${domain}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// Get a specific order details
export const getOrderDetails = async (orderId) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found");
    }
    
    const response = await axios.get(`${domain}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};

// Place a new order
export const placeOrder = async (orderData) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("No auth token found");
    }
    
    const response = await axios.post(`${domain}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};