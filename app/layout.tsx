import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Lavish Beauty & Spa | Luxury Wellness & Rejuvenation Center",
  description: "Experience premium luxury spa treatments. Relax, rejuvenate, and glow with our professional technicians and high-end facial care, body massages, and herbal therapy.",
  keywords: "luxury spa, beauty salon, facial care, body massage, wellness center, Lavish Spa, relaxation",
  openGraph: {
    title: "Lavish Beauty & Spa | Premium Wellness",
    description: "Relax, rejuvenate, and glow at the most premium beauty spa. Book your appointment today.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-bg-beige text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
