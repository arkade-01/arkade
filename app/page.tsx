import Image from "next/image";
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import MyPortfolio from "@/components/MyPortfolio";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-6xl w-full">
        <Navbar />
        <Hero />
        <MyPortfolio />
      </div>
    </main>
  );
}
