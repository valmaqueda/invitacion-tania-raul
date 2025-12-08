// src/sections/LocationSection.jsx
import { motion } from "framer-motion";
import hotelImage from "../assets/hotel-tres-vidas.jpg";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Tres+Vidas+Acapulco";
const wazeUrl =
  "https://waze.com/ul?q=Hotel%20Tres%20Vidas%20Acapulco&navigate=yes";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <img
          src={hotelImage}
          alt="Hotel Tres Vidas"
          className="w-full h-full object-cover object-center brightness-[0.82]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/30" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="
            w-full 
            max-w-[380px] sm:max-w-[440px] md:max-w-[500px]
            bg-[#FAF5EE]
            rounded-[5px]
            shadow-2xl
            p-7 sm:p-8 md:p-10 lg:p-14
            text-center
          "
        >
          {/* línea decorativa */}
          <div className="w-px h-7 sm:h-8 bg-[#CB9850] mx-auto mb-5 sm:mb-6 opacity-60" />

          {/* etiqueta */}
          <h3 className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-[#949D6A] uppercase mb-3 sm:mb-4">
            Celebramos en
          </h3>

          {/* título */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A2A2A] mb-2">
            Hotel Tres Vidas
          </h1>

          {/* subtítulo */}
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#CB9850] mb-6 sm:mb-8">
            Acapulco, Guerrero
          </p>

          {/* dirección */}
          <div className="font-sans text-[11px] sm:text-xs md:text-sm text-gray-500 leading-relaxed sm:leading-loose tracking-wide mb-8 sm:mb-10 border-t border-b border-gray-200 py-4 sm:py-6">
            <p>Carretera a Barra Vieja, Supermanzana Km. 7</p>
            <p>Plan de Los Amates, 39931</p>
            <p>Acapulco de Juárez, Gro.</p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-col gap-2.5 sm:gap-3">
            {/* Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-full 
                py-3 sm:py-3.5 md:py-4 px-6
                bg-[#CB9850] text-[#FAF5EE]
                text-[0.6rem] sm:text-[0.7rem] md:text-xs
                font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase
                transition-all duration-500 hover:bg-[#b08240]
                flex items-center justify-center gap-2.5 sm:gap-3
              "
            >
              <span>Ver ubicación</span>
              <svg
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Waze */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full 
                py-2.5 sm:py-3 px-6
                text-[#949D6A]
                text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem]
                font-bold tracking-[0.14em] sm:tracking-[0.15em] uppercase
                border border-transparent hover:border-[#949D6A]/30
                transition-all duration-300
              "
            >
              Ir con Waze
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
