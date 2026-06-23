import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Background3D from "@/components/Background3D";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Klave Studio | Transforming Ideas Into Intelligent Digital Solutions",
  description: "Senior engineering & design studio building premium websites, AI integration, custom software and mobile applications for modern enterprise.",
  keywords: "Custom Software, AI Solutions, Web Development, Mobile Apps, UI/UX Design, Cloud Solutions, ERP, CRM, Klave Studio",
  authors: [{ name: "Klave Studio" }],
  openGraph: {
    title: "Klave Studio | Transforming Ideas Into Intelligent Digital Solutions",
    description: "Premium digital design and engineering studio.",
    url: "https://klavestudio.com",
    siteName: "Klave Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klave Studio | Intelligent Digital Solutions",
    description: "Enterprise software development and high-end digital experiences.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#070707] text-[#f8fafc] overflow-x-hidden selection:bg-brand-amber selection:text-black">
        <SmoothScroll>
          <Background3D />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
