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
          <span>📧 noahbiliaminfirst@gmail.com</span>
          <span>|</span>
          <Link href="https://linkedin.com/in/Noahbiliamin15" target="_blank" className='text-[#06FCD8] hover:underline'>LinkedIn</Link>
          <span>|</span>
          <Link href="https://github.com/arkade-01" target="_blank" className='text-[#06FCD8] hover:underline'>GitHub</Link>
        </div>

        {/* Summary */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Summary</h2>
          <p className='text-[#c0c0c0]'>
            Blockchain developer with 3+ years building smart contracts and dApps across EVM and Solana. 
            Won Encode Scaling Web3 Hackathon and Ophir In-House Hackathon. 
            Shipped production apps including ZakatChain, prediction markets, and cross-chain tooling. 
            I build fast, write secure code, and ship.
          </p>
        </section>

        {/* Skills */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Technical Skills</h2>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
            <div><span className='text-white font-semibold'>Languages:</span> <span className='text-[#9a9a9a]'>Solidity, Rust, TypeScript, JavaScript, Python</span></div>
            <div><span className='text-white font-semibold'>Blockchain:</span> <span className='text-[#9a9a9a]'>Hardhat, Foundry, Anchor, ethers.js, wagmi</span></div>
            <div><span className='text-white font-semibold'>Frontend:</span> <span className='text-[#9a9a9a]'>React, Next.js, Vite</span></div>
            <div><span className='text-white font-semibold'>Backend:</span> <span className='text-[#9a9a9a]'>NestJS, Express, Node.js</span></div>
            <div><span className='text-white font-semibold'>Databases:</span> <span className='text-[#9a9a9a]'>PostgreSQL, MongoDB, Supabase</span></div>
          </div>
        </section>

        {/* Hackathon Wins */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Hackathon Wins</h2>
          <div className='space-y-2'>
            <p>🏆 <span className='font-semibold'>Encode Scaling Web3 Hackathon</span> — Winner</p>
            <p>🏆 <span className='font-semibold'>Ophir In-House Hackathon</span> — Winner</p>
          </div>
        </section>

        {/* Work Experience */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Work Experience</h2>
          
          <div className='space-y-6'>
            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Blockchain Developer | <span className='text-[#06FCD8]'>Daffle</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jul 2024 – Feb 2025</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Developed and audited smart contracts for decentralized raffle platform</li>
                <li>Integrated contracts with React frontend using wagmi</li>
                <li>Implemented security patterns to prevent reentrancy and overflow vulnerabilities</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Blockchain Developer | <span className='text-[#06FCD8]'>Precium Labs</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Jun 2024 – Dec 2025</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Building cross-chain gas bridging tools (Refuel Bot — 300+ users)</li>
                <li>Led blockchain education workshops reaching 300+ developers</li>
                <li>Supervised hackathon teams and mentored junior devs</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Backend Developer | <span className='text-[#06FCD8]'>Roomz</span></h3>
                <span className='text-sm text-[#9a9a9a]'>May 2025 – Present</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Architected and built REST API backend from scratch</li>
                <li>Designed database schema and implemented authentication flows</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Blockchain Developer | <span className='text-[#06FCD8]'>ZakatChain</span></h3>
                <span className='text-sm text-[#9a9a9a]'>Dec 2023</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Deployed Zakat payment smart contracts on Base and BNB Chain</li>
                <li>Integrated onchain payments with user-friendly frontend</li>
              </ul>
            </div>

            <div>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-semibold'>Freelance Blockchain Developer</h3>
                <span className='text-sm text-[#9a9a9a]'>2021 – Present</span>
              </div>
              <ul className='list-disc list-inside text-sm text-[#9a9a9a] space-y-1'>
                <li>Built 10+ dApps including token deployers, trading bots, and DeFi protocols</li>
                <li>Notable: Prediction Arena (Monad), ArkPay (crypto-to-fiat), NoNameCabal (Solana bot)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Speaking */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Speaking</h2>
          <div className='space-y-2 text-sm text-[#9a9a9a]'>
            <p><span className='text-white font-semibold'>Solana AllStars</span> (May 2025) — Onboarded attendees to Web3</p>
            <p><span className='text-white font-semibold'>Polygon Campus Tour</span> (May 2024) — Spoke on Web3 opportunities</p>
          </div>
        </section>

        {/* Education */}
        <section className='mb-10'>
          <h2 className='text-xl font-bold text-[#06FCD8] border-b border-[#06FCD8] pb-2 mb-4'>Education</h2>
          <div className='space-y-2 text-sm text-[#9a9a9a]'>
            <p><span className='text-white font-semibold'>BSc Computer Science</span> — Bowen University (2021–2025)</p>
            <p><span className='text-white font-semibold'>Blockchain Development</span> — Ayaversity (2022)</p>
            <p><span className='text-white font-semibold'>Solana Development</span> — Soleer Devs (2024)</p>
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
