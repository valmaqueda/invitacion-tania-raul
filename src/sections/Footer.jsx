// src/sections/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-champagne/60 relative overflow-hidden">
      {/* Clave del fix: 'pb-28' en mobile da espacio para el botón de Menú.
         'md:pb-10' en desktop regresa a un padding normal.
      */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-28 md:pb-10 flex flex-col items-center justify-center gap-2">
        
        {/* Texto superior sutil */}
        <p className="text-slate-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
          Diseñado y desarrollado con mucho amor
        </p>

        {/* Tu nombre destacado y animado */}
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
          
          {/* Pequeño detalle extra: año o copyright opcional */}
          <p className="text-[10px] text-slate-300 mt-1">
            © 2026
          </p>
        </motion.div>

      </div>
    </footer>
  );
}