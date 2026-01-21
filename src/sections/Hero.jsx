// src/sections/Hero.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../assets/hero-tania-raul.webp";

// Greca animada ✨
const FloralDivider = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const leafVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 1.6,
        duration: 0.5,
        type: "spring",
        stiffness: 160,
      },
    },
  };

  return (
    <div className="mb-3 flex justify-center opacity-90">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        fill="none"
        className="w-28 md:w-36"
      >
        <motion.path
          d="M0 20 C 15 35, 25 5, 40 20 S 65 35, 75 20"
          stroke="#CB9850"
          strokeWidth="1.5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          strokeLinecap="round"
        />
        <motion.path
          d="M160 20 C 145 35, 135 5, 120 20 S 95 35, 85 20"
          stroke="#CB9850"
          strokeWidth="1.5"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          strokeLinecap="round"
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
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax muy suave del fondo
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="
        relative w-full h-[100dvh]
        overflow-hidden bg-ivory
        flex flex-col items-center
        justify-start
        pt-6 md:pt-10
      "
    >
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: yBg }}
          className="w-full h-[115%] relative -top-[8%]"
        >
          <motion.img
            src={heroImg}
            alt="Fondo boda Tania y Raúl"
            className="w-full h-full object-cover"
            // Un poco más alejada y centrada
            style={{ objectPosition: "49% 41%" }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />

          {/* Overlay tenue */}
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/55 via-ivory/10 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* TARJETA PRINCIPAL */}
      <motion.div
        className="
          relative z-10 px-4 w-full flex justify-center
          -translate-y-10 md:-translate-y-14 lg:-translate-y-20
        "
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
      >
        {/* Fuentes elegantes */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Montserrat:wght@300;400;500&display=swap');
            .font-cursiva { font-family: 'Pinyon Script', cursive; }
            .font-sans-elegant { font-family: 'Montserrat', sans-serif; }
          `}
        </style>

        <motion.div
          className="
            relative
            rounded-[2.8rem]
            px-7 py-7 
            max-w-[96%] 
            sm:max-w-[90%]
            md:max-w-3xl md:px-14 md:py-9
            flex flex-col items-center text-center
            overflow-hidden
          "
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.97), rgba(250,245,238,0.96))",
            boxShadow:
              "0 26px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.88)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* borde interior sutil */}
          <div className="pointer-events-none absolute inset-[10px] rounded-[2.2rem] border border-white/60" />

          <div className="relative z-10 flex flex-col items-center">
            <FloralDivider />

            {/* SUBTÍTULO */}
            <motion.p
              className="uppercase tracking-[0.35em] text-[#5E6347] font-sans-elegant text-[9px] md:text-[10px] mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Nuestra boda
            </motion.p>

            {/* “Tania & Raúl” cursiva natural */}
            <motion.h1
              className="
                font-cursiva
                text-[2.6rem] md:text-[3.1rem] lg:text-[3.4rem]
                whitespace-nowrap
                leading-none
                mb-3
              "
              style={{
                color: "#B97D2F",
                textShadow: "0 2px 6px rgba(0,0,0,0.14)",
              }}
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.08em" }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.6 }}
            >
              <span className="inline-block">Tania</span>
              <span className="text-[#9CAB63] mx-3 text-[2.1rem] md:text-[2.3rem]">
                &
              </span>
              <span className="inline-block">Raúl</span>
            </motion.h1>

            {/* Fecha en un solo renglón */}
            <motion.div
              className="flex items-center gap-2 md:gap-3 opacity-95 mt-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <span className="h-[1px] w-6 md:w-8 bg-[#CB9850]/85" />
              <p className="font-sans-elegant text-[0.75rem] md:text-sm tracking-[0.28em] text-[#4F5440] uppercase whitespace-nowrap">
                21 · Noviembre · 2026
              </p>
              <span className="h-[1px] w-6 md:w-8 bg-[#CB9850]/85" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
