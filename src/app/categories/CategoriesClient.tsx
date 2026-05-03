"use client";

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Zap, Trophy, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/site-data";

export default function CategoriesPage() {
  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-52 pb-24 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none -mr-20">
          <span className="font-display font-black decor-text italic text-white uppercase">SHOWROOM</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-racing-red mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-[0.4em] text-xs md:text-sm italic">Élite Performance 93</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            NOS <span className="text-gradient animate-glow">GAMMES.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed font-medium"
          >
            Une sélection rigoureuse des meilleures machines pour une expérience de conduite inégalée. L'excellence du 93 à votre portée.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link href={`/categories/${category.slug}`}>
                  <div className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden glass border-white/5 group-hover:border-racing-red/30 transition-all duration-700">
                    {/* Image with Zoom */}
                    <div className="absolute inset-0">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="h-px w-12 bg-racing-red" />
                          <span className="text-racing-red font-black uppercase tracking-widest text-[10px] italic">Catégorie</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic leading-none group-hover:text-racing-red transition-colors duration-500">
                          {category.name.split(' ').map((word, idx) => (
                            <span key={idx} className="block">{word}</span>
                          ))}
                        </h3>
                        
                        <p className="text-white/40 text-sm md:text-base font-medium line-clamp-2 group-hover:text-white/70 transition-colors duration-500">
                          {category.description}
                        </p>

                        <div className="pt-6 flex items-center justify-between">
                          <div className="flex space-x-2">
                             <div className="glass p-2 rounded-lg"><Zap className="w-4 h-4 text-racing-red" /></div>
                             <div className="glass p-2 rounded-lg"><Trophy className="w-4 h-4 text-amber-gold" /></div>
                             <div className="glass p-2 rounded-lg"><Shield className="w-4 h-4 text-white" /></div>
                          </div>
                          <div className="glass w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-racing-red transition-all duration-500 shadow-2xl">
                             <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-red p-12 md:p-20 rounded-[4rem] text-center relative border-white/10 overflow-hidden shadow-2xl"
          >
             <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
                <span className="text-[15rem] font-display font-black italic">SPEED</span>
             </div>
             
             <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 uppercase italic leading-none tracking-tighter">
                UN PROJET <span className="text-gradient">SUR MESURE ?</span>
             </h2>
             <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                Notre équipe d'experts est là pour vous conseiller le meilleur véhicule adapté à votre style de conduite.
             </p>
             <Link href="/contact" className="inline-flex items-center space-x-4 bg-white text-carbon-black px-12 py-6 rounded-full font-black italic uppercase tracking-widest hover:pr-16 transition-all group shadow-2xl">
                <span>Nous Contacter</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
