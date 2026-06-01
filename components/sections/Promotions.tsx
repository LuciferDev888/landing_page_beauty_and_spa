import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface PromotionsProps {
  lang: Language;
}

export function Promotions({ lang }: PromotionsProps) {
  const t = translations[lang].promotions;
  
  const images = [
    "/images/promo_products.png",
    "/images/promo_couple.png",
    "/images/promo_vip.png",
  ];

  const promos = t.cards.map((card, idx) => ({
    ...card,
    img: images[idx],
  }));

  return (
    <section id="promotions" className="py-20 bg-[#F3EFE9] dark:bg-stone-950 relative transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy and Action */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <span className="text-primary dark:text-primary font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block">
            {t.subtitle}
          </span>
          <h2 className="text-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-wide leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed mb-8">
            {t.desc}
          </p>
          <div className="flex">
            <a
              href="#appointment"
              className="bg-gold-gradient hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all text-white font-semibold uppercase text-xs md:text-sm tracking-wider px-8 py-4 rounded-full shadow-md"
            >
              {t.cta}
            </a>
          </div>
        </div>

        {/* Right Side: 3 Promotion Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-primary/30 dark:border-primary/20 flex flex-col justify-between h-[380px]"
            >
              {/* Promo Details */}
              <div className="p-5 flex flex-col gap-1.5">
                <span className="text-primary text-serif text-2xl font-bold tracking-tight">
                  {promo.badge}
                </span>
                <h3 className="text-stone-850 dark:text-stone-200 font-bold text-sm tracking-wide mt-1">
                  {promo.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-[11px] leading-relaxed">
                  {promo.desc}
                </p>
              </div>

              {/* Promo Image */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-b-2xl bg-stone-100 dark:bg-stone-800">
                <Image
                  src={promo.img}
                  alt={promo.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
                <div className="absolute inset-0 bg-stone-950/10 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Promotions;
