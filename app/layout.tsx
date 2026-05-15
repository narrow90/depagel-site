import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const myFont = localFont({
  src: "./fonts/Baloo-Regular.ttf",
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: "Depagel Group s.r.l.",
  description: "",
  icons: {
    icon: "/logo.pmg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
  className={`${myFont.variable} font-sans text-[#0F1720] antialiased bg-[url('/SFONDO.png')] bg-[length:750px] bg-right-top bg-fixed bg-no-repeat`}
>
  <div className="min-h-screen bg-white/30">
    <Header />
    {children}
    <Footer />
  </div>
</body>
    </html>
  );
}