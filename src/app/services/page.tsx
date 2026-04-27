"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { PenTool as Tool, ShieldCheck, Zap, Cog, Wind, Disc, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Changement de Pneus",
      desc: "Nous disposons d'un large stock de pneus neufs et d'occasion pour tous types de véhicules (Motos, Scooters, Quads). Montage et équilibrage express.",
      icon: Disc
    },
    {
      title: "Pare-brise & Bulles",
      desc: "Remplacement de pare-brise et bulles pour tous les modèles de scooters et motos. Protection optimale contre le vent et les intempéries.",
      icon: Wind
    },
    {
      title: "Entretien & Freinage",
      desc: "Révision complète, vidange, et remplacement des plaquettes de frein. Nous utilisons uniquement des pièces de haute qualité.",
      icon: Cog
    },
    {
      title: "Pièces Détachées",
      desc: "Vaste catalogue de pièces détachées neuves et d'occasion (moteurs, carénages, électronique). Trouvez la pièce qu'il vous faut au meilleur prix.",
      icon: Tool
    },
    {
      title: "Achat & Vente",
      desc: "Nous rachetons votre ancien véhicule cash ou vous proposons des solutions de dépôt-vente. Large choix d'occasions garanties.",
      icon: Zap
    },
    {
      title: "Contrôle Sécurité",
      desc: "Diagnostic complet de votre machine pour une sécurité maximale. Plus de 50 points de contrôle vérifiés par nos experts.",
      icon: ShieldCheck
    }
  ];

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />
      
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
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-3xl mx-auto text-xl leading-relaxed font-medium"
          >
            Un atelier haute performance et un service client dédié pour garder votre machine au sommet de sa forme.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 glass border-white/5 rounded-[2.5rem] hover:border-racing-red/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <s.icon className="w-32 h-32" />
                </div>
                
                <div className="bg-racing-red/10 p-5 rounded-2xl w-fit mb-10 text-racing-red group-hover:bg-racing-red group-hover:text-white transition-all duration-500 shadow-lg shadow-racing-red/5">
                  <s.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-display font-black text-white mb-6 uppercase italic leading-none group-hover:text-glow transition-all">
                  {s.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                  {s.desc}
                </p>
              </motion.div>
            ))}
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
                BESOIN D'UNE <br /><span className="text-racing-red">INTERVENTION ?</span>
              </h2>
              <p className="text-white/60 text-lg font-medium">Prenez rendez-vous avec nos experts certifiés dès aujourd'hui.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+33123456789" 
                className="bg-white text-racing-red px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest text-center shadow-xl hover:bg-racing-red hover:text-white transition-all text-lg"
              >
                Appeler l'Atelier
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

