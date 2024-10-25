"use client";

import { navItems } from "../lib/data";

import HeroSection from "../Components/Hero";
import Grid from "../Components/Grid";
import Footer from "../Components/Footer";
import { FloatingNav } from "../Components/ui/FloatingNavbar";
import RecentProjects from "../Components/RecentProjects";
import ContactSection from "../Components/ContactSection";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
      <div className="w-full max-w-none">
        <FloatingNav navItems={navItems} />
        <HeroSection />
        <Grid />
        <RecentProjects />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
