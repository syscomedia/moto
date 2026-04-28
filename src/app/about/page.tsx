"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Sparkles, Zap } from "lucide-react";




export default function AboutPage() {
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
            <span className="font-black uppercase tracking-widest text-sm">L'ADN Racing</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            À PROPOS DE <br /><span className="text-gradient">SPEED MOTO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
          >
            Plus qu'un simple garage, nous sommes une équipe de passionnés dédiée à votre performance et à votre sécurité sur la route depuis plus de 15 ans.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl glass-red border-white/5"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-racing-red/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/5 font-display font-black decor-text italic select-none">93</span>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80')] bg-cover opacity-60 transition-all duration-1000" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-racing-red font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Notre Histoire</span>
            <h2 className="text-5xl font-display font-black text-white mb-8 uppercase italic leading-none tracking-tighter">EXPERTISE & <span className="text-gradient">PASSION.</span></h2>
            <p className="text-white/50 mb-8 text-lg leading-relaxed font-medium">
              Basée à Épinay-sur-Seine, **SPEED MOTO** est née de la volonté de proposer un service premium et accessible à tous les motards de Seine-Saint-Denis. 
            </p>
            <p className="text-white/50 mb-12 text-lg leading-relaxed font-medium">
              Spécialisés dans l'entretien, la vente et la fourniture de pièces détachées toutes marques (Honda, Yamaha, Suzuki, Peugeot, Piaggio, BMW, etc.), nous mettons un point d'honneur à la qualité de nos interventions. Nous proposons également un service d'exportation de scooters d'occasion et de pièces détachées avec carte grise ou RSV.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
              <div>
                <p className="text-5xl font-display font-black text-white mb-2 italic">93</p>
                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Ancrage Local</p>
              </div>
              <div>
                <p className="text-5xl font-display font-black text-white mb-2 italic">100%</p>
                <p className="text-white/30 text-[10px] uppercase font-black tracking-widest">Expertise Technique</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative bg-carbon-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase italic leading-none tracking-tighter">NOS <span className="text-gradient">VALEURS</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Qualité Garantie",
                desc: "Tous nos véhicules et pièces d'occasion sont rigoureusement contrôlés."
              },
              {
                icon: Award,
                title: "Service Premium",
                desc: "Un accueil et un suivi personnalisés pour chaque client."
              },
              {
                icon: Users,
                title: "Communauté",
                desc: "Nous partageons la même passion du deux-roues que vous."
              },
              {
                icon: Zap,
                title: "Réactivité",
                desc: "Des interventions rapides pour vous remettre sur la route au plus vite."
              }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-racing-red/30 transition-all duration-500"
              >
                <div className="bg-racing-red/10 p-5 rounded-2xl w-fit mb-8 text-racing-red shadow-lg shadow-racing-red/5">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase italic leading-tight">{value.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
