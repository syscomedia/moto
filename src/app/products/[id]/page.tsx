"use client";

import { use, useState } from "react";
import { products } from "@/data/site-data";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, ShieldCheck, Truck, CreditCard, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: PageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(product?.image || "");

  if (!product) {
    notFound();
  }

  const gallery = product.images || [product.image];

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      <section className="pt-48 pb-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none -mr-20">
          <span className="font-display font-black decor-text italic">SM</span>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-12">
            <Link href="/" className="hover:text-racing-red transition-colors">Accueil</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Link href={`/categories/${product.category}`} className="hover:text-racing-red transition-colors">Catalogue</Link>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <span className="text-racing-red italic">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Product Image Gallery */}
            <div className="space-y-6">
              <motion.div
                layoutId="main-image"
                className="aspect-square glass rounded-[3rem] overflow-hidden flex items-center justify-center relative shadow-2xl border-white/5 p-8"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeImage}
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-tr from-racing-red/10 to-transparent pointer-events-none" />
              </motion.div>

              <div className="grid grid-cols-4 gap-4">
                {gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square glass-red rounded-2xl border transition-all cursor-pointer overflow-hidden p-2 ${activeImage === img ? 'border-racing-red opacity-100 ring-2 ring-racing-red/20' : 'border-white/5 opacity-50 hover:opacity-100'}`}
                  >
                    <div className="relative w-full h-full">
                      <Image src={img} alt={`${product.name} view ${i}`} fill className="object-contain" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block px-4 py-1.5 bg-racing-red/20 border border-racing-red/30 text-racing-red text-[10px] font-black uppercase tracking-[0.3em] rounded-lg mb-8 italic">
                  Édition SPEED MOTO PIECES
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase italic leading-none tracking-tighter">
                  {product.name}
                </h1>

                {/* <div className="flex items-baseline space-x-4 mb-10">
                  <span className="text-5xl font-display font-black text-racing-red italic animate-glow">
                    {product.price > 0 
                      ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(product.price)
                      : "SUR DEVIS"}
                  </span>
                  <span className="text-white/40 text-sm font-bold uppercase tracking-widest">TTC Clé en main</span>
                </div> */}

                <p className="text-white/50 text-xl leading-relaxed mb-12 font-medium">
                  {product.description} Une machine exceptionnelle conçue pour les passionnés de sensations fortes et d'élégance urbaine.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3 glass-red px-6 py-4 rounded-2xl border-white/5">
                      <ShieldCheck className="w-5 h-5 text-racing-red" />
                      <span className="text-xs font-black uppercase text-white/80 tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service Icons */}
                <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-white/5">
                  <div className="text-center group">
                    <Truck className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-racing-red transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Livraison SPEED MOTO PIECES</p>
                  </div>
                  <div className="text-center group">
                    <CreditCard className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-racing-red transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Financement 4x</p>
                  </div>
                  <div className="text-center group">
                    <ShieldCheck className="w-8 h-8 text-white/40 mx-auto mb-3 group-hover:text-racing-red transition-colors" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Garantie 2 ans</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button className="flex-1 bg-racing-red text-white py-6 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-racing-red-hover transition-all shadow-2xl shadow-racing-red/20 text-lg">
                    <Phone className="w-6 h-6" />
                    <span>RÉSERVER CETTE MACHINE</span>
                  </button>
                  <button className="glass text-white px-8 py-6 rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-white/10 transition-all border-white/5">
                    <MessageSquare className="w-6 h-6" />
                    <span className="sm:hidden lg:inline">DISCUTER</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Description Detail Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-12 uppercase italic leading-none tracking-tighter">
              L'EXCELLENCE <span className="text-gradient animate-glow">DÉTAILLÉE.</span>
            </h2>
            <div className="glass p-10 md:p-16 rounded-[3rem] border-white/5 space-y-10">
              <div className="space-y-8 text-white/50 text-xl leading-relaxed font-medium">
                <p>
                  Le <span className="text-white font-bold italic">{product.name}</span> représente l'excellence absolue de notre sélection chez SPEED MOTO PIECES. Chaque machine est soumise à un protocole de contrôle technique ultra-rigoureux comprenant plus de 50 points de vérification critiques par nos maîtres-techniciens à Épinay-sur-Seine.
                </p>
                <p>
                  Conçu pour ceux qui ne font aucun compromis, ce modèle allie une ingénierie de pointe à une esthétique racée. Que vous domptiez l'asphalte urbain ou que vous partiez à la conquête de nouveaux horizons, le <span className="text-white italic">{product.name}</span> est votre allié ultime.
                </p>
                <p>
                  Nous offrons un accompagnement premium incluant des solutions de personnalisation exclusive et un programme d'entretien sur mesure pour préserver l'ADN de votre machine.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-10 border-t border-white/5">
                {["Performance", "Sûreté", "Prestige", "Innovation"].map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.4em] text-racing-red bg-racing-red/10 px-6 py-2 rounded-full italic border border-racing-red/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
