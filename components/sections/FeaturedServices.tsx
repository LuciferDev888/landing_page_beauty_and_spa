import Image from "next/image";
import { Clock } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface FeaturedServicesProps {
  lang: Language;
}

export function FeaturedServices({ lang }: FeaturedServicesProps) {
  const t = translations[lang].featured;
  const services = t.services;

  // We match our 4 generated images to the services list index
  const images = [
    "/images/category_facial.png",
    "/images/category_massage.png",
    "/images/category_tech.png",
    "/images/category_hairwash.png",
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-stone-900 dark:bg-stone-950 dark:text-white relative transition-colors duration-300">
      {/* Background soft glowing accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-3 block">
            {t.subtitle}
          </span>
          <h2 className="text-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-primary mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#F3EFE9] dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-200 dark:border-primary/15 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative w-full h-[200px] overflow-hidden bg-stone-100 dark:bg-stone-950">
                <Image
                  src={images[idx]}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm text-stone-800 dark:text-stone-200 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-3">
                  <h3 className="text-serif text-lg font-bold text-stone-900 dark:text-white tracking-wide group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-650 dark:text-stone-400 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>

                {/* Card Footer: Price & Book */}
                <div className="flex justify-between items-center border-t border-primary/15 dark:border-primary/10 pt-4 mt-6">
                  <span className="text-primary font-bold text-xl md:text-2xl tracking-tight">
                    {service.price}
                  </span>
                  <a
                    href="#appointment"
                    className="text-stone-750 dark:text-stone-300 hover:text-primary dark:hover:text-primary font-bold uppercase text-[10px] md:text-xs tracking-wider transition-colors"
                  >
                    {t.bookNow} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="#services"
            className="border border-primary text-primary hover:bg-primary hover:text-white dark:text-primary px-8 py-3.5 rounded-full font-semibold uppercase text-xs md:text-sm tracking-wider transition-all duration-300"
          >
            {t.viewAll}
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedServices;
