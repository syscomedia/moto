"use client";

import { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Sparkles, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [selectedSubject, setSelectedSubject] = useState("Demande de devis");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const subjects = [
    "Demande de devis",
    "Renseignement véhicule",
    "Entretien / Atelier",
    "Pièces détachées"
  ];

  return (
    <main className="relative flex-1 bg-mesh">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none -mr-20">
          <span className="font-display font-black decor-text italic text-white">CONTACT</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 text-racing-red mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-black uppercase tracking-widest text-[10px] md:text-sm italic">Réponse en 24h</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-black mb-8 uppercase italic leading-none tracking-tighter text-white"
          >
            PARLONS <span className="text-gradient animate-glow">PERFORMANCE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            Une question technique ? Un projet d'achat ? Notre équipe d'experts est prête à vous accompagner.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

          {/* Contact Information Cards */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/5"
            >
              <h3 className="text-xl md:text-2xl font-display font-black text-white mb-8 md:mb-10 uppercase italic tracking-widest border-b border-white/5 pb-4 md:pb-6">Coordonnées</h3>

              <div className="space-y-8 md:space-y-10">
                <div className="flex items-center space-x-4 md:space-x-6 group">
                  <div className="bg-racing-red/10 p-4 md:p-5 rounded-2xl text-racing-red group-hover:bg-racing-red group-hover:text-white transition-all duration-500 shadow-lg shadow-racing-red/5">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Localisation</p>
                    <p className="text-white font-bold text-base md:text-lg">33 Route de Saint-Leu, 93800 Épinay-sur-Seine</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6 group">
                  <div className="bg-racing-red/10 p-4 md:p-5 rounded-2xl text-racing-red group-hover:bg-racing-red group-hover:text-white transition-all duration-500 shadow-lg shadow-racing-red/5">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Ligne Directe</p>
                    <p className="text-white font-bold text-base md:text-lg">0759754275</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6 group">
                  <div className="bg-racing-red/10 p-4 md:p-5 rounded-2xl text-racing-red group-hover:bg-racing-red group-hover:text-white transition-all duration-500 shadow-lg shadow-racing-red/5">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1">Support Email</p>
                    <p className="text-white font-bold text-base md:text-lg">contact@poleposition93.fr</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-white/5"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase italic tracking-widest">Horaires</h3>
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-racing-red animate-pulse" />
              </div>

              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {[
                  { day: "Lundi - Vendredi", hours: "09:00 - 19:00", active: true },
                  { day: "Samedi", hours: "09:00 - 18:00", active: true },
                  { day: "Dimanche", hours: "Fermé", active: false },
                ].map((item) => (
                  <div key={item.day} className={`flex justify-between items-center p-3 md:p-4 rounded-xl border ${item.active ? 'border-white/5 bg-white/5' : 'border-transparent opacity-30'}`}>
                    <span className="font-bold text-white uppercase tracking-wider text-[10px] md:text-xs">{item.day}</span>
                    <span className={`font-black italic text-xs md:text-base ${item.active ? 'text-racing-red' : 'text-white'}`}>{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-red p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-white/10 relative shadow-2xl"
          >
            <div className="absolute top-8 right-8 opacity-5 md:opacity-10">
              <Send className="w-12 h-12 md:w-20 md:h-20 text-white" />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-black text-white mb-8 md:mb-10 uppercase italic tracking-widest">Message Direct</h3>

            <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Nom Complet</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-racing-red focus:bg-white/10 transition-all text-white text-sm md:text-base font-medium"
                    placeholder="ex: Jean Dupont"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-racing-red focus:bg-white/10 transition-all text-white text-sm md:text-base font-medium"
                    placeholder="06 -- -- -- --"
                  />
                </div>
              </div>

              {/* Custom Dropdown */}
              <div className="space-y-2 md:space-y-3 relative z-30">
                <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Sujet de la demande</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 outline-none focus:border-racing-red focus:bg-white/10 transition-all text-white text-sm md:text-base font-medium text-left flex items-center justify-between group"
                  >
                    <span>{selectedSubject}</span>
                    <ChevronDown className={`w-5 h-5 text-white/20 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} group-hover:text-racing-red`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-2 p-2 glass border-white/10 rounded-2xl shadow-2xl z-50 backdrop-blur-3xl overflow-hidden"
                      >
                        {subjects.map((subject) => (
                          <button
                            key={subject}
                            type="button"
                            onClick={() => {
                              setSelectedSubject(subject);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${selectedSubject === subject
                                ? 'bg-racing-red text-white'
                                : 'text-white/60 hover:bg-white/5 hover:text-white'
                              }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Votre Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 outline-none focus:border-racing-red focus:bg-white/10 transition-all text-white text-sm md:text-base font-medium h-32 md:h-40"
                  placeholder="Dites-nous tout..."
                ></textarea>
              </div>

              <button className="w-full bg-racing-red text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-black italic uppercase tracking-widest flex items-center justify-center space-x-4 hover:bg-racing-red-hover transition-all shadow-2xl shadow-racing-red/20 text-base md:text-lg group">
                <span>ENVOYER LE MESSAGE</span>
                <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-[3rem] overflow-hidden glass border-white/5 relative group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')] bg-cover opacity-20 grayscale transition-all duration-1000 group-hover:scale-105 group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
              <div className="bg-racing-red/20 p-6 rounded-full backdrop-blur-xl border border-racing-red/30 shadow-2xl">
                <MapPin className="w-12 h-12 text-racing-red animate-bounce" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white italic uppercase tracking-tighter">Épinay-sur-Seine <span className="text-racing-red text-2xl font-medium">93800</span></h2>
              <button className="glass px-8 py-4 rounded-full text-sm font-black italic uppercase tracking-widest hover:bg-white/10 transition-all border-white/10">Ouvrir dans Google Maps</button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
