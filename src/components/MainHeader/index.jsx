// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
// import { IoIosMenu } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
// import SideHeader from "../SideHeader";
// import styles from "./index.module.css";
// import { useCart, useSideHeader, useWishlist, useAuth } from "../../store";
// import logoImg from "../../assets/Logo.png";

// export default function MainHeader() {
//   const { index, openSideHeader } = useSideHeader();
//   const { totalItems } = useCart();
//   const { wishlistItems } = useWishlist();
//   const location = useLocation();
//   const isShopPage = location.pathname === "/products";
//   const [scrolled, setScrolled] = useState(false);
//   const [searchFocused, setSearchFocused] = useState(false);
//   const { isAuthenticated, user, logout } = useAuth();
//   const navigate = useNavigate();

//   // Check if user has admin role
//   const isAdmin = user?.role === 'admin' || user?.isAdmin === true;

//   const logoutAndRedirect = () => {
//     logout();
//     navigate("/register");
//   };

//   const [navLinks] = useState([
//     { id: 1, path: "/", name: "Home" },
//     { id: 2, path: "/products", name: "Shop" },
//     { id: 3, path: "/about", name: "About" },
//     { id: 4, path: "/contact", name: "Contact" },
//     { id: 5, path: "/blog", name: "Blog" },
//   ]);

//   const [iconLinks, setIconLinks] = useState([
//     {
//       id: 1,
//       path: "/wishlist",
//       icon: <CiHeart className="fs-4 text-dark hover-icon" />,
//       label: "Wishlist",
//       badge: wishlistItems.length,
//     },
//     {
//       id: 2,
//       path: "/cart",
//       icon: <CiShoppingCart className="fs-4 text-dark hover-icon" />,
//       label: "Cart",
//       badge: totalItems,
//     },
//     {
//       id: 3,
//       path: null,
//       icon: (
//         <div className="position-relative dropdown">
//           <CiUser className="fs-4 text-dark hover-icon dropdown-toggle"
//                  data-bs-toggle="dropdown"
//                  aria-expanded="false" />
//           {isAuthenticated && (
//             <div
//               className="dropdown-menu dropdown-menu-end p-3 bg-white shadow rounded"
//               style={{ minWidth: "160px" }}
//             >
//               <p className="mb-2 fw-bold">Hello, {user?.username || "User"}</p>
//               <button
//                 className="dropdown-item text-start w-100 p-1"
//                 onClick={() => navigate("/wishlist")}
//               >
//                 Wishlist
//               </button>
//               <button
//                 className="dropdown-item text-start w-100 p-1"
//                 onClick={() => navigate("/orders")}
//               >
//                 Orders
//               </button>
//               {isAdmin && (
//                 <button
//                   className="dropdown-item text-start w-100 p-1"
//                   onClick={() => navigate("/admin")}
//                 >
//                   Admin
//                 </button>
//               )}
//               <hr className="my-2" />
//               <button
//                 className="dropdown-item text-danger text-start w-100 p-1"
//                 onClick={logoutAndRedirect}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       ),
//       label: "Account",
//       badge: null,
//     },
//   ]);

//   useEffect(() => {
//     setIconLinks((prev) =>
//       prev.map((link) =>
//         link.id === 2 ? { ...link, badge: totalItems } : link
//       )
//     );
//   }, [totalItems]);

//   useEffect(() => {
//     setIconLinks((prev) =>
//       prev.map((link) =>
//         link.id === 1 ? { ...link, badge: wishlistItems.length } : link
//       )
//     );
//   }, [wishlistItems]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   // Initialize cart on component mount
//   useEffect(() => {
//     const initializeApp = async () => {
//       // Initialize cart data
//       useCart.getState().initCart();
//     };

//     initializeApp();
//   }, []);

//   return (
//     <header className={`sticky-top bg-white ${scrolled ? styles.scrolled : ""}`}>
//       <div className="container d-flex justify-content-between align-items-center py-3">
//         <Link to="/" className="navbar-brand">
//           <img src={logoImg} alt="Logo" height="80" />
//         </Link>

//         {/* Navigation */}
//         <nav className="d-none d-md-flex">
//           <ul className="d-flex m-0 p-0 gap-3 list-unstyled" id={styles.navList}>
//             {navLinks.map((el) => (
//               <li key={el.id} id={styles.navItem}>
//                 <Link to={el.path} id={styles.navLink}>
//                   {el.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {isShopPage && (
//           <div
//             className={`d-none d-lg-block position-relative ${styles.searchContainer} ${searchFocused ? styles.focused : ""}`}
//           >
//             <input
//               className="rounded-pill"
//               id={styles.searchInput}
//               placeholder="Search products..."
//               onFocus={() => setSearchFocused(true)}
//               onBlur={() => setSearchFocused(false)}
//             />
//             <button className="btn position-absolute end-0 top-0 bottom-0" id={styles.searchButton}>
//               <FaSearch />
//             </button>
//           </div>
//         )}

//         <div className="d-none d-md-flex">
//           <ul className="d-flex list-unstyled m-0 p-0 gap-1" id={styles.iconList}>
//             {iconLinks.map((el) => (
//               <li key={el.id} className="position-relative" id={styles.iconItem}>
//                 {el.path ? (
//                   <Link to={el.path} id={styles.iconLink}>
//                     {el.icon}
//                     {el.badge !== null && el.badge > 0 && (
//                       <span id={styles.badge} className="badge bg-dark position-absolute">
//                         {el.badge}
//                       </span>
//                     )}
//                   </Link>
//                 ) : (
//                   <div id={styles.iconLink}>
//                     {el.icon}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <button
//           className="btn d-block d-md-none border-0"
//           onClick={openSideHeader}
//           aria-label="Open menu"
//         >
//           <IoIosMenu className="text-dark fs-1" />
//         </button>
//       </div>

//       {index && <SideHeader />}
//     </header>
//   );
// }




import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import SideHeader from "../SideHeader";
import styles from "./index.module.css";
import { useCart, useSideHeader, useWishlist, useAuth } from "../../store";
import logoImg from "../../assets/Logo.png";

export default function MainHeader() {
  const { index, openSideHeader } = useSideHeader();
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const location = useLocation();
  const isShopPage = location.pathname === "/products";
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileCanvas, setShowProfileCanvas] = useState(false);

  // Check if user has admin role
  const isAdmin = user?.role === 'admin' || user?.isAdmin === true;

  const logoutAndRedirect = () => {
    logout();
    navigate("/register");
    setShowProfileCanvas(false);
  };

  const [navLinks] = useState([
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/products", name: "Shop" },
    { id: 3, path: "/about", name: "About" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ]);

  const [iconLinks, setIconLinks] = useState([
    {
      id: 1,
      path: "/wishlist",
      icon: <CiHeart className="fs-4 text-dark hover-icon" />,
      label: "Wishlist",
      badge: wishlistItems.length,
    },
    {
      id: 2,
      path: "/cart",
      icon: <CiShoppingCart className="fs-4 text-dark hover-icon" />,
      label: "Cart",
      badge: totalItems,
    },
    {
      id: 3,
      path: null,
      icon: (
        <div className="position-relative">
          <CiUser 
            className="fs-4 text-dark hover-icon"
            onClick={() => setShowProfileCanvas(true)}
          />
        </div>
      ),
      label: "Account",
      badge: null,
    },
  ]);

  useEffect(() => {
    setIconLinks((prev) =>
      prev.map((link) =>
        link.id === 2 ? { ...link, badge: totalItems } : link
      )
    );
  }, [totalItems]);

  useEffect(() => {
    setIconLinks((prev) =>
      prev.map((link) =>
        link.id === 1 ? { ...link, badge: wishlistItems.length } : link
      )
    );
  }, [wishlistItems]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Initialize cart on component mount
  useEffect(() => {
    const initializeApp = async () => {
      // Initialize cart data
      useCart.getState().initCart();
    };

    initializeApp();
  }, []);

  return (
    <>
      <header className={`sticky-top bg-white ${scrolled ? styles.scrolled : ""}`}>
        <div className="container d-flex justify-content-between align-items-center py-3">
          <Link to="/" className="navbar-brand">
            <img src={logoImg} alt="Logo" height="80" />
          </Link>

          {/* Navigation */}
          <nav className="d-none d-md-flex">
            <ul className="d-flex m-0 p-0 gap-3 list-unstyled" id={styles.navList}>
              {navLinks.map((el) => (
                <li key={el.id} id={styles.navItem}>
                  <Link to={el.path} id={styles.navLink}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {isShopPage && (
            <div
              className={`d-none d-lg-block position-relative ${styles.searchContainer} ${searchFocused ? styles.focused : ""}`}
            >
              <input
                className="rounded-pill"
                id={styles.searchInput}
                placeholder="Search products..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="btn position-absolute end-0 top-0 bottom-0" id={styles.searchButton}>
                <FaSearch />
              </button>
            </div>
          )}

          <div className="d-none d-md-flex">
            <ul className="d-flex list-unstyled m-0 p-0 gap-1" id={styles.iconList}>
              {iconLinks.map((el) => (
                <li key={el.id} className="position-relative" id={styles.iconItem}>
                  {el.path ? (
                    <Link to={el.path} id={styles.iconLink}>
                      {el.icon}
                      {el.badge !== null && el.badge > 0 && (
                        <span id={styles.badge} className="badge bg-dark position-absolute">
                          {el.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <div id={styles.iconLink}>
                      {el.icon}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="btn d-block d-md-none border-0"
            onClick={openSideHeader}
            aria-label="Open menu"
          >
            <IoIosMenu className="text-dark fs-1" />
          </button>
        </div>

        {index && <SideHeader />}
      </header>

      {/* Profile Offcanvas */}
      <div 
        className={`offcanvas offcanvas-end ${showProfileCanvas ? 'show' : ''}`} 
        tabIndex="-1" 
        id="profileOffcanvas"
        aria-labelledby="profileOffcanvasLabel"
        style={{ visibility: showProfileCanvas ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="profileOffcanvasLabel">My Account</h5>
          <button 
            type="button" 
            className="btn-close text-reset" 
            onClick={() => setShowProfileCanvas(false)} 
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {isAuthenticated ? (
            <div>
              <div className="mb-4 p-3 bg-light rounded">
                <p className="mb-1 fs-5 fw-bold">Hello, {user?.username || "User"}</p>
                <p className="text-muted mb-0 small">{user?.email || ""}</p>
              </div>
              
              <div className="list-group list-group-flush">
                <button
                  className="list-group-item list-group-item-action py-3"
                  onClick={() => {
                    navigate("/wishlist");
                    setShowProfileCanvas(false);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <CiHeart className="me-3 fs-4" />
                    <span>My Wishlist</span>
                    {wishlistItems.length > 0 && (
                      <span className="badge bg-dark rounded-pill ms-auto">{wishlistItems.length}</span>
                    )}
                  </div>
                </button>
                
                <button
                  className="list-group-item list-group-item-action py-3"
                  onClick={() => {
                    navigate("/orders");
                    setShowProfileCanvas(false);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i className="bi bi-box me-3 fs-4"></i>
                    <span>My Orders</span>
                  </div>
                </button>
                
                {isAdmin && (
                  <button
                    className="list-group-item list-group-item-action py-3"
                    onClick={() => {
                      navigate("/admin");
                      setShowProfileCanvas(false);
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-gear me-3 fs-4"></i>
                      <span>Admin Dashboard</span>
                    </div>
                  </button>
                )}
              </div>
              
              <div className="mt-4">
                <button
                  className="btn btn-danger w-100 py-2"
                  onClick={logoutAndRedirect}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="mb-4">Please log in to view your account</p>
              <button
                className="btn btn-primary me-2"
                onClick={() => {
                  navigate("/login");
                  setShowProfileCanvas(false);
                }}
              >
                Login
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate("/register");
                  setShowProfileCanvas(false);
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Backdrop for the offcanvas */}
      {showProfileCanvas && (
        <div 
          className="offcanvas-backdrop fade show" 
          onClick={() => setShowProfileCanvas(false)}
        ></div>
      )}
    </>
  );
}