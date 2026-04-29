"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, X, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const pathname = usePathname();

  // Reset state on navigation
  useEffect(() => {
    setIsVisible(false);
    setIsDismissed(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed && window.scrollY > 400 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isDismissed]);

  // Block scroll when visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (isDismissed && !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-carbon-black/60 backdrop-blur-xl"
            onClick={() => {
              setIsVisible(false);
              setIsDismissed(true);
            }}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-lg glass-red p-10 md:p-14 rounded-[4rem] border-white/10 shadow-[0_0_100px_rgba(227,24,55,0.2)] relative overflow-hidden pointer-events-auto">

              {/* Massive Close Button */}
              <button
                onClick={() => {
                  setIsVisible(false);
                  setIsDismissed(true);
                }}
                className="absolute top-8 right-8 w-14 h-14 bg-white/5 hover:bg-racing-red rounded-full flex items-center justify-center transition-all group z-20 border border-white/10 hover:border-racing-red shadow-2xl"
              >
                <X className="w-8 h-8 text-white group-hover:scale-125 transition-transform" strokeWidth={3} />
              </button>

              {/* Background Accent */}
              <div className="absolute top-0 left-0 opacity-[0.03] pointer-events-none">
                <span className="text-[20rem] font-display font-black italic -rotate-12">SM</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-8 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="bg-racing-red p-6 rounded-[2rem] shadow-2xl shadow-racing-red/40"
                >
                  <Zap className="w-10 h-10 text-white fill-white" />
                </motion.div>

                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-racing-red">
                    <div className="w-2 h-2 bg-racing-red rounded-full animate-ping" />
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] italic">Action Immédiate</span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-display font-black italic text-white uppercase leading-none tracking-tighter">
                    PRÊT À <span className="text-gradient animate-glow">DOMINER ?</span>
                  </h2>

                  <p className="text-white/40 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                    Ne laissez pas passer l'excellence. Nos experts sont en ligne pour votre besion.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4">
                  <a
                    href="tel:0759754275"
                    className="flex items-center justify-center space-x-4 glass-red text-white py-6 rounded-3xl font-black italic uppercase tracking-widest text-sm shadow-xl shadow-racing-red/20 hover:scale-[1.05] transition-all group/btn"
                  >
                    <Phone className="w-6 h-6 text-racing-red group-hover/btn:rotate-12 transition-transform" />
                    <span>Appeler Direct</span>
                  </a>
                  <a
                    href="https://wa.me/33759754275"
                    className="flex items-center justify-center space-x-4 glass-green text-white py-6 rounded-3xl font-black italic uppercase tracking-widest text-sm shadow-xl shadow-green-500/20 hover:scale-[1.05] transition-all group/btn"
                  >
                    <MessageSquare className="w-6 h-6 text-green-500 group-hover/btn:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-white/10 font-black uppercase text-[8px] tracking-[0.5em]">
                  SPEED MOTO PIECES • L'ÉLITE DU DEUX-ROUES
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
