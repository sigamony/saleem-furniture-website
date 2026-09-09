import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionsData } from "../data";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryData = collectionsData[resolvedParams.category];
  
  if (!categoryData) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryData.title} | SALEEM Furniture`,
    description: categoryData.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryData = collectionsData[resolvedParams.category];

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="category-detail-page">
      {/* Category Hero */}
      <section className="category-hero-section" style={{ backgroundImage: `linear-gradient(to right, rgba(13, 11, 10, 0.95), rgba(13, 11, 10, 0.5)), url(${categoryData.heroImage})` }}>
        <div className="container">
          <div className="category-hero-inner">
            <Link href="/collections" className="back-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: "rotate(180deg)", marginRight: "8px" }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              All Collections
            </Link>
            <span className="small-label" style={{ color: "var(--light-taupe)" }}>Exclusive Series</span>
            <h1 className="category-hero-title">{categoryData.title}</h1>
            <p className="category-hero-desc">{categoryData.description}</p>
            <blockquote className="category-hero-quote">&ldquo;{categoryData.quote}&rdquo;</blockquote>
          </div>
        </div>
      </section>

      {/* Subcategories Showcase */}
      <section className="subcategories-showcase-section">
        <div className="container">
          <div className="section-header">
            <span className="small-label">Explore Subcategories</span>
            <h2 className="section-heading">Curated Showcase</h2>
          </div>

          <div className="subcategories-grid">
            {Object.values(categoryData.subcategories).map((sub, index) => (
              <div className="subcategory-block" key={sub.slug}>
                <div className="sub-header-row">
                  <div className="sub-title-wrapper">
                    <span className="sub-num">0{index + 1}</span>
                    <h3>{sub.title}</h3>
                  </div>
                  <span className="sub-tagline">{sub.tagline}</span>
                </div>
                
                <p className="sub-desc">{sub.description}</p>

                {/* Recent Commissions */}
                <div className="sub-items-teaser">
                  <h4>Recent Commissions:</h4>
                  <ul>
                    {sub.projects.map((project) => (
                      <li key={project.title} className="teaser-item">
                        <span className="teaser-name">{project.title}</span>
                        <div className="teaser-dots"></div>
                        <span className="teaser-scope" style={{ fontSize: "11px", color: "var(--accent-color)", fontWeight: 500 }}>{project.scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sub-actions">
                  <Link href={`/collections/${categoryData.slug}/${sub.slug}`} className="btn btn-outline" style={{ width: "100%", display: "flex" }}>
                    Explore {sub.title} Showcase
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Consulting Banner */}
      <section className="consulting-cta">
        <div className="container">
          <div className="consulting-box">
            <div className="consulting-content">
              <span className="small-label">Bespoke Design Service</span>
              <h2>Looking for specific dimensions or custom configurations?</h2>
              <p>
                Every home has unique layout requirements. Our designers can customize any of our catalog styles to fit your space exactly, or draft a completely original piece from your reference photos.
              </p>
              <div className="consulting-actions">
                <a href="tel:+923150414596" className="btn btn-filled">Consult Our Studio</a>
                <Link href="/#our-process" className="btn btn-outline">Our Custom Process</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
