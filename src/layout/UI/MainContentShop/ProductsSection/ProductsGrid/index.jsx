import React from "react";
import ProductCard from "../../../ProductCard";

export default function index() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <>
      {/* ProductsGrid */}
      <div className="row g-4">
        {filteredProducts &&
        Array.isArray(filteredProducts) &&
        filteredProducts.length > 0 ? (
          filteredProducts.map((el) => (
            <div key={el.id} className="col-12 col-sm-6 col-lg-4">
              <ProductCard
                title={el.title}
                price={el.price}
                discount_price={el.discount_price}
                imgUrl={el.image1}
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="card shadow-sm border-0 py-5">
              <div className="card-body text-center">
                <i className="bi bi-search display-1 text-muted mb-3"></i>
                <h3>No products found</h3>
                <p className="text-muted">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
                <button
                  className="btn btn-outline-dark rounded-pill px-4 mt-2"
                  onClick={() => setSelectedCategories([])}
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
