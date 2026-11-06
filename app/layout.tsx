import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb", display: "swap" });

const description =
  "Tanvansh Singh: Solution Engineer at Siemens Energy, founder and builder. Experience, projects, skills and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · ${site.title}`,
  description,
  keywords: ["Tanvansh Singh", "Siemens Energy", "Solution Engineer", "portfolio", "resume", "digital twin", "BIM"],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title: `${site.name} · Portfolio`,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: `${site.name} · Portfolio`, description },
};

export const viewport: Viewport = {
  themeColor: "#08090E",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-ink text-fg">{children}</body>
    </html>
  );
}
