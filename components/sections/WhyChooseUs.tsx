import { Sparkles, Users, Leaf, ShieldCheck, Heart } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface WhyChooseUsProps {
  lang: Language;
}

export function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang].whyChooseUs;

  const icons = [
    <Sparkles key="1" className="w-6 h-6 text-primary" />,
    <Users key="2" className="w-6 h-6 text-primary" />,
    <Leaf key="3" className="w-6 h-6 text-primary" />,
    <ShieldCheck key="4" className="w-6 h-6 text-primary" />,
    <Heart key="5" className="w-6 h-6 text-primary" />,
  ];

  const features = t.features.map((feat, idx) => ({
    ...feat,
    icon: icons[idx],
  }));

  return (
    <section className="py-20 bg-[#F3EFE9] dark:bg-stone-950 text-stone-900 dark:text-white relative transition-colors duration-300">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs md:text-sm tracking-[0.3em] uppercase mb-3 block">
            {t.subtitle}
          </span>
          <h2 className="text-serif text-3xl md:text-4xl font-bold tracking-wide mb-4">
            {t.title}
          </h2>
          <div className="w-16 h-[1.5px] bg-primary mx-auto mt-6" />
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-stone-900 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 group border border-stone-200 dark:border-primary/15 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#F3EFE9] dark:bg-stone-850 border border-primary/20 flex items-center justify-center mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-stone-900 dark:text-white font-bold text-sm tracking-wide mb-3 uppercase">
                {feat.title}
              </h3>
              <p className="text-stone-650 dark:text-stone-400 text-xs leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
