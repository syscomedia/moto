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
    default: "SPEED MOTO | Vente Moto, Scooter & Quad à Épinay-sur-Seine",
    template: "%s | SPEED MOTO",
  },
  description: "SPEED MOTO (Speed Moto Pièces) : Vente de motos, scooters, quads neufs et d'occasion. Entretien, pare-brise et pièces détachées à Épinay-sur-Seine (93).",
  keywords: ["moto", "scooter", "quad", "moto cross", "t-max", "tmax 560", "entretien moto", "Épinay-sur-Seine", "93", "Seine-Saint-Denis"],
  authors: [{ name: "SPEED MOTO" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://speedmoto.fr",
    siteName: "SPEED MOTO",
    title: "SPEED MOTO | Experts Moto & Quad en Seine-Saint-Denis",
    description: "Découvrez notre large gamme de motos, scooters et quads. Services d'entretien et pièces détachées au meilleur prix.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPEED MOTO Showroom",
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

