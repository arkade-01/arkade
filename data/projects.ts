// All Work content lives here. Add screenshots (put files in /public/work/)
// and case-study text by filling in the optional fields below.

export type ProjectMedia =
  | { kind: "youtube"; id: string; vertical?: boolean; title: string }
  | { kind: "image"; src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  /** Shown on the card and in the Type row. */
  type: string;
  summary: string;
  live: string;
  role: string;
  /** Card thumbnail, e.g. "/work/arkpay.png". Falls back to a title card. */
  screenshot?: string;
  /** Media slot on the project page (demo video or screenshot). */
  media?: ProjectMedia;
  /** Paragraphs for "The problem". */
  problem?: string[];
  /** Paragraphs for "What I built". */
  built?: string[];
};

const ROLE = "Backend engineering";

export const projects: Project[] = [
  {
    slug: "arkpay",
    name: "ArkPay",
    type: "Payments",
    live: "https://ark-pay.vercel.app/",
    role: ROLE,
    summary: "Payment gateway backend for crypto-to-fiat conversion and settlement.",
  },
  {
    slug: "wayfinder",
    name: "Wayfinder",
    type: "NestJS API",
    live: "https://wayfinder.fun",
    role: ROLE,
    summary:
      "NestJS API that aggregates on-chain data to trace wallet identities, bridge activity and exit paths.",
  },
  {
    slug: "refuel-bot",
    name: "Refuel Bot",
    type: "Telegram bot",
    live: "https://t.me/RefuelPreciumbot",
    role: ROLE,
    summary:
      "Telegram bot backend that aggregates cross-chain bridge quotes via API and WebSocket streams.",
    media: { kind: "youtube", id: "W4XeV8I2TH0", vertical: true, title: "Refuel Bot demo" },
  },
  {
    slug: "prediction-arena",
    name: "Prediction Arena",
    type: "Monad",
    live: "https://prediction-arena-monad.onrender.com",
    role: ROLE,
    summary: "Backend for on-chain prediction markets and market resolution on Monad.",
    media: { kind: "youtube", id: "BYAu4rKq3_I", title: "Prediction Arena demo" },
  },
  {
    slug: "zakatchain",
    name: "ZakatChain",
    type: "Donations",
    live: "https://zakatchain.io",
    role: ROLE,
    summary:
      "Donation-payments backend for transparent on-chain giving, paired with a full-stack app.",
  },
  {
    slug: "nonamecabal",
    name: "NoNameCabal",
    type: "Solana bot",
    live: "https://t.me/noNameCabalBot",
    role: ROLE,
    summary: "Solana trading bot backend for price monitoring and automated trades.",
  },
  {
    slug: "forge",
    name: "Forge",
    type: "Multi-chain API",
    live: "https://f0rge.vercel.app/",
    role: ROLE,
    summary:
      "Multi-chain API for deploying configurable ERC-20/721 tokens, with deployment tracking.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

/** "https://ark-pay.vercel.app/" -> "ark-pay.vercel.app" */
export const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
