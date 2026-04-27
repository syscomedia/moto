"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "33123456789"; // Example
  const message = "Bonjour Pôle Position 93, j'aimerais avoir des renseignements sur vos véhicules.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      title="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-white text-carbon-black text-sm font-bold px-3 py-1 rounded-lg whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Besoin d'aide ?
      </span>
    </motion.a>
  );
}
