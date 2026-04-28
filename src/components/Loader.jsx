import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#18181b]">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <span className="text-lg text-white font-semibold tracking-wide">Chargement…</span>
      </motion.div>
    </div>
  );
}
