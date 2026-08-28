// Single source of truth for the Stock4 marketing site.
//
// Stock4 is one product sold as four trade-specific apps under one brand:
// Glazing, Building, Plumbing and Electrics. To the customer these read as four
// separate apps (each with its own name, colour, web host and App Store / Play
// listing). Brand facts (names, colours, web URLs, app ids) are lifted verbatim
// from the product's brand registry (ice/workflow → packages/core/src/theme/
// brands.ts and brands/<key>/brand.json) so the site and app stay in step.

export const site = {
  name: 'Stock4',
  company: 'iCentric Systems Ltd',
  studio: 'Harbour SW Development',
  tagline: 'Stock takes, ordering and stock control in one place.',
  email: 'support@icentricsystems.com',
  // The master brand host. Each trade app lives on its own subdomain (see trades).
  url: 'https://stock4.co.uk',
};

/** Icon names - each must exist in components/Icon.astro (vendored PrimeIcons,
 *  the same icon set used throughout the Stock4 app). */
export type IconName =
  | 'home'
  | 'box'
  | 'warehouse'
  | 'qrcode'
  | 'cart-plus'
  | 'shopping-cart'
  | 'tag'
  | 'chart-line'
  | 'chart-bar'
  | 'send'
  | 'truck'
  | 'briefcase'
  | 'users'
  | 'shield'
  | 'bell'
  | 'mobile'
  | 'sync'
  | 'sliders-h'
  | 'history'
  | 'table'
  | 'check-circle'
  | 'file-plus'
  | 'list-check'
  | 'pound'
  | 'building';

export type Trade = {
  key: string;
  /** URL slug for this trade's marketing page (e.g. "glazing" → /glazing/). */
  slug: string;
  /** Full app name as it appears on the store and in the app. */
  name: string;
  /** The trade word on its own, for compact chips/labels. */
  trade: string;
  /** Customer-facing label used in navigation (e.g. "Double Glazing"). */
  navLabel: string;
  /** Primary brand colour (from brands.ts colors.primary). Used for swatches. */
  accent: string;
  /** Darker shade (from brands.ts colors.primaryDark) - pressed states, deep fills. */
  accentDark: string;
  /** Text colour that sits legibly ON the accent fill - mirrors the app's
   *  onColor() rule: dark ink for the light gold brand, white otherwise. */
  onAccent: string;
  /** Accent used AS text on a white background. Falls back to accentDark for the
   *  light gold brand, whose primary is too pale to read on white. */
  accentText: string;
  /** Hero / CTA band gradient stops. Dark brands run primary→primaryDark under
   *  white text; the light gold brand runs highlight→primary under dark text. */
  heroFrom: string;
  heroTo: string;
  /** Canonical web app host. */
  webUrl: string;
  /** Native bundle id (from brand.json), shown as a subtle "on the stores" hint. */
  appId: string;
  /** App Store listing URL. Present once the app is live on iOS; absent → "coming soon". */
  appStore?: string;
  /** Google Play listing URL. Present once the app is live on Android; absent → "coming soon". */
  playStore?: string;
  /** One-line pitch tuned to the trade. */
  blurb: string;
  /** Wordmark under /public/logos. */
  logo: string;
  /** 1024px app icon under /public/logos. */
  icon: string;
};

/** The four apps. Order drives the trade grid on the homepage. */
export const trades: Trade[] = [
  {
    key: 'stock4glazing',
    slug: 'glazing',
    name: 'Stock4 Glazing',
    trade: 'Glazing',
    navLabel: 'Double Glazing',
    accent: '#0369a1',
    accentDark: '#082f49',
    onAccent: '#ffffff',
    accentText: '#0369a1',
    heroFrom: '#0369a1',
    heroTo: '#082f49',
    webUrl: 'https://glazing.stock4.co.uk',
    appId: 'com.icentric.stock4glazing',
    appStore: 'https://apps.apple.com/gb/app/stock4-glazing/id6782316730',
    playStore: 'https://play.google.com/store/apps/details?id=com.icentric.stock4glazing',
    blurb:
      'Track glass, units, hardware and sundries from the workshop to the van - stock takes, reorders and supplier pricing in one place.',
    logo: '/logos/stock4glazing-logo.svg',
    icon: '/logos/stock4glazing-icon.png',
  },
  {
    key: 'stock4building',
    slug: 'building',
    name: 'Stock4 Building',
    trade: 'Building',
    navLabel: 'Building',
    accent: '#c2410c',
    accentDark: '#431407',
    onAccent: '#ffffff',
    accentText: '#c2410c',
    heroFrom: '#c2410c',
    heroTo: '#431407',
    webUrl: 'https://building.stock4.co.uk',
    appId: 'com.icentric.stock4building',
    appStore: 'https://apps.apple.com/gb/app/stock4-building/id6800339924',
    playStore: 'https://play.google.com/store/apps/details?id=com.icentric.stock4building',
    blurb:
      'Keep materials, fixings and plant under control across sites and stores - count what you have, order what you need, know what it costs.',
    logo: '/logos/stock4building-logo.svg',
    icon: '/logos/stock4building-icon.png',
  },
  {
    key: 'stock4plumbing',
    slug: 'plumbing',
    name: 'Stock4 Plumbing',
    trade: 'Plumbing',
    navLabel: 'Plumbing',
    accent: '#0e9085',
    accentDark: '#042f2b',
    onAccent: '#ffffff',
    accentText: '#0e9085',
    heroFrom: '#0e9085',
    heroTo: '#042f2b',
    webUrl: 'https://plumbing.stock4.co.uk',
    appId: 'com.icentric.stock4plumbing',
    blurb:
      'Pipe, fittings, boilers and consumables - track van stock and workshop shelves, and reorder from the merchant before you run dry.',
    logo: '/logos/stock4plumbing-logo.svg',
    icon: '/logos/stock4plumbing-icon.png',
  },
  {
    key: 'stock4electrics',
    slug: 'electrics',
    name: 'Stock4 Electrics',
    trade: 'Electrics',
    navLabel: 'Electricians',
    accent: '#d89b0a',
    accentDark: '#7a5c02',
    onAccent: '#1f2937',
    accentText: '#7a5c02',
    heroFrom: '#facc15',
    heroTo: '#d89b0a',
    webUrl: 'https://electrics.stock4.co.uk',
    appId: 'com.icentric.stock4electrics',
    blurb:
      'Cable, containment, accessories and test gear - stock takes on the floor and in the van, with supplier prices compared side by side.',
    logo: '/logos/stock4electrics-logo.svg',
    icon: '/logos/stock4electrics-icon.png',
  },
];

/** A navigation entry: either a plain link (`href`) or a dropdown (`children`). */
export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { href: '/features/', label: 'Features' },
  { href: '/pricing/', label: 'Pricing' },
  {
    label: 'Trades',
    children: trades.map((t) => ({ label: t.navLabel, href: `/${t.slug}/` })),
  },
  { href: '/contact/', label: 'Contact' },
];

export type Feature = { icon: IconName; title: string; body: string };

/** The full feature grid - mirrors the app's own capabilities (ice/workflow
 *  apps/web menu + component set). */
export const features: Feature[] = [
  {
    icon: 'qrcode',
    title: 'Stock takes, done in minutes',
    body:
      'Count stock by scanning a barcode or with simple quantity entry - on the warehouse floor, at the workshop shelf, or out in the van. No paper sheets, no re-keying later.',
  },
  {
    icon: 'box',
    title: 'Live stock overview',
    body:
      'Every item, every location, current on-hand levels at a glance. Filter by category, spot what is running low, and know exactly what you are holding.',
  },
  {
    icon: 'cart-plus',
    title: 'Order straight from a stock take',
    body:
      'Low counts flow directly into an order. Turn a stock take into a purchase order for the right supplier without copying numbers between screens.',
  },
  {
    icon: 'tag',
    title: 'Supplier pricing & comparison',
    body:
      'Hold the same product from several suppliers and compare their prices side by side, so every reorder goes to the best price you have on file.',
  },
  {
    icon: 'chart-line',
    title: 'Price history',
    body:
      'See how each supplier’s pricing has moved over time. Spot creeping costs early and go into your next negotiation with the numbers in hand.',
  },
  {
    icon: 'send',
    title: 'Stock requests between sites',
    body:
      'Staff request stock from a central store or another site, and you track each request from raised to picked to ready - no lost texts or scribbled lists.',
  },
  {
    icon: 'truck',
    title: 'Van checks & van stock lists',
    body:
      'Build predefined van stock lists once, then check each van in and out against them so the right kit is on board before the first job of the day.',
  },
  {
    icon: 'briefcase',
    title: 'Tool & asset loans',
    body:
      'Log tools and assets out on loan and know who has what. Find kit easily when you need it.',
  },
  {
    icon: 'chart-bar',
    title: 'Dashboard & reports',
    body:
      'A live dashboard of stock, orders and pricing, plus a company-wide activity log - so managers can see what changed, when, and by whom.',
  },
  {
    icon: 'shield',
    title: 'Users, roles & access',
    body:
      'Invite your team with the right access level - staff, manager or admin - so people see what they need and sensitive settings stay locked down.',
  },
  {
    icon: 'bell',
    title: 'Low-stock notifications',
    body:
      'Configure alerts so the right people hear about low stock and outstanding requests before they become a job-stopping problem.',
  },
  {
    icon: 'mobile',
    title: 'Web portal + mobile app',
    body:
      'A full web portal for the office and a native iOS and Android app for the floor and the van. The same data, in sync, wherever you are working.',
  },
];

/** The core loop, for the homepage "how it works" band. */
export const steps: { n: string; icon: IconName; title: string; body: string }[] = [
  {
    n: '01',
    icon: 'qrcode',
    title: 'Count it',
    body:
      'Run a stock take by barcode or quick entry - on the floor, at the shelf, or in the van.',
  },
  {
    n: '02',
    icon: 'cart-plus',
    title: 'Order it',
    body:
      'Turn low counts straight into an order for the supplier with the best price on file.',
  },
  {
    n: '03',
    icon: 'box',
    title: 'Control it',
    body:
      'Watch live levels, price history and requests across every site, van and store from one place.',
  },
];

/** Pricing tiers. Priced per company; every tier includes the whole feature
 *  set - bigger tiers add users, sites and support. Figures are indicative and
 *  flagged as such on the page. */
export type Plan = {
  name: string;
  users: string;
  blurb: string;
  setup: string;
  monthly: string;
  perUser: string;
  highlight?: boolean;
  points: string[];
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    users: 'Up to 5 users',
    blurb: 'For a single workshop, store or small team getting stock under control.',
    setup: '£299',
    monthly: '£39',
    perUser: '£4',
    points: ['One trade app, web + mobile', 'Barcode & quick-entry stock takes', 'Ordering and supplier pricing', 'Email support'],
  },
  {
    name: 'Team',
    users: 'Up to 20 users',
    blurb: 'For an established firm running multiple vans and a central store.',
    setup: '£499',
    monthly: '£89',
    perUser: '£3.50',
    highlight: true,
    points: ['Everything in Starter', 'Van stock lists & van checks', 'Stock requests between sites', 'Price history & reporting', 'Priority support'],
  },
  {
    name: 'Multi-site',
    users: '20+ users',
    blurb: 'For larger operators across several sites, stores and depots.',
    setup: 'From £999',
    monthly: 'From £149',
    perUser: '£3',
    points: ['Everything in Team', 'Multiple sites & stores', 'Tool & asset loan tracking', 'Custom roles & notifications', 'Onboarding & account manager'],
  },
];

export const pricingNote =
  'Prices are indicative and exclude VAT. Final pricing depends on your team size, sites and the trade app you need - contact us for a tailored quote.';

/** FAQ - doubles as long-tail SEO content + FAQPage structured data. */
export const faqs: { q: string; a: string }[] = [
  {
    q: 'Which app should I choose?',
    a: 'Pick the one that matches your trade - Glazing, Building, Plumbing or Electrics. The feature set is the same across all four; the difference is the branding and the wording tuned to how each trade works. If you span more than one trade, get in touch and we will point you to the right fit.',
  },
  {
    q: 'Is there a mobile app as well as the web portal?',
    a: 'Yes. Every trade app comes as a full web portal for the office plus a native iOS and Android app for the warehouse floor and the van. They share the same data in real time, so a stock take on a phone shows up in the office immediately.',
  },
  {
    q: 'Can I do stock takes with a barcode scanner?',
    a: 'Yes. You can count stock by scanning barcodes with your phone’s camera or by simple quantity entry, whichever is faster for the item in front of you.',
  },
  {
    q: 'Can I compare supplier prices?',
    a: 'Yes. Hold the same product against several suppliers and Stock4 shows their prices side by side, with a full price history so you can see how costs have moved and reorder at the best price you have on file.',
  },
  {
    q: 'How do we get started?',
    a: 'Get in touch and we will set up your company account, load your suppliers and stock, and get your team onto the web portal and the mobile app. Most firms are running their first stock take within days.',
  },
];
