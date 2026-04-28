import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, GitBranch, BarChart3 } from "lucide-react";

const skills = [
  {
    icon: <Code size={28} className="text-primary" />, label: "Langages", items: ["Java", "Python", "JavaScript", "C/C++", "SQL", "VBA"],
  },
  {
    icon: <Server size={28} className="text-primary" />, label: "Web & Backend", items: ["React", "Next.js", "HTML", "CSS", "Django", "API REST"],
  },
  {
    icon: <Database size={28} className="text-primary" />, label: "Data", items: ["PostgreSQL", "Analyse de données"],
  },
  {
    icon: <GitBranch size={28} className="text-primary" />, label: "Outils", items: ["Git", "GitLab CI/CD", "Docker", "SVN"],
  },
  {
    icon: <BarChart3 size={28} className="text-primary" />, label: "Méthodes", items: ["Agile/Scrum", "UML", "Analyse fonctionnelle"],
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-primary"
      >
        Compétences
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.label}
            variants={item}
            className="bg-glass rounded-xl shadow-glass p-6 flex flex-col items-center group hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-accent">{skill.label}</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {skill.items.map((el) => (
                <li
                  key={el}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30 animate-pulse group-hover:animate-none"
                >
                  {el}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
