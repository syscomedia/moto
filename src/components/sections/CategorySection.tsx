"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/site-data";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CategorySection() {
  return (
    <section className="py-32 bg-mesh relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <span className="text-[40vw] font-display font-black italic -rotate-12">RACING</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-racing-red mb-4"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-widest text-sm">Sélection Premium</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 uppercase italic leading-none">
            NOS <span className="text-gradient">CATÉGORIES</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg font-medium">
            Une sélection rigoureuse des meilleurs modèles pour une expérience de conduite inégalée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] bg-carbon-light border border-white/5 shadow-2xl"
            >
              {/* Category Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-carbon-black/20 to-transparent z-10" />
              
              {/* Animated Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-racing-red/50 transition-all duration-500 rounded-[2rem] z-20 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-display font-black text-white mb-3 uppercase italic leading-none text-glow">
                    {category.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-8 line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category.description}
                  </p>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center space-x-3 text-white bg-racing-red/10 border border-racing-red/30 px-6 py-3 rounded-full font-black text-sm group-hover:bg-racing-red group-hover:border-racing-red transition-all duration-300"
                  >
                    <span>VOIR LA GAMME</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

