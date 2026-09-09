"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionsData } from "../../data";

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export default function SubcategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;
  const subcategorySlug = resolvedParams.subcategory;

  const category = collectionsData[categorySlug];
  if (!category) {
    notFound();
  }

  const subcategory = category.subcategories[subcategorySlug];
  if (!subcategory) {
    notFound();
  }

  // State for selected wood finish per project
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, string>>({});
  
  // State for inquiry form
  const [inquiryProduct, setInquiryProduct] = useState(subcategory.projects[0]?.title || "");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    wood: "American Walnut",
    notes: ""
  });

  const handleFinishChange = (projectName: string, finishName: string) => {
    setSelectedFinishes((prev) => ({
      ...prev,
      [projectName]: finishName
    }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number so we can reach you.");
      return;
    }
    // Simulate API submission
    setInquirySubmitted(true);
  };

  const woodFinishes = [
    { name: "American Walnut", color: "#4f3323", desc: "Rich chocolate brown with elegant grain patterns" },
    { name: "White Oak", color: "#d7c8b8", desc: "Light, clean, and modern with high strength" },
    { name: "Charcoal Ash", color: "#1a1a1a", desc: "Deep black finish showing the beautiful open wood grain" },
    { name: "Natural Ash", color: "#e3dac9", desc: "Blonde, warm, and highly flexible timber" }
  ];

  return (
    <main className="subcategory-showcase-page">
      {/* Breadcrumb navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/collections">Collections</Link>
            <span className="separator">/</span>
            <Link href={`/collections/${category.slug}`}>{category.title.split(" ")[0]}</Link>
            <span className="separator">/</span>
            <span className="current">{subcategory.title}</span>
          </div>
        </div>
      </div>

      {/* Subcategory Intro */}
      <section className="subcategory-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left">
              <span className="small-label">Commission Portfolio</span>
              <h1 className="intro-title">{subcategory.title}</h1>
              <p className="intro-tagline">{subcategory.tagline}</p>
              <p className="intro-description">{subcategory.description}</p>
            </div>
            <div className="intro-right">
              <div className="craft-card">
                <h4 className="craft-card-title">Custom Craftsmanship</h4>
                <p className="craft-card-desc">{subcategory.craftsmanship}</p>
                <div className="accent-line" style={{ margin: "15px 0 0", width: "30px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Grid */}
      <section className="product-list-section">
        <div className="container">
          <div className="product-grid-stack">
            {subcategory.projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const currentFinish = selectedFinishes[project.title] || "American Walnut";
              
              return (
                <article key={project.title} className={`product-card-row ${isEven ? "" : "row-reverse"}`}>
                  {/* Image Showcase */}
                  <div className="product-image-area">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="product-large-img"
                    />
                    <div className="product-image-overlay" />
                    
                    {/* Active wood swatch indicator */}
                    <div className="finish-indicator-tag">
                      <span className="indicator-dot" style={{ backgroundColor: woodFinishes.find(w => w.name === currentFinish)?.color }} />
                      <span className="indicator-label">{currentFinish}</span>
                    </div>
                  </div>

                  {/* Details and Specs Area */}
                  <div className="product-details-area">
                    <div className="product-meta-header">
                      <h2 className="product-name">{project.title}</h2>
                      <span className="product-price" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--accent-color)" }}>
                        {project.scope}
                      </span>
                    </div>

                    <p className="product-description">{project.description}</p>

                    <div className="spec-info-group">
                      <div className="spec-row">
                        <span className="spec-label">Commissioned Size:</span>
                        <span className="spec-value">{project.dimensions}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">Materials Selected:</span>
                        <span className="spec-value">{project.materials.join(", ")}</span>
                      </div>
                    </div>

                    {/* Customizable Finishes Swatches */}
                    <div className="finishes-swatches-wrapper">
                      <h4>Timber Finish Simulation:</h4>
                      <div className="swatches-grid">
                        {woodFinishes.map((wood) => (
                          <button
                            key={wood.name}
                            className={`swatch-btn ${currentFinish === wood.name ? "active" : ""}`}
                            onClick={() => handleFinishChange(project.title, wood.name)}
                            title={`${wood.name}: ${wood.desc}`}
                            type="button"
                          >
                            <span className="swatch-color" style={{ backgroundColor: wood.color }} />
                            <span className="swatch-name">{wood.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Options list */}
                    <div className="custom-options-box">
                      <h4>Tailored Commission Features:</h4>
                      <ul>
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx}>{feat}</li>
                        ))}
                        <li>Built custom to the exact dimensions of your space</li>
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="product-card-actions">
                      <a 
                        href="#inquiry-section" 
                        className="btn btn-filled"
                        onClick={() => {
                          setInquiryProduct(project.title);
                          setFormData(prev => ({ ...prev, wood: currentFinish }));
                        }}
                      >
                        Request Similar Custom Build
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry and Design Customization Form */}
      <section id="inquiry-section" className="inquiry-form-section">
        <div className="container">
          <div className="inquiry-grid">
            <div className="inquiry-details">
              <span className="small-label">Book a Commission</span>
              <h2>Start Your Custom Project</h2>
              <p>
                Ready to commission a piece? Submit your contact details and custom preferences below. Our design consultant will reach out via Phone/WhatsApp within 24 hours to review your requirements, share timber samples, and provide an official estimate.
              </p>
              
              <div className="studio-contact-info">
                <div className="info-block">
                  <h5>Direct Studio Line</h5>
                  <p>+92 315 0414596</p>
                </div>
                <div className="info-block">
                  <h5>Workshop Location</h5>
                  <p>Saleem Furniture, Custom Joinery Division, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="inquiry-form-container">
              {inquirySubmitted ? (
                <div className="inquiry-success-message">
                  <div className="success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3>Thank you for your enquiry</h3>
                  <p>
                    We have received your custom request inspired by the <strong>{inquiryProduct}</strong> in <strong>{formData.wood}</strong>. Our custom joinery expert will contact you shortly.
                  </p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => setInquirySubmitted(false)}
                    type="button"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form className="luxury-form" onSubmit={handleInquirySubmit}>
                  <div className="form-group">
                    <label htmlFor="product-select">Inspiration Project</label>
                    <select 
                      id="product-select"
                      value={inquiryProduct} 
                      onChange={(e) => setInquiryProduct(e.target.value)}
                    >
                      {subcategory.projects.map((project) => (
                        <option key={project.title} value={project.title}>
                          {project.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="user-name">Your Name *</label>
                      <input 
                        type="text" 
                        id="user-name"
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user-phone">Phone / WhatsApp *</label>
                      <input 
                        type="tel" 
                        id="user-phone"
                        placeholder="+92 315 0414596" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="user-email">Email Address</label>
                      <input 
                        type="email" 
                        id="user-email"
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="wood-select">Preferred Wood species</label>
                      <select 
                        id="wood-select"
                        value={formData.wood} 
                        onChange={(e) => setFormData({...formData, wood: e.target.value})}
                      >
                        {woodFinishes.map((wood) => (
                          <option key={wood.name} value={wood.name}>
                            {wood.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="user-notes">Customization Notes (Dimensions, Fabric requirements, etc.)</label>
                    <textarea 
                      id="user-notes"
                      rows={4} 
                      placeholder="Specify if you require custom dimensions, a different wood species, or premium upholstery choices..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <button className="btn btn-filled form-submit-btn" type="submit">
                    Send Commission Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
