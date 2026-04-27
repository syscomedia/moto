export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
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
    name: "Moto Scooter",
    slug: "moto-scooter",
    description: "Le parfait équilibre entre puissance et praticité urbaine.",
    image: "/scooter-250.jpg"
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
    name: "Moto Cross",
    slug: "moto-cross",
    description: "Pour les passionnés de sensations fortes et de hors-piste.",
    image: "/cross-450.jpg"
  },
  {
    id: "4",
    name: "Scooter 750 Standard",
    slug: "scooter-750-standard",
    description: "Performance et confort pour vos longs trajets.",
    image: "/hero_motorcycle_showroom.png"
  },
  {
    id: "5",
    name: "Scooter 750 Premium",
    slug: "scooter-750-premium",
    description: "Le summum du luxe et de la technologie sur deux roues.",
    image: "/hero_motorcycle_showroom.png"
  }
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Moto Scooter Sport 250",
    category: "moto-scooter",
    price: 25000,
    description: "Un scooter agile et puissant pour la ville.",
    image: "/scooter-250.jpg",
    features: ["Moteur 250cc", "ABS de série", "Éclairage LED", "Grand coffre"]
  },
  {
    id: "p2",
    name: "Quad All-Terrain 4x4",
    category: "quad",
    price: 30000,
    description: "Prêt pour toutes les aventures, peu importe le terrain.",
    image: "/quad-4x4.jpg",
    features: ["Transmission 4x4", "Treuil électrique", "Suspensions renforcées"]
  },
  {
    id: "p3",
    name: "Pro Cross 450",
    category: "moto-cross",
    price: 35000,
    description: "La machine ultime pour le motocross de compétition.",
    image: "/cross-450.jpg",
    features: ["Moteur haute performance", "Châssis ultra-léger", "Pneus racing"]
  },
  {
    id: "p4",
    name: "GT Max 750 Standard",
    category: "scooter-750-standard",
    price: 75000,
    description: "Le confort d'un GT avec la puissance d'une moto.",
    image: "/hero_motorcycle_showroom.png",
    features: ["Moteur bicylindre", "Bulle réglable", "Keyless start"]
  },
  {
    id: "p5",
    name: "GT Max 750 Limited Gold",
    category: "scooter-750-premium",
    price: 95000,
    description: "L'édition limitée avec finitions premium et technologies de pointe.",
    image: "/hero_motorcycle_showroom.png",
    features: ["Finitions Or", "Selle chauffante", "Connectivité smartphone", "Échappement sport"]
  }
];

