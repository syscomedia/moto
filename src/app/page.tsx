"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CategorySection from "@/components/sections/CategorySection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import FloatingContact from "@/components/ui/FloatingContact";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex-1 bg-mesh"
        >
          <Navbar />
          <Hero />

          {/* Quick Contact Bar */}
          <div className="relative z-20 mt-10 md:-mt-24 max-w-7xl mx-auto px-4">
            <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 shadow-2xl border-white/5">
              {[
                { icon: Phone, label: "Service Client", value: "0759754275", size: "text-lg" },
                { icon: MapPin, label: "Localisation", value: "33 Route de Saint-Leu, 93800 Épinay", size: "text-[10px]" },
                { icon: Clock, label: "Ouverture", value: "Lun-Ven: 10h-19h | Sam: 14h-19h", size: "text-[10px]" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  className="flex items-center space-x-4 md:space-x-5 text-white p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="bg-racing-red p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg shadow-racing-red/20">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">{item.label}</p>
                    <p className={`font-display font-black ${item.size} italic text-glow`}>{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


          <CategorySection />

          {/* Services Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-racing-red font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Nos Services Experts</span>
                  <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-8 uppercase italic leading-[0.95]">
                    PLUS QU'UN GARAGE, <br /><span className="text-gradient">VOTRE PARTENAIRE.</span>
                  </h2>
                  <p className="text-white/50 mb-10 text-xl leading-relaxed font-medium">
                    SPEED MOTO PIECES redéfinit l'entretien deux-roues avec une précision chirurgicale et une passion sans limite.
                  </p>
                  <div className="space-y-6 mb-12">
                    {[
                      "Pièces détachées toutes marques",
                      "Vente de véhicules d'occasion & export",
                      "Atelier : Freinage & Entretien complet",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-4 text-white group cursor-default">
                        <div className="w-2 h-2 bg-racing-red rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#E31837]" />
                        <span className="font-bold text-lg group-hover:text-racing-red transition-colors italic uppercase tracking-tight">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/services">
                    <button className="relative group overflow-hidden px-10 py-5 rounded-full bg-white text-carbon-black font-black uppercase italic tracking-widest transition-all hover:pr-14 shadow-xl">
                      <span className="relative z-10">DÉCOUVRIR NOS SERVICES</span>
                      <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-6 h-6" />
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-racing-red to-amber-gold rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="relative h-[600px] rounded-[3rem] overflow-hidden glass-red flex items-center justify-center border-white/5">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80 -scale-x-100 group-hover:scale-x-[-1.1] group-hover:scale-y-[1.1] transition-all duration-1000" />
                    <span className="relative z-10 text-white/10 font-display font-black decor-text italic select-none">93</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-white/5" />
                    <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-[2rem]">
                      <p className="text-white font-black text-2xl uppercase italic mb-2">Atelier Haute Performance</p>
                      <p className="text-white/60 text-sm font-medium">Équipement de pointe et expertise technique certifiée.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust Section - Ultra-Clear Full Width Showcase */}
          <section className="relative w-full bg-black py-20">
            {/* Powerful Background Glow behind the image to make it pop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,24,55,0.1),transparent_70%)] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full relative z-10"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/plaket.png"
                  alt="Speed Moto Excellence"
                  width={2500}
                  height={1000}
                  className="w-full h-auto block brightness-[1.05] contrast-[1.05]"
                  priority
                />
              </div>
            </motion.div>

            {/* Subtle separator glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-racing-red/30 to-transparent" />
          </section>



          <WhatsAppButton />
          <FloatingContact />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
