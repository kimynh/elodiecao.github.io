import React from "react";
import { motion } from "framer-motion";
import { Briefcase, School } from "lucide-react";

const experiences = [
  {
    icon: <School size={22} className="text-primary" />,
    title: "L3 MIAGE – Université Paris Cité",
    date: "2025 – 2026",
    description: "Formation MIAGE : développement, gestion de projet, data, systèmes d’information.",
  },
  {
    icon: <Briefcase size={22} className="text-primary" />,
    title: "Stage – Consulting informatique (Airbus)",
    date: "Été 2025",
    description: "Analyse de données, automatisation VBA, recueil des besoins métiers.",
  },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-primary"
      >
        Expérience
      </motion.h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-glass rounded-xl shadow-glass p-6 flex items-start gap-4"
          >
            <div className="mt-1">{exp.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-accent mb-1">{exp.title}</h3>
              <div className="text-sm text-gray-400 mb-1">{exp.date}</div>
              <div className="text-gray-200">{exp.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
