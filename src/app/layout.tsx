import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SerwistProvider } from "@serwist/turbopack/react";

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
  applicationName: "Insight Safari",
  openGraph: {
    type: "website",
    images: "/public/backgrounds/ferns-1.webp",
    siteName: "Insight Safari",
    title: "Insight Safari",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Insight Safari",
    startupImage: "/public/backgrounds/ferns-1.webp",
  },
  twitter: {
    card: "summary",
    title: "Insight Safari",
  },
  formatDetection: {
    telephone: false,
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
        <SerwistProvider swUrl="/sw.js">{children}</SerwistProvider>
      </body>
    </html>
  );
}
