// import React, { useEffect, useState } from "react";
// import Ring from "../../assets/Ring.png";
// import styles from "./index.module.css";
// import { useDetails } from "../../store";
// import { ShopRepo } from "../../data/repo/ShopRepo";
// import { useParams } from "react-router-dom";

// export default function ProductDetails() {
//   // const params = useParams();
//   // const { productId } = params; // Get productId from URL parameters
//   // const [productDetails, setProductDetails] = useState();

//   // useEffect(() => {
//   //   console.log("Params from URL:", params); // Log URL parameters
//   // }, []);
//   // useEffect(() => {
//   //   console.log("All params:", params);
//   // }, []);
//   // useEffect(() => {
//   //   console.log(productId);
//   //   ShopRepo.productDetails(productId).then((res) => {
//   //     console.log("Product details response:", res.data);
//   //     setProductDetails(res.data);
//   //   });
//   // }, [productId]);

//   const { product_id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Product ID from URL:", product_id);
//         console.log("All params:", useParams());
//         if (!product_id) {
//           console.error("Product ID is missing!");
//           setError("Product ID is missing");
//           return;
//         }
//         const numId = Number(product_id);
//         if (isNaN(numId)) {
//           throw new Error("Product ID must be a number");
//         }

//         const res = await ShopRepo.productDetails(numId);
//         console.log("API Response:", res.data);
//         setProductDetails(res.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [product_id]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!productDetails) return <div>Product not found</div>;

//   return (
//     <div
//       className="container col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center"
//       id={styles.productDetails}
//     >
//       <div className="col-12 col-lg-6" id={styles.Details}>
//         <img
//           src={
//             productDetails?.image1 ||
//             "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
//           }
//           alt=""
//         />
//       </div>
//       <div
//         className="col-12 col-lg-6 d-flex flex-column justify-content-between gap-5"
//         id={styles.Details}
//       >
//         <div className="title">
//           <h2 className="fw-bold">{productDetails?.title || "Unknown"}</h2>
//           <span className="stars fs-3" id={styles.stars}>
//             ★★★★☆
//           </span>
//         </div>
//         <div className="price">
//           <div className="d-flex align-items-center gap-2">
//             <h5 className="fs-3 text-primary mb-0">
//               ${productDetails?.discount_price || "100"}
//             </h5>
//             <del className="text-muted fs-5">
//               ${productDetails?.price || "200"}
//             </del>
//             <span className="badge bg-danger"></span>
//           </div>
//         </div>
//         <p className="fs-5">{productDetails?.description || "loream"}</p>

//         <div className="btn-group d-flex gap-5">
//           <button className="btn btn-primary p-3">Add to Cart</button>
//           <button className="btn btn-secondary p-3">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import styles from "./index.module.css";
// import { useParams } from "react-router-dom";
// import { ShopRepo } from "../../data/repo/ShopRepo";

// export default function ProductDetails() {
//   const { product_id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Product ID from URL:", product_id);
        
//         if (!product_id) {
//           setError("Product ID is missing");
//           setLoading(false);
//           return;
//         }

//         const response = await ShopRepo.productDetails(product_id);
//         console.log("API Response:", response.data);
//         setProductDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setError(error.message || "Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [product_id]);

//   if (loading) return <div className="container mt-5 text-center">Loading...</div>;
//   if (error) return <div className="container mt-5 alert alert-danger">Error: {error}</div>;
//   if (!productDetails) return <div className="container mt-5 alert alert-warning">Product not found</div>;

//   return (
//     <div
//       className="container col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center py-5"
//       id={styles.productDetails}
//     >
//       <div className="col-12 col-lg-6" id={styles.Details}>
//         <img
//           src={
//             productDetails?.image1 ||
//             "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
//           }
//           alt={productDetails?.title || "Product image"}
//           className="img-fluid"
//         />
//       </div>
//       <div
//         className="col-12 col-lg-6 d-flex flex-column justify-content-between gap-5 mt-4 mt-lg-0"
//         id={styles.Details}
//       >
//         <div className="title">
//           <h2 className="fw-bold">{productDetails?.title || "Unknown Product"}</h2>
//           <span className="stars fs-3" id={styles.stars}>
//             ★★★★☆
//           </span>
//         </div>
//         <div className="price">
//           <div className="d-flex align-items-center gap-2">
//             <h5 className="fs-3 text-primary mb-0">
//               ${productDetails?.discount_price || productDetails?.price || "N/A"}
//             </h5>
//             {productDetails?.discount_price < productDetails?.price && (
//               <del className="text-muted fs-5">${productDetails?.price}</del>
//             )}
//           </div>
//         </div>
//         <p className="fs-5">{productDetails?.description || "No description available"}</p>

//         <div className="btn-group d-flex gap-3">
//           <button className="btn btn-primary p-3">Add to Cart</button>
//           <button className="btn btn-secondary p-3">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }


// Modify the ProductDetails component in pages/ProductDetails/index.jsx

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import { ShopRepo } from "../../data/repo/ShopRepo";
import { useCart } from "../../store"; // Import the cart store

export default function ProductDetails() {
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Add quantity state
  const { addToCart } = useCart(); // Get the addToCart function

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Product ID from URL:", product_id);
        
        if (!product_id) {
          setError("Product ID is missing");
          setLoading(false);
          return;
        }

        const response = await ShopRepo.productDetails(product_id);
        console.log("API Response:", response.data);
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message || "Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [product_id]);

  // Handle quantity changes
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (productDetails) {
      addToCart({
        id: productDetails.id,
        title: productDetails.title,
        price: productDetails.price,
        discount_price: productDetails.discount_price,
        image1: productDetails.image1,
      }, quantity);
      
      // Show feedback that item was added
      alert(`Added ${quantity} ${productDetails.title} to your cart!`);
    }
  };

  if (loading) return <div className="container mt-5 text-center">Loading...</div>;
  if (error) return <div className="container mt-5 alert alert-danger">Error: {error}</div>;
  if (!productDetails) return <div className="container mt-5 alert alert-warning">Product not found</div>;

  return (
    <div
      className="container col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center py-5"
      id={styles.productDetails}
    >
      <div className="col-12 col-lg-6" id={styles.Details}>
        <img
          src={
            productDetails?.image1 ||
            "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
          }
          alt={productDetails?.title || "Product image"}
          className="img-fluid"
        />
      </div>
      <div
        className="col-12 col-lg-6 d-flex flex-column justify-content-between gap-5 mt-4 mt-lg-0"
        id={styles.Details}
      >
        <div className="title">
          <h2 className="fw-bold">{productDetails?.title || "Unknown Product"}</h2>
          <span className="stars fs-3" id={styles.stars}>
            ★★★★☆
          </span>
        </div>
        <div className="price">
          <div className="d-flex align-items-center gap-2">
            <h5 className="fs-3 text-primary mb-0">
              ${productDetails?.discount_price || productDetails?.price || "N/A"}
            </h5>
            {productDetails?.discount_price < productDetails?.price && (
              <del className="text-muted fs-5">${productDetails?.price}</del>
            )}
          </div>
        </div>
        <p className="fs-5">{productDetails?.description || "No description available"}</p>

        {/* Add quantity input */}
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input 
            type="number" 
            id="quantity" 
            className="form-control w-25" 
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>

        <div className="btn-group d-flex gap-3">
          <button className="btn btn-primary p-3" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn btn-secondary p-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
}