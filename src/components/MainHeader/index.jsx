import React, { useState, useEffect } from "react";
import logoImg from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import SideHeader from "../SideHeader";
import { useSideHeader } from "../../store";
import { FaSearch } from "react-icons/fa";
import styles from "./index.module.css";

export default function MainHeader() {
  const { index, openSideHeader } = useSideHeader();
  const [scrolled, setScrolled] = useState(false);

  // Navigation links with useState
  const [navLinks, setNavLinks] = useState([
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/shop", label: "Shop" },
    { id: 3, path: "/about", label: "About" },
    { id: 4, path: "/contact", label: "Contact" },
    { id: 5, path: "/blog", label: "Blog" },
  ]);

  // Icon links with useState
  const [iconLinks, setIconLinks] = useState([
    {
      id: 1,
      path: "/wishlist",
      icon: <CiHeart className="fs-3 text-dark hover-icon" />,
      badge: 0,
    },
    {
      id: 2,
      path: "/cart",
      icon: <CiShoppingCart className="fs-3 text-dark hover-icon" />,
      badge: 2,
    },
    {
      id: 3,
      path: "/account",
      icon: <CiUser className="fs-3 text-dark hover-icon" />,
      badge: null,
    },
  ]);

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

  return (
    <header
      className={`col-12 border-bottom sticky-top bg-white mb-3 ${
        scrolled ? "shadow" : "shadow-sm"
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center py-1">
        <Link to="/" className="navbar-brand">
          <img src={logoImg} alt="Logo" height="90" />
        </Link>

        <div className="d-none d-md-flex col-4 position-relative">
          <input
            className="form-control rounded-pill"
            placeholder="Search products..."
          />
          <button className="btn position-absolute end-0 top-0 bottom-0">
            <FaSearch />
          </button>
        </div>

        <nav className="d-none d-md-flex gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="nav-link fw-medium text-decoration-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="d-none d-md-flex align-items-center">
          <div className="d-flex gap-4">
            {iconLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="position-relative icon-link"
              >
                {link.icon}
                {link.badge !== null && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="btn d-block d-md-none border-0"
          onClick={openSideHeader}
        >
          <IoIosMenu className="text-dark fs-3" />
        </button>
      </div>
      {index && <SideHeader />}
    </header>
  );
}
