import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services – Pièces Détachées, Atelier & Export Moto Scooter",
  description:
    "SPEED MOTO PIECES : large stock de pièces détachées moto et scooter toutes marques (Honda, Yamaha, Suzuki, Piaggio…). Atelier freinage, entretien complet. Export scooter occasion. Épinay-sur-Seine (93).",
  keywords: [
    "pièces détachées moto toutes marques",
    "atelier moto 93",
    "entretien scooter Épinay",
    "fourche moto",
    "carénage scooter",
    "plaquettes de frein moto",
    "moteur scooter",
    "pot d'échappement moto",
    "export scooter occasion",
    "pièces Honda",
    "pièces Yamaha",
    "pièces Suzuki",
    "pièces Piaggio",
    "pièces Peugeot",
    "pièces MBK",
    "pièces Vespa",
    "T-Max pièces",
    "Burgman pièces",
    "X-Max pièces",
    "carénage moto 93",
    "selle scooter",
    "top case moto",
    "optique moto",
    "bulles scooter",
    "freinage moto",
  ],
  alternates: {
    canonical: "https://speedmoto.fr/services",
  },
  openGraph: {
    title: "Services Moto & Scooter – Pièces, Atelier, Export | SPEED MOTO PIECES",
    description:
      "Stock de pièces moto et scooter toutes marques. Atelier entretien à Épinay-sur-Seine (93). Export scooter occasion avec carte grise ou RSV.",
    url: "https://speedmoto.fr/services",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services SPEED MOTO PIECES",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Pièces détachées moto et scooter toutes marques",
        provider: { "@type": "LocalBusiness", name: "SPEED MOTO PIECES" },
        areaServed: "Épinay-sur-Seine, Seine-Saint-Denis, Île-de-France",
        description:
          "Large stock de pièces pour Honda, Yamaha, Suzuki, Piaggio, Peugeot, BMW, MBK, Gilera, Aprilia, Vespa, Kymco, SYM.",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Atelier entretien moto et scooter",
        provider: { "@type": "LocalBusiness", name: "SPEED MOTO PIECES" },
        description: "Remplacement plaquettes de frein, interventions scooters et motos.",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Export scooter occasion et pièces détachées",
        provider: { "@type": "LocalBusiness", name: "SPEED MOTO PIECES" },
        description:
          "Vente de scooters d'occasion et pièces pour export avec carte grise ou RSV.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
