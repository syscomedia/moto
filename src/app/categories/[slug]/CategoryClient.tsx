"use client";

import { use } from "react";
import { categories, products } from "@/data/site-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Sparkles, CheckCircle2, Star, Gauge, Cpu, Wrench, Globe, PackageCheck, Settings, Mountain, Anchor, Compass, Activity, Target, Flame, Trophy, Wind, Plane, Box, FileText, Truck } from "lucide-react";
import { motion } from "framer-motion";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) => p.category === category.slug);

  const isTMax = category.slug === "t-max";
  const isPieces = category.slug === "pieces-detachees";
  const isQuad = category.slug === "quad";
  const isGSXR = category.slug === "suzuki-gsxr";
  const isExport = category.slug === "export-occasions";

  const tMaxHighlights = [
    { icon: Gauge, title: "Performance Sportive", desc: "Moteur bicylindre 560cc pour des accélérations foudroyantes." },
    { icon: Cpu, title: "Technologie embarquée", desc: "Écran TFT 7 pouces connecté avec navigation Garmin intégrée." },
    { icon: Shield, title: "Contrôle Absolu", desc: "Système de contrôle de traction et ABS pour une sécurité maximale." },
    { icon: Star, title: "Finition Premium", desc: "Design racé et matériaux de haute qualité pour un style inégalé." }
  ];

  const piecesHighlights = [
    { icon: Wrench, title: "Stock Permanent", desc: "Des milliers de pièces en stock prêtes à être expédiées ou montées." },
    { icon: PackageCheck, title: "Qualité Certifiée", desc: "Pièces d'origine et adaptables rigoureusement sélectionnées." },
    { icon: Globe, title: "Toutes Marques", desc: "Honda, Yamaha, Suzuki, Piaggio, Peugeot, BMW et bien d'autres." },
    { icon: Settings, title: "Conseil Expert", desc: "Nos techniciens vous aident à trouver la pièce exacte pour votre modèle." }
  ];

  const quadHighlights = [
    { icon: Mountain, title: "Tout-Terrain Pur", desc: "Capacités de franchissement exceptionnelles sur boue, sable et rochers." },
    { icon: Anchor, title: "Force de Traction", desc: "Treuil haute performance et capacité de remorquage impressionnante." },
    { icon: Compass, title: "Exploration Sans Limite", desc: "Transmission 4x4 débrayable pour s'adapter à toutes les surfaces." },
    { icon: Activity, title: "Robustesse SM", desc: "Châssis renforcé et suspensions à long débattement pour le confort." }
  ];

  const gsxrHighlights = [
    { icon: Flame, title: "Puissance Brute", desc: "Moteur 4 cylindres légendaire délivrant des performances de circuit." },
    { icon: Target, title: "Précision Chirurgicale", desc: "Châssis ultra-léger et suspensions réglables pour une agilité totale." },
    { icon: Trophy, title: "Héritage Racing", desc: "Dérivée directement des technologies de compétition Suzuki." },
    { icon: Wind, title: "Aérodynamisme", desc: "Carénages optimisés en soufflerie pour une pénétration d'air maximale." }
  ];

  const exportHighlights = [
    { icon: Plane, title: "Export Global", desc: "Solutions de transport international pour véhicules et pièces détachées." },
    { icon: FileText, title: "Dossiers Complets", desc: "Gestion des cartes grises, certificats de conformité et dossiers RSV." },
    { icon: Box, title: "Conditionnement", desc: "Emballage sécurisé et optimisé pour le transport maritime ou aérien." },
    { icon: Truck, title: "Logistique SM", desc: "Suivi en temps réel de vos expéditions jusqu'à destination finale." }
  ];

  return (
    <main className="relative flex-1 bg-mesh min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-52 pb-10 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-racing-red/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 opacity-30" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center flex-wrap gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 mb-5 md:mb-8"
          >
            <Link href="/" className="hover:text-racing-red transition-colors">Accueil</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href="/categories" className="hover:text-racing-red transition-colors">Showroom</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-racing-red italic">{category.name}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 text-racing-red mb-4 md:mb-6"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                <span className="font-black uppercase tracking-widest text-xs md:text-[10px] italic">Expertise SPEED MOTO PIECES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-9xl font-display font-black uppercase italic leading-[0.88] tracking-tighter text-white"
              >
                {category.name.split(' ').map((word, i) => (
                  <span key={i} className={i > 0 ? "text-gradient block animate-glow" : "block"}>{word}</span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/40 mt-5 md:mt-10 max-w-2xl text-base md:text-2xl font-medium leading-relaxed"
              >
                {category.description}
                {isTMax && " Découvrez le summum du confort urbain et de la puissance sportive."}
                {isPieces && " Trouvez la pièce exacte parmi notre catalogue multi-marques."}
                {isQuad && " Dominez les éléments avec notre sélection de quads haute performance."}
                {isGSXR && " Entrez dans la légende avec la série sport la plus titrée de l'histoire."}
                {isExport && " Solutions d'exportation complètes pour clients internationaux et professionnels."}
              </motion.p>
            </div>

            {/* Badge card — hidden on small mobile, visible from sm */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:flex glass-red p-6 md:p-8 rounded-[2rem] flex-col space-y-4 border-white/10 relative overflow-hidden group shadow-2xl shrink-0"
            >
              <div className="absolute top-0 right-0 opacity-10 -mr-3 -mt-3">
                <Zap className="w-16 h-16 md:w-24 md:h-24 text-white rotate-12" />
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-racing-red p-3 md:p-5 rounded-xl md:rounded-2xl shadow-xl shadow-racing-red/30 relative z-10">
                  <Shield className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="relative z-10">
                  <p className="text-[9px] md:text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Garantie Premium</p>
                  <p className="text-base md:text-xl font-display font-black italic text-white leading-tight">SÉCURITÉ <br /><span className="text-white/60">TOTALE SM</span></p>
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 relative z-10">
                <p className="text-white/40 text-[10px] md:text-xs font-bold italic leading-relaxed">Service professionnel avec réponse sous 24h ouvrées.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights — 2 cols on mobile, 4 on desktop */}
      {(isTMax || isPieces || isQuad || isGSXR || isExport) && (
        <section className="py-10 md:py-24 bg-carbon-black/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
              {(isTMax ? tMaxHighlights : isQuad ? quadHighlights : isGSXR ? gsxrHighlights : isExport ? exportHighlights : piecesHighlights).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3 group"
                >
                  <div className="bg-racing-red/10 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-racing-red group-hover:bg-racing-red group-hover:text-white transition-all duration-500">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-sm md:text-xl font-display font-black text-white uppercase italic leading-tight">{item.title}</h3>
                  <p className="text-white/40 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Description Section */}
      <section className="py-10 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass p-6 md:p-20 rounded-[2rem] md:rounded-[4rem] border-white/5 relative overflow-hidden">

            {isTMax && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                <div>
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">L'ADN Racing Yamaha</span>
                  <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 uppercase italic leading-none tracking-tighter">UNE ICÔNE <br /><span className="text-gradient">INCONTESTÉE.</span></h2>
                  <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium mb-8">
                    Depuis son lancement, le <span className="text-white italic">Yamaha T-Max</span> a redéfini les standards du maxi-scooter. Alliant les performances d'une moto à la praticité d'un scooter, il reste le choix privilégié des conducteurs exigeants.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Moteur 560cc", "Smart Key", "Bulle électrique", "Cruise Control"].map(tag => (
                      <div key={tag} className="flex items-center space-x-2 glass-red px-3 py-1.5 rounded-full border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-racing-red shrink-0" />
                        <span className="text-[10px] font-black uppercase italic text-white/80">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-[2rem] overflow-hidden glass border-white/5 group">
                  <Image src="/tmax-560.png" alt="Yamaha T-Max 560" fill className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            )}

            {isQuad && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                <div>
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Performance Off-Road</span>
                  <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 uppercase italic leading-none tracking-tighter">FORCE <br /><span className="text-gradient">BRUTE.</span></h2>
                  <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium mb-8">
                    Nos quads sont sélectionnés pour leur robustesse et leur polyvalence. Que vous travailliez en forêt ou que vous cherchiez l'adrénaline des sentiers battus, nos machines sont toujours au rendez-vous.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Transmission 4x4", "Treuil Pro", "Benne basculante", "Direction assistée"].map(tag => (
                      <div key={tag} className="flex items-center space-x-2 glass-red px-3 py-1.5 rounded-full border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-racing-red shrink-0" />
                        <span className="text-[10px] font-black uppercase italic text-white/80">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-[2rem] overflow-hidden glass border-white/5 group">
                  <Image src="/quad-4x4.jpg" alt="Quad 4x4" fill className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            )}

            {isGSXR && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                <div>
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Série Sportive Légendaire</span>
                  <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 uppercase italic leading-none tracking-tighter">DOMINATION <br /><span className="text-gradient">TOTALE.</span></h2>
                  <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium mb-8">
                    La <span className="text-white italic">Suzuki GSX-R 1000 K10</span> est plus qu'une moto, c'est une déclaration de puissance. Conçue pour gagner, elle offre une expérience de pilotage pure et sans compromis.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Moteur 1000cc", "Mode S-DMS", "Freins Tokico", "Châssis alu"].map(tag => (
                      <div key={tag} className="flex items-center space-x-2 glass-red px-3 py-1.5 rounded-full border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-racing-red shrink-0" />
                        <span className="text-[10px] font-black uppercase italic text-white/80">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-[2rem] overflow-hidden glass border-white/5 group">
                  <Image src="/suzuki-gsxr-k10.png" alt="Suzuki GSX-R 1000 K10" fill className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            )}

            {isPieces && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                <div className="relative aspect-[4/3] md:aspect-video rounded-[2rem] overflow-hidden glass border-white/5 group">
                  <Image src="/pices.jpg" alt="Pièces détachées moto et scooter" fill className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div>
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-2 block italic">Stock Multi-Marques</span>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest italic">Du choix dans le stock</span>
                    <span className="text-racing-red text-[9px]">·</span>
                    <span className="text-white/40 text-[9px] font-black uppercase tracking-widest italic">Disponibilité immédiate</span>
                  </div>
                  <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-5 md:mb-8 uppercase italic leading-none tracking-tighter">UN LARGE CHOIX <br /><span className="text-gradient">DE PIÈCES.</span></h2>
                  <div className="space-y-3 mb-8">
                    <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium">
                      Des pièces neuves ou d'occasion pour scooters, motos et quads, disponibles immédiatement.
                    </p>
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-white/70 font-bold text-sm md:text-base">
                      <span>Fourches</span>
                      <span className="text-racing-red">•</span>
                      <span>Carénages</span>
                      <span className="text-racing-red">•</span>
                      <span>Moteurs</span>
                      <span className="text-racing-red">•</span>
                      <span className="text-white/40 italic font-medium">Et bien plus encore</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {["Stock réel", "Envoi rapide", "Export possible", "Conseils pro"].map(tag => (
                      <div key={tag} className="flex items-center space-x-2 glass-red px-3 py-1.5 rounded-full border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-racing-red shrink-0" />
                        <span className="text-[9px] md:text-[10px] font-black uppercase italic text-white/80">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {isExport && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10">
                <div>
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Expertise Logistique</span>
                  <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-6 md:mb-8 uppercase italic leading-none tracking-tighter">EXPORT <br /><span className="text-gradient">SANS FRONTIÈRES.</span></h2>
                  <p className="text-white/50 text-sm md:text-lg leading-relaxed font-medium mb-8">
                    Spécialiste de l'exportation de scooters et de pièces détachées, SPEED MOTO PIECES vous accompagne dans toutes vos démarches internationales. Nous gérons la logistique et les documents administratifs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Cartes grises", "Dossiers RSV", "Transit maritime", "Douanes"].map(tag => (
                      <div key={tag} className="flex items-center space-x-2 glass-red px-3 py-1.5 rounded-full border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-racing-red shrink-0" />
                        <span className="text-[10px] font-black uppercase italic text-white/80">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-video rounded-[2rem] overflow-hidden glass border-white/5 group">
                  <Image src="/export.jpg" alt="Export scooter" fill className="object-contain p-4 md:p-8 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-racing-red font-black uppercase tracking-[0.3em] text-[10px] mb-3 block italic">Catalogue Disponible</span>
            <h2 className="text-3xl md:text-6xl font-display font-black text-white uppercase italic leading-none tracking-tighter">
              NOS <span className="text-gradient">MACHINES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col h-full glass border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden hover:border-racing-red/30 transition-all duration-700"
              >
                <div className="relative aspect-[3/2] sm:aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 p-6 md:p-8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-5 md:p-10 flex flex-col flex-1 justify-between bg-white/[0.02]">
                  <div>
                    <div className="flex items-center space-x-2 text-racing-red mb-2 md:mb-4">
                      <Zap className="w-3 h-3" />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] italic">Stock Garanti</span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-display font-black text-white uppercase italic leading-tight mb-2 md:mb-4 group-hover:text-racing-red transition-colors duration-500">
                      {product.name}
                    </h3>
                    <p className="text-white/40 text-xs md:text-sm font-medium mb-5 md:mb-8 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center justify-between w-full glass px-5 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl text-white font-black italic uppercase tracking-widest text-[10px] md:text-xs hover:bg-racing-red hover:border-racing-red transition-all duration-500 group/btn"
                  >
                    <span>Voir les détails</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
