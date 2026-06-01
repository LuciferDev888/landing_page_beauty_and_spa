import Image from "next/image";
import { Play, ShieldCheck, Award, Leaf, Compass } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative bg-[#F3EFE9] dark:bg-stone-950 overflow-hidden py-8 lg:py-0 min-h-[75vh] lg:h-[590px] flex flex-col lg:flex-row items-center transition-colors duration-300">
      
      {/* Left Column: Text & CTA inside grid */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col justify-center animate-slide-up py-6 lg:py-10">
          <span className="text-primary dark:text-primary font-bold text-[11px] md:text-xs tracking-[0.3em] uppercase mb-2 block">
            {t.subtitle}
          </span>
          
          <h1 className="text-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white tracking-wide leading-[1.15] mb-3.5">
            {t.title1}<br />
            {t.title2}<br />
            <span className="text-gold-gradient">{t.title3}</span>
          </h1>
          
          <p className="text-stone-700 dark:text-stone-300 text-xs md:text-sm leading-relaxed max-w-md mb-5">
            {t.desc}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 mb-6">
            <a
              href="#appointment"
              className="bg-gold-gradient hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all text-white font-semibold uppercase text-[11px] md:text-xs tracking-wider px-6 py-3 rounded-full shadow-md"
            >
              {t.book}
            </a>
            
            <a
              href="#"
              className="flex items-center gap-2.5 text-stone-850 dark:text-stone-200 hover:text-primary dark:hover:text-primary font-semibold uppercase text-[11px] md:text-xs tracking-wider transition-colors group"
            >
              <span className="w-9 h-9 rounded-full border border-primary flex items-center justify-center bg-white dark:bg-stone-800 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <span>{t.watch}</span>
            </a>
          </div>

          {/* Bottom Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-primary/30 dark:border-primary/20 rounded-xl bg-white/60 dark:bg-stone-900/60 backdrop-blur-md p-3 divide-y sm:divide-y-0 sm:divide-x divide-primary/30 dark:divide-primary/25 shadow-sm max-w-2xl">
            <div className="flex items-center gap-2 p-2 sm:p-0 sm:px-3">
              <ShieldCheck className="w-4.5 h-4.5 text-primary shrink-0" />
              <div className="text-[9.5px] md:text-[11px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider whitespace-pre-line leading-tight">
                {t.badges.authentic}
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 sm:p-0 sm:px-3 pt-3 sm:pt-0">
              <Award className="w-4.5 h-4.5 text-primary shrink-0" />
              <div className="text-[9.5px] md:text-[11px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider whitespace-pre-line leading-tight">
                {t.badges.professional}
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 sm:p-0 sm:px-3 pt-3 sm:pt-0">
              <Leaf className="w-4.5 h-4.5 text-primary shrink-0" />
              <div className="text-[9.5px] md:text-[11px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider whitespace-pre-line leading-tight">
                {t.badges.private}
              </div>
            </div>
            
            <div className="flex items-center gap-2 p-2 sm:p-0 sm:px-3 pt-3 sm:pt-0">
              <Compass className="w-4.5 h-4.5 text-primary shrink-0" />
              <div className="text-[9.5px] md:text-[11px] font-bold text-stone-800 dark:text-stone-200 uppercase tracking-wider whitespace-pre-line leading-tight">
                {t.badges.premium}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Absolutely Positioned Full-Bleed Curved Image (Desktop) */}
      <div className="hidden lg:block absolute top-8 bottom-8 right-0 w-[50%] z-0">
        {/* Soft Golden Glow behind the mask */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/20 to-transparent blur-3xl rounded-full" />
        
        {/* Image Container with Clip Mask */}
        <div className="w-full h-full rounded-tl-[30rem] lg:rounded-tl-[35rem] rounded-bl-[30rem] lg:rounded-bl-[35rem] overflow-hidden bg-stone-200 dark:bg-stone-800 relative">
          <Image
            src="/images/hero_spa_woman.png"
            alt="Luxury Spa Treatment"
            fill
            className="object-cover object-center scale-[1.05]"
            priority
            sizes="50vw"
          />
          {/* Soft Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Custom Curved Border & Shadow Overlay */}
        <div className="absolute inset-0 rounded-tl-[30rem] lg:rounded-tl-[35rem] rounded-bl-[30rem] lg:rounded-bl-[35rem] border-l-4 border-t-2 border-b-2 border-primary/50 dark:border-primary/45 pointer-events-none shadow-2xl" />
      </div>

      {/* Mobile/Tablet Fallback Stacked Image */}
      <div className="lg:hidden w-full px-6 sm:px-12 md:px-16 mt-4 mb-8 relative z-10 h-[380px] sm:h-[500px]">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800 relative shadow-lg">
          <Image
            src="/images/hero_spa_woman.png"
            alt="Luxury Spa Treatment"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

    </section>
  );
}

export default Hero;
