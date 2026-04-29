"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-mesh">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-52 md:pt-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-racing-red/20 border border-racing-red/30 text-racing-red text-[10px] md:text-sm font-black uppercase tracking-[0.3em] mb-6 md:mb-8 rounded-full italic backdrop-blur-md"
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

            <div className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-xl font-medium flex flex-wrap gap-x-[0.3em]">
              {"Vente, entretien et pièces détachées haute performance pour motos, quads et scooters. Appelez le 07\u00A059\u00A075\u00A042\u00A075".split(" ").map((word, i) => {
                const isPhone = word.match(/\d{2}/);
                const isCall = word === "Appelez";

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut"
                    }}
                    className={cn(
                      "whitespace-nowrap",
                      word.match(/motos,|quads|et|scooters./) ? "text-white font-bold" : "",
                      isPhone ? "text-racing-red font-black" : ""
                    )}
                  >
                    {isCall && <div className="basis-full h-0 md:hidden" />}
                    {isPhone ? (
                      <a href="tel:0759754275" className="hover:underline decoration-racing-red/30 transition-all underline-offset-4">
                        {word}
                      </a>
                    ) : (
                      word
                    )}
                  </motion.span>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
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
                  className="flex items-center space-x-3 text-white/80 glass-red px-4 py-3 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-racing-red" />
                  <span className="text-sm font-bold uppercase tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(227, 24, 55, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-racing-red text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center space-x-3 transition-all shadow-2xl shadow-racing-red/30 group"
              >
                <span>EXPLORER LE SHOWROOM</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="glass text-white px-10 py-5 rounded-full font-black text-lg flex items-center justify-center space-x-3 transition-all"
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

