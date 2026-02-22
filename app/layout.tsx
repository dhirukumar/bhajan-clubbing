import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Bhajan Clubbing — Faridabad's First Devotional Fest",
  description: "Faridabad's First Devotional Fest at Omaxe World Street. Saturday, 14 March 2026 from 4:00 PM onwards.",
  keywords: "bhajan clubbing, faridabad, devotional fest, omaxe world street, march 2026",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} ${spaceMono.variable} grain`} style={{ fontFamily: "var(--font-cormorant), serif" }}>
        {children}
      </body>
    </html>
  );
}
