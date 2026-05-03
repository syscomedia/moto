import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "À Propos – Notre Histoire & Expertise Moto",
  description:
    "Découvrez SPEED MOTO PIECES, spécialiste moto et scooter à Épinay-sur-Seine (93). Plus de 15 ans d'expertise en vente, entretien et pièces détachées toutes marques. Votre partenaire de confiance en Seine-Saint-Denis.",
  keywords: [
    "à propos speed moto pièces",
    "garage moto Épinay-sur-Seine",
    "spécialiste moto 93",
    "histoire speed moto",
    "expertise moto Seine-Saint-Denis",
    "atelier moto épinay",
  ],
  alternates: {
    canonical: "https://speedmoto.fr/about",
  },
  openGraph: {
    title: "À Propos de SPEED MOTO PIECES – Expertise Moto & Scooter 93",
    description:
      "15 ans d'expertise en vente et entretien de deux-roues à Épinay-sur-Seine. Pièces toutes marques, scooters d'occasion, export.",
    url: "https://speedmoto.fr/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
