export const site = {
  name: "Halcyon MH LTD",
  shortName: "Halcyon MH",
  tagline: "Official Linde dealer in Ghana",
  email: "info@halcyonmhgh.com",
  phones: [
    { label: "Sales", display: "+233 50 955 4433", href: "tel:+233509554433" },
    { label: "Office", display: "+233 30 398 3142", href: "tel:+233303983142" },
  ],
  whatsapp: {
    display: "+233 50 955 4433",
    href: "https://wa.me/233509554433",
    number: "233509554433",
  },
  address: "D1 Zander Road, off Zebra Link, Community 18, Tema, Ghana",
  mapQuery: "D1 Zander Road Community 18 Tema Ghana",
  hours: {
    office: "Mon–Fri, 08:00–17:00 GMT",
    showroom: "Mon–Fri, 08:00–19:00 · Sat 09:00–17:00 GMT",
  },
  established: 2010,
};

export const nav = [
  { href: "/products", label: "Equipment" },
  { href: "/services", label: "Service" },
  { href: "/parts", label: "Parts" },
  { href: "/rentals", label: "Rentals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const partners = [
  {
    name: "Linde Material Handling",
    role: "Sole dealer, Ghana",
    note: "Forklifts, warehouse trucks and automated systems",
  },
  {
    name: "Magni Telehandlers",
    role: "Authorised partner",
    note: "Rotating and fixed telescopic handlers",
  },
  {
    name: "TVH Belgium",
    role: "Parts network",
    note: "Europe’s largest aftermarket parts specialist",
  },
];

export const pillars = [
  {
    index: "01",
    title: "Productivity",
    body: "Efficient trucks, intelligent software and complete service packages that keep intra-company logistics moving — and give operators a lasting competitive edge.",
  },
  {
    index: "02",
    title: "Safety",
    body: "Halcyon’s Zero Accident Philosophy covers people, operators, trucks and goods. Integrated Linde solutions make Ghanaian warehouses and yards safer.",
  },
  {
    index: "03",
    title: "Ergonomics",
    body: "The best results come when people and machines work together. Ergonomic design is built into every Linde truck and every Halcyon service we deliver.",
  },
];

export const services = [
  {
    slug: "maintenance",
    title: "Maintenance & repairs",
    body: "Factory-trained technicians keep Linde and Magni equipment on the move with maximum uptime across the life of the truck.",
  },
  {
    slug: "parts",
    title: "OEM spare parts",
    body: "Nationwide parts delivery around the clock — in most cases, the following day. Genuine Linde parts plus the TVH catalogue.",
  },
  {
    slug: "rentals",
    title: "Short & long-term rental",
    body: "Cover peaks, breakdowns and project work without capital spend. Forklifts and pallet trucks ready from Tema.",
  },
  {
    slug: "operators",
    title: "Operation enhancement",
    body: "Qualified operators and technicians deployed into your warehouse so throughput does not wait on hiring.",
  },
  {
    slug: "safety",
    title: "Technical & safety services",
    body: "Statutory checks for industrial trucks and racking, plus intralogistics consulting that reduces risk and cost.",
  },
  {
    slug: "training",
    title: "Operator training",
    body: "Linde training programmes produce safer, smoother operation and protect both people and your investment.",
  },
  {
    slug: "retrofit",
    title: "Retrofit & accessories",
    body: "Upgrade existing trucks to current safety and efficiency standards — BlueSpot, cameras, lithium-ion and more.",
  },
  {
    slug: "sales",
    title: "New equipment sales",
    body: "Halcyon MH is the sole Linde forklift dealer in Ghana, with Magni telehandlers for construction and industrial sites.",
  },
];

export type Product = {
  slug: string;
  model: string;
  category: string;
  categorySlug: string;
  tagline: string;
  summary: string;
  capacity: string;
  lift: string;
  power: string;
  highlights: string[];
  image: string;
};

export const scenes = {
  hero: "/images/hero-warehouse.png",
  workshop: "/images/scene-workshop.png",
  parts: "/images/scene-parts.png",
  port: "/images/scene-port.png",
};

export const categories = [
  {
    slug: "e-trucks",
    title: "Electric forklifts",
    range: "1.0 – 18.0 t",
    body: "Precision, agility and low running cost for indoor and mixed-duty work. Lead-acid or lithium-ion.",
    image: "/images/eq-e20.png",
  },
  {
    slug: "ic-trucks",
    title: "IC trucks",
    range: "1.4 – 18.0 t",
    body: "Diesel and LPG endurance machines for yards, ports and multi-shift outdoor work.",
    image: "/images/eq-h20.png",
  },
  {
    slug: "reach-trucks",
    title: "Reach trucks",
    range: "Up to 14.9 m",
    body: "High-rack specialists built for confined aisles and high residual capacity.",
    image: "/images/eq-r10.png",
  },
  {
    slug: "pallet-trucks",
    title: "Pallet trucks & stackers",
    range: "0.5 – 3.3 t",
    body: "Agile low-level transport and stacking for docks, trailers and tight warehouses.",
    image: "/images/eq-mt15.png",
  },
  {
    slug: "narrow-aisle",
    title: "Very narrow aisle",
    range: "Up to 18.1 m",
    body: "Turret trucks and man-up order pickers for maximum density and throughput.",
    image: "/images/eq-k.png",
  },
  {
    slug: "tow-tractors",
    title: "Tow tractors & platforms",
    range: "Line-haul inside",
    body: "Efficient horizontal transport in narrow aisles, ramps and uneven yards.",
    image: "/images/eq-p120.png",
  },
  {
    slug: "automated",
    title: "Automated trucks",
    range: "MATIC range",
    body: "Infrastructure-light AGVs that work alongside people and connect to WMS/ERP.",
    image: "/images/eq-pmatic.png",
  },
  {
    slug: "telehandlers",
    title: "Magni telehandlers",
    range: "Site & industry",
    body: "Rotating and fixed telescopic handlers for construction, mining and heavy industry.",
    image: "/images/eq-magni.png",
  },
];

export const products: Product[] = [
  {
    slug: "e20-e35",
    model: "E20 – E35",
    category: "Electric forklifts",
    categorySlug: "e-trucks",
    tagline: "The indoor workhorse",
    summary:
      "Linde’s compact-axle electric trucks combine dual-motor drive, dual-pedal control and fingertip load handling. Built for Ghanaian warehouses that need precision without diesel fumes.",
    capacity: "2.0 – 3.5 t",
    lift: "Up to 7,780 mm",
    power: "80 V electric · lead-acid or Li-ion",
    highlights: [
      "Maintenance-free compact axle with two independent wheel motors",
      "Linde Load Control and dual-pedal travel",
      "Protector Frame driver safety zone",
      "Optional Linde Safety Pilot assistance",
    ],
    image:
      "/images/eq-e20.png",
  },
  {
    slug: "e12-e20-evo",
    model: "E12 – E20 EVO",
    category: "Electric forklifts",
    categorySlug: "e-trucks",
    tagline: "Three-wheel manoeuvrability",
    summary:
      "Maximum agility in the tightest aisles. Opposite-direction wheel roll on steering, energy-saving drive and individually adjustable dynamics.",
    capacity: "1.2 – 2.0 t",
    lift: "Up to 6,475 mm",
    power: "Electric · three-wheel",
    highlights: [
      "Turns in the smallest spaces",
      "Protects tyres and flooring",
      "Linde Load Control with two-motor front drive",
      "Adjustable driving dynamics",
    ],
    image:
      "/images/eq-e12.png",
  },
  {
    slug: "e60-e80",
    model: "E60 – E80",
    category: "Electric forklifts",
    categorySlug: "e-trucks",
    tagline: "Heavy electric capacity",
    summary:
      "When loads get serious indoors. Automatic curve speed, precise dual-pedal control and fingertip hydraulics up to eight tonnes.",
    capacity: "6.0 – 8.0 t",
    lift: "Up to 8,670 mm",
    power: "High-capacity electric",
    highlights: [
      "Automatic speed adjustment in curves",
      "Coordinated drive and control system",
      "Individually adaptable driving dynamics",
      "Quiet heavy-load handling",
    ],
    image:
      "/images/eq-e60.png",
  },
  {
    slug: "e100-e180",
    model: "E100 – E180",
    category: "Electric forklifts",
    categorySlug: "e-trucks",
    tagline: "Electric heavyweights",
    summary:
      "Electric trucks for loads from 10 to 18 tonnes — ports, steel and manufacturing that want diesel performance without the exhaust.",
    capacity: "10.0 – 18.0 t",
    lift: "Up to 7,000 mm",
    power: "Lead-acid or lithium-ion",
    highlights: [
      "Flexible adaptation to any application",
      "Choice of lead-acid or Li-ion",
      "Cost-efficient variants for lighter duty",
      "Dynamic driving performance",
    ],
    image:
      "/images/eq-e100.png",
  },
  {
    slug: "x20-x35",
    model: "X20 – X35",
    category: "Electric forklifts",
    categorySlug: "e-trucks",
    tagline: "Hydrostatic electric",
    summary:
      "The X range brings hydrostatic DNA into an electric truck: all-round cabin visibility, Curve Assist and Load Assist for outdoor-grade work on electric power.",
    capacity: "2.0 – 3.5 t",
    lift: "Up to 7,780 mm",
    power: "Electric hydrostatic",
    highlights: [
      "All-round view from the driver’s cabin",
      "Linde Curve Assist prevents tipping in turns",
      "Linde Load Assist protects against tip-over",
      "Outdoor-capable electric performance",
    ],
    image:
      "/images/eq-x20.png",
  },
  {
    slug: "h20-h35",
    model: "H20 – H35",
    category: "IC trucks",
    categorySlug: "ic-trucks",
    tagline: "The endurance runner",
    summary:
      "Operators praise the air-conditioning, seat ventilation, fast hydraulics and handling. Hydrostatic drive and dual-pedal control for multi-shift yards and the harshest outdoor duty.",
    capacity: "2.0 – 3.5 t",
    lift: "Up to 7,780 mm",
    power: "Diesel / LPG / CNG",
    highlights: [
      "Hydrostatic drive designed with Porsche Engineering",
      "Efficient air-conditioning and seat ventilation",
      "Meets latest exhaust emission standards",
      "Wireless-ready for fleet management",
    ],
    image:
      "/images/eq-h20.png",
  },
  {
    slug: "h14-h20-evo",
    model: "H14 – H20 EVO",
    category: "IC trucks",
    categorySlug: "ic-trucks",
    tagline: "Compact and robust",
    summary:
      "A compact endurance machine with exceptional residual capacity, dual-pedal control and outstanding manoeuvrability for mixed indoor-outdoor sites.",
    capacity: "1.4 – 2.0 t",
    lift: "Up to 9,655 mm",
    power: "Diesel or LPG",
    highlights: [
      "Powerful motors with fast hydraulics",
      "Extensive model range and special equipment",
      "High residual load capacity",
      "Robust components with optimum visibility",
    ],
    image:
      "/images/eq-h14.png",
  },
  {
    slug: "r10-r25",
    model: "R10 – R25",
    category: "Reach trucks",
    categorySlug: "reach-trucks",
    tagline: "High-rack specialist",
    summary:
      "Tailor-made for confined spaces and height. Powerful motors, dual-pedal control and high residual capacity for Ghanaian distribution centres.",
    capacity: "1.0 – 2.5 t",
    lift: "Up to 14,955 mm",
    power: "Electric",
    highlights: [
      "Outstanding manoeuvrability in racking",
      "High residual load capacity at height",
      "Extensive model range",
      "Optional automation-ready navigation",
    ],
    image:
      "/images/eq-r10.png",
  },
  {
    slug: "r20-r25f",
    model: "R20 – R25 F",
    category: "Reach trucks",
    categorySlug: "reach-trucks",
    tagline: "For bulky loads",
    summary:
      "Intuitive 360° control, adjustable prong distance and high lift/travel speeds — specifically for oversized loads that standard reach trucks struggle with.",
    capacity: "2.0 – 2.5 t",
    lift: "Up to 9,650 mm",
    power: "Electric",
    highlights: [
      "Intuitive 360° control",
      "Adjustable prong distance",
      "Load and lifting height display",
      "High handling performance",
    ],
    image:
      "/images/eq-r20f.png",
  },
  {
    slug: "mt15",
    model: "MT15",
    category: "Pallet trucks & stackers",
    categorySlug: "pallet-trucks",
    tagline: "Compact electric pallet truck",
    summary:
      "Only 180 kg, easy to manoeuvre, lithium-ion power. Built for retail backrooms, vans and the last metres of the supply chain.",
    capacity: "1.5 t",
    lift: "Low-level",
    power: "Li-ion 48 V 20–30 Ah",
    highlights: [
      "Compact chassis",
      "Light weight at 180 kg",
      "Lithium-ion battery",
      "Easy to manoeuvre",
    ],
    image:
      "/images/eq-mt15.png",
  },
  {
    slug: "hand-pallet-2-3t",
    model: "Hand pallet 2.0–3.0 t",
    category: "Pallet trucks & stackers",
    categorySlug: "pallet-trucks",
    tagline: "The everyday mover",
    summary:
      "Torsion-resistant steel construction for almost any load. Lead-in rollers under the fork tips make pallet entry across bottom deckboards simple.",
    capacity: "2.0 – 3.0 t",
    lift: "Pump lift",
    power: "Manual",
    highlights: [
      "Strong torsion-resistant steel frame",
      "Lead-in / lead-out rollers",
      "Unbeatable value in Ghana",
      "Always in stock at Tema",
    ],
    image:
      "/images/eq-hand.png",
  },
  {
    slug: "k-truck",
    model: "K — man-up",
    category: "Very narrow aisle",
    categorySlug: "narrow-aisle",
    tagline: "The combination truck for narrow aisles",
    summary:
      "Turret truck tailored for Ghanaian high-bay warehouses that need both picking and pallet put-away in the same aisle, with maximum safety at height.",
    capacity: "Up to 1.5 t",
    lift: "Up to 18,110 mm",
    power: "Electric VNA",
    highlights: [
      "High throughput in limited space",
      "Utmost safety during handling at height",
      "Combination picking and pallet handling",
      "Optional K-MATIC automation",
    ],
    image:
      "/images/eq-k.png",
  },
  {
    slug: "a-vna",
    model: "A — narrow pace setter",
    category: "Very narrow aisle",
    categorySlug: "narrow-aisle",
    tagline: "High-density throughput",
    summary:
      "Purpose-built for very narrow aisles with high handling performance and particularly safe processes even in limited space.",
    capacity: "Up to 1.5 t",
    lift: "Up to 12,850 mm",
    power: "Electric VNA",
    highlights: [
      "Designed for high-density racking",
      "High throughput rates",
      "Safe handling in limited space",
      "Linde driver assistance available",
    ],
    image:
      "/images/eq-a.png",
  },
  {
    slug: "p120-p350",
    model: "P120 – P350",
    category: "Tow tractors & platforms",
    categorySlug: "tow-tractors",
    tagline: "Horizontal transport",
    summary:
      "Powerful electric motors, a small turning circle and smooth steering. Short or long wheelbase, optional rear-view camera — efficient even on ramps and uneven surfaces.",
    capacity: "Platform up to 300 kg",
    lift: "Towing duty",
    power: "Electric",
    highlights: [
      "Powerful electric motors",
      "Small turning circle",
      "Smooth, precise steering",
      "Optional rear-view camera",
    ],
    image:
      "/images/eq-p120.png",
  },
  {
    slug: "lt10-lt20",
    model: "LT10 – LT20",
    category: "Tow tractors & platforms",
    categorySlug: "tow-tractors",
    tagline: "Logistic trains",
    summary:
      "Synchronised material transport over long distances on site. All-wheel steering, patented lifting profile and optional tugger-train guidance into digital processes.",
    capacity: "Up to 1.6 t per frame",
    lift: "Up to 60 mm",
    power: "Tugger train",
    highlights: [
      "All-wheel steering for tight circles",
      "Movable middle support for mixed goods",
      "Pallets without a rolling load carrier",
      "Optional digital tugger-train guidance",
    ],
    image:
      "/images/eq-lt10.png",
  },
  {
    slug: "p-matic",
    model: "P-MATIC",
    category: "Automated trucks",
    categorySlug: "automated",
    tagline: "Autonomous tow & transport",
    summary:
      "Navigation without extra infrastructure, easy switch to manual, and communication with automated facilities. The practical first step into warehouse automation.",
    capacity: "Up to 5.0 t",
    lift: "Towing / platform",
    power: "Automated electric",
    highlights: [
      "Centrally aligned steering",
      "Navigation without infrastructure",
      "Instant switch to manual",
      "Talks to automated facilities",
    ],
    image:
      "/images/eq-pmatic.png",
  },
  {
    slug: "k-matic",
    model: "K-MATIC",
    category: "Automated trucks",
    categorySlug: "automated",
    tagline: "Automated narrow aisle",
    summary:
      "Lasers, cameras and intelligent routing for pallet movements in VNA. Works safely alongside people and non-autonomous trucks, with a digital diagnostics tool.",
    capacity: "VNA automated",
    lift: "High-bay",
    power: "Automated electric",
    highlights: [
      "Combined laser and camera safety",
      "WMS / ERP interface",
      "Intelligent routing and task control",
      "Forward-looking servicing via wireless data",
    ],
    image:
      "/images/eq-kmatic.png",
  },
  {
    slug: "magni-telehandler",
    model: "Magni telehandlers",
    category: "Magni telehandlers",
    categorySlug: "telehandlers",
    tagline: "Reach beyond the fork",
    summary:
      "Halcyon is Ghana’s Magni partner for rotating and fixed telescopic handlers — construction, mining, industry and any site that needs lift and reach in one machine.",
    capacity: "Application-specific",
    lift: "Telescopic reach",
    power: "Diesel telehandler",
    highlights: [
      "Rotating and fixed boom models",
      "Construction, mining and industrial duty",
      "Backed by Halcyon service in Tema",
      "Attachments for lift, load and place",
    ],
    image:
      "/images/eq-magni.png",
  },
];

export const industries = [
  {
    title: "Ports & logistics",
    body: "Tema’s terminals, CFSs and 3PLs need uptime at the dock. Electric and IC trucks, plus next-day parts.",
  },
  {
    title: "Mining & aggregates",
    body: "Heavy IC trucks and Magni telehandlers for harsh outdoor sites across Ghana’s mining belt.",
  },
  {
    title: "FMCG & beverages",
    body: "High-throughput warehousing, reach trucks and pallet handling for Ghana’s fastest-moving brands.",
  },
  {
    title: "Manufacturing",
    body: "From line-side tugger trains to heavy electrics — equipment matched to the process, not a catalogue page.",
  },
  {
    title: "Construction",
    body: "Telehandlers, rough-terrain capability and rental fleets that appear when the programme says they must.",
  },
  {
    title: "Agriculture & export",
    body: "Cocoa, cashew and cold-chain exporters moving pallets cleanly from plant to container.",
  },
];

export const testimonials = [
  {
    quote:
      "Not only do the electric forklifts produce little pollution — cost savings have been substantial.",
    name: "Alan",
    role: "Operations",
  },
  {
    quote:
      "The price of Linde hand pallet trucks from Halcyon MH is unbeatable.",
    name: "Yawa",
    role: "Procurement",
  },
  {
    quote:
      "I am quite impressed with the variety of machine spare parts Halcyon MH has in stock.",
    name: "Ivan",
    role: "Maintenance",
  },
];

export const team = [
  { name: "Ernestine Addae", role: "Director" },
  { name: "Francis Adzogble", role: "Managing Director" },
  { name: "Lucy Adzogble", role: "Procurement Manager" },
  { name: "Bridget Adzogble", role: "Finance & Admin Manager" },
  { name: "Abraham Anel Addo", role: "Workshop Manager" },
];

export const stats = [
  { value: "2010", label: "Established in Tema" },
  { value: "Sole", label: "Linde dealer in Ghana" },
  { value: "24h", label: "Typical parts dispatch" },
  { value: "3", label: "Global OEM partners" },
];
