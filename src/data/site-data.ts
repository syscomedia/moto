export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "T-max",
    slug: "t-max",
    description: "Le roi des maxi-scooters, alliant puissance sportive et confort premium.",
    image: "/tmax-560.png"
  },
  {
    id: "2",
    name: "Quad",
    slug: "quad",
    description: "Dominez tous les terrains avec nos quads robustes et performants.",
    image: "/quad-4x4.jpg"
  },
  {
    id: "3",
    name: "Suzuki GSX-R",
    slug: "suzuki-gsxr",
    description: "L'adrénaline pure sur deux roues. La légende des circuits, disponible pour la route.",
    image: "/suzuki-gsxr-k10.png"
  },
  {
    id: "4",
    name: "Pièces Détachées",
    slug: "pieces-detachees",
    description: "Large choix de pièces toutes marques : carénages, moteurs, optiques, et plus encore.",
    image: "/pices.jpg"
  },
  {
    id: "5",
    name: "Export & Occasions",
    slug: "export-occasions",
    description: "Scooters d'occasions et pièces disponibles pour l'export avec carte grise ou RSV.",
    image: "/export.jpg"
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Yamaha T-max 560",
    category: "t-max",
    price: 13500,
    description: "Le maxi-scooter de référence, agile et ultra-performant.",
    image: "/tmax-560.png",
    images: [
      "/tmax-animation.gif",
      "/tmax-560.png",
      "/t2.png",
      "/t1.png"
    ],
    features: ["Moteur 560cc", "Écran TFT 7\"", "ABS & TCS", "Smart Key"]
  },
  {
    id: "p2",
    name: "Quad",
    category: "quad",
    price: 30000,
    description: "Prêt pour toutes les aventures, peu importe le terrain.",
    image: "/quad-4x4.jpg",
    images: [
      "/quad-4x4.jpg",
      "/q1.png",
      "/q2.png",
      "/q3.png"
    ],
    features: ["Transmission 4x4", "Treuil électrique", "Suspensions renforcées"]
  },
  {
    id: "p3",
    name: "Suzuki GSX-R 1000 K10",
    category: "suzuki-gsxr",
    price: 8500,
    description: "Une machine de légende, performance brute et maniabilité exceptionnelle.",
    image: "/suzuki-gsxr-k10.png",
    images: [
      "/suzuki-gsxr-k10.png",
      "/gs1.png",
      "/gs2.png",
      "/gs3.png"
    ],
    features: ["Moteur 1000cc", "S-DMS (Suzuki Drive Mode Selector)", "Freins Tokico", "Échappement titane"]
  },
  {
    id: "p4",
    name: "Catalogue Pièces Toutes Marques",
    category: "pieces-detachees",
    price: 0,
    description: "Consultez notre stock de pièces pour Honda, Yamaha, Suzuki, Piaggio, et bien d'autres.",
    image: "/pices.jpg",
    features: ["Fourches & Carénages", "Moteurs & Échappements", "Selles & Top Case", "Visières & Bulles"]
  },
  {
    id: "p5",
    name: "Service Export International",
    category: "export-occasions",
    price: 0,
    description: "Solutions d'exportation complètes pour scooters et pièces détachées.",
    image: "/export.jpg",
    features: ["Cartes Grises incluses", "Dossiers RSV", "Logistique Export", "Tarifs préférentiels"]
  }
];
