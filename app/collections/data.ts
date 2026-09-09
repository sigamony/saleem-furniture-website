export interface CommissionProject {
  title: string;
  scope: string;
  description: string;
  dimensions: string;
  materials: string[];
  features: string[];
  image: string;
}

export interface Subcategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  craftsmanship: string;
  projects: CommissionProject[];
}

export interface Category {
  slug: string;
  title: string;
  quote: string;
  description: string;
  heroImage: string;
  subcategories: Record<string, Subcategory>;
}

export const collectionsData: Record<string, Category> = {
  "living-room": {
    slug: "living-room",
    title: "Living Room Portfolio",
    quote: "Bespoke lounging foundations, tailored around space, comfort, and architectural tone.",
    heroImage: "/living-room.png",
    description: "Our living room commissions showcase custom solutions for premium seating, entertainment storage, and centerpieces, built from select hardwoods and tailored to the unique dimensions of each home.",
    subcategories: {
      sofas: {
        slug: "sofas",
        title: "Custom Sofas",
        tagline: "Architectural proportions. Tailored seating depth.",
        description: "Bespoke sofas handcrafted with mortise-and-tenon solid wood subframes, custom comfort-density cores, and upholstered in premium organic linens or aniline leathers.",
        craftsmanship: "Each sofa begins with a bespoke interior frame made of kiln-dried ash wood with steel corner brackets. We tailor the cushion densities, seating depth, and back inclination to the commissioner's height and seating preference.",
        projects: [
          {
            title: "The Linear Sofa",
            scope: "Private Residence, Lahore",
            description: "Commissioned for a modernist open-plan living room. The client requested a low-profile aesthetic with an extra-deep seat and an exposed American Walnut base wrapping the perimeter.",
            dimensions: "W 260cm x D 110cm x H 70cm",
            materials: ["Solid American Walnut Base", "Belgian Oatmeal Linen", "Down Feather Wrapped Foam Core"],
            features: ["Extra-deep 110cm lounge seating", "Flush timber joinery borders"],
            image: "/living-room.png"
          },
          {
            title: "Avenue Sectional",
            scope: "Penthouse Suite, Karachi",
            description: "A large modular sectional designed to act as a soft partition between the dining and living spaces. Built with modular blocks that can be separated or linked via hidden brass brackets.",
            dimensions: "W 340cm x D 220cm x H 72cm",
            materials: ["Solid Ash Frame", "Sand-toned Bouclé Fabric", "Custom Brass Accent Legs"],
            options: [],
            features: ["Interlocking modular connection system", "Raised frame height for robot-vacuum clearance"],
            image: "/whole-room.png"
          },
          {
            title: "Heritage Chesterfield",
            scope: "Traditional Manor Library, Islamabad",
            description: "A modern, slightly deeper reinterpretation of the English Chesterfield. Hand-tufted leather panels wrapping around the arms and back with traditional copper stud detailing.",
            dimensions: "W 230cm x D 95cm x H 76cm",
            materials: ["Full-Aniline Italian Leather (Cognac)", "Solid Oak Bun Feet", "Hand-tied Steel Coil Springs"],
            features: ["Hand-folded deep tufting on backrest", "Double-doweled solid oak internal frame"],
            image: "/lounge-chair.png"
          }
        ]
      },
      chair: {
        slug: "chair",
        title: "Lounge Chairs",
        tagline: "Sculptural forms. Ergonomic accents.",
        description: "One-of-a-kind statement seating sculpted from solid wood boards, shaped by hand to create flowing, organic joinery details.",
        craftsmanship: "We sculpt backrests and armrests out of thick timber slabs using hand planes and spokeshaves, ensuring all grain runs continuously across joints.",
        projects: [
          {
            title: "Saddle Lounge Chair",
            scope: "Architect's Studio, Lahore",
            description: "Commissioned as an accent chair. It features a heavy-gauge harness leather seat slung across a hand-sculpted solid Walnut frame with structural dowel joints.",
            dimensions: "W 82cm x D 86cm x H 75cm",
            materials: ["Select American Walnut", "Vegetable-Tanned Saddle Leather"],
            features: ["Suspension leather sling construction", "Angled leg joints for structural tension"],
            image: "/lounge-chair.png"
          },
          {
            title: "Solitude Shearling Easy Chair",
            scope: "Private Residence, Islamabad",
            description: "Designed for a cozy reading nook. Features a curved backrest that cradles the user, upholstered in extremely soft natural sheepskin shearling.",
            dimensions: "W 78cm x D 82cm x H 80cm",
            materials: ["Ebonized White Ash Legs", "Organic Australian Shearling"],
            features: ["Custom curvature tailored to client's lumbar height", "Open timber leg joinery"],
            image: "/lounge-chair.png"
          }
        ]
      },
      tables: {
        slug: "tables",
        title: "Coffee & Side Tables",
        tagline: "Matched-grain tops. Hand-carved support structures.",
        description: "Custom coffee tables, plinths, and side tables created to highlight unique grain features and live edges.",
        craftsmanship: "We select wood boards from the same tree log (bookmatching) so that the tabletop grain forms a symmetric, continuous flow across the wood joints.",
        projects: [
          {
            title: "Monolith Coffee Table",
            scope: "Urban Apartment, Islamabad",
            description: "A low-slung, solid wood block table with soft rounded edges, highlighting the raw grain patterns of bleached Oak.",
            dimensions: "W 140cm x D 80cm x H 34cm",
            materials: ["Solid White Oak", "Natural Hardwax Oil Finish"],
            features: ["Concealed leveling feet", "Bookmatched timber alignment"],
            image: "/dining-table.png"
          },
          {
            title: "Cascade Nesting Plinths",
            scope: "Living Room, Karachi",
            description: "A pair of staggered geometric side tables featuring waterfall mitered corners that make the timber appear to drape down to the floor.",
            dimensions: "Table 1: W 45cm x H 55cm | Table 2: W 38cm x H 48cm",
            materials: ["Solid American Walnut"],
            features: ["45-degree grain-matched miter joints"],
            image: "/console-project.png"
          }
        ]
      },
      consoles: {
        slug: "consoles",
        title: "Media Consoles & Credenzas",
        tagline: "Concealed AV integration. Slatted timber fronts.",
        description: "Bespoke media cabinetry and sideboard credenzas built to store equipment with custom cable management routes and active ventilation.",
        craftsmanship: "Doors are grain-matched across the console front. Sliding slats are individually hand-aligned to ensure a smooth, seamless slide with perfectly hidden joins.",
        projects: [
          {
            title: "Slatted Walnut Console",
            scope: "Modernist Villa, Lahore",
            description: "Commissioned to house a high-end audio setup. Features sliding hand-slatted doors that allow infrared remote signals to pass through while hiding the equipment.",
            dimensions: "W 210cm x D 48cm x H 52cm",
            materials: ["Solid American Walnut", "Brass Door Rails", "Silent Soft-Close Hinges"],
            features: ["Recessed back panel for flush wall mounting", "AV cord ventilation patterns"],
            image: "/media-console.png"
          },
          {
            title: "Gallery Travertine Credenza",
            scope: "Dining-Living Transition, Islamabad",
            description: "A storage credenza serving as a display buffet. Features four bookmatched oak doors and a top surface inlaid with custom-polished raw travertine stone.",
            dimensions: "W 180cm x D 45cm x H 76cm",
            materials: ["Solid White Oak", "Italian Travertine Inlay"],
            features: ["Adjustable interior drawer height", "Hidden push-to-open door latches"],
            image: "/console-project.png"
          }
        ]
      },
      ottomans: {
        slug: "ottomans",
        title: "Ottomans & Benches",
        tagline: "Multifunctional loungers. Custom tufting.",
        description: "Versatile benches and leather-bound poufs crafted to serve as footrests, casual seating, or low display tables.",
        craftsmanship: "Benches utilize traditional webbing or hand-tufting, supported by custom-lathed hardwood legs matching the primary room furniture.",
        projects: [
          {
            title: "Plinth Tufted Leather Ottoman",
            scope: "Private Den, Karachi",
            description: "A large square ottoman upholstered in hand-burnished cognac leather, serving as a central coffee table when paired with wood trays.",
            dimensions: "W 100cm x D 100cm x H 40cm",
            materials: ["Aniline Cognac Leather", "Ebonized Oak Base Platform"],
            features: ["Deep diamond button tufting", "Stitched leather panels"],
            image: "/lounge-chair.png"
          }
        ]
      }
    }
  },
  bedroom: {
    slug: "bedroom",
    title: "Bedroom Portfolio",
    quote: "Serene bedroom sanctuaries, designed for absolute rest and visual quietness.",
    heroImage: "/bed-frames.png",
    description: "Our bedroom portfolio showcases custom-built floating bedframes, integrated bedside tables, and matched wardrobes that remove visual noise from your resting space.",
    subcategories: {
      "double-beds": {
        slug: "double-beds",
        title: "Double & King Beds",
        tagline: "Interlocking joint frames. Zero squeaking.",
        description: "Floating bed frames and canopy beds constructed with heavy solid wood timbers and locked together using traditional timber joints rather than metal screws.",
        craftsmanship: "We use custom mortise-and-tenon frame connections that tighten under the mattress's weight, completely eliminating the loose joints that cause squeaking over time.",
        projects: [
          {
            title: "Linear Floating Bed",
            scope: "Master Bedroom, Lahore",
            description: "Designed to create a sense of floating weightlessness. The frame's recessed base is hidden from view, paired with an extra-wide headboard that houses integrated power strips and bedside ledges.",
            dimensions: "King Frame: W 220cm x L 240cm x H 88cm (Headboard)",
            materials: ["Solid American Walnut", "Danish Oil Finish"],
            features: ["Floating platform design", "Integrated dimmable LED backlighting"],
            image: "/bed-frames.png"
          },
          {
            title: "Upholstered Haven Bed",
            scope: "Private Residence, Islamabad",
            description: "A comforting bed frame fully wrapped in premium textured bouclé. Features a heavily padded, angled headboard designed for comfortable reading in bed.",
            dimensions: "King Frame: W 215cm x L 245cm x H 105cm",
            materials: ["Solid Birch Frame", "Textured Oatmeal Bouclé Upholstery"],
            features: ["Fully removable slipcover shell for easy cleaning", "Hand-stitched perimeter seams"],
            image: "/bedroom-project.png"
          }
        ]
      },
      "single-beds": {
        slug: "single-beds",
        title: "Single & Daybeds",
        tagline: "Versatile layouts. Underbed storage.",
        description: "Compact daybed frames and single beds designed for children's quarters, guest suites, or studio layouts.",
        craftsmanship: "Built to the same rigorous joinery standards as our master beds, featuring durable wood selections and optional flush-drawer integrations.",
        projects: [
          {
            title: "Minimalist Daybed Frame",
            scope: "Guest Cottage, Islamabad",
            description: "A clean daybed frame that serves as a living bench during the day and a single mattress bed at night, featuring a slatted spindle backrest.",
            dimensions: "W 200cm x D 100cm x H 45cm",
            materials: ["Solid Ash Wood", "Natural Oil Finish"],
            features: ["Removable back cushion support bolster"],
            image: "/bed-frames.png"
          }
        ]
      },
      "bedside-tables": {
        slug: "bedside-tables",
        title: "Bedside Tables",
        tagline: "Silent drawer slides. Concealed wire paths.",
        description: "Wall-floating and standing bedside tables designed with soft-close drawers and routing pathways to hide charging cables.",
        craftsmanship: "Drawers are assembled using hand-cut English dovetails. We utilize high-quality under-mount drawer glides that close in absolute silence.",
        projects: [
          {
            title: "Floating Drawer Nightstand",
            scope: "Master Suite, Lahore",
            description: "A pair of minimal, wall-floating nightstands. Features a single soft-close drawer with an open book shelf underneath.",
            dimensions: "W 50cm x D 36cm x H 22cm",
            materials: ["Solid American Walnut"],
            features: ["Concealed wall bracket mounting", "Hidden cord outlet routing"],
            image: "/console-project.png"
          },
          {
            title: "Two-Drawer Classic Nightstand",
            scope: "Private Residence, Karachi",
            description: "A standing bedside unit featuring two deep drawers and hand-carved finger pulls running across the wood grain.",
            dimensions: "W 55cm x D 40cm x H 50cm",
            materials: ["Solid White Oak", "Polished Brass Foot Caps"],
            features: ["Matched grain front face", "Solid cedar drawer interiors"],
            image: "/console-project.png"
          }
        ]
      },
      "dressing-tables": {
        slug: "dressing-tables",
        title: "Dressing Tables",
        tagline: "Morning ritual stations. Soft felt drawers.",
        description: "Custom vanity desks featuring storage compartments for personal cosmetics, adjustable mirrors, and accompanying upholstered stools.",
        craftsmanship: "We customize internal drawer dividers with wood partitions and felt pads to protect jewelry and makeup containers.",
        projects: [
          {
            title: "Aura Vanity Table",
            scope: "Dressing Room, Lahore",
            description: "A sleek white ash dressing table with a circular mirror. Features three hidden drawers that slide open to reveal velvet organizing slots.",
            dimensions: "W 120cm x D 50cm x H 75cm",
            materials: ["Solid White Ash", "Warm Gray Velvet Drawer Linings"],
            features: ["Integrated circular vanity mirror", "Custom drawer partition layout"],
            image: "/console-project.png"
          }
        ]
      },
      "wall-mirrors": {
        slug: "wall-mirrors",
        title: "Wall Mirrors",
        tagline: "Solid wood turning. True-reflection glass.",
        description: "Hand-framed wall and floor mirrors designed to add warmth and light to entryways and dressing spaces.",
        craftsmanship: "Frames are steam-bent or hand-turned from thick timber segments. We use double-thick silver glass to ensure zero warp or reflection distortion.",
        projects: [
          {
            title: "Arched Floor Mirror",
            scope: "Walk-in Closet, Islamabad",
            description: "A tall, arched floor mirror resting against the wall. Framed in solid oak with anti-slip rubber padding on the bottom base.",
            dimensions: "W 85cm x D 4cm x H 210cm",
            materials: ["Solid White Oak Frame", "Distortion-Free Mirror Glass"],
            features: ["Rear safety wall anchors", "Eased edge timber frame profiles"],
            image: "/bedroom-project.png"
          }
        ]
      },
      "chester-drawers": {
        slug: "chester-drawers",
        title: "Chester Drawers",
        tagline: "Grain-matched fronts. Dovetailed tallboys.",
        description: "Dresser consoles and vertical drawer tallboys built to maximize storage space while keeping drawer faces in perfect grain alignment.",
        craftsmanship: "We cut all drawer fronts sequentially from a single wood block, making the natural pattern flow unbroken from top to bottom.",
        projects: [
          {
            title: "5-Drawer Tallboy Dresser",
            scope: "Bedroom, Lahore",
            description: "A vertical dresser built to optimize floor area. Features matched Walnut grain faces and hand-stitched leather pull handles.",
            dimensions: "W 75cm x D 46cm x H 130cm",
            materials: ["Solid American Walnut", "Vegetable-Tanned Leather Pulls"],
            features: ["Sequential grain-matched wood front", "Heavy-duty full extension glides"],
            image: "/console-project.png"
          }
        ]
      },
      wardrobes: {
        slug: "wardrobes",
        title: "Wardrobes & Armoires",
        tagline: "Aromatic cedar interiors. Sensor lighting.",
        description: "Built-in and freestanding wardrobe cabinetry, designed with custom internal layouts, clothing rods, and drawer drawers.",
        craftsmanship: "We line wardrobe interiors with natural cedarwood to scent clothes and repel pests, and integrate concealed motion-activated lighting.",
        projects: [
          {
            title: "Cedar-Lined Double Armoire",
            scope: "Dressing Room, Karachi",
            description: "A massive freestanding wardrobe featuring sliding oak doors, solid brass hanging rails, and aromatic cedar shelving.",
            dimensions: "W 160cm x D 62cm x H 215cm",
            materials: ["Solid White Oak", "Aromatic Cedar lining", "Solid Brass Rods"],
            features: ["Automatic interior LED strip lights", "Soft-close sliding door mechanism"],
            image: "/bedroom-project.png"
          }
        ]
      },
      "end-of-bed-bench": {
        slug: "end-of-bed-bench",
        title: "End-of-Bed Benches",
        tagline: "Woven seating accents. Double-mortise stability.",
        description: "Elegant seating benches styled to sit at the foot of bed frames, utilizing woven leather, cane, or tailored fabrics.",
        craftsmanship: "Frames are built with reinforced double-mortise joints to withstand high lateral weight without loosening over years.",
        projects: [
          {
            title: "Cane & Oak Bench",
            scope: "Bedroom Suite, Islamabad",
            description: "A low bench featuring hand-woven natural rattan cane webbing stretched tightly over a solid white oak frame.",
            dimensions: "W 140cm x D 40cm x H 44cm",
            materials: ["Solid White Oak", "Natural Rattan Cane"],
            features: ["Double-mortise joinery joints", "Hand-bent rounded corner profiles"],
            image: "/bed-frames.png"
          }
        ]
      }
    }
  },
  dining: {
    slug: "dining",
    title: "Dining Portfolio",
    quote: "Heirloom dining centerpieces, crafted to anchor family gatherings for generations.",
    heroImage: "/dining-room.png",
    description: "Our dining portfolio showcases custom solid slab tables, sculpted dining chairs, and matching buffets built to celebrate the art of culinary gathering.",
    subcategories: {
      "dining-room-sets": {
        slug: "dining-room-sets",
        title: "Curated Dining Suites",
        tagline: "Coordinated table & chairs ensembles.",
        description: "Cohesive dining settings featuring matched table finishes and chairs styled to create a balanced interior.",
        craftsmanship: "We build the table and chairs together from the same batch of timber, matching color tones and grain density across the entire set.",
        projects: [
          {
            title: "The Heritage Dining Suite",
            scope: "Private Dining Hall, Lahore",
            description: "A full dining room commission. Features a 10-seater Monolith Table built from highly figured Walnut slabs, paired with 8 matching Sculpted Wishbone Chairs.",
            dimensions: "Table: W 280cm x D 110cm x H 75cm",
            materials: ["Highly Figured American Walnut", "Woven Paper Cord Seats"],
            features: ["Full set color coordination", "Extra-long tabletop construction"],
            image: "/dining-room.png"
          }
        ]
      },
      "dining-room-tables": {
        slug: "dining-room-tables",
        title: "Dining Tables",
        tagline: "2-inch thick solid slabs. Steel tension bars.",
        description: "Heirloom dining tables built from heavy solid wood slabs, fitted with internal structural supports to allow wood expansion.",
        craftsmanship: "Table slabs are reinforced with heavy steel C-channels recessed underneath. This allows the massive timber to expand and contract across seasons without bowing.",
        projects: [
          {
            title: "Monolith Dining Table",
            scope: "Modernist Villa, Lahore",
            description: "A substantial, block-legged dining table featuring clean eased edges and a seamless 2-inch thick top slab.",
            dimensions: "W 220cm x D 100cm x H 75cm",
            materials: ["Solid American Walnut", "Matte Hardwax Finish"],
            features: ["Concealed anti-warp steel channels", "Structural mortise-and-tenon legs"],
            image: "/dining-table.png"
          },
          {
            title: "Trestle Extension Table",
            scope: "Family Residence, Islamabad",
            description: "An extending dining table incorporating an internal butterfly leaf system, allowing the table to expand to host 12 guests.",
            dimensions: "W 180cm (extends to 240cm) x D 95cm x H 75cm",
            materials: ["Solid White Oak", "German Brass Track Slides"],
            features: ["Concealed butterfly expansion leaf", "Synchronized steel gear runners"],
            image: "/dining-table.png"
          }
        ]
      },
      "dining-room-consoles": {
        slug: "dining-room-consoles",
        title: "Dining Sideboards",
        tagline: "Tableware storage drawers. Serving buffets.",
        description: "Sideboard storage buffets built at serving height, containing custom drawers for cutlery and wine storage.",
        craftsmanship: "Cabinet tops are reinforced to support heavy serving trays. Drawers are lined with premium fabrics and partitioned to fit silverware.",
        projects: [
          {
            title: "Buffet Sideboard Credenza",
            scope: "Private Residence, Karachi",
            description: "A four-door dining sideboard. Features soft-closing drawers lined with deep green velvet to store heirloom silver cutlery.",
            dimensions: "W 180cm x D 46cm x H 78cm",
            materials: ["Solid American Walnut", "Velvet Drawer Liners"],
            features: ["Adjustable internal dish racks", "Concealed magnetic door latches"],
            image: "/console-project.png"
          }
        ]
      },
      "dining-room-chairs": {
        slug: "dining-room-chairs",
        title: "Dining Chairs",
        tagline: "Hand-woven cord seats. Double-doweled joints.",
        description: "Ergonomic, supportive dining chairs shaped out of solid wood with woven paper cord or leather seats.",
        craftsmanship: "We angle backrest spindles to support natural lumbar curvature and hand-weave seats using high-strength paper cord.",
        projects: [
          {
            title: "Sculpted Wishbone Chair",
            scope: "Private Residence, Lahore",
            description: "A classic dining chair with a steam-bent curved back rail and a hand-woven natural organic paper cord seat.",
            dimensions: "W 55cm x D 52cm x H 76cm",
            materials: ["Solid White Ash", "Natural Danish Paper Cord"],
            features: ["Steam-bent timber frame backrest", "120 meters of hand-woven seat cord"],
            image: "/lounge-chair.png"
          }
        ]
      },
      "dining-room-storage": {
        slug: "dining-room-storage",
        title: "Display Cabinets & Wine Storage",
        tagline: "Tempered glass doors. Dimmable LED rails.",
        description: "Glass-front cabinets and wine credenzas designed to display fine china and glassware with integrated, hidden lighting.",
        craftsmanship: "Cabinets feature dust-proof magnetic seals, tempered glass panels, and touch-sensitive dimming lights routed into the wood frame.",
        projects: [
          {
            title: "Glass Display China Cabinet",
            scope: "Dining Room, Lahore",
            description: "A tall display cabinet with thin-profile wooden frames, tempered glass panels, and routed dimmable LED lighting.",
            dimensions: "W 100cm x D 40cm x H 190cm",
            materials: ["Solid American Walnut", "Tempered Safety Glass"],
            features: ["Concealed warm-toned LED light tracks", "Touch-dimmer control hinge"],
            image: "/dining-room.png"
          }
        ]
      }
    }
  }
};
