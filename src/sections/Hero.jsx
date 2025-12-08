// src/sections/Hero.jsx
import { motion } from "framer-motion";
import heroImg from "../assets/hero-tania-raul.JPG";

// --- GRECA CALIGRÁFICA ---
const FloralDivider = () => {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const leafVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 2.2, duration: 0.5, type: "spring" },
    },
  };

  return (
    <div className="mb-4 flex justify-center overflow-visible">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        fill="none"
        className="w-32 md:w-44 opacity-90"
      >
        <motion.path
          d="M0 20 C 15 35, 25 5, 40 20 S 65 35, 75 20"
          stroke="#CB9850"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M160 20 C 145 35, 135 5, 120 20 S 95 35, 85 20"
          stroke="#CB9850"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={drawVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M80 20 C 76 12, 80 4, 80 4 C 80 4, 84 12, 80 20 Z"
          fill="#CB9850"
          variants={leafVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 1.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="
        relative 
        min-h-[125dvh] md:min-h-[120dvh]
        w-full 
        flex flex-col items-center 
        justify-start
        pt-20 md:pt-24 lg:pt-20   /* 👉 tarjeta anclada arriba */
        overflow-hidden 
        bg-ivory
      "
    >
      {/* IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImg}
          alt="Tania y Raúl"
          className="
            w-full h-full object-cover
            object-center
            md:object-[40%_60%]
          "
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-ivory/10 mix-blend-overlay pointer-events-none" />
      </div>

      {/* TARJETA CENTRAL – AHORA PEGADA ARRIBA */}
      <motion.div
        className="
          relative z-10 w-full 
          px-4 
          flex justify-center
          mt-12
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="
            backdrop-blur-xl 
            bg-ivory/85 
            border border-white/50 
            shadow-[0_30px_60px_-15px_rgba(203,152,80,0.25)]
            rounded-[40px] 
            px-6 py-10 md:px-14 md:py-14 
            w-auto
            max-w-[340px] md:max-w-xl
            flex flex-col items-center justify-center
            text-center
          "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <FloralDivider />

          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-olive font-medium text-[10px] md:text-xs mb-2 mt-1"
          >
            Nuestra boda
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-mustard text-5xl md:text-[5.5rem] leading-none mb-4 py-1"
            style={{ textShadow: "0px 2px 4px rgba(203, 152, 80, 0.15)" }}
          >
            Tania{" "}
            <span className="text-olive/70 text-3xl md:text-5xl font-light align-middle mx-1">
              &
            </span>{" "}
            Raúl
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 sm:gap-3 mt-1 w-full"
          >
            <span className="h-[1px] w-6 sm:w-10 md:w-12 bg-[#CB9850]/60" />
            <p className="font-serif italic text-[1.15rem] sm:text-xl md:text-2xl text-[#5E6347] tracking-wide whitespace-nowrap">
              21 · Noviembre · 2026
            </p>
            <span className="h-[1px] w-6 sm:w-10 md:w-12 bg-[#CB9850]/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
