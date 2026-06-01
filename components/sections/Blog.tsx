import Image from "next/image";
import { Language, translations } from "@/lib/translations";

interface BlogProps {
  lang: Language;
}

export function Blog({ lang }: BlogProps) {
  const t = translations[lang].blog;
  const articlesList = t.articles;

  const images = [
    "/images/blog_skincare.png",
    "/images/category_massage.png",
    "/images/category_tech.png",
    "/images/promo_products.png",
  ];

  const articles = articlesList.map((art, idx) => ({
    ...art,
    img: images[idx],
  }));

  return (
    <section id="blog" className="py-20 bg-white dark:bg-stone-900/10 relative transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-3 block">
            {t.subtitle}
          </span>
          <h2 className="text-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-100 tracking-wide mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-primary mx-auto mt-6" />
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-[#F3EFE9] dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-stone-200 dark:border-stone-850 flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative w-full h-[180px] overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image
                  src={art.img}
                  alt={art.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-2">
                  <span className="text-primary text-[10px] uppercase font-bold tracking-wider">
                    {art.date}
                  </span>
                  <h3 className="text-stone-900 dark:text-stone-100 font-bold text-xs md:text-sm tracking-wide leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-stone-700 dark:text-stone-400 text-[11px] leading-relaxed line-clamp-3 mt-1">
                    {art.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-primary/20 dark:border-primary/15">
                  <a
                    href="#"
                    className="text-stone-750 dark:text-stone-300 group-hover:text-primary font-bold uppercase text-[10px] tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    {t.readMore} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <a
            href="#blog"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-full font-semibold uppercase text-xs md:text-sm tracking-wider transition-all duration-300"
          >
            {t.viewAll}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Blog;
