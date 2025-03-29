import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";

export default function index() {
      const [productsTotal, setProductsTotal] = useState(0);
  return (
    <>
      {/* ProductsHeader */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <p className="mb-0 text-muted small d-block d-md-none">
                Showing {productsTotal} products
              </p>
              <div className="d-flex align-items-center gap-2">
                <span className="d-none d-md-inline fw-medium">View:</span>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary active d-flex align-items-center justify-content-center"
                    aria-label="Grid view"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center"
                    aria-label="List view"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center">
              <SlidersHorizontal size={16} className="text-muted me-2" />
              <label htmlFor="sort-by" className="me-2 text-muted mb-0">
                Sort by:
              </label>
            </div>
            <div className={`${styles.selectWrapper} position-relative`}>
              <select
                id="sort-by"
                className={`form-select form-select-sm rounded-pill ${styles.select} pe-4`}
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
