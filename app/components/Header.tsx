"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { collectionsData } from "../collections/data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Custom Furniture", href: "/#custom-furniture" },
    { label: "Our Process", href: "/#our-process" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="site-header">
      <div className="announcement-bar">CUSTOM MADE FURNITURE | LIMITED MONTHLY ORDERS</div>
      <nav className="navbar">
        <div className="container header-container">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo">
            <div className="logo-mark">A</div>
            <div className="logo-text-wrapper">
              <span className="logo-main">SALEEM</span>
              <span className="logo-sub">FURNITURE</span>
            </div>
          </Link>

          {/* Desktop Nav Menu */}
          <ul className="nav-menu">
            {navItems.map((item) => {
              const isCollections = item.label === "Collections";
              const isActive = pathname === item.href || (isCollections && pathname.startsWith("/collections"));
              
              return (
                <li 
                  className={`nav-item ${isActive ? "active" : ""} ${isCollections ? "has-mega" : ""}`} 
                  key={item.label}
                  onMouseEnter={() => isCollections && setDropdownOpen(true)}
                  onMouseLeave={() => isCollections && setDropdownOpen(false)}
                >
                  {isCollections ? (
                    <span className="nav-collections-trigger">
                      {item.label}
                      <svg className="dropdown-icon" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </span>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {isCollections && (
                    <div className={`mega-menu ${dropdownOpen ? "visible" : ""}`}>
                      <div className="mega-menu-content">
                        {Object.values(collectionsData).map((cat) => (
                          <div className="mega-column" key={cat.slug}>
                            <Link href={`/collections/${cat.slug}`} className="mega-title">
                              {cat.title}
                            </Link>
                            <ul className="mega-links">
                              {Object.values(cat.subcategories).map((sub) => (
                                <li key={sub.slug}>
                                  <Link href={`/collections/${cat.slug}/${sub.slug}`}>
                                    {sub.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="nav-cta">
            <a href="tel:+923150414596" className="btn">REQUEST A QUOTE</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                {item.label === "Collections" ? (
                  <div className="mobile-collections-section">
                    <span className="mobile-nav-label">Collections</span>
                    <div className="mobile-categories-grid">
                      {Object.values(collectionsData).map((cat) => (
                        <div className="mobile-category-col" key={cat.slug}>
                          <Link 
                            href={`/collections/${cat.slug}`}
                            className="mobile-category-title"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {cat.title.split(" ")[0]}
                          </Link>
                          <div className="mobile-subcategory-links">
                            {Object.values(cat.subcategories).map((sub) => (
                              <Link 
                                key={sub.slug}
                                href={`/collections/${cat.slug}/${sub.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-main-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mobile-nav-item mobile-cta-li">
              <a href="tel:+923150414596" className="btn btn-filled" onClick={() => setMobileMenuOpen(false)}>
                Call Studio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
