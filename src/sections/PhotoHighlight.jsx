// src/sections/PhotoHighlight.jsx
import { motion } from "framer-motion";
import kensingtonImg from "../assets/kensington-steps.jpg";

// 🌿 Rama decorativa con efecto de dibujo compatible con iOS
// 🌿 Rama decorativa (iOS-safe): trigger 1 sola vez en el SVG + draw con dashoffset
function DecorativeVine({ className = "", delayOffset = 0 }) {
  const stemDash = 520;
  const leafDash = 140;

  const wrapVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.25 + delayOffset,
        staggerChildren: 0.14,
      },
    },
  };

  const stemVariants = {
    hidden: { strokeDashoffset: stemDash, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        duration: 2.4,
        ease: [0.22, 0.55, 0.34, 0.99],
      },
    },
  };

  const leafStrokeVariants = (delay = 0) => ({
    hidden: { strokeDashoffset: leafDash, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        delay,
        ease: [0.22, 0.55, 0.34, 0.99],
      },
    },
  });

  const leafFillVariants = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.45, delay: delay + 0.35 },
    },
  });

  const leaves = [
    { d: "M60 32 C 50 28 46 22 45 15 C 54 18 59 24 60 32 Z", delay: 0.9 },
    { d: "M130 20 C 120 16 116 10 115 3 C 124 6 129 12 130 20 Z", delay: 1.05 },
    { d: "M190 38 C 180 34 176 28 175 21 C 184 24 189 30 190 38 Z", delay: 1.2 },
    { d: "M255 26 C 245 22 241 16 240 9 C 249 12 254 18 255 26 Z", delay: 1.35 },
    { d: "M320 40 C 310 36 306 30 305 23 C 314 26 319 32 320 40 Z", delay: 1.5 },
  ];

  return (
    <motion.svg
      viewBox="0 0 400 60"
      xmlns="http://www.w3.org/2000/svg"
      // 👉 overflow-visible ayuda a evitar “clipping” raro en Safari
      className={`w-full max-w-4xl overflow-visible ${className}`}
      // 👉 color del tallo (ajusta si quieres). Yo lo dejo #7F8464 como tu estilo
      style={{
        color: "#7F8464",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
      variants={wrapVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
    >
      {/* Tallo principal: dibujado iOS-safe */}
      <motion.path
        d="M5 45 C 80 10, 160 10, 240 30 C 300 45, 340 50, 395 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray={stemDash}
        variants={stemVariants}
      />

      {/* Hojas: 2 capas (stroke dibujado + fill que aparece) */}
      {leaves.map((leaf, idx) => (
        <g key={idx}>
          <motion.path
            d={leaf.d}
            fill="none"
            stroke="#A7712D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={leafDash}
            variants={leafStrokeVariants(leaf.delay)}
          />
          <motion.path
            d={leaf.d}
            fill="#A7712D"
            variants={leafFillVariants(leaf.delay)}
          />
        </g>
      ))}
    </motion.svg>
  );
}


function PhotoHighlight() {
  return (
    <section className="w-full bg-ivory py-16 md:py-20 px-4 flex justify-center relative overflow-hidden">
      {/* Fondo degradé suave */}
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-multiply pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, #EFE2D6 0, transparent 55%), radial-gradient(circle at bottom right, #E8C6B6 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-4 md:gap-6">
        {/* Título */}
        <div className="text-center">
          <p className="text-[14px] md:text-xs tracking-[0.3em] uppercase text-[#7F8464] font-semibold">
            Escribiendo nuestra historia
          </p>
        </div>

        {/* 🌿 Rama superior */}
        <DecorativeVine className="mt-1 mb-2" delayOffset={0} />

        {/* Foto */}
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

          {/* Viñeta suave */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.19) 100%)",
              mixBlendMode: "soft-light",
            }}
          />
        </motion.div>

        {/* 🌿 Rama inferior */}
        <DecorativeVine className="mt-3" delayOffset={0.7} />
      </div>
    </section>
  );
}

export default PhotoHighlight;
