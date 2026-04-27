import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pôle Position 93 | Vente Moto, Scooter & Quad à Épinay-sur-Seine",
    template: "%s | Pôle Position 93",
  },
  description: "Pôle Position 93 (Speed Moto Pièces) : Vente de motos, scooters, quads neufs et d'occasion. Entretien, pneus, pare-brise et pièces détachées à Épinay-sur-Seine (93).",
  keywords: ["moto", "scooter", "quad", "moto cross", "scooter 750", "pneu moto", "entretien moto", "Épinay-sur-Seine", "93", "Seine-Saint-Denis"],
  authors: [{ name: "Pôle Position 93" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://poleposition93.fr",
    siteName: "Pôle Position 93",
    title: "Pôle Position 93 | Experts Moto & Quad en Seine-Saint-Denis",
    description: "Découvrez notre large gamme de motos, scooters et quads. Services d'entretien et pièces détachées au meilleur prix.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pôle Position 93 Showroom",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

