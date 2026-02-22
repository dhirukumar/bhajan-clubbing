import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Experience from "@/components/Experience";
import Tickets from "@/components/Tickets";
import FAQ from "@/components/FAQ";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIs />
      <Experience />
      <Tickets />
      <FAQ />
      <Venue />
      <Footer />
    </main>
  );
}
