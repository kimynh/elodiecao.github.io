import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-white bg-clip-text text-transparent mb-4"
      >
        Elodie Cao
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-xl md:text-2xl font-semibold mb-6"
      >
        Étudiante MIAGE & Développeuse Fullstack
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="max-w-xl text-lg md:text-xl mb-8 text-gray-300"
      >
        Passionnée par les systèmes d'information, le développement web et la gestion de projet. Je recherche une alternance de 2 ans à partir de septembre 2026 dans la banque, la finance ou le conseil IT.
      </motion.p>
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-accent transition-colors text-lg"
      >
        Me contacter
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
