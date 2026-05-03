import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "SPEED MOTO PIECES | N°1 Pièces Moto & Scooter – Épinay-sur-Seine 93",
  description:
    "SPEED MOTO PIECES : N°1 spécialiste pièces moto et scooter à Épinay-sur-Seine (93). Vente Yamaha T-Max 560, Suzuki GSX-R 1000, Quad. Pièces détachées toutes marques : Honda, Yamaha, Suzuki, Piaggio, Peugeot. Entretien, freinage, export. Tél : 07 59 75 42 75.",
  alternates: {
    canonical: "https://speedmoto.fr",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelles marques de pièces moto vendez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPEED MOTO PIECES propose des pièces détachées pour toutes les marques : Honda, Yamaha, Suzuki, Piaggio, Peugeot, MBK, Gilera, Aprilia, Vespa, Kymco, SYM, BMW C1 et bien d'autres.",
      },
    },
    {
      "@type": "Question",
      name: "Où est situé SPEED MOTO PIECES ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPEED MOTO PIECES est situé au 33 Route de Saint-Leu, 93800 Épinay-sur-Seine (Seine-Saint-Denis). Ouvert du lundi au samedi de 09h à 12h et de 13h à 19h.",
      },
    },
    {
      "@type": "Question",
      name: "Faites-vous l'export de scooters et de pièces moto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, SPEED MOTO PIECES propose un service d'exportation de scooters d'occasion et de pièces détachées avec carte grise ou RSV. Nous gérons la logistique et tous les documents administratifs.",
      },
    },
    {
      "@type": "Question",
      name: "Vendez-vous des motos et scooters d'occasion ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous vendons des motos et scooters neufs et d'occasion, notamment le Yamaha T-Max 560, le Suzuki GSX-R 1000 et des quads 4x4. Contactez-nous au 07 59 75 42 75 pour connaître notre stock.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous un service d'entretien et de réparation moto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre atelier à Épinay-sur-Seine (93) effectue l'entretien complet de votre moto ou scooter : remplacement de plaquettes de frein, interventions mécaniques, et plus encore.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
      <SeoTextBlock />
    </>
  );
}

function SeoTextBlock() {
  return (
    <section
      aria-label="À propos de SPEED MOTO PIECES"
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
      }}
    >
      <h2>SPEED MOTO PIECES – N°1 Pièces Moto et Scooter à Épinay-sur-Seine (93)</h2>
      <p>
        SPEED MOTO PIECES est votre spécialiste numéro un en pièces détachées moto et scooter
        toutes marques à Épinay-sur-Seine, dans le département de la Seine-Saint-Denis (93).
        Que vous cherchiez des pièces moto Honda, des pièces scooter Yamaha, des carénages Suzuki,
        des pièces Piaggio, des pièces Peugeot, des pièces MBK, des pièces Vespa ou toute autre
        marque de deux-roues, vous trouverez votre bonheur dans notre vaste stock.
      </p>
      <h2>Vente de Motos, Scooters et Quads Neufs et Occasion</h2>
      <p>
        Nous proposons à la vente le Yamaha T-Max 560, maxi-scooter de référence, ainsi que le
        Suzuki GSX-R 1000 K10, moto sportive légendaire, et des quads 4x4 tout-terrain. Toutes nos
        motos et scooters d'occasion sont rigoureusement contrôlés avant la vente pour garantir
        votre sécurité.
      </p>
      <h2>Pièces Détachées Moto Toutes Marques</h2>
      <p>
        Notre catalogue de pièces détachées comprend : carénages moto et scooter, fourches,
        moteurs, selles, visières, bulles, top case, guidons, optiques, phares, feux, pneus,
        tabliers Tucano et Bagster, compteurs, pot d'échappements, porte-bagages et plaquettes
        de frein. Nous proposons des pièces pour tous les modèles : T-Max 500/530/560,
        X-Max, Forza, PCX, SH, Burgman 125/400/600, Majesty, Cygnus, GSX-R, Booster, Stunt,
        Nitro, Runner, Nexus, Vespa LX/GTS, Metropolis, MP3, GP 800 et bien d'autres.
      </p>
      <h2>Atelier Moto – Entretien et Réparation à Épinay-sur-Seine</h2>
      <p>
        Notre atelier moto situé à Épinay-sur-Seine (93) réalise l'entretien complet de vos
        deux-roues : remplacement de plaquettes de frein, révision moteur, réparation électrique,
        changement de pneus et toute intervention mécanique sur scooter et moto. Nos techniciens
        certifiés vous garantissent un service rapide et de qualité.
      </p>
      <h2>Export Scooter Occasion et Pièces Moto – International</h2>
      <p>
        SPEED MOTO PIECES propose également un service d'exportation de scooters d'occasion et
        de pièces détachées vers l'international. Nous gérons l'ensemble des démarches
        administratives : carte grise, dossiers RSV, transit douanier, conditionnement et
        logistique. Tarifs préférentiels pour les professionnels.
      </p>
      <h2>Contactez SPEED MOTO PIECES</h2>
      <p>
        Adresse : 33 Route de Saint-Leu, 93800 Épinay-sur-Seine. Téléphone : 07 59 75 42 75.
        Horaires : du lundi au vendredi de 10h à 19h, le samedi de 14h à 19h.
      </p>
    </section>
  );
}
