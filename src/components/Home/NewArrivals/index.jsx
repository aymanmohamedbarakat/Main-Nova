import React, { useState } from "react";
import styles from "./index.module.css";
import { FaLeaf } from "react-icons/fa";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";
import slide3 from "../../../assets/slide3.png";
import slide4 from "../../../assets/slide4.png";
import skinCareImg1 from "../../../assets/img1-middle-makali1.jpg";
import skinCareImg2 from "../../../assets/img2-middle-makali1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const [arrival, setArrival] = useState([
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 3, image: slide3 },
    { id: 4, image: slide4 },
    { id: 5, image: slide3 },
  ]);

  return (
    <div className="col-12 d-flex flex-column justify-content-center gap-5 mb-5 mt-5">
      <div id={styles.title}>
        <h1 className="text-center">New Arrivals</h1>
        <p className="text-center">our new arrivals to our weekly lineup</p>
        <div className={styles.leafContainer}>
          <div className={styles.line}></div>
          <div className={styles.leaf}>
            <FaLeaf />
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className="col-12">
        <div className="CategorySlider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {arrival.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.slider}>
                  <Link to={"/shop"} className={styles.imageLink}>
                    <img
                      src={item.image}
                      alt={`Product ${item.id}`}
                      className={styles.productImage}
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center ">
          <div className="p-3 d-flex flex-column flex-md-row gap-3">
            <div
              id={styles.skinCare}
              className="position-relative d-flex align-items-center"
            >
              <img src={skinCareImg1} alt="" />
              <div className="position-absolute px-5" id={styles.content}>
                <h2 className="m-0">The Brighter way to better skin</h2>
                <p className="text-muted m-0">
                  4 Step skincare for Brighter, Smoother, Younger looking skin
                </p>
                <button className="btn btn-light ">
                  <Link className="nav-link" to={"/shop"}>
                    buy now - <span>$193.77</span>
                  </Link>
                </button>
              </div>
            </div>
            <div
              id={styles.skinCare}
              className="position-relative d-flex align-items-center"
            >
              <img src={skinCareImg2} alt="" />
              <div className="position-absolute px-5" id={styles.content}>
                <h2>Luminous, Instar-Ready Skin In A Few Drops</h2>
                <p className="text-muted">
                  Contains 4% Niacinamide & 100% natural Hyaluronic acid
                </p>
                <button className="btn btn-light ">
                  <Link className="nav-link" to={"/shop"}>
                    buy now - <span>$193.77</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
