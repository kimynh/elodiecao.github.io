import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-primary"
      >
        Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="bg-glass rounded-xl shadow-glass p-8 flex flex-col items-center gap-6"
      >
        <a
          href="mailto:elodie.cao@email.com"
          className="flex items-center gap-2 text-lg text-white hover:text-primary font-medium transition-colors"
        >
          <Mail size={22} /> elodie.cao@email.com
        </a>
        <a
          href="https://www.linkedin.com/in/elodie-cao-miage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg text-white hover:text-primary font-medium transition-colors"
        >
          <Linkedin size={22} /> linkedin.com/in/elodie-cao-miage
        </a>
      </motion.div>
    </section>
  );
}
