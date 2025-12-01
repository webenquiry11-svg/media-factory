import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- THIS IS CRITICAL
import Navbar from "../components/sections/HeroSection";
import fevicon from "../public/fevicon.png";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media Factory",
  description: "We craft digital experiences.",
  icons: fevicon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}