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
  metadataBase: new URL("https://speedmoto.fr"),
  title: {
    default: "SPEED MOTO PIECES | Vente Moto, Scooter & Quad à Épinay-sur-Seine",
    template: "%s | SPEED MOTO PIECES",
  },
  description: "SPEED MOTO PIECES : Vente de motos, scooters, quads neufs et d'occasion. Entretien, pare-brise et pièces détachées à Épinay-sur-Seine (93).",
  keywords: ["moto", "scooter", "quad", "moto cross", "t-max", "tmax 560", "entretien moto", "Épinay-sur-Seine", "93", "Seine-Saint-Denis"],
  authors: [{ name: "SPEED MOTO PIECES" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://speedmoto.fr",
    siteName: "SPEED MOTO PIECES",
    title: "SPEED MOTO PIECES | Experts Moto & Quad en Seine-Saint-Denis",
    description: "Experts en vente et entretien de deux-roues à Épinay-sur-Seine.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPEED MOTO PIECES Showroom",
      },
    ],
  },
  icons: {
    icon: "/icoa.png?v=1",
    apple: "/icoa.png?v=1",
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
      <head>
        <link rel="icon" href="/icoa.png?v=1" />
        <link rel="apple-touch-icon" href="/icoa.png?v=1" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
