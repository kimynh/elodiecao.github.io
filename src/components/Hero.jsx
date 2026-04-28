import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="section-shell pt-4">
      <div className="soft-card relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="eyebrow"
            >
              Portfolio 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-primary md:text-7xl"
            >
              Elodie Cao,
              <span className="font-display ml-3 italic text-taupe">
                MIAGE, produit et développement
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.05, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl"
            >
              Actuellement en L3 MIAGE à l’Université Paris Cité, j’intégrerai le Master MIAGE à la rentrée 2026. J’aime concevoir des expériences numériques claires, utiles et bien structurées, et je rejoindrai Hyvilo du 20 mai 2026 au 14 août 2026 avant de poursuivre avec une alternance de 2 ans.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Me contacter
                <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-white"
              >
                Voir mes projets
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: "easeOut" }}
            className="grid gap-4"
          >
            <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/85 p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <span className="pill-tag">À venir</span>
                <Sparkles size={18} className="text-accent" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-primary">
                Stage chez Hyvilo
              </h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Du 20 mai 2026 au 14 août 2026 à Paris 15e, sur un environnement React, Django et GitLab CI/CD.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-stone-200/80 bg-[#f8f5ef] p-5">
                <CalendarDays size={20} className="text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Stage
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  Mai à août 2026
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-stone-200/80 bg-[#f8f5ef] p-5">
                <BriefcaseBusiness size={20} className="text-primary" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  React, Django, CI/CD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
