import { Filter, Home, ShoppingBag } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function index() {
     const [productsTotal, setProductsTotal] = useState(0);
  return (
    <>
      {/* Hero Section with Breadcrumb */}
      <div className="container-fluid bg-light py-4 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      className="text-decoration-none d-flex align-items-center"
                    >
                      <Home size={14} className="me-1" />
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active fw-medium d-flex align-items-center">
                    <ShoppingBag size={14} className="me-1" />
                    <span>Shop</span>
                  </li>
                  <li
                    className="breadcrumb-item active fw-medium d-flex align-items-center"
                    aria-current="page"
                  >
                    Collection
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <div className="text-end d-flex align-items-center justify-content-end">
                <Filter size={16} className="text-muted me-2" />
                <p className="text-muted mb-0">
                  Showing <span className="fw-medium">{productsTotal}</span>
                  products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
