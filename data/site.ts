// Site-wide content and owner settings for the desktop.

// ---------------------------------------------------------------------------
// Owner settings
// ---------------------------------------------------------------------------

/** Screen phosphor. Change this one value to recolour the whole desktop. */
export const PHOSPHOR: PhosphorName = "amber";

/** Show the "Press any key or the power button" screen on a first visit. */
export const BOOT_SCREEN = true;

export type PhosphorName = "amber" | "green" | "blue" | "white";

export const PHOSPHORS: Record<
  PhosphorName,
  { c: string; c2: string; c3: string; c4: string; glow: string; shadow: string }
> = {
  amber: { c: "#ffb547", c2: "#c98c3a", c3: "#f0c27e", c4: "#7a5420", glow: "rgba(255,170,40,.5)", shadow: "rgba(255,181,71,.14)" },
  green: { c: "#4dff88", c2: "#36b862", c3: "#9dffbd", c4: "#1d6b3a", glow: "rgba(60,255,120,.45)", shadow: "rgba(77,255,136,.12)" },
  blue: { c: "#6cc8ff", c2: "#4f9fd1", c3: "#b0e0ff", c4: "#24577a", glow: "rgba(90,190,255,.45)", shadow: "rgba(108,200,255,.12)" },
  white: { c: "#f2f2ea", c2: "#aaaaa2", c3: "#dcdcd2", c4: "#5c5c57", glow: "rgba(255,255,240,.35)", shadow: "rgba(242,242,234,.1)" },
};

/** Background music: Spotify track played in the Music window. */
export const MUSIC = {
  trackId: "6ZFbXIJkuI1dVNWvzJzown", // "Time", Hans Zimmer (Inception)
  artist: "Hans Zimmer",
  title: "Time",
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const TELEGRAM = { handle: "@arkkkade", url: "https://t.me/arkkkade" };

/** Used by the contact form, which opens the visitor's mail app. */
export const EMAIL = "noabiliaminfirst@gmail.com";

export const elsewhere = [
  { name: "GitHub", url: "https://github.com/arkade-01" },
  { name: "X", url: "https://x.com/01_arkade" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/Noahbiliamin15" },
];

// ---------------------------------------------------------------------------
// Desktop
// ---------------------------------------------------------------------------

export const desktop = {
  bio: "Backend engineer in Lagos. APIs, real-time bots and payment rails for teams that need it shipped.",
  hint: "Open an icon to see a page",
  now: "Now: open for backend & systems projects",
};

// ---------------------------------------------------------------------------
// About me
// ---------------------------------------------------------------------------

export const about = {
  intro: "Backend engineer in Lagos, building APIs, real-time tools and payment infrastructure.",
  paragraphs: [
    "I build the part of the product nobody sees and everybody depends on.",
    "Shipped payment gateways, real-time bots, data pipelines and on-chain tooling. Main stack is NestJS, Python and modern backend tooling, with blockchain integrations when the project needs them.",
  ],
  facts: [
    { k: "Based in", v: "Lagos, Nigeria" },
    { k: "Focus", v: "Backend & systems" },
    { k: "Stack", v: "NestJS, Python" },
    { k: "Also", v: "On-chain integrations" },
    { k: "Replies", v: "On Telegram" },
  ],
};

export type Step = {
  name: string;
  /** e.g. "Day 1". Leave out until confirmed. */
  when?: string;
  body: string;
  /** "You get ..." line. Leave out until confirmed. */
  get?: string;
};

// Only Scoping is confirmed. Fill in `when` / `get` for the others when ready.
export const steps: Step[] = [
  {
    name: "Scoping",
    when: "Day 1",
    body: "A short call about what you're building, the constraints and when it has to be live.",
    get: "A fixed scope, or a weekly plan.",
  },
  { name: "Build", body: "I build the backend in small pieces you can test as they land." },
  { name: "Ship", body: "Deploy to production and watch it under real traffic." },
  { name: "Handover", body: "Docs and a walkthrough so your team can run it without me." },
];

export const timeline = [
  { y: "2021", t: "Started a BSc in Computer Science at Bowen University." },
  { y: "2025", t: "Graduated, BSc Computer Science." },
  { y: "2026", t: "Junior Backend Developer at TagoCash (remote, May to November)." },
  { y: "Now", t: "Booking new backend and systems projects." },
];

/** Add client names as they can be listed publicly. */
export const clients = ["ZakatChain"];

export const testimonials = [
  {
    initial: "R",
    from: "Rahman",
    org: "",
    subject: "Delivered on a tight deadline",
    body: "I've had the opportunity to work with many talented developers, but Arkade truly stands out as the best. He was the only blockchain dev that delivered our Product within the short deadline. Arkade's expertise in blockchain development is unparalleled, and his ability to navigate complex challenges with ease set him apart from everyone else. Not only is he technically brilliant, but his work ethic, collaboration, and character are second to none. Working with Arkade was an absolute pleasure, and I can say without hesitation that he is the best developer I've ever had the privilege of working with.",
  },
  {
    initial: "J",
    from: "$JRD",
    org: "ZakatChain",
    subject: "A key role in building ZakatChain",
    body: "I am delighted to recommend Arkade, who played an instrumental role in the development of ZakatChain. Throughout the project, Arkade demonstrated exceptional technical expertise, innovative thinking, and a strong commitment to our mission of integrating cryptocurrency with charitable giving. From the outset, Arkade showcased an impressive ability to understand and implement complex blockchain technologies, ensuring that our platform was secure, efficient, and user-friendly. His skills in smart contract development and wallet integration were particularly valuable, allowing us to offer precise Zakat calculations and seamless donation processes.",
  },
];

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "Custom backend and API work starts at $2,000, real-time systems and bots at $3,500, and payments and integrations at $8,000.",
  },
  {
    q: "Fixed scope or weekly?",
    a: "Either. We pick one after the scoping call, depending on how settled the spec is.",
  },
  {
    q: "What stack do you use?",
    a: "Mostly NestJS and Python, with blockchain integrations when the project needs them.",
  },
  {
    q: "Do you handle crypto payments?",
    a: "Yes: crypto and traditional payment flows, including settlement logic. ArkPay is an example.",
  },
  {
    q: "How do I start?",
    a: "Message me on Telegram (@arkkkade) with what you're building and when you need it live.",
  },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const servicesIntro =
  "Three things I build. Projects run fixed-scope or weekly, and every one starts with a short scoping call.";

export const services = [
  {
    name: "Custom Backend / API",
    desc: "Production APIs in NestJS, Python or similar.",
    price: "From $2,000 (to $5,000)",
    items: ["NestJS or Python", "API design and build", "Fixed scope or weekly"],
  },
  {
    name: "Real-time Systems & Bots",
    desc: "Telegram bots, WebSockets, automation and live data.",
    price: "From $3,500 (to $7,000)",
    items: ["Telegram bots", "WebSocket streams", "Automation", "Live data"],
  },
  {
    name: "Payments & Integrations",
    desc: "Crypto and traditional payment flows, with the settlement logic behind them.",
    price: "From $8,000 (to $20,000)",
    items: ["Crypto payment flows", "Traditional payment flows", "Settlement logic"],
  },
];
