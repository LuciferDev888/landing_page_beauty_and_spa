import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Language, translations } from "@/lib/translations";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const nav = translations[lang].nav;

  const serviceLinks = [
    { label: translations[lang].categories.facial.title, href: "#services" },
    { label: translations[lang].categories.massage.title, href: "#services" },
    { label: translations[lang].categories.tech.title, href: "#services" },
    { label: translations[lang].categories.hairwash.title, href: "#services" },
    { label: t.tag, href: "#services" },
  ];

  const companyLinks = [
    { label: nav.about, href: "#about" },
    { label: nav.promotions, href: "#promotions" },
    { label: nav.pricing, href: "#pricing" },
    { label: translations[lang].blog.subtitle, href: "#blog" },
    { label: lang === "en" ? "Careers" : "Tuyển dụng", href: "#" },
  ];

  const policyLinks = [
    { label: lang === "en" ? "Privacy Policy" : "Chính sách bảo mật", href: "#" },
    { label: lang === "en" ? "Terms of Service" : "Điều khoản dịch vụ", href: "#" },
    { label: lang === "en" ? "Booking & Cancellation" : "Chính sách đặt lịch", href: "#" },
    { label: lang === "en" ? "VIP Member Terms" : "Chính sách hội viên VIP", href: "#" },
  ];

  return (
    <footer className="bg-charcoal text-stone-300 pt-16 pb-8 border-t border-primary/20">
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 mx-auto max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Logo & Brand Intro */}
          <div className="lg:col-span-1.5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 2 9 7 9 10C9 13.5 12 15 12 15C12 15 15 13.5 15 10C15 7 12 2 12 2Z" opacity="0.85" />
                <path d="M12 5C12 5 7.5 9 6.5 12C5.5 15 7.5 17 10 16.5C11 16.3 12 15 12 15C12 15 13 16.3 14 16.5C16.5 17 18.5 15 17.5 12C16.5 9 12 5 12 5Z" opacity="0.75" />
                <path d="M12 9C12 9 6 12 4.5 15C3 18 5.5 20 8.5 19C10.5 18.3 12 15 12 15C12 15 13.5 18.3 15.5 19C18.5 20 21 18 19.5 15C18 12 12 9 12 9Z" opacity="0.65" />
              </svg>
              <div className="flex flex-col">
                <span className="text-serif text-lg font-bold tracking-[0.15em] text-white">LAVISH</span>
                <span className="text-[9px] tracking-[0.25em] text-primary">BEAUTY & SPA</span>
              </div>
            </a>
            <p className="text-xs text-stone-400 leading-relaxed mt-2">
              {t.desc}
            </p>
            <div className="flex items-center gap-3.5 mt-3">
              <a href="#" className="w-8 h-8 rounded-full border border-stone-750 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-750 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-stone-750 flex items-center justify-center hover:border-primary hover:text-primary transition-colors" aria-label="Youtube">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.86.51 9.388.51 9.388.51s7.528 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Service Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-serif text-white font-semibold text-sm uppercase tracking-widest border-l-2 border-primary pl-2.5">
              {t.servicesTitle}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              {serviceLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-serif text-white font-semibold text-sm uppercase tracking-widest border-l-2 border-primary pl-2.5">
              {t.companyTitle}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              {companyLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Policies */}
          <div className="flex flex-col gap-4">
            <h4 className="text-serif text-white font-semibold text-sm uppercase tracking-widest border-l-2 border-primary pl-2.5">
              {t.policiesTitle}
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              {policyLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 5: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-serif text-white font-semibold text-sm uppercase tracking-widest border-l-2 border-primary pl-2.5">
              {t.contactTitle}
            </h4>
            <div className="flex flex-col gap-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:0901234567" className="hover:text-primary transition-colors">
                  0901.234.567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:contact@lavishspa.vn" className="hover:text-primary transition-colors">
                  contact@lavishspa.vn
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{t.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 py-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>&copy; {new Date().getFullYear()} {t.rights}</span>
          </div>
          <div className="flex gap-4">
            <span>{t.tag}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
