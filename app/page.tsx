"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceCategories from "@/components/sections/ServiceCategories";
import AboutUs from "@/components/sections/AboutUs";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Promotions from "@/components/sections/Promotions";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import { Language } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("vi");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sync Dark Mode state with documentElement class
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <Header 
        lang={lang} 
        setLang={setLang} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />
      <main className="flex-grow transition-colors duration-300">
        <Hero lang={lang} />
        <ServiceCategories lang={lang} />
        <AboutUs lang={lang} />
        <FeaturedServices lang={lang} />
        <Promotions lang={lang} />
        <WhyChooseUs lang={lang} />
        <Testimonials lang={lang} />
        <Blog lang={lang} />
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
