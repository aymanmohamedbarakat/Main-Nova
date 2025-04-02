// import React from "react";
// import { CiHeart, CiShoppingCart } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useDetails } from "../../store";
// import styles from "./index.module.css";

// export default function ProductCard({
//   product_id,
//   title,
//   price,
//   imgUrl,
//   discount_price,
// }) {
//   // const { setActiveDetailsId } = useDetails();

//   const handleShowDetails = (e) => {
//     e.preventDefault(); // منع السلوك الافتراضي إذا لزم الأمر
//     console.log("Navigating to product:", product_id);
//     console.log("Product ID in card:", product_id, "Type:", typeof product_id);
//     // التنقل يتم عبر الـ Link، لا حاجة لأي شيء آخر هنا
//   };

//   return (
//     <div className="col-12 col-sm-6 col-lg-4">
//       <div className={styles.productCard}>
//         <div className={styles.imgContainer}>
//           <img
//             src={
//               imgUrl ||
//               "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
//             }
//             alt={title}
//             className={styles.productImage}
//           />
//           <div className={styles.overlay}>
//             <button className={styles.actionButton}>
//               <CiShoppingCart />
//             </button>
//             <button className={styles.actionButton}>
//               <CiHeart />
//             </button>
//           </div>

//           {discount_price < price && <div className={styles.saleTag}>Sale</div>}
//         </div>

//         <div className={styles.productDetails}>
//           <h5 className="mb-2 text-truncate">{title}</h5>
//           <div className="d-flex align-items-center mb-3">
//             <span className={styles.currentPrice}>${discount_price}</span>
//             {discount_price < price && (
//               <span className={styles.originalPrice}>${price}</span>
//             )}
//           </div>
//           <Link to={`/products/${product_id}`} onClick={handleShowDetails}>
//             <button className={`btn w-100 ${styles.ShowDetails}`}>
//               Show Details
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { CiHeart, CiShoppingCart } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import styles from "./index.module.css";

// export default function ProductCard({
//   product_id,
//   title,
//   price,
//   imgUrl,
//   discount_price,
// }) {
//   return (
//     <div className="col-12 col-sm-6 col-lg-4">
//       <div className={styles.productCard}>
//         <div className={styles.imgContainer}>
//           <img
//             src={
//               imgUrl ||
//               "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
//             }
//             alt={title}
//             className={styles.productImage}
//           />
//           <div className={styles.overlay}>
//             <button className={styles.actionButton}>
//               <CiShoppingCart />
//             </button>
//             <button className={styles.actionButton}>
//               <CiHeart />
//             </button>
//           </div>

//           {discount_price < price && <div className={styles.saleTag}>Sale</div>}
//         </div>

//         <div className={styles.productDetails}>
//           <h5 className="mb-2 text-truncate">{title}</h5>
//           <div className="d-flex align-items-center mb-3">
//             <span className={styles.currentPrice}>${discount_price}</span>
//             {discount_price < price && (
//               <span className={styles.originalPrice}>${price}</span>
//             )}
//           </div>
//           {/* Make sure product_id is properly defined and passed */}
//           {product_id ? (
//             <Link to={`/products/${product_id}`}>
//               <button className={`btn w-100 ${styles.ShowDetails}`}>
//                 Show Details
//               </button>
//             </Link>
//           ) : (
//             <button disabled className={`btn w-100 ${styles.ShowDetails}`}>
//               No ID Available
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// Modify pages/ProductCard/index.jsx

import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useCart } from "../../store"; // Import the cart store

export default function ProductCard({
  product_id,
  title,
  price,
  imgUrl,
  discount_price,
}) {
  const { addToCart } = useCart(); // Get the addToCart function
  
  // Handle add to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id: product_id,
      title,
      price,
      discount_price,
      image1: imgUrl,
    }, 1);
    
    // Show feedback that item was added
    alert(`Added ${title} to your cart!`);
  };

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className={styles.productCard}>
        <div className={styles.imgContainer}>
          <img
            src={
              imgUrl ||
              "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"
            }
            alt={title}
            className={styles.productImage}
          />
          <div className={styles.overlay}>
            <button className={styles.actionButton} onClick={handleAddToCart}>
              <CiShoppingCart />
            </button>
            <button className={styles.actionButton}>
              <CiHeart />
            </button>
          </div>

          {discount_price < price && <div className={styles.saleTag}>Sale</div>}
        </div>

        <div className={styles.productDetails}>
          <h5 className="mb-2 text-truncate">{title}</h5>
          <div className="d-flex align-items-center mb-3">
            <span className={styles.currentPrice}>${discount_price}</span>
            {discount_price < price && (
              <span className={styles.originalPrice}>${price}</span>
            )}
          </div>
          {product_id ? (
            <Link to={`/products/${product_id}`}>
              <button className={`btn w-100 ${styles.ShowDetails}`}>
                Show Details
              </button>
            </Link>
          ) : (
            <button disabled className={`btn w-100 ${styles.ShowDetails}`}>
              No ID Available
            </button>
          )}
        </div>
      </div>
    </div>
  );
}