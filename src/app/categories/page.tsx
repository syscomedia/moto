import type { Metadata } from "next";
import CategoriesClient from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Nos Motos & Scooters – T-Max, GSX-R, Quad, Pièces | Showroom",
  description:
    "Découvrez le showroom SPEED MOTO PIECES : Yamaha T-Max 560, Suzuki GSX-R 1000, Quad 4x4, pièces détachées toutes marques, export occasion. Épinay-sur-Seine (93). Meilleur choix de motos et scooters en Seine-Saint-Denis.",
  keywords: [
    "showroom moto 93",
    "Yamaha T-Max 560",
    "T-Max occasion",
    "Suzuki GSX-R 1000",
    "GSX-R occasion",
    "quad 4x4 occasion",
    "pièces détachées moto",
    "pièces toutes marques",
    "export scooter occasion",
    "moto occasion Seine-Saint-Denis",
    "scooter occasion Épinay",
    "achat moto 93",
  ],
  alternates: {
    canonical: "https://speedmoto.fr/categories",
  },
  openGraph: {
    title: "Showroom Motos & Scooters – SPEED MOTO PIECES Épinay 93",
    description:
      "T-Max 560, GSX-R 1000, Quad, Pièces Détachées, Export. Le meilleur choix de deux-roues en Seine-Saint-Denis.",
    url: "https://speedmoto.fr/categories",
  },
};

export default function CategoriesPage() {
  return <CategoriesClient />;
}
