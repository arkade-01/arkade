import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-hidden sm:px-10 xs:px-3 xx:px-5">
      <div className="max-w-[61rem] w-full">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Testimonial />
        <CallToAction />
      </div>
    </main>
  );
}
