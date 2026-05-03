import type { Metadata } from "next";
import { categories } from "@/data/site-data";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const categoryMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  "t-max": {
    title: "Yamaha T-Max 560 – Vente & Pièces | Épinay-sur-Seine 93",
    description:
      "Achetez le Yamaha T-Max 560 ou trouvez des pièces T-Max chez SPEED MOTO PIECES à Épinay-sur-Seine (93). Maxi-scooter haut de gamme, moteur 560cc, ABS, TCS, écran TFT. Meilleur prix Seine-Saint-Denis.",
    keywords: [
      "Yamaha T-Max 560",
      "T-Max 560 occasion",
      "T-Max vente Épinay",
      "pièces T-Max 560",
      "T-Max 530 pièces",
      "maxi-scooter T-Max",
      "T-Max 93",
      "achat T-Max Seine-Saint-Denis",
    ],
  },
  quad: {
    title: "Quad 4x4 – Vente Quad Occasion | Épinay-sur-Seine 93",
    description:
      "Vente de quads 4x4 tout-terrain chez SPEED MOTO PIECES à Épinay-sur-Seine (93). Transmission 4x4, treuil électrique, suspensions renforcées. Quad occasion meilleur prix.",
    keywords: [
      "quad occasion",
      "vente quad 4x4",
      "quad tout-terrain",
      "quad Épinay",
      "quad 93",
      "achat quad occasion Seine-Saint-Denis",
      "quad pas cher",
    ],
  },
  "suzuki-gsxr": {
    title: "Suzuki GSX-R 1000 – Vente & Pièces | Épinay 93",
    description:
      "Suzuki GSX-R 1000 K10 occasion chez SPEED MOTO PIECES, Épinay-sur-Seine (93). Moto sportive 1000cc, freins Tokico, mode S-DMS. Pièces GSX-R toutes générations.",
    keywords: [
      "Suzuki GSX-R 1000",
      "GSX-R occasion",
      "GSX-R K10",
      "pièces GSX-R",
      "moto sportive occasion",
      "Suzuki moto 93",
      "GSX-R 1000 Épinay",
      "achat moto sportive Seine-Saint-Denis",
    ],
  },
  "pieces-detachees": {
    title: "Pièces Détachées Moto & Scooter Toutes Marques | Épinay 93",
    description:
      "Large stock de pièces détachées moto et scooter à Épinay-sur-Seine. Honda, Yamaha, Suzuki, Piaggio, Peugeot, MBK, Vespa… Carénages, fourches, moteurs, selles, optiques, pots. Envoi rapide.",
    keywords: [
      "pièces détachées moto",
      "pièces scooter toutes marques",
      "carénage moto",
      "fourche scooter",
      "moteur moto occasion",
      "pièces Honda",
      "pièces Yamaha",
      "pièces Suzuki",
      "pièces Piaggio",
      "pièces Peugeot",
      "optique moto",
      "selle scooter",
      "pot échappement moto",
      "pièces moto 93",
    ],
  },
  "export-occasions": {
    title: "Export Scooter Occasion & Pièces Moto | SPEED MOTO PIECES",
    description:
      "SPEED MOTO PIECES : export de scooters d'occasion et pièces détachées avec carte grise ou RSV. Solutions logistiques internationales depuis Épinay-sur-Seine (93). Tarifs préférentiels.",
    keywords: [
      "export scooter occasion",
      "export pièces moto",
      "carte grise scooter export",
      "RSV moto export",
      "scooter occasion export France",
      "pièces moto export",
      "export deux-roues 93",
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  const meta = categoryMeta[slug];
  if (!meta) {
    return {
      title: `${category.name} – SPEED MOTO PIECES`,
      description: category.description,
      alternates: { canonical: `https://speedmoto.fr/categories/${slug}` },
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: `https://speedmoto.fr/categories/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://speedmoto.fr/categories/${slug}`,
      images: [{ url: category.image, alt: category.name }],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category!.name,
    description: category!.description,
    url: `https://speedmoto.fr/categories/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "SPEED MOTO PIECES",
      address: {
        "@type": "PostalAddress",
        streetAddress: "33 Route de Saint-Leu",
        addressLocality: "Épinay-sur-Seine",
        postalCode: "93800",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <CategoryClient params={params} />
    </>
  );
}
