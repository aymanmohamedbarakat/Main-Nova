import { ChevronDown, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function index() {
  const [cats, setCats] = useState([
    { id: 1, name: "Male", products: 10 },
    { id: 2, name: "Female", products: 20 },
  ]);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(allProducts);
      setProductsTotal(allProducts.length);
    } else {
      const filtered = allProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setFilteredProducts(filtered);
      setProductsTotal(filtered.length);
    }
  }, [selectedCategories, allProducts]);

  const handleCategoryChange = (categoryName) => {
    setSelectedCategories((disapleProduct) => {
      if (disapleProduct.includes(categoryName)) {
        return disapleProduct.filter((category) => category !== categoryName);
      } else {
        return [...disapleProduct, categoryName];
      }
    });
  };
  return (
    <>
      <div className="container d-md-none mb-4">
        <div className="card shadow-sm border-0">
          <div className="card-body p-0">
            <button
              className="btn w-100 d-flex justify-content-between align-items-center p-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobileCategoryFilters"
            >
              <span className="fw-medium">Filter by Category</span>
              <ChevronDown size={16} />
            </button>
            <div className="collapse border-top" id="mobileCategoryFilters">
              <div className="p-3">
                <div className="position-relative mb-3">
                  <input
                    type="search"
                    placeholder="Search categories"
                    className="form-control form-control-sm rounded-pill ps-4 pe-4"
                  />
                  <Search
                    size={14}
                    className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"
                  />
                </div>
                <div className="row g-2">
                  {cats &&
                    Array.isArray(cats) &&
                    cats.map((el) => {
                      // Count products that match this category
                      const categoryProductCount = allProducts.filter(
                        (product) => product.category === el.name
                      ).length;

                      return (
                        <div key={el.id} className="col-6">
                          <div className="form-check d-flex align-items-center gap-2">
                            <input
                              type="checkbox"
                              id={`mobile-cat-${el.id}`}
                              className="form-check-input"
                              checked={selectedCategories.includes(el.name)}
                              onChange={() => handleCategoryChange(el.name)}
                            />
                            <label
                              className="form-check-label d-flex align-items-center gap-2"
                              htmlFor={`mobile-cat-${el.id}`}
                            >
                              <span>{el.name}</span>
                              <span className="badge bg-secondary rounded-pill">
                                {categoryProductCount}
                              </span>
                            </label>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
