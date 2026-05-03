import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FloatingContact from "@/components/ui/FloatingContact";

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
    default: "SPEED MOTO PIECES | N°1 Pièces Moto, Scooter & Quad – Épinay-sur-Seine (93)",
    template: "%s | SPEED MOTO PIECES – Pièces Moto & Scooter 93",
  },
  description:
    "SPEED MOTO PIECES : spécialiste N°1 en pièces détachées moto et scooter à Épinay-sur-Seine (93). Vente moto neuf et occasion, carénages, fourches, moteurs, freinage. Toutes marques : Honda, Yamaha, Suzuki, Piaggio, Peugeot. Export international. Appelez le 07 59 75 42 75.",
  keywords: [
    "pièces moto",
    "pièces détachées moto",
    "pièces scooter",
    "pièces moto France",
    "moto occasion",
    "vente moto",
    "scooter occasion",
    "quad occasion",
    "moto cross",
    "T-Max 560",
    "Yamaha T-Max",
    "Suzuki GSX-R",
    "GSX-R 1000",
    "Suzuki GSX-R 1000",
    "pièces Honda",
    "pièces Yamaha",
    "pièces Suzuki",
    "pièces Piaggio",
    "pièces Peugeot",
    "carénage moto",
    "fourche moto",
    "moteur scooter",
    "plaquettes de frein moto",
    "entretien moto",
    "atelier moto 93",
    "moto Épinay-sur-Seine",
    "scooter Seine-Saint-Denis",
    "moto 93",
    "pièces moto 93",
    "moto Épinay",
    "moto Paris banlieue",
    "export moto",
    "export scooter",
    "achat moto occasion",
    "vente pièces moto en ligne",
    "Speed Moto Pièces",
    "SPEED MOTO PIECES",
    "garage moto Épinay",
    "entretien scooter 93",
    "réparation moto 93",
    "pneu moto",
    "optique moto",
    "top case moto",
    "selle moto",
    "pot d'échappement moto",
    "guidon moto",
    "compteur moto",
    "bulle scooter",
    "visière casque",
    "MBK",
    "Gilera",
    "Aprilia",
    "Vespa",
    "Kymco",
    "SYM",
    "BMW C1",
    "X-Max",
    "Burgman",
    "Forza",
    "PCX",
    "Booster",
    "Stunt",
    "Nitro",
    "Runner",
    "Nexus",
    "MP3",
    "Metropolis",
  ],
  authors: [{ name: "SPEED MOTO PIECES", url: "https://speedmoto.fr" }],
  creator: "SPEED MOTO PIECES",
  publisher: "SPEED MOTO PIECES",
  category: "Pièces Moto & Scooter",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://speedmoto.fr",
    siteName: "SPEED MOTO PIECES",
    title: "SPEED MOTO PIECES | N°1 Pièces Moto & Scooter – Épinay-sur-Seine 93",
    description:
      "Spécialiste pièces moto et scooter toutes marques à Épinay-sur-Seine. Vente, entretien, export. Honda, Yamaha, Suzuki, Piaggio… Appelez le 07 59 75 42 75.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPEED MOTO PIECES – Pièces Moto & Scooter Épinay-sur-Seine 93",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPEED MOTO PIECES | Pièces Moto & Scooter – Épinay 93",
    description:
      "N°1 pièces détachées moto et scooter à Épinay-sur-Seine (93). Toutes marques. Export. Appelez le 07 59 75 42 75.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://speedmoto.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icoa.png?v=1",
    apple: "/icoa.png?v=1",
  },
  verification: {
    google: "",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "SPEED MOTO PIECES",
  alternateName: "Speed Moto Pièces",
  url: "https://speedmoto.fr",
  logo: "https://speedmoto.fr/icoa.png",
  image: "https://speedmoto.fr/og-image.jpg",
  description:
    "Spécialiste N°1 en pièces détachées moto et scooter à Épinay-sur-Seine. Vente moto, scooter, quad neuf et occasion. Entretien toutes marques. Export international.",
  telephone: "+33759754275",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33 Route de Saint-Leu",
    addressLocality: "Épinay-sur-Seine",
    postalCode: "93800",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9565,
    longitude: 2.3075,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "14:00",
      closes: "19:00",
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pièces Moto & Scooter Toutes Marques",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pièces détachées moto" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Carénages moto et scooter" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fourches moto" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Moteurs scooter" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Yamaha T-Max 560" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Suzuki GSX-R 1000" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Quad 4x4" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Entretien moto et scooter" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Export scooter occasion" } },
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
      <head>
        <link rel="icon" href="/icoa.png?v=1" />
        <link rel="apple-touch-icon" href="/icoa.png?v=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
        <FloatingContact />
      </body>
    </html>
  );
}
