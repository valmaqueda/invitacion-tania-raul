// src/sections/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-champagne/60 relative overflow-hidden">
      {/* Mantiene el padding inferior grande (pb-28) en celular 
         para que el botón de MENÚ no tape nada.
      */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-28 md:pb-10 flex flex-col items-center justify-center gap-2">
        
        {/* APLICADO: Color #8b592a */}
        <p className="text-[#8b592a] text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
          Diseñado y desarrollado con amor por
        </p>

        {/* Tu nombre destacado */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-mustard text-sm md:text-base font-semibold tracking-wide flex items-center justify-center gap-2">
            <span className="text-xs opacity-60">★</span> 
             Valeria Andrade Maqueda 
            <span className="text-xs opacity-60">★</span>
          </span>
          
          {/* Pequeño copyright, también en tono similar pero más suave */}
          <p className="text-[10px] text-[#8b592a] opacity-60 mt-1">
            © 2026
          </p>
        </motion.div>

      </div>
    </footer>
  );
}