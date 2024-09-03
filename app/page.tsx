import Image from "next/image";
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import MyPortfolio from "@/components/MyPortfolio";
import WhatImInto from "@/components/WhatImInto";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden sm:px-10 xs:px-3 xx:px-5">
      <div className="max-w-6xl w-full">
        <Navbar />
        <Hero />
        <MyPortfolio />
        <WhatImInto />
        <Testimonial />
        <CallToAction />
      </div>
    </main>
  );
}
