"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh py-20 md:py-28">
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/1.png"
          alt="SPEED MOTO PIECES Showroom"
          fill
          className="object-cover opacity-50 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon-black via-transparent to-transparent" />
      </div>

      {/* Floating Animated Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-racing-red/10 rounded-full blur-[100px] z-0"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-gold/5 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-4 py-2 bg-racing-red/10 border border-racing-red/20 text-racing-red text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-6 md:mb-10 rounded-full italic backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-racing-red"></span>
              </span>
              <span>L'Élite du Deux-Roues</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-6 leading-[0.95] tracking-tight italic">
              DOMINEZ <br />
              <span className="text-gradient animate-glow drop-shadow-[0_0_15px_rgba(227,24,55,0.5)]">LA ROUTE.</span>
            </h1>

            <div className="max-w-xl mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <p className="text-sm md:text-lg text-white/70 leading-relaxed font-medium">
                  Besoin d’un service moto <span className="text-white font-bold italic underline decoration-racing-red/30 underline-offset-4">rapide et efficace</span> ?
                  Notre garage vous accueille <span className="text-white font-bold">6 jours sur 7</span> pour des entretiens express,
                  des forfaits révision sans surprise et un changement de pneus en <span className="text-white font-bold">30 minutes chrono</span>.
                </p>
                
                <div className="flex items-center space-x-3 text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-bold">
                  <span className="bg-white/10 h-px flex-1" />
                  <span className="whitespace-nowrap">Expertise & Passion</span>
                  <span className="bg-white/10 h-px flex-1" />
                </div>

                <div className="relative pl-4 border-l-2 border-racing-red/50">
                  <p className="text-racing-red font-black italic text-lg md:text-2xl leading-tight">
                    « Passez nous voir et repartez l'esprit tranquille, le moteur au top ! »
                  </p>
                </div>

                <div className="pt-2">
                  <a 
                    href="tel:0759754275" 
                    className="group inline-flex flex-col"
                  >
                    <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.3em] font-black mb-1 group-hover:text-racing-red transition-colors">Contact Direct</span>
                    <span className="text-racing-red font-display font-black text-2xl md:text-4xl italic tracking-tighter group-hover:scale-105 transition-transform origin-left">
                      07 59 75 42 75
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12">
              {[
                "Atelier Haute Performance",
                "Entretien Premium",
                "Pièces Détachées Certifiées",
                "Achat / Vente Cash 24h",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="flex items-center space-x-3 text-white/80 glass-red px-3 py-2.5 md:px-4 md:py-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-racing-red flex-shrink-0" />
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(227, 24, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-racing-red text-white px-6 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-racing-red/30 group"
              >
                <span>EXPLORER LE SHOWROOM</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="glass text-white px-6 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg flex items-center justify-center space-x-3 transition-all"
              >
                <div className="bg-white/10 p-1.5 rounded-full">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span>VOIR LES MODÈLES</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Background Decoration */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full overflow-hidden pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative w-full h-full"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[30rem] text-white/[0.03] italic -rotate-12 select-none">
            SM
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div
            animate={{ height: ["20%", "60%", "20%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 bg-racing-red rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

