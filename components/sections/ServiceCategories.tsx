import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface ServiceCategoriesProps {
  lang: Language;
}

export function ServiceCategories({ lang }: ServiceCategoriesProps) {
  const t = translations[lang].categories;

  const categories = [
    {
      id: "01",
      title: t.facial.title,
      desc: t.facial.desc,
      img: "/images/category_facial.png",
    },
    {
      id: "02",
      title: t.massage.title,
      desc: t.massage.desc,
      img: "/images/category_massage.png",
    },
    {
      id: "03",
      title: t.tech.title,
      desc: t.tech.desc,
      img: "/images/category_tech.png",
    },
    {
      id: "04",
      title: t.hairwash.title,
      desc: t.hairwash.desc,
      img: "/images/category_hairwash.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#ECE6DC] dark:bg-stone-900/40 relative transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full">
        
        {/* Grid Layout of 4 Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-stone-200/60 dark:border-stone-800 hover:-translate-y-1.5 h-[400px]"
            >
              {/* Top Text Details */}
              <div className="p-6 md:p-8 flex flex-col gap-2.5">
                <span className="text-primary font-bold text-xs md:text-sm tracking-wider block">
                  {cat.id}. {cat.title.toUpperCase()}
                </span>
                <p className="text-stone-700 dark:text-stone-300 text-xs md:text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="relative w-full h-[220px] overflow-hidden rounded-b-3xl bg-stone-100 dark:bg-stone-800">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServiceCategories;
