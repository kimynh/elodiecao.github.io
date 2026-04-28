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
    <section id="skills" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <span className="eyebrow">Compétences</span>
        <h2 className="section-title mt-5">Des bases solides pour concevoir, développer et structurer.</h2>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.label}
            variants={item}
            className="soft-card flex flex-col gap-5 p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4efe8]">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-primary">{skill.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((el) => (
                <li
                  key={el}
                  className="rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-600"
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
