import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact – Devis Pièces Moto & Scooter | 07 59 75 42 75",
  description:
    "Contactez SPEED MOTO PIECES à Épinay-sur-Seine (93). Demande de devis pièces moto, renseignement véhicule, entretien atelier. Réponse sous 24h. Tél : 07 59 75 42 75.",
  keywords: [
    "contact speed moto pièces",
    "devis pièces moto",
    "téléphone garage moto 93",
    "horaires moto Épinay",
    "adresse speed moto",
    "garage moto épinay-sur-seine",
    "contact atelier scooter 93",
  ],
  alternates: {
    canonical: "https://speedmoto.fr/contact",
  },
  openGraph: {
    title: "Contact SPEED MOTO PIECES – Épinay-sur-Seine 93",
    description:
      "Contactez notre équipe pour un devis pièces moto, entretien ou achat de véhicule. 33 Route de Saint-Leu, Épinay-sur-Seine. Tél : 07 59 75 42 75.",
    url: "https://speedmoto.fr/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
