import React from "react";
import { motion } from "framer-motion";
import { Music, Youtube } from "lucide-react";
import harpBg from "../assets/harp-bg.svg";

export default function Harp() {
  return (
    <section id="harp" className="section-shell relative">
      <img
        src={harpBg}
        alt="Fond décoratif harpe"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-60"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="soft-card relative overflow-hidden p-8 md:p-10"
      >
        <span className="eyebrow">Hors cadre</span>
        <h2 className="section-title mt-5">Ma passion : la harpe</h2>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="flex-1 flex flex-col items-center">
            <Music size={40} className="text-accent mb-2" />
            <p className="mb-2 text-center text-lg leading-8 text-stone-600">
              Je pratique la harpe depuis l’enfance. Cet instrument m’apporte créativité, rigueur et sens du détail, des qualités que je mets aussi au service de mes projets informatiques.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <Youtube size={40} className="text-red-500 mb-2" />
            <a
              href="https://www.youtube.com/@elodieynh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-primary px-5 py-3 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Voir ma chaîne @elodieynh
            </a>
          </div>
        </div>
        <div className="mt-8 w-full overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-3 shadow-soft">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Jg4Kn7YzMhY"
            title="YouTube Harpe Elodie Cao"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-[1.25rem]"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
