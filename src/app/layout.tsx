import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gloriola = localFont({
  src: [
    {
      path: "./fonts/MS Gloriola II Std Reg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MS Gloriola II Std Semibd.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/MS Gloriola II Std Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gloriola",
});

export const metadata: Metadata = {
  title: "Insight Safari",
  openGraph: {
    images: "/public/backgrounds/ferns-1.webp",
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
      className={`${geistSans.variable} ${geistMono.variable} ${gloriola.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-full flex flex-col bg-green-800 transition-all">
        {children}
      </body>
    </html>
  );
}
