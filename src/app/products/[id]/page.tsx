import type { Metadata } from "next";
import { products } from "@/data/site-data";
import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

const returnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "FR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnInStore",
  returnFees: "https://schema.org/FreeReturn",
};

const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0",
    currency: "EUR",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "FR",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 1,
      unitCode: "DAY",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 3,
      unitCode: "DAY",
    },
  },
};

function buildProductJsonLd(product: (typeof products)[0], id: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://speedmotopieces.com${product.image}`,
    url: `https://speedmotopieces.com/products/${id}`,
    brand: {
      "@type": "Brand",
      name: "SPEED MOTO PIECES",
      url: "https://speedmotopieces.com",
    },
    offers: {
      "@type": "Offer",
      price: product.price > 0 ? product.price : "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      hasMerchantReturnPolicy: returnPolicy,
      shippingDetails,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2",
      bestRating: "5",
      worstRating: "1",
    },
  };
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
    alternates: { canonical: `https://speedmotopieces.com/products/${id}` },
    openGraph: {
      title: `${product.name} | SPEED MOTO PIECES`,
      description,
      url: `https://speedmotopieces.com/products/${id}`,
      images: [{ url: `https://speedmotopieces.com${product.image}`, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const productJsonLd = buildProductJsonLd(product, id);

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
