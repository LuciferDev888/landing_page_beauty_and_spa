import Image from "next/image";
import { Phone } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface CTAProps {
  lang: Language;
}

export function CTA({ lang }: CTAProps) {
  const t = translations[lang].cta;
  const nav = translations[lang].nav;

  return (
    <section id="appointment" className="relative py-24 md:py-32 overflow-hidden bg-stone-900">
      {/* Background Image with Dark Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta_spa_bg.png"
          alt="Luxury Spa Wellness Background"
          fill
          className="object-cover object-center opacity-40 scale-[1.02]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-950/80 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full text-center relative z-10">
        <span className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
          {t.subtitle}
        </span>
        
        <h2 className="text-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight mb-6">
          {t.title}
        </h2>
        
        <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
          {t.desc}
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="tel:0901234567"
            className="w-full sm:w-auto bg-gold-gradient hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all text-white font-semibold uppercase text-xs md:text-sm tracking-wider px-8 py-4 rounded-full shadow-md"
          >
            {t.book}
          </a>
          
          <a
            href="tel:0901234567"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-stone-950 text-white font-semibold uppercase text-xs md:text-sm tracking-wider px-8 py-4 rounded-full transition-all group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{nav.call}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
