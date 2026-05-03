import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPEED MOTO PIECES – Pièces Moto & Scooter",
    short_name: "Speed Moto",
    description:
      "N°1 pièces moto et scooter toutes marques à Épinay-sur-Seine (93). Honda, Yamaha, Suzuki, Piaggio, Peugeot et plus.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#E31837",
    icons: [
      {
        src: "/icoa.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icoa.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
