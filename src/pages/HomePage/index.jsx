// import React from 'react'
// import BannerImg from "../../assets/banner.jpg"
// import styles from "./index.module.css"
// import NewArrivals from '../../components/Home/NewArrivals'
// import Category from '../../components/Home/Category'
// // import Model from './Model'
// export default function HomePage() {
//   return (
//     <div className="col-12 container d-flex flex-csolumn justify-content-center align-items-center">
//       <div className=" d-flex justify-content-center align-content-center" id={styles.Banner}>
//         <img src={BannerImg}  />
//         {/* <Model /> */}
//       </div>
//       <NewArrivals />
//       <Category />
//     </div>
//   )
// }

import React from "react";
import BannerImg from "../../assets/banner.jpg";
import styles from "./index.module.css";
import NewArrivals from "../../components/Home/NewArrivals";
import Category from "../../components/Home/Category";
import { Link } from "react-router-dom";
// import Model from './Model'

export default function HomePage() {
  return (
    <div className="col-12 container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
      {/* Hero Banner with Text Overlay */}
      <div className={styles.heroBanner}>
        <img src={BannerImg} alt="Fashion Collection Banner" />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerHeading}>NOVA Your Style</h1>
            <p className={styles.bannerSubheading}>
              Discover the latest trends in fashion
            </p>
            <Link to='/products'>
              <button className={styles.bannerButton}>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner Feature Boxes */}
      <div className={`${styles.featureBoxes} container py-4`}>
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className={styles.featureBox}>
              <i className="fas fa-shipping-fast"></i>
              <h3>Free Shipping</h3>
              <p>On all orders over $50</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.featureBox}>
              <i className="fas fa-undo"></i>
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={styles.featureBox}>
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Customer service excellence</p>
            </div>
          </div>
        </div>
      </div>

      <NewArrivals />
      <Category />

      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className={styles.newsletterHeading}>
                Subscribe to Our Newsletter
              </h2>
              <p className={styles.newsletterText}>
                Stay updated with our latest collections and exclusive offers
              </p>
              <div className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={styles.emailInput}
                />
                <button className={styles.subscribeButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
