import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm mt-10">
      © {new Date().getFullYear()} Elodie Cao — Portfolio. Réalisé avec React, Vite, Tailwind CSS & Framer Motion.
    </footer>
  );
}
