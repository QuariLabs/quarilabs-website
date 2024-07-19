import Footer from "@/components/sections/Footer";
import GetToKnowUs from "@/components/sections/GetToKnowUs";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GetToKnowUs />
      <Project />
      <Footer />
    </main>
  );
}
