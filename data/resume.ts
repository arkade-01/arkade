// CV content, shown in the CV window at /resume.

export const resume = {
  name: "Noah Biliamin",
  email: "noabiliaminfirst@gmail.com",
  pdf: "/Noah_Biliamin_CV.pdf",
  links: [
    { name: "LinkedIn", url: "https://linkedin.com/in/Noahbiliamin15" },
    { name: "GitHub", url: "https://github.com/arkade-01" },
  ],
  summary:
    "A dedicated Blockchain and Backend Developer with over 3+ years of experience building robust and scalable systems. Noah combines a strong foundation in backend architecture with a deep passion for blockchain, specializing in EVM and Solana chain and dapp development. He is adept at transforming complex requirements into impactful, high-performance solutions and is passionate about educating others in the blockchain space.",
  skills: [
    { k: "Languages", v: "JavaScript, Python, Solidity, Typescript" },
    { k: "Frameworks", v: "NestJS, React, NextJS, ExpressJS, Hardhat, EthersJS, Solana Web3JS, Telegraf (Telegram Bot API)" },
    { k: "Databases", v: "PostgreSQL, MongoDB, MySQL" },
    { k: "Tools", v: "Git, Postman, AWS, Docker, Self-Hosting, Redis" },
  ],
  experience: [
    {
      role: "Junior Backend Developer",
      org: "TagoCash",
      when: "May 2026 – Nov 2026",
      points: [
        "Built and shipped features on a NestJS/Prisma backend for a cross-border digital wallet supporting instant transfers, QR payments, and local cash deposits across US, European, and African payment rails",
      ],
    },
    {
      role: "Lead Backend Developer",
      org: "Roomz",
      when: "April 2025 – Present",
      points: [
        "Architected and built a scalable backend server for real-time raffles, bids, and live meetings, improving API response time by 65% and supporting up to 300 concurrent users through efficient architecture and optimized query handling",
        "Engineered 42 RESTful API endpoints across 6 core feature domains — including Phantom wallet authentication, raffle draws, live bidding, voting, and FIAT/crypto payments — achieving sub-300ms response times and seamless frontend integration",
        "Used Redis pub/sub and in-memory state to drive real-time raffle draws and live bidding, broadcasting events across socket connections and serving current bid state without hitting the database on every read",
      ],
    },
    {
      role: "Freelance Software Engineer",
      org: "Multiple Clients",
      when: "May 2021 – Present",
      points: [
        "Delivered 20+ full-stack decentralized applications (dApps) for diverse clients using Solidity, Hardhat, and Node.js/NestJS, covering DeFi protocols (staking, swapping) and consumer-facing Web3 products",
        "Built and deployed scalable backend systems for client projects, including RESTful APIs, real-time socket servers, authentication systems, payment integrations (FIAT & crypto), and database architectures using PostgreSQL and MongoDB",
      ],
    },
    {
      role: "Web3 Development Lead",
      org: "GDG Bowen",
      when: "Aug 2024 – Sep 2025",
      points: [
        "Directed Web3 development strategy and initiatives for a prominent developer community chapter, fostering innovation and collaboration",
        "Delivered 5 hands-on workshops to 100+ participants on smart contract integration, wallet connectivity, and dApp architecture",
      ],
    },
    {
      role: "Blockchain Developer",
      org: "Daffle",
      when: "Jul 2024 – Feb 2025",
      points: [
        "Designed and deployed Daffle secure smart contracts, successfully implementing verifiable raffles with Chainlink VRF (Verifiable Random Function) and ERC-20, ERC-721 for token and NFT rewards from raffles",
        "Implemented comprehensive security audits and best practices, proactively identifying and mitigating vulnerabilities to safeguard dApp integrity",
      ],
    },
    {
      role: "Backend Developer Intern",
      org: "LEBICED Technologies",
      when: "Jul 2024 – Sep 2024",
      points: [
        "Built and documented 20+ RESTful API endpoints for a dating application using Node.js, Express, and PostgreSQL, with Postman documentation that streamlined frontend integration across the team",
      ],
    },
    {
      role: "Developer",
      org: "Precium Labs",
      when: "Jun 2024",
      points: [
        'Developed "Refuel Bot," a Telegram-based cross-chain bridging service with 300+ active users, enabling seamless token transfers across EVM and Solana chains. Engineered a unified Telegram interface by orchestrating real-time data aggregation via API and WebSocket streams, abstracting complex chain-specific differences',
        "Educated over 300 developers on blockchain development through workshops and presentations, fostering community growth",
        "Mentored and supervised 10 community teams during hackathons, guiding them in developing practical blockchain solutions",
      ],
    },
    {
      role: "Blockchain Developer Apprentice",
      org: "BCAMP",
      when: "Jun 2024",
      points: [
        "Interned as a Blockchain Developer, gaining hands-on experience in building a decentralized gambling application using Solidity, Hardhat, Typescript, React",
      ],
    },
    {
      role: "Volunteer Blockchain Developer",
      org: "ZakatChain",
      when: "Dec 2023",
      points: [
        "Developed and deployed custom smart contracts on Base and BNB Chain to enable on-chain Zakat payments, processing over $3,000 in transaction volume with secure, transparent donation flows",
        "Architected a multichain dApp using React and Context API, enabling seamless user transactions across Base and BNB Chain from a single unified interface",
      ],
    },
    {
      role: "Information Security Admin",
      org: "Virtually Testing Foundation",
      when: "Sep 2022 – Nov 2022",
      points: [
        "Completed intensive training in cybersecurity skills, including practical application of penetration testing methodologies",
        "Acquired in-depth knowledge of Open-Source Intelligence (OSINT) techniques for threat identification and analysis",
      ],
    },
  ],
  openSource: [
    {
      title: "Mayan Finance / wormhole-sdk-route",
      text: "Resolved a critical bug by fixing a missing RouteTransferRequest variable in the Mayan cross-chain swap route, with the PR reviewed and merged by the Mayan core team.",
      link: { label: "PR #38", url: "https://github.com/mayan-finance/wormhole-sdk-route/pull/38" },
    },
  ],
  hackathons: [
    {
      name: "Ophir In-House Hackathon",
      text: "Led a team to build Horizon, a multichain portfolio tracker aggregating data from over 30 chains, simplifying the process of portfolio tracking",
    },
    {
      name: "Encode Club Gizathon",
      text: "Led a team to build an automated vault that invests and auto-collects profits from recommended vaults with Giza SDK",
    },
  ],
  education: [
    { name: "Ayaversity", text: "Blockchain Development [2022]: A bootcamp focused on training developers on Ethereum Development" },
    { name: "Soleer Devs", text: "[2024] Bootcamp focused on training developers on Solana Development" },
    { name: "Bowen University", text: "[2021–2025] BSc. Computer Science" },
  ],
  speaking: [
    {
      name: "Polygon Campus Tour | Speaker",
      when: "May 2024",
      text: "Delivered an intensive talk on career opportunities and advancements in Web3 to 200 students/developers, inspiring engagement in the blockchain space",
    },
    {
      name: "Solana AllStars | Speaker",
      when: "May 2025",
      text: "Presented engaging sessions to onboard 250 attendees to the fundamentals of Web3 and ecosystem opportunities",
    },
  ],
  /** Slugs from data/projects.ts, linked to their Work pages. */
  projects: ["prediction-arena", "refuel-bot", "arkpay", "forge", "zakatchain"],
};
