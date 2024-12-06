import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Roshaan Siddiqui",
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
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
