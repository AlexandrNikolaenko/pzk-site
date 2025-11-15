import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/tailwind.css";
import "../styles/root.scss";
import "../styles/global.scss";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title:
    "Профессиональная подсветка и украшение фасадов загородных домов и зданий в СПб | ПЗК",
  description:
    "Профессиональная контурная и новогодняя подсветка коттеджа, загородного дома от Первой Загородной Компании в Санкт-Петербурге и области. Выполнение работ под ключ от 1 дня.",
  keywords: "Новгодняя подсветка, празничное освещение, Контурная иллюминация",
  other: {
    HandheldFriendly: "true",
    MobileOptimized: "width",
    "apple-mobile-web-app-capable": "yes",
    "google-site-verification": "hL4FslsOrsFRPh0i51B5Qy4MYeG5N9z-p1NKR41eYvc",
    "yandex-verification": "fe1f649d14a2e2df",
  },
  openGraph: {
    url: "https://pzkgroup.ru/",
    title:
      "Профессиональная подсветка и украшение фасадов загородных домов и зданий в СПб | ПЗК",
    description:
      "Профессиональная контурная и новогодняя подсветка коттеджа, загородного дома от Первой Загородной Компании в Санкт-Петербурге и области. Выполнение работ под ключ от 1 дня.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Профессиональная подсветка и украшение фасадов загородных домов и зданий в СПб | ПЗК",
    description:
      "Профессиональная контурная и новогодняя подсветка коттеджа, загородного дома от Первой Загородной Компании в Санкт-Петербурге и области. Выполнение работ под ключ от 1 дня.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
