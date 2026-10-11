import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaWeb Studio | Webdesign & Digitale Lösungen",
  description: "NovaWeb Studio – Webdesign & Digitale Lösungen. Individuelles Webdesign und moderne, KI-gestützte Webentwicklung für Restaurants, Cafés und kleine Unternehmen in Deutschland. Entdecke Leistungen und ein erstes Demo-Projekt.",
  openGraph: {
    title: "NovaWeb Studio | Webdesign & Digitale Lösungen",
    siteName: "NovaWeb Studio",
    description: "NovaWeb Studio: Individuelle, responsive Websites für Restaurants, Cafés und kleine Unternehmen in Deutschland.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="de"><body>{children}</body></html>;
}
