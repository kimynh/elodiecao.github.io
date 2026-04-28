import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 text-center text-sm text-stone-500 md:px-6">
      © {new Date().getFullYear()} Elodie Cao. Portfolio conçu avec React, Vite, Tailwind CSS et Framer Motion.
    </footer>
  );
}
