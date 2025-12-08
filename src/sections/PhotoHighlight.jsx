// src/sections/PhotoHighlight.jsx
import { motion } from "framer-motion";
import kensingtonImg from "../assets/kensington-steps.jpg";

// Componente reutilizable de una rama horizontal
function DecorativeVine({ className = "", delayOffset = 0 }) {
  return (
    <motion.svg
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-4xl text-olive ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.22, 0.55, 0.34, 0.99] }}
    >
      {/* tallo principal */}
      <motion.path
        d="M5 45 C 80 10, 160 10, 240 30 C 300 45, 340 50, 395 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        style={{ pathLength: 0 }}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: 2.4,
          delay: 0.2 + delayOffset,
          ease: [0.22, 0.55, 0.34, 0.99],
        }}
      />

      {/* Hojitas mostaza – varias, entrando poquito a poco */}
      {[
        { d: "M60 32 C 50 28 46 22 45 15 C 54 18 59 24 60 32 Z", delay: 1.0 },
        { d: "M130 20 C 120 16 116 10 115 3 C 124 6 129 12 130 20 Z", delay: 1.2 },
        { d: "M190 38 C 180 34 176 28 175 21 C 184 24 189 30 190 38 Z", delay: 1.4 },
        { d: "M255 26 C 245 22 241 16 240 9 C 249 12 254 18 255 26 Z", delay: 1.6 },
        { d: "M320 40 C 310 36 306 30 305 23 C 314 26 319 32 320 40 Z", delay: 1.8 },
      ].map((leaf, idx) => (
        <motion.path
          key={idx}
          d={leaf.d}
          fill="#CB9850"
          initial={{ opacity: 0, scale: 0.6, y: 4 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.5,
            delay: leaf.delay + delayOffset,
            ease: [0.22, 0.55, 0.34, 0.99],
          }}
        />
      ))}
    </motion.svg>
  );
}

function PhotoHighlight() {
  return (
    <section className="w-full bg-ivory py-16 md:py-20 px-4 flex justify-center relative overflow-hidden">
      {/* fondo degradé suave */}
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-multiply pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, #EFE2D6 0, transparent 55%), radial-gradient(circle at bottom right, #E8C6B6 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4 md:gap-6">
        {/* título */}
        <div className="text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-olive/80 font-semibold">
            Escribiendo nuestra historia
          </p>
        </div>

        {/* 🌿 rama superior, sobre el fondo, debajo del título */}
        <DecorativeVine className="mt-1 mb-2" delayOffset={0} />

        {/* foto */}
        <motion.div
          className="
            relative overflow-hidden
            rounded-[32px] md:rounded-[36px]
            border border-white/70
            shadow-[0_18px_45px_-24px_rgba(0,0,0,0.6)]
            bg-champagne/40
            w-full
          "
          initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 0.55, 0.34, 0.99] }}
          whileHover={{
            scale: 1.01,
            y: -4,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
        >
          <motion.img
            src={kensingtonImg}
            alt="Tania y Raúl bailando"
            className="w-full h-full object-cover"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.02 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* viñeta suave */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.18) 100%)",
              mixBlendMode: "soft-light",
            }}
          />
        </motion.div>

        {/* 🌿 rama inferior, debajo de la foto */}
        <DecorativeVine className="mt-3" delayOffset={0.4} />
      </div>
    </section>
  );
}

export default PhotoHighlight;
