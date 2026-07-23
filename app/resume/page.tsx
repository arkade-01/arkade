import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Resume = () => {
  return (
    <div className='overflow-hidden mx-auto sm:px-10 xs:px-3 xx:px-5 max-w-4xl w-full'>
      <Navbar />

      <div className='mt-10 mb-16'>
        {/* Header */}
        <h1 className='text-3xl sm:text-4xl font-bold mb-2'>Noah Biliamin</h1>
        <div className='flex flex-wrap gap-3 text-sm text-[#9a9a9a] mb-8'>
          <span>📧 noabiliaminfirst@gmail.com</span>
          <span>|</span>
          <Link href="https://linkedin.com/in/Noahbiliamin15" target="_blank" className='text-[#06FCD8] hover:underline'>LinkedIn</Link>
          <span>|</span>
          <Link href="https://github.com/arkade-01" target="_blank" className='text-[#06FCD8] hover:underline'>GitHub</Link>
        </div>

        {/* Summary */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Summary</h2>
          <p className='text-[#c0c0c0]'>
            A dedicated Blockchain and Backend Developer with over 3+ years of experience building robust and scalable systems.
            Noah combines a strong foundation in backend architecture with a deep passion for blockchain, specializing in EVM
            and Solana chain and dapp development. He is adept at transforming complex requirements into impactful,
            high-performance solutions and is passionate about educating others in the blockchain space.
          </p>
        </section>

        {/* Skills */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Technical Skills</h2>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
            <div><span className='text-white font-semibold'>Languages:</span> <span className='text-[#9a9a9a]'>JavaScript, Python, Solidity, Typescript</span></div>
            <div><span className='text-white font-semibold'>Frameworks:</span> <span className='text-[#9a9a9a]'>NestJS, React, NextJS, ExpressJS, Hardhat, EthersJS, Solana Web3JS, Telegraf (Telegram Bot API)</span></div>
            <div><span className='text-white font-semibold'>Databases:</span> <span className='text-[#9a9a9a]'>PostgreSQL, MongoDB, MySQL</span></div>
            <div><span className='text-white font-semibold'>Tools:</span> <span className='text-[#9a9a9a]'>Git, Postman, AWS, Docker, Self-Hosting, Redis</span></div>
          </div>
        </section>

        {/* Work Experience */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Work Experience</h2>

          <div className='space-y-6'>
            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Junior Backend Developer | <span className='text-[#06FCD8]'>TagoCash</span></h3>
                <span className='text-sm text-[#9a9a9a]'>May 2026 – Present</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Build and ship features on a NestJS/Prisma backend for a cross-border digital wallet supporting instant transfers, QR payments, and local cash deposits across US, European, and African payment rails</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Lead Backend Developer | <span className='text-[#06FCD8]'>Roomz</span></h3>
                <span className='text-sm text-[#9a9a9a]'>April 2025 – Present</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Architected and built a scalable backend server for real-time raffles, bids, and live meetings, improving API response time by 65% and supporting up to 300 concurrent users through efficient architecture and optimized query handling</li>
                <li>Engineered 42 RESTful API endpoints across 6 core feature domains — including Phantom wallet authentication, raffle draws, live bidding, voting, and FIAT/crypto payments — achieving sub-300ms response times and seamless frontend integration</li>
                <li>Used Redis pub/sub and in-memory state to drive real-time raffle draws and live bidding, broadcasting events across socket connections and serving current bid state without hitting the database on every read</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Freelance Software Engineer | <span className='text-[#06FCD8]'>Multiple Clients</span></h3>
                <span className='text-sm text-[#9a9a9a]'>May 2021 – Present</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Delivered 20+ full-stack decentralized applications (dApps) for diverse clients using Solidity, Hardhat, and Node.js/NestJS, covering DeFi protocols (staking, swapping) and consumer-facing Web3 products</li>
                <li>Built and deployed scalable backend systems for client projects, including RESTful APIs, real-time socket servers, authentication systems, payment integrations (FIAT & crypto), and database architectures using PostgreSQL and MongoDB</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Web3 Development Lead | <span className='text-[#06FCD8]'>GDG Bowen</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Aug 2024 – Sep 2025</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Directed Web3 development strategy and initiatives for a prominent developer community chapter, fostering innovation and collaboration</li>
                <li>Delivered 5 hands-on workshops to 100+ participants on smart contract integration, wallet connectivity, and dApp architecture</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Blockchain Developer | <span className='text-[#06FCD8]'>Daffle</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jul 2024 – Feb 2025</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Designed and deployed Daffle secure smart contracts, successfully implementing verifiable raffles with Chainlink VRF (Verifiable Random Function) and ERC-20, ERC-721 for token and NFT rewards from raffles</li>
                <li>Implemented comprehensive security audits and best practices, proactively identifying and mitigating vulnerabilities to safeguard dApp integrity</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Backend Developer Intern | <span className='text-[#06FCD8]'>LEBICED Technologies</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jul 2024 – Sep 2024</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Built and documented 20+ RESTful API endpoints for a dating application using Node.js, Express, and PostgreSQL, with Postman documentation that streamlined frontend integration across the team</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Developer | <span className='text-[#06FCD8]'>Precium Labs</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jun 2024</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Developed &quot;Refuel Bot,&quot; a Telegram-based cross-chain bridging service with 300+ active users, enabling seamless token transfers across EVM and Solana chains. Engineered a unified Telegram interface by orchestrating real-time data aggregation via API and WebSocket streams, abstracting complex chain-specific differences</li>
                <li>Educated over 300 developers on blockchain development through workshops and presentations, fostering community growth</li>
                <li>Mentored and supervised 10 community teams during hackathons, guiding them in developing practical blockchain solutions</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Blockchain Developer Apprentice | <span className='text-[#06FCD8]'>BCAMP</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jun 2024</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Interned as a Blockchain Developer, gaining hands-on experience in building a decentralized gambling application using Solidity, Hardhat, Typescript, React</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Volunteer Blockchain Developer | <span className='text-[#06FCD8]'>ZakatChain</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Dec 2023</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Developed and deployed custom smart contracts on Base and BNB Chain to enable on-chain Zakat payments, processing over $3,000 in transaction volume with secure, transparent donation flows</li>
                <li>Architected a multichain dApp using React and Context API, enabling seamless user transactions across Base and BNB Chain from a single unified interface</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Information Security Admin | <span className='text-[#06FCD8]'>Virtually Testing Foundation</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Sep 2022 – Nov 2022</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Completed intensive training in cybersecurity skills, including practical application of penetration testing methodologies</li>
                <li>Acquired in-depth knowledge of Open-Source Intelligence (OSINT) techniques for threat identification and analysis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Open-Source Contributions */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Open-Source Contributions</h2>
          <div>
            <h3 className='font-semibold mb-2'>Mayan Finance / wormhole-sdk-route</h3>
            <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
              <li>
                Resolved a critical bug by fixing a missing RouteTransferRequest variable in the Mayan cross-chain swap route, with the PR reviewed and merged by the Mayan core team. {' '}
                <Link href="https://github.com/mayan-finance/wormhole-sdk-route/pull/38" target="_blank" className='text-[#06FCD8] hover:underline'>PR #38</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Hackathon Wins */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Hackathon Wins</h2>
          <div className='space-y-2 text-sm text-[#9a9a9a]'>
            <p>🏆 <span className='font-semibold text-white'>Ophir In-House Hackathon</span> — Led a team to build Horizon, a multichain portfolio tracker aggregating data from over 30 chains, simplifying the process of portfolio tracking</p>
            <p>🏆 <span className='font-semibold text-white'>Encode Club Gizathon</span> — Led a team to build an automated vault that invests and auto-collects profits from recommended vaults with Giza SDK</p>
          </div>
        </section>

        {/* Education */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Education &amp; Qualifications</h2>
          <div className='space-y-2 text-sm text-[#9a9a9a]'>
            <p><span className='text-white font-semibold'>Ayaversity</span> — Blockchain Development [2022]: A bootcamp focused on training developers on Ethereum Development</p>
            <p><span className='text-white font-semibold'>Soleer Devs</span> — [2024] Bootcamp focused on training developers on Solana Development</p>
            <p><span className='text-white font-semibold'>Bowen University</span> — [2021–2025] BSc. Computer Science</p>
          </div>
        </section>

        {/* Speaking */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Speaker Roles</h2>
          <div className='space-y-2 text-sm text-[#9a9a9a]'>
            <p><span className='text-white font-semibold'>Polygon Campus Tour | Speaker</span> (May 2024) — Delivered an intensive talk on career opportunities and advancements in Web3 to 200 students/developers, inspiring engagement in the blockchain space</p>
            <p><span className='text-white font-semibold'>Solana AllStars | Speaker</span> (May 2025) — Presented engaging sessions to onboard 250 attendees to the fundamentals of Web3 and ecosystem opportunities</p>
          </div>
        </section>

        {/* Projects */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Projects</h2>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
            <Link href="https://prediction-arena-monad.onrender.com" target="_blank" className='bg-[#1a1a1a] p-4 rounded-lg hover:border-[#06FCD8] border border-[#2a2a2a] transition-all'>
              <h3 className='font-semibold text-[#06FCD8]'>Prediction Arena</h3>
              <p className='text-sm text-[#9a9a9a]'>Onchain prediction markets on Monad</p>
            </Link>
            <Link href="https://t.me/RefuelPreciumbot" target="_blank" className='bg-[#1a1a1a] p-4 rounded-lg hover:border-[#06FCD8] border border-[#2a2a2a] transition-all'>
              <h3 className='font-semibold text-[#06FCD8]'>Refuel Bot</h3>
              <p className='text-sm text-[#9a9a9a]'>Cross-chain gas bridging via Telegram</p>
            </Link>
            <Link href="https://ark-pay.vercel.app" target="_blank" className='bg-[#1a1a1a] p-4 rounded-lg hover:border-[#06FCD8] border border-[#2a2a2a] transition-all'>
              <h3 className='font-semibold text-[#06FCD8]'>ArkPay</h3>
              <p className='text-sm text-[#9a9a9a]'>Crypto to fiat payment gateway</p>
            </Link>
            <Link href="https://f0rge.vercel.app" target="_blank" className='bg-[#1a1a1a] p-4 rounded-lg hover:border-[#06FCD8] border border-[#2a2a2a] transition-all'>
              <h3 className='font-semibold text-[#06FCD8]'>Forge</h3>
              <p className='text-sm text-[#9a9a9a]'>Deploy ERC-20/721 tokens on any chain</p>
            </Link>
            <Link href="https://zakatchain.io" target="_blank" className='bg-[#1a1a1a] p-4 rounded-lg hover:border-[#06FCD8] border border-[#2a2a2a] transition-all'>
              <h3 className='font-semibold text-[#06FCD8]'>ZakatChain</h3>
              <p className='text-sm text-[#9a9a9a]'>Onchain Zakat payments</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
