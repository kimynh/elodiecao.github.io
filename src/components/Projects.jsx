import React from "react";
import { motion } from "framer-motion";
import { ServerCog, Zap, Database, BarChart3, Briefcase } from "lucide-react";

const projects = [
  {
    icon: <ServerCog size={28} className="text-accent" />,
    title: "Plateforme de recrutement avec ATS",
    description:
      "Application fullstack Next.js + API Python pour la gestion du recrutement. Authentification sécurisée (candidat/recruteur), modélisation avancée de la base de données, containerisation Docker.",
    stack: ["Next.js", "Python", "Docker", "PostgreSQL", "REST API"],
    main: true,
  },
  {
    icon: <Zap size={28} className="text-accent" />,
    title: "Projet Java – Réseau de distribution d’électricité",
    description:
      "Modélisation orientée objet d’un réseau, optimisation algorithmique et tests unitaires JUnit.",
    stack: ["Java", "JUnit", "UML"],
  },
  {
    icon: <Database size={28} className="text-accent" />,
    title: "Projet Java – Mini SGBD relationnel",
    description:
      "Développement d’un mini SGBD avec CRUD, requêtes SQL et persistance des données.",
    stack: ["Java", "SQL"],
  },
  {
    icon: <BarChart3 size={28} className="text-accent" />,
    title: "Comparaison moteurs 3D (Unity vs Unreal)",
    description:
      "Gestion de projet Agile, développement C++ et analyse de performance sur Unity et Unreal Engine.",
    stack: ["C++", "Agile", "Unity", "Unreal"],
  },
  {
    icon: <Briefcase size={28} className="text-accent" />,
    title: "Stage en consulting informatique (Airbus)",
    description:
      "Analyse de données, automatisation VBA et recueil des besoins métiers pour Airbus.",
    stack: ["VBA", "Data", "Consulting"],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-primary"
      >
        Projets
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className={`relative bg-glass rounded-xl shadow-glass p-6 flex flex-col gap-3 group border border-transparent hover:border-primary/40 transition-all duration-300 ${project.main ? "md:col-span-2" : ""}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(56,189,248,0.18)" }}
          >
            <div className="mb-2">{project.icon}</div>
            <h3 className="font-semibold text-xl mb-1 text-accent">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
