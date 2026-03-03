import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";

export const metadata: Metadata = {
  title: "Venu Overseas | Premium Indian Spices & Agro Commodities",
  description:
    "Venu Overseas — FSSAI, HACCP, ISO & KOSHER certified Indian agri exporter from Visnagar, Gujarat. Bulk spices, oil seeds, millets & dehydrated products exported to 11+ countries.",
  keywords: [
    "Indian agri exporter",
    "spices export India",
    "bulk spice supplier India",
    "FSSAI certified spice exporter",
    "cumin export Gujarat",
    "oil seeds exporter India",
    "millets exporter India",
    "HACCP certified exporter",
    "Unjha spice exporter",
    "Gujarat agri export company",
  ],
  openGraph: {
    title: "Venu Overseas | Premium Indian Spices & Agro Commodities",
    description: "FSSAI, HACCP, ISO & KOSHER certified Indian agri exporter from Visnagar, Gujarat.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased font-ibm bg-bg text-fg">
        <Navbar />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
