import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import DownloadResumeButton from "@/components/DownloadResumeButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Roshaan Siddiqui Portfolio",
    template: "%s - Roshaan Siddiqui",
  },
  description:
    "Welcome to Roshaan Siddiqui's portfolio – a passionate web developer specializing in building modern, responsive websites and applications. Explore my projects and learn more about me. NextJS | Angular | React | TS | JS | TypeScript | Javascript | Hire | FullStack | Software | Job | Freelance",
    twitter: {
      card: "summary_large_image"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body className={`antialiased ${roboto.className} text-foreground bg-background`}>
        <Navbar />
        <div className="pt-20 md:pt-32">
          {children}
        </div>
        <DownloadResumeButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
