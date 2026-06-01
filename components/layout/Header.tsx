"use client";

import { useState } from "react";
import { MapPin, Clock, Phone, Menu, X, Sun, Moon } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

export function Header({ lang, setLang, isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const menuItems = [
    { label: t.home, href: "#home" },
    { label: t.services, href: "#services" },
    { label: t.promotions, href: "#promotions" },
    { label: t.pricing, href: "#pricing" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header className="w-full z-50">
      {/* 1. Top Header Bar */}
      <div className="bg-charcoal text-[11px] md:text-xs py-2 px-6 sm:px-12 md:px-16 lg:px-24 border-b border-primary/20 text-stone-300">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left: Location */}
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{translations[lang].footer.address}</span>
          </div>
          
          {/* Center: Business Hours */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>{translations[lang].footer.hours}</span>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center gap-3.5">
            <span className="text-[10px] text-stone-400">Follow us:</span>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Youtube">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.86.51 9.388.51 9.388.51s7.528 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-md sticky top-0 w-full z-40 border-b border-stone-100 dark:border-stone-800 transition-all shadow-sm">
        <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          
          {/* Left: Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <svg 
              className="w-8 h-8 text-primary group-hover:scale-105 transition-transform" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C12 2 9 7 9 10C9 13.5 12 15 12 15C12 15 15 13.5 15 10C15 7 12 2 12 2Z" opacity="0.85" />
              <path d="M12 5C12 5 7.5 9 6.5 12C5.5 15 7.5 17 10 16.5C11 16.3 12 15 12 15C12 15 13 16.3 14 16.5C16.5 17 18.5 15 17.5 12C16.5 9 12 5 12 5Z" opacity="0.75" />
              <path d="M12 9C12 9 6 12 4.5 15C3 18 5.5 20 8.5 19C10.5 18.3 12 15 12 15C12 15 13.5 18.3 15.5 19C18.5 20 21 18 19.5 15C18 12 12 9 12 9Z" opacity="0.65" />
            </svg>
            <div className="flex flex-col">
              <span className="text-serif text-lg md:text-xl font-bold tracking-[0.15em] text-stone-800 dark:text-stone-100 leading-tight">
                LAVISH
              </span>
              <span className="text-[9px] tracking-[0.25em] text-primary font-medium">
                BEAUTY & SPA
              </span>
            </div>
          </a>

          {/* Center: Navigation Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-wider font-semibold text-stone-600 dark:text-stone-300 hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Controls & Call CTA */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-primary hover:text-primary transition-all shadow-sm focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle */}
            <div className="flex rounded-full border border-stone-200 dark:border-stone-700 p-0.5 shadow-sm text-xs font-semibold bg-stone-50 dark:bg-stone-800">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full uppercase transition-all ${
                  lang === "en"
                    ? "bg-primary text-white"
                    : "text-stone-500 dark:text-stone-400 hover:text-primary"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("vi")}
                className={`px-3 py-1 rounded-full uppercase transition-all ${
                  lang === "vi"
                    ? "bg-primary text-white"
                    : "text-stone-500 dark:text-stone-400 hover:text-primary"
                }`}
              >
                VI
              </button>
            </div>

            {/* Call Button */}
            <a
              href="tel:0901234567"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-xs font-semibold tracking-wider group shadow-sm hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5 group-hover:animate-bounce" />
              <span>{t.call}</span>
            </a>
          </div>

          {/* Mobile Actions Toolbar & Menu Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "vi" : "en")}
              className="p-2 text-xs font-bold border border-stone-200 dark:border-stone-700 rounded-full text-stone-600 dark:text-stone-300 hover:text-primary uppercase"
            >
              {lang === "en" ? "VI" : "EN"}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 dark:text-stone-300 hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800 py-6 px-6 flex flex-col gap-4 shadow-xl animate-fade-in z-50">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-200 hover:text-primary py-2 border-b border-stone-50 dark:border-stone-850 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0901234567"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all text-sm font-semibold tracking-wider w-full mt-2"
            >
              <Phone className="w-4 h-4" />
              <span>{t.call}</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
