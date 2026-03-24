import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Nancy AKPO | Data Strategist & Visualization Expert",
  description: "Portfolio de Nancy AKPO. Je transforme des données brutes en décisions stratégiques et visualisations impactantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background selection:bg-primary/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
