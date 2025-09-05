import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Features from "@/components/features";
// import Story from "@/components/Story";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
