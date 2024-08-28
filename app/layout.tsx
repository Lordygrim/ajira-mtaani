import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({subsets:["latin"], weight:["400", "700"], variable: '--font-ibm-plex-serif'});

export const metadata: Metadata = {
  title: "Ajira Mtaani",
  description: "Your tool for locating work and workers that suit your needs within your area",
  icons:'/icons/ajiramtaani.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
