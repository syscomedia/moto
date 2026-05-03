"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { PenTool as Tool, ShieldCheck, Zap, Cog, Wind, Disc, Sparkles, Globe, Clock } from "lucide-react";

export default function ServicesPage() {
  const parts = [
    "Fourches", "Carénages", "Selles", "Feux", "Phares", "Pneus", "Bulles", "Visières",
    "Top Case", "Tabliers Tucano & Bagster", "Compteurs", "Optiques", "Moteurs",
    "Guidons", "Porte-bagages", "Pots d'échappement"
  ];

  const brands = [
    "Honda", "Yamaha", "Suzuki", "Peugeot", "Piaggio", "BMW (C1)", "MBK", "Gilera",
    "Aprilia", "Vespa", "Kymco", "Sym"
  ];

  const models = [
    "Swing", "Panthéon", "SH", "PCX", "Forza", "X-Max", "Majesty", "Cygnus X", "RG",
    "R125", "TDM 900", "TMax 500/530", "Burgman 125/400/600", "X7/X8/X9/X10/Xevo 125",
    "Skycruiser", "Evolis", "Flamex", "Flamer", "Booster", "Stunt", "Nitro", "Ovetto",
    "Runner", "Nexus", "LX", "GT", "GTS", "GTS Super IE", "Satelis", "CityStar",
    "Metropolis", "MP3 125/250/300/400/500", "GP 800"
  ];

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-racing-red mb-6"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm">Expertise Technique</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            NOS <span className="text-gradient">SERVICES</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16"
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-racing-red to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass px-10 py-6 rounded-[2rem] flex items-center space-x-6 border-white/10 hover:border-racing-red/30 transition-all duration-500 shadow-2xl">
                <div className="bg-racing-red/10 p-4 rounded-2xl text-racing-red group-hover:scale-110 transition-transform duration-500">
                  <Clock className="w-8 h-8 animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.3em]">Lundi – Vendredi</p>
                  </div>
                  <p className="text-2xl md:text-3xl text-white font-display font-black italic tracking-tighter leading-tight flex flex-col md:block">
                    <span className="whitespace-nowrap">10h <span className="text-racing-red">–</span> 19h</span>
                    <span className="hidden md:inline text-white/20 mx-2">·</span>
                    <span className="whitespace-nowrap text-white/50">Sam : 14h <span className="text-racing-red">–</span> 19h</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glass px-10 py-6 rounded-[2rem] flex items-center space-x-6 border-white/5 opacity-40 hover:opacity-60 transition-opacity">
              <div className="bg-white/5 p-4 rounded-2xl text-white/20">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-white/40 uppercase font-black tracking-[0.3em] mb-1">Dimanche</p>
                <p className="text-2xl md:text-3xl text-white/40 font-display font-black italic tracking-tighter uppercase">Fermé</p>
                {/* samedi was moved to main card */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Pièces Détachées */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-16 rounded-[3rem] border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <Tool className="w-48 h-48" />
              </div>
              <div className="bg-racing-red/10 p-5 rounded-2xl w-fit mb-10 text-racing-red">
                <Tool className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-display font-black text-white mb-8 uppercase italic">Large choix de pièces</h3>
              <p className="text-white/50 text-lg mb-10 leading-relaxed font-medium">
                Nous disposons de nombreuses pièces pour scooters et motos, adaptées à tous les modèles :
              </p>
              <div className="grid grid-cols-2 gap-4">
                {parts.map(part => (
                  <div key={part} className="flex items-center space-x-3 text-white/60 hover:text-white transition-colors cursor-default">
                    <div className="w-1.5 h-1.5 bg-racing-red rounded-full" />
                    <span className="text-sm font-bold uppercase italic tracking-tight">{part}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Atelier & Export */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[3rem] border-white/5 group"
              >
                <div className="bg-racing-red/10 p-5 rounded-2xl w-fit mb-8 text-racing-red">
                  <Cog className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic">Service Atelier</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 glass-red p-4 rounded-2xl border-white/5">
                    <ShieldCheck className="w-6 h-6 text-racing-red" />
                    <span className="text-white font-bold uppercase italic tracking-tight">Remplacement plaquettes de frein</span>
                  </div>
                  <div className="flex items-center space-x-4 glass-red p-4 rounded-2xl border-white/5">
                    <Cog className="w-6 h-6 text-racing-red" />
                    <span className="text-white font-bold uppercase italic tracking-tight">Intervention Scooters & Motos</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass p-10 rounded-[3rem] border-white/5 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Globe className="w-32 h-32" />
                </div>
                <div className="bg-racing-red/10 p-5 rounded-2xl w-fit mb-8 text-racing-red">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic">Occasions & Export</h3>
                <p className="text-white/50 text-lg leading-relaxed font-medium">
                  Scooters d'occasion et pièces disponibles pour l'export avec carte grise ou RSV.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & Models */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-racing-red font-black uppercase tracking-[0.3em] text-xs mb-4 block italic">Notre Expertise Multi-Marques</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic leading-none tracking-tighter">MARQUES & <span className="text-gradient">MODÈLES</span></h2>
          </div>

          <div className="glass p-10 md:p-20 rounded-[4rem] border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-20">
              {brands.map(brand => (
                <div key={brand} className="text-center group">
                  <p className="text-xl font-display font-black text-white/40 group-hover:text-racing-red group-hover:scale-110 transition-all cursor-default italic uppercase">{brand}</p>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/5">
              <p className="text-white/20 text-[10px] uppercase font-black tracking-widest mb-10 text-center italic">Plus de 30 modèles pris en charge (exemples) :</p>
              <div className="flex flex-wrap justify-center gap-3">
                {models.map(model => (
                  <span key={model} className="px-5 py-2 rounded-full glass-red text-[10px] font-black uppercase italic tracking-widest text-white/60 hover:text-white transition-colors border-white/5">
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-racing-red/10 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="glass-red p-12 md:p-20 rounded-[3rem] border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-4 leading-none tracking-tighter text-white">
                BESOIN D'UNE <br /><span className="text-racing-red">PIÈCE ?</span>
              </h2>
              <p className="text-white/60 text-lg font-medium">Contactez-nous par téléphone ou par mail. Réponse rapide garantie.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+33759754275"
                className="bg-white text-racing-red px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest text-center shadow-xl hover:bg-racing-red hover:text-white transition-all text-lg"
              >
                0759754275
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="glass text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest text-center hover:bg-white/10 transition-all text-lg border-white/5"
              >
                Nous Contacter
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
