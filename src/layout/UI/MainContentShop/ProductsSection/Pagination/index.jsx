import React from "react";

export default function index() {
  const [productsTotal, setProductsTotal] = useState(0);
  const [productPerPage, setProductPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

    // Get Product From Api
    useEffect(() => {
      ShopRepo.products_index(activePage, productPerPage).then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
        setProductsTotal(data.length);
      });
    }, [activePage, productPerPage]);
  
    useEffect(() => {
      ShopRepo.products_index(activePage, productPerPage).then((data) => {
        setAllProducts(data);
      });
    }, [activePage, productPerPage]);
    
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
  
    useEffect(() => {
      setActivePage(1);
    }, [productPerPage]);
  return (
    <>
      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="card shadow-sm border-0 mt-4">
          <div className="card-body p-3">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
              <nav aria-label="Product pagination">
                <ul className="pagination pagination-sm mb-0 flex-wrap justify-content-center">
                  {activePage > 1 && (
                    <li className="page-item">
                      <a
                        className="page-link rounded-start"
                        aria-label="Previous"
                        onClick={() => setActivePage(activePage - 1)}
                        href="#"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                  )}
                  {Array(Math.ceil(productsTotal / productPerPage))
                    .fill(0)
                    .map((el, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          activePage == index + 1 ? "active" : null
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => setActivePage(index + 1)}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}

                  {activePage < Math.ceil(productsTotal / productPerPage) && (
                    <li className="page-item">
                      <a
                        className="page-link rounded-end"
                        aria-label="Next"
                        onClick={() => setActivePage(activePage + 1)}
                        href="#"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
              <div className="d-flex align-items-center">
                <label
                  htmlFor="items-per-page"
                  className="me-2 text-muted mb-0"
                >
                  Show:
                </label>
                <select
                  id="items-per-page"
                  className={`form-select form-select-sm rounded-pill ${styles.select}`}
                  onChange={(e) => {
                    const newPageSize = parseInt(e.target.value);
                    setProductPerPage(newPageSize);
                    setActivePage(1); // Reset to first page when changing items per page
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
