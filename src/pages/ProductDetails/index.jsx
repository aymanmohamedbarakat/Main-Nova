import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./index.module.css";
import { ShopRepo } from "../../data/repo/ShopRepo";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    // Enhanced logging and error handling
    console.log("Raw Product ID:", id)

    // Validate product ID
    if (!id || id === 'undefined') {
      console.error("Invalid Product ID")
      navigate('/shop')  // Redirect if no valid ID
      return
    }

    // Fetch product details
    setLoading(true)
    ShopRepo.productDetails(id)
      .then((res) => {
        if (!res) {
          console.error("No product details found")
          navigate('/shop')
          return
        }
        
        console.log("Product details fetched successfully:", res)
        setProductDetails(res)
        setActiveImage(res.image1 || res.images?.[0])
      })
      .catch((error) => {
        console.error("Error fetching product details:", error)
        navigate('/shop')
      })
      .finally(() => setLoading(false))
  }, [id, navigate])

  const switchImage = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        <p>The product could not be located.</p>
      </div>
    );
  }

  return (
    <div
      className="container py-5 col-12 d-flex flex-column flex-lg-row justify-content-between align-items-start gap-4"
      id={styles.productDetails}
    >
      <div className="col-12 col-lg-6" id={styles.Details}>
        <div className="main-image mb-3">
          <img
            src={activeImage || productDetails.image1}
            alt={productDetails.title}
            className="img-fluid rounded"
            style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="d-flex gap-2 thumbnail-container">
          {productDetails.image1 && (
            <img
              src={productDetails.image1 || "/placeholder.svg"}
              alt="Thumbnail 1"
              className={`img-thumbnail cursor-pointer ${
                activeImage === productDetails.image1 ? "border-primary" : ""
              }`}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => switchImage(productDetails.image1)}
            />
          )}
          {productDetails.image2 && (
            <img
              src={productDetails.image2 || "/placeholder.svg"}
              alt="Thumbnail 2"
              className={`img-thumbnail cursor-pointer ${
                activeImage === productDetails.image2 ? "border-primary" : ""
              }`}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => switchImage(productDetails.image2)}
            />
          )}
        </div>
      </div>
      <div
        className="col-12 col-lg-6 d-flex flex-column justify-content-between gap-4"
        id={styles.Details}
      >
        <div className="title">
          <h2 className="fw-bold">{productDetails.title}</h2>
          <span className="stars fs-3" id={styles.stars}>
            ★★★★☆
          </span>
        </div>
        <div className="category">
          <span className="badge bg-secondary">{productDetails.category}</span>
        </div>
        <div className="price">
          {productDetails.discount_price < productDetails.price ? (
            <div className="d-flex align-items-center gap-2">
              <h5 className="fs-3 text-primary mb-0">
                ${productDetails.discount_price}
              </h5>
              <del className="text-muted fs-5">${productDetails.price}</del>
              <span className="badge bg-danger">
                Save ${productDetails.price - productDetails.discount_price}
              </span>
            </div>
          ) : (
            <h5 className="fs-3">${productDetails.price}</h5>
          )}
        </div>
        <div className="description">
          <h6 className="fw-bold">Description</h6>
          <p className="fs-5">{productDetails.description}</p>
        </div>

        <div className="btn-group d-flex gap-3">
          <button className="btn btn-primary p-3" disabled={loading}>
            Add to Cart
          </button>
          <button className="btn btn-outline-secondary p-3" disabled={loading}>
            <i className="bi bi-heart"></i> Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
