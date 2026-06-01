import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface AboutUsProps {
  lang: Language;
}

export function AboutUs({ lang }: AboutUsProps) {
  const t = translations[lang].about;

  const stats = [
    { value: "10+", label: t.stats.experience },
    { value: "15,000+", label: t.stats.customers },
    { value: "32+", label: t.stats.services },
    { value: "100%", label: t.stats.products },
  ];

  return (
    <section id="about" className="py-20 bg-[#F3EFE9] dark:bg-stone-950 relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Large Luxury Spa Interior Image */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg border border-primary/30 dark:border-primary/20 bg-stone-150 dark:bg-stone-900 group">
          <Image
            src="/images/about_spa_interior.png"
            alt="Lavish Luxury Spa Interior"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle gold decorative border overlay */}
          <div className="absolute inset-4 border border-primary/40 dark:border-primary/30 rounded-2xl pointer-events-none group-hover:inset-3 transition-all duration-300" />
        </div>

        {/* Right Side: Copy & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-primary dark:text-primary font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
            {t.subtitle}
          </span>
          
          <h2 className="text-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 tracking-wide leading-tight mb-6">
            {t.title}
          </h2>
          
          <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed mb-6">
            {t.desc1}
          </p>
          
          <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed mb-10">
            {t.desc2}
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-b border-primary/30 dark:border-primary/25 py-8 mb-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col text-center sm:text-left">
                <span className="text-primary font-bold text-2xl md:text-3xl tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-stone-800 dark:text-stone-400 text-[10px] md:text-xs uppercase tracking-wider font-bold leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex">
            <a
              href="#contact"
              className="bg-gold-gradient hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all text-white font-semibold uppercase text-xs md:text-sm tracking-wider px-8 py-4 rounded-full shadow-md"
            >
              {t.learnMore}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
