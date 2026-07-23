import { linkedin, github, x, project1, project2, project3, project4, javascript, typescript, rust, python, anchor, hardhat, infinityLogo, horizonLogo, forgeLogo, zakatChainLogo, infinityProject, horizonProject, forgeProject, zakatChainProject, telegram, jrd} from "@/public/images"

export const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Work",
    path: "/work"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  },
]

export const navSocials = [
  {
    name: "git",
    img: github,
    path: "https://github.com/arkade-01"
  },
  {
    name: "x",
    img: x,
    path: "https://x.com/01_arkade"
  },
  {
    name: "linkedin",
    img: linkedin,
    path: "https://www.linkedin.com/in/Noahbiliamin15"
  },
]

export const projectImgs = [
  {
    id: 1,
    img: project1,
  },
  {
    id: 2,
    img: project2,
  },
  {
    id: 3,
    img: project3,
  },
  {
    id: 4,
    img: project4,
  },
]


export const stacks = [
  {
    id: 1,
    img: javascript,
    name: "Javascript"
  },
  {
    id: 2,
    img: rust,
    name: "Rust"
  },
  {
    id: 3,
    img: hardhat,
    name: "Hardhat"
  },
  {
    id: 4,
    img: typescript,
    name: "Typescript"
  },
  {
    id: 5,
    img: anchor,
    name: "Anchor"
  },
  {
    id: 6,
    img: python,
    name: "Python"
  },
]

export const workExperience = [
  {
    title: "Lead Backend Developer at Roomz - APRIL 2025 - PRESENT",
    desc: "Architected a scalable NestJS backend for real-time raffles, live bidding, and voting — 42 RESTful API endpoints across 6 core feature domains, Redis pub/sub driving real-time state without hitting the database on every read, and sub-300ms response times at up to 300 concurrent users."
  },
  {
    title: "Junior Backend Developer at TagoCash - MAY 2026 - PRESENT",
    desc: "Building and shipping features on a NestJS/Prisma backend for a cross-border digital wallet, supporting instant transfers, QR payments, and local cash deposits across US, European, and African payment rails."
  },
  {
    title: "Backend Developer at Ophir Builders - JULY 2023 - DEC 2023",
    desc: "As a backend developer, I was responsible for designing and implementing various functions to enhance the functionality of web applications. This included developing and integrating server-side logic and APIs to enable seamless interaction between users and the application. My work focused on ensuring robust performance, security, and scalability, allowing for an efficient and responsive user experience."
  },
]

export const pastProjects = [
  {
    name: "ArkPay",
    desc: "Payment gateway backend — API-driven crypto-to-fiat conversion and transaction settlement",
    path: "https://ark-pay.vercel.app/",
    tags: ["Payments", "API", "Backend"]
  },
  {
    name: "Wayfinder",
    desc: "NestJS API aggregating on-chain data to trace wallet identities, bridge activity, and exit paths",
    path: "https://wayfinder.fun",
    tags: ["NestJS", "Next.js", "OSINT", "API"]
  },
  {
    name: "Refuel Bot",
    desc: "Telegram bot backend — real-time bridge-quote aggregation via API and WebSocket streams across chains",
    path: "https://t.me/RefuelPreciumbot",
    video: "https://youtube.com/shorts/W4XeV8I2TH0",
    tags: ["Telegram Bot", "Real-time", "API"]
  },
  {
    name: "Prediction Arena",
    desc: "API and market-resolution backend for onchain prediction markets on Monad",
    path: "https://prediction-arena-monad.onrender.com",
    video: "https://youtu.be/BYAu4rKq3_I",
    tags: ["Backend", "DeFi", "Monad"]
  },
  {
    name: "ZakatChain",
    desc: "Donation-payments backend integrated with a full-stack app for transparent onchain giving",
    path: "https://zakatchain.io",
    tags: ["Payments", "Full-stack"]
  },
  {
    name: "NoNameCabal",
    desc: "Trading bot backend — real-time price monitoring and automated trade execution on Solana",
    path: "https://t.me/noNameCabalBot",
    tags: ["Telegram Bot", "Real-time", "Solana"]
  },
  {
    name: "Forge",
    desc: "Multi-chain token deployment API — configurable ERC-20/721 factory with deployment tracking",
    path: "https://f0rge.vercel.app/",
    tags: ["API", "Token Factory", "Multi-chain"]
  }
]

export const socials = [
  {
    img: x,
    dash: "-",
    handle: "01_arkade",
    path: "https://x.com/01_arkade"
  },
  {
    img: github,
    dash: "-",
    handle: "@arkade-01",
    path: "https://github.com/arkade-01"
  },
  {
    img: linkedin,
    dash: "-",
    handle: "@Noah Biliamin",
    path: "https://www.linkedin.com/in/Noahbiliamin15"
  },
  {
    img: telegram,
    dash: "-",
    handle: "@noahbiliamin",
    path: "https://t.me/noahbiliamin"
  },
]
