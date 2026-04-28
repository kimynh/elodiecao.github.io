import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-primary"
      >
        À propos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-lg md:text-xl text-gray-200 leading-relaxed bg-glass rounded-xl p-6 shadow-glass"
      >
        Je m’appelle Elodie Cao, actuellement en L3 MIAGE à l’Université Paris Cité. Mon parcours m’a permis de développer une double compétence en développement logiciel et en gestion de projet IT, avec une forte appétence pour l’analyse de données et les systèmes d’information bancaires et financiers.<br /><br />
        Rigoureuse, curieuse et passionnée, je souhaite rejoindre une équipe dynamique en alternance à partir de septembre 2026 pour contribuer à des projets innovants, tout en continuant à apprendre et à progresser dans le domaine du numérique.
      </motion.p>
    </section>
  );
}
