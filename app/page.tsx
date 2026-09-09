
const collections = [
  {
    title: "SOLID WOOD DINING TABLE",
    image: "/dining-table.png",
    alt: "Solid Wood Dining Table",
  },
  {
    title: "LOUNGE CHAIR",
    image: "/lounge-chair.png",
    alt: "Lounge Chair",
  },
  {
    title: "MEDIA CONSOLE",
    image: "/media-console.png",
    alt: "Media Console",
  },
  {
    title: "WOODEN BED FRAME",
    image: "/bed-frames.png",
    alt: "Wooden Bed Frame",
  },
];

const processSteps = [
  {
    number: "01",
    title: "CONSULTATION",
    description: "We listen to your ideas, needs and space to understand your vision.",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    number: "02",
    title: "DESIGN & BUILD",
    description:
      "Our team designs and handcrafts your piece using quality materials and expert techniques.",
    icon: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </>
    ),
  },
  {
    number: "03",
    title: "DELIVERY",
    description: "We deliver and set up your furniture with care, ready to be lived in.",
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
];

const features = [
  {
    title: "SOLID WOOD",
    description: "Sustainably sourced premium hardwoods.",
    icon: <path d="M12 2L2 22h20L12 2z" />,
  },
  {
    title: "HANDMADE",
    description: "Skilled craftsmanship in every detail.",
    icon: (
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    ),
  },
  {
    title: "NATURAL FINISHES",
    description: "Non-toxic, durable and beautiful.",
    icon: <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12h10V2z" />,
  },
  {
    title: "MADE TO ORDER",
    description: "Built specifically for you.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

const projects = [
  { image: "/living-room.png", alt: "Living Room Project" },
  { image: "/dining-room.png", alt: "Dining Room Project" },
  { image: "/bedroom-project.png", alt: "Bedroom Project" },
  { image: "/console-project.png", alt: "Media Console Project" },
];



function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}



function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-left">
          <span className="small-label">Bespoke Furniture Studio</span>
          <h1 className="hero-heading">Custom Furniture, Made for Your Space</h1>
          <div className="accent-line" />
          <p className="hero-desc">
            Handcrafted pieces, built to last. We create timeless, made-to-order furniture designed around your lifestyle and space.
          </p>
          <div className="hero-actions">
            <a className="btn btn-filled" href="tel:+923150414596">Request A Quote</a>
            <a className="btn btn-outline" href="#projects">View Projects</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/hero-dining.png" alt="Bespoke Dining Setting Showcase" className="placeholder-svg" />
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="collections-section" id="collections">
      <div className="container">
        <div className="section-header">
          <span className="small-label">Signature Pieces</span>
          <h2 className="section-heading">Crafted. Timeless. Yours.</h2>
        </div>
        <div className="collections-grid">
          {collections.map((item) => (
            <article className="collection-card" key={item.title}>
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.alt} className="placeholder-svg" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <span className="card-subtitle">Made to order</span>
              <div className="accent-line card-line" />
            </article>
          ))}
        </div>
        <a href="#collections" className="view-all-link">View All Collections <ArrowIcon /></a>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section" id="our-process">
      <div className="container">
        <div className="process-layout">
          <div className="process-left">
            <span className="small-label">Our Process</span>
            <h2 className="section-heading process-heading">Built Around You, Step by Step.</h2>
          </div>
          <div className="process-right">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="step-num">{step.number}</div>
                <div className="step-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {step.icon}
                  </svg>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section className="materials-section" id="custom-furniture">
      <div className="materials-left">
        <img src="/craftsman.png" alt="Premium Hardwood Joinery Detail" className="placeholder-svg" />
      </div>
      <div className="materials-right">
        <span className="small-label">Crafted With Integrity</span>
        <h2 className="section-heading materials-heading">Materials That Matter. Craftsmanship That Lasts.</h2>
        <p className="materials-desc">
          We use premium solid wood, natural finishes and traditional joinery techniques to create furniture that stands the test of time. Every detail is made by hand, with care.
        </p>
        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-item" key={feature.title}>
              <div className="feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {feature.icon}
                </svg>
              </div>
              <div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="small-label muted-label">Recent Projects</span>
          <h2 className="section-heading">Spaces We&apos;ve Crafted</h2>
        </div>
        <div className="projects-gallery">
          {projects.map((project) => (
            <div className="gallery-item" key={project.alt}>
              <img src={project.image} alt={project.alt} className="placeholder-svg" />
            </div>
          ))}
        </div>
        <a href="#projects" className="view-all-link">View All Projects <ArrowIcon /></a>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="container cta-section">
      <div className="dark-cta-banner">
        <div className="dark-cta-left">
          <img src="/whole-room.png" alt="Custom Bespoke Living Space Design" className="placeholder-svg" />
        </div>
        <div className="dark-cta-right">
          <span className="small-label">Limited Slots Each Month</span>
          <h2>Let&apos;s Create Something Extraordinary Together.</h2>
          <p>
            We take on a limited number of custom projects each month to ensure the highest level of attention and quality.
          </p>
          <a href="tel:+923150414596" className="btn">Start Your Custom Order</a>
        </div>
      </div>
    </section>
  );
}



export default function Home() {
  return (
    <main>
      <Hero />
      <Collections />
      <Process />
      <Materials />
      <Projects />
      <CtaBanner />
    </main>
  );
}
