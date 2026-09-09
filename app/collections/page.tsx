import React from "react";
import Link from "next/link";
import { collectionsData } from "./data";

export const metadata = {
  title: "Bespoke Furniture Collections | SALEEM Furniture",
  description: "Explore our handcrafted, made-to-order collections including Living Room, Bedroom, and Dining room sets.",
};

export default function CollectionsPage() {
  return (
    <main className="collections-overview-page">
      {/* Page Header */}
      <section className="collections-hero">
        <div className="container">
          <span className="small-label">Portfolio</span>
          <h1 className="hero-heading">The Collections</h1>
          <div className="accent-line" />
          <p className="collections-hero-desc">
            Explore our curated collections of luxury, handcrafted furniture. Each piece is made to order, combining traditional woodworking joinery with modern design sensibilities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="categories-list-section">
        <div className="container">
          <div className="categories-stack">
            {Object.values(collectionsData).map((category, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={category.slug} className={`category-row ${isEven ? "" : "row-reverse"}`}>
                  <div className="category-img-container">
                    <img 
                      src={category.heroImage} 
                      alt={category.title} 
                      className="category-row-img"
                    />
                    <div className="category-img-overlay" />
                  </div>
                  
                  <div className="category-info-container">
                    <span className="small-label">0{index + 1} / Collection</span>
                    <h2 className="category-row-title">{category.title}</h2>
                    <blockquote className="category-quote">&ldquo;{category.quote}&rdquo;</blockquote>
                    <p className="category-row-desc">{category.description}</p>
                    
                    <div className="category-subcategories-links">
                      <h4>Subcategories:</h4>
                      <div className="sub-links-grid">
                        {Object.values(category.subcategories).map((sub) => (
                          <Link 
                            key={sub.slug} 
                            href={`/collections/${category.slug}/${sub.slug}`}
                            className="sub-link-item"
                          >
                            {sub.title}
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="category-row-actions">
                      <Link href={`/collections/${category.slug}`} className="btn btn-filled">
                        View {category.title.split(" ")[0]} Collection
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights */}
      <section className="craftsmanship-banner">
        <div className="container">
          <div className="banner-inner">
            <span className="small-label">Our Standard</span>
            <h2>Made to Order, Built to Last Generations</h2>
            <p>
              We do not mass produce. Every table, chair, and bed frame is built individually for its owner. We source timber from sustainable woodlands and use finishes that highlight the raw grain rather than cover it.
            </p>
            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Solid Hardwood</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">0%</span>
                <span className="stat-label">Veneers or MDF</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">Lifetime</span>
                <span className="stat-label">Structural Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
