// import React from 'react'
// import { CiHeart, CiShoppingCart } from 'react-icons/ci'
// import styles from "./index.module.css";
// export default function ProductCard({ title, price, imgUrl, discount_price }) {
//   return (
//     <div className='col-12 col-md-6 col-lg-4 p-2'>
//     <div className={'col-12 rounded overflow-hidden position-relative ' + styles.productCard}>
//       {/* Image container with overlay */}
//       <div className={styles.imgContainer}>
//         <img 
//           src={imgUrl || "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"} 
//           alt={title} 
//           className={styles.productImage}
//         />
//         <div className={styles.overlay}>
//           <button className={styles.actionButton}><CiShoppingCart /></button>
//           <button className={styles.actionButton}><CiHeart /></button>
//         </div>
        
//         {/* Sale tag */}
//         {discount_price < price && (
//           <div className={styles.saleTag}>Sale</div>
//         )}
//       </div>
      
//       {/* Product details */}
//       <div className="p-3">
//         <h5 className="mb-2 text-truncate">{title}</h5>
//         <div className="d-flex align-items-center mb-3">
//           <span className={styles.currentPrice}>${discount_price}</span>
//           <span className={styles.originalPrice}>${price}</span>
//         </div>
//         <button className={`btn w-100 ${styles.addToCartBtn}`}>Add To Cart</button>
//       </div>
//     </div>
//   </div>
//   )
// }


import React from 'react';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import styles from "./index.module.css";

export default function ProductCard({ title, price, imgUrl, discount_price }) {
  return (
    <div className={styles.productCard}>
      {/* Image container with overlay */}
      <div className={styles.imgContainer}>
        <img 
          src={imgUrl || "https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png"} 
          alt={title} 
          className={styles.productImage}
        />
        <div className={styles.overlay}>
          <button className={styles.actionButton}><CiShoppingCart /></button>
          <button className={styles.actionButton}><CiHeart /></button>
        </div>
        
        {/* Sale tag */}
        {discount_price < price && (
          <div className={styles.saleTag}>Sale</div>
        )}
      </div>
      
      {/* Product details */}
      <div className={styles.productDetails}>
        <h5 className="mb-2 text-truncate">{title}</h5>
        <div className="d-flex align-items-center mb-3">
          <span className={styles.currentPrice}>${discount_price}</span>
          {discount_price < price && (
            <span className={styles.originalPrice}>${price}</span>
          )}
        </div>
        <button className={`btn w-100 ${styles.addToCartBtn}`}>Add To Cart</button>
      </div>
    </div>
  );
}