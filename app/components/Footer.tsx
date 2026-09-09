"use client";

import React from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons" aria-label="Social media links">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 22a8.5 8.5 0 0 0 5-1.5c1.5-1.07 2-3.07 1.5-5.5-.5-2.5-2-4.5-4.5-5.5s-5-.5-6.5 1.5-1.5 5 0 7c.75.93 1.5 1.5 2.5 1.5.5 0 .5-.5 1-1l1-3.5c-.5-.5-.5-1-.5-1.5 0-1.5 1-2.5 2-2.5s1.5 1 1.5 2c0 1.5-.5 3-1.5 3.5s-1.5 0-1-1.5l1.5-4.5" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand">
            <span className="logo-main footer-logo">SALEEM</span>
            <p className="footer-brand-desc">A bespoke furniture studio crafting timeless pieces for refined living.</p>
            <p className="footer-brand-desc phone">P: +92 315 0414596</p>
            <SocialIcons />
          </div>
          <div>
            <h4 className="footer-title">Collections</h4>
            <ul className="footer-links">
              <li><Link href="/collections/living-room">Living Room</Link></li>
              <li><Link href="/collections/bedroom">Bedroom</Link></li>
              <li><Link href="/collections/dining">Dining Room</Link></li>
              <li><Link href="/collections">All Collections</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Custom</h4>
            <ul className="footer-links">
              <li><Link href="/#custom-furniture">Custom Furniture</Link></li>
              <li><Link href="/#our-process">Our Process</Link></li>
              <li><Link href="/#projects">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="/#contact">About Us</Link></li>
              <li><Link href="/#contact">Our Story</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Stay Inspired</h4>
            <p className="newsletter-desc">Join our newsletter for design updates and new bespoke projects.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Enter your email" aria-label="Email address" />
              <button className="newsletter-btn" type="submit" aria-label="Subscribe">
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Saleem Furniture. All rights reserved.</div>
          <div className="footer-bottom-right">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
