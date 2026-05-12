import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casse Moto Paris Île-de-France – Pièces Occasion | SPEED MOTO PIECES",
  description:
    "Casse moto à Épinay-sur-Seine (93), proche Paris. Pièces moto et scooter occasion testées toutes marques : Honda, Yamaha, Suzuki, Piaggio, MBK, Vespa, Peugeot. Pas cher, qualité garantie. Tél : 07 59 75 42 75.",
  keywords: [
    "casse moto",
    "casse moto Paris",
    "casse moto Île-de-France",
    "casse moto 93",
    "casse moto Seine-Saint-Denis",
    "casse moto Épinay",
    "pièces moto occasion",
    "pièces scooter occasion",
    "casse scooter",
    "casse deux roues",
    "pièces moto pas cher",
    "pièces occasion moto Honda",
    "pièces occasion Yamaha",
    "pièces occasion Suzuki",
    "pièces occasion Piaggio",
    "pièces occasion MBK",
    "démontage moto",
    "recyclage moto",
    "moto accidentée pièces",
    "casse moto toutes marques",
  ],
  alternates: {
    canonical: "https://speedmotopieces.com/casse-moto",
  },
  openGraph: {
    title: "Casse Moto Paris 93 – Pièces Occasion Toutes Marques | SPEED MOTO PIECES",
    description:
      "Votre casse moto de référence en Île-de-France. Pièces moto et scooter occasion pas chères, testées et garanties. Honda, Yamaha, Suzuki, Piaggio et plus. Épinay-sur-Seine (93).",
    url: "https://speedmotopieces.com/casse-moto",
    type: "website",
    locale: "fr_FR",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://speedmotopieces.com" },
    { "@type": "ListItem", position: 2, name: "Casse Moto", item: "https://speedmotopieces.com/casse-moto" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Où trouver une casse moto proche de Paris ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPEED MOTO PIECES est votre casse moto la plus proche de Paris, située à Épinay-sur-Seine (93800), en Seine-Saint-Denis. Accès facile depuis Paris, Saint-Denis, Argenteuil et toute l'Île-de-France.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles marques de motos trouvez-vous en casse moto chez SPEED MOTO PIECES ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre casse moto dispose de pièces pour Honda, Yamaha, Suzuki, Piaggio, Peugeot, MBK, Gilera, Aprilia, Vespa, Kymco, SYM, BMW C1, Booster, Stunt, Nitro, T-Max, X-Max, Forza, PCX, Burgman et bien d'autres.",
      },
    },
    {
      "@type": "Question",
      name: "Les pièces de casse moto sont-elles garanties ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, toutes nos pièces moto et scooter d'occasion sont testées et contrôlées avant la vente. Vous achetez des pièces fiables à prix cassé.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je vendre ma moto accidentée à votre casse moto ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, SPEED MOTO PIECES rachète des motos et scooters accidentés ou en panne. Contactez-nous au 07 59 75 42 75 pour une estimation gratuite.",
      },
    },
  ],
};

export default function CasseMotoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-16 px-4 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Casse Moto</span>
            </nav>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">
              Casse Moto Paris – Île-de-France
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Pièces moto et scooter occasion pas chères, testées et contrôlées.<br />
              Toutes marques – Épinay-sur-Seine (93)
            </p>
            <a
              href="tel:+33759754275"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg"
            >
              Appeler : 07 59 75 42 75
            </a>
          </div>
        </section>

        {/* Main content */}
        <section className="max-w-4xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Votre Casse Moto de Référence en Île-de-France
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            SPEED MOTO PIECES est bien plus qu&apos;une simple casse moto. Installés à
            <strong> Épinay-sur-Seine (93800)</strong>, nous récupérons, démontons et
            revendons des pièces détachées moto et scooter d&apos;occasion pour toutes les
            grandes marques. Chaque pièce est <strong>testée et contrôlée</strong> avant
            d&apos;être proposée à la vente, pour vous garantir qualité et fiabilité.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Que vous soyez à Paris, Saint-Denis, Argenteuil, Clichy, Pierrefitte ou
            n&apos;importe où en Île-de-France, notre casse moto est facilement accessible
            et vous propose le meilleur choix de pièces moto occasion au meilleur prix.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pièces Disponibles en Casse Moto
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {[
              "Carénages & Plastiques", "Fourches complètes", "Moteurs & Culasses",
              "Roues & Pneus", "Selles & Top Case", "Optiques & Phares",
              "Pots d'échappement", "Freins & Étriers", "Guidons & Compteurs",
              "Radiateurs", "Bulles & Pare-brises", "Faisceaux électriques",
            ].map((item) => (
              <div key={item} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-medium text-gray-700 text-center">
                {item}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Marques Disponibles
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Notre casse moto dispose de pièces pour toutes les marques :
            <strong> Honda</strong> (PCX, SH, Forza, CBR),
            <strong> Yamaha</strong> (T-Max 500/530/560, X-Max, Cygnus, Nitro),
            <strong> Suzuki</strong> (GSX-R, Burgman, Address),
            <strong> Piaggio</strong> (MP3, Metropolis, Beverly, Fly),
            <strong> Peugeot</strong> (Speedfight, Vivacity, Kisbee),
            <strong> MBK</strong> (Stunt, Booster, Nitro),
            <strong> Vespa</strong> (LX, GTS, Sprint),
            <strong> Aprilia</strong>, <strong>Gilera</strong>, <strong>Kymco</strong>,
            <strong> SYM</strong>, <strong>BMW C1</strong> et bien d&apos;autres.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Rachat de Moto Accidentée ou en Panne
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Vous avez une moto ou un scooter accidenté, en panne ou hors d&apos;usage ?
            SPEED MOTO PIECES rachète votre véhicule pour valoriser ses pièces.
            Appelez-nous au <a href="tel:+33759754275" className="text-red-600 font-bold hover:underline">07 59 75 42 75</a> pour
            une estimation rapide et gratuite.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquentes</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                q: "Où est située votre casse moto ?",
                a: "33 Route de Saint-Leu, 93800 Épinay-sur-Seine – facilement accessible depuis Paris et toute l'Île-de-France.",
              },
              {
                q: "Les pièces occasion sont-elles garanties ?",
                a: "Oui, toutes nos pièces sont testées et contrôlées avant la vente.",
              },
              {
                q: "Quels sont vos horaires ?",
                a: "Lundi au vendredi : 10h–19h. Samedi : 14h–19h.",
              },
              {
                q: "Faites-vous l'envoi de pièces ?",
                a: "Oui, nous expédions partout en France et à l'international. Contactez-nous pour un devis.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-700 text-sm">{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Besoin d&apos;une Pièce Moto Occasion ?</h2>
            <p className="text-gray-300 mb-6">Appelez-nous ou venez directement à notre casse moto à Épinay-sur-Seine</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33759754275" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg">
                07 59 75 42 75
              </a>
              <Link href="/contact" className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100">
                Envoyer un message
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
