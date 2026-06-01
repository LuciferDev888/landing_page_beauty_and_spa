import { Star } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface TestimonialsProps {
  lang: Language;
}

export function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;
  const reviews = t.reviews;

  // Initials and roles will be mapped to the reviews array
  const extraInfo = [
    { initials: "SN", role: lang === "en" ? "Verified Client" : "Khách hàng thân thiết" },
    { initials: "EH", role: lang === "en" ? "VIP Member" : "Thành viên VIP" },
    { initials: "OC", role: lang === "en" ? "Verified Client" : "Khách hàng thân thiết" },
  ];

  const processedReviews = reviews.map((rev, idx) => ({
    ...rev,
    initials: extraInfo[idx].initials,
    role: extraInfo[idx].role,
  }));

  return (
    <section className="py-20 bg-[#F3EFE9] dark:bg-stone-950 relative overflow-hidden transition-colors duration-300">
      {/* Background abstract layout */}
      <div className="absolute -bottom-20 -left-20 w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

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

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 dark:border-stone-800 flex flex-col justify-between"
            >
              {/* Star Rating & Comment */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 text-primary fill-primary shrink-0"
                    />
                  ))}
                </div>
                <p className="text-stone-700 dark:text-stone-300 text-xs md:text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 border-t border-primary/20 dark:border-primary/15 pt-6 mt-6">
                {/* Avatar with luxury styling */}
                <div className="w-12 h-12 rounded-full bg-[#F3EFE9] dark:bg-stone-850 border border-primary flex items-center justify-center text-primary font-bold text-sm shadow-inner shrink-0 uppercase">
                  {rev.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-900 dark:text-stone-100 font-bold text-xs md:text-sm tracking-wide">
                    {rev.name}
                  </span>
                  <span className="text-primary text-[10px] uppercase font-bold tracking-wider">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
