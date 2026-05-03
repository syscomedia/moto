import type { Metadata } from "next";
import { products } from "@/data/site-data";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};

  const isPiecesCat = product.category === "pieces-detachees";
  const isExport = product.category === "export-occasions";

  const description = isPiecesCat
    ? `Pièces détachées moto et scooter toutes marques chez SPEED MOTO PIECES, Épinay-sur-Seine (93). ${product.description} Fourches, carénages, moteurs, selles, optiques et plus.`
    : isExport
    ? `Export scooter occasion et pièces avec carte grise ou RSV. ${product.description} SPEED MOTO PIECES, Épinay-sur-Seine (93).`
    : `${product.name} chez SPEED MOTO PIECES, Épinay-sur-Seine (93). ${product.description} Meilleur prix en Seine-Saint-Denis. Appelez le 07 59 75 42 75.`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://speedmoto.fr${product.image}`,
    url: `https://speedmoto.fr/products/${id}`,
    offers: {
      "@type": "Offer",
      price: product.price > 0 ? product.price : undefined,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "SPEED MOTO PIECES",
        telephone: "+33759754275",
        address: {
          "@type": "PostalAddress",
          streetAddress: "33 Route de Saint-Leu",
          addressLocality: "Épinay-sur-Seine",
          postalCode: "93800",
          addressCountry: "FR",
        },
      },
    },
  };

  return {
    title: `${product.name} – Vente & Pièces | SPEED MOTO PIECES Épinay 93`,
    description,
    keywords: [
      product.name,
      `${product.name} occasion`,
      `${product.name} pièces`,
      `acheter ${product.name}`,
      "SPEED MOTO PIECES",
      "Épinay-sur-Seine",
      "93",
      "moto occasion 93",
    ],
    alternates: { canonical: `https://speedmoto.fr/products/${id}` },
    openGraph: {
      title: `${product.name} | SPEED MOTO PIECES`,
      description,
      url: `https://speedmoto.fr/products/${id}`,
      images: [{ url: `https://speedmoto.fr${product.image}`, alt: product.name }],
    },
    other: {
      "application/ld+json": JSON.stringify(productJsonLd),
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://speedmoto.fr${product.image}`,
    url: `https://speedmoto.fr/products/${id}`,
    offers: {
      "@type": "Offer",
      price: product.price > 0 ? product.price : undefined,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "SPEED MOTO PIECES",
        telephone: "+33759754275",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductClient params={params} />
    </>
  );
}
