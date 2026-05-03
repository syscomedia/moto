"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay after 100%
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 100 * 25ms = 2500ms + padding = ~3s

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-carbon-black flex flex-col items-center justify-center p-4 overflow-hidden"
    >
      {/* Mesh Background for Loader */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="relative z-10 w-full max-w-xs flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <div className="text-4xl md:text-6xl font-display font-black tracking-tighter italic flex items-center space-x-2">
            <span className="text-racing-red drop-shadow-[0_0_15px_rgba(227,24,55,0.5)]">SPEED</span>
            <span className="text-white"> MOTO PIECES</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-racing-red to-transparent mt-2 opacity-50" />
        </motion.div>

        {/* Progress System */}
        <div className="w-full space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-racing-red font-black italic text-[10px] uppercase tracking-[0.4em]">Chargement</span>
            <span className="text-white font-display font-black italic text-2xl leading-none">{progress}%</span>
          </div>
          
          <div className="h-[6px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
            <motion.div 
              className="h-full bg-gradient-to-r from-racing-red via-racing-red-hover to-amber-gold rounded-full shadow-[0_0_15px_rgba(227,24,55,0.3)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          
          <p className="text-white/20 font-black uppercase text-[8px] tracking-[0.5em] text-center animate-pulse">
            Performance & excellence en cours de chargement…
          </p>
        </div>
      </div>

      {/* Decorative large text in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <span className="text-[30vw] font-display font-black italic -rotate-12">RACING</span>
      </div>
    </motion.div>
  );
}
