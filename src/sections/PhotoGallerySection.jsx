import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import foto1 from "../assets/foto1.JPG";
import foto2 from "../assets/foto2.JPG";
import foto3 from "../assets/foto3.JPG";
import foto4 from "../assets/foto4.JPG";
import foto5 from "../assets/foto5.JPG";
import foto6 from "../assets/foto6.JPG";
import foto7 from "../assets/foto7.JPG";
import foto8 from "../assets/foto8.JPG";

const googleFonts = (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
      .font-sans-elegant { font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .font-serif-elegant { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
    `}
  </style>
);

const COLORS = {
  mustard: "#A7712D",
  vino: "#631600",
  olive: "#7F8464",
  oliveSoft: "#A4AA81",
};

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8 opacity-85">
    <div className="h-[1px] w-12 md:w-24" style={{ backgroundColor: `${COLORS.mustard}66` }} />
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill={COLORS.mustard}
        fillOpacity="0.95"
      />
    </svg>
    <div className="h-[1px] w-12 md:w-24" style={{ backgroundColor: `${COLORS.mustard}66` }} />
  </div>
);

function clampIndex(i, length) {
  const m = ((i % length) + length) % length;
  return m;
}

// --- CONFIGURACIÓN DE ANIMACIÓN ---
const drawVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (custom) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: custom * 0.5,
        type: "spring",
        duration: 6,
        bounce: 0,
      },
      opacity: { duration: 0.5, delay: custom * 0.5 },
    },
  }),
};

const ComplexSideOrnament = ({ side }) => {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-0 bottom-0 ${isLeft ? "left-0" : "right-0"} w-[180px] md:w-[280px] z-0 pointer-events-none overflow-hidden`}
    >
      <motion.svg
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${!isLeft ? "scale-x-[-1]" : ""}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
      >
        <motion.path
          d="M-20 800 C 50 700, 150 650, 100 500 C 50 350, 180 300, 150 100 C 140 40, 80 0, 50 -20"
          stroke={COLORS.mustard}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={drawVariant}
          custom={0}
          className="opacity-40"
        />
        <motion.path
          d="M0 750 C 80 650, 40 500, 120 400 C 160 350, 40 200, 80 50"
          stroke={COLORS.oliveSoft}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          variants={drawVariant}
          custom={0.8}
          className="opacity-50"
        />
      </motion.svg>
    </div>
  );
};

export default function PhotoGallerySection() {
  const photos = useMemo(
    () => [
    
      { src: foto1, alt: "Momentos 1", caption: "Ciudad de México", year: "2012" },
      { src: foto2, alt: "Momentos 2", caption: "París", year: "2013" },
      { src: foto3, alt: "Momentos 3", caption: "Londres", year: "2013" },
      { src: foto4, alt: "Momentos 4", caption: "João Pessoa", year: "2014" },
      { src: foto5, alt: "Momentos 5", caption: "Hidalgo", year: "2018" },
      { src: foto6, alt: "Momentos 6", caption: "Guatemala", year: "2021" },
      { src: foto7, alt: "Momentos 7", caption: "Hidalgo", year: "2021" },
      { src: foto8, alt: "Momentos 8", caption: "Vancouver", year: "2021" },
    ],
    []
  );

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const scrollToIndex = (index, behavior = "smooth") => {
    const el = trackRef.current;
    if (!el) return;
    const target = el.querySelector(`[data-slide="${index}"]`);
    if (!target) return;
    const left = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
    el.scrollTo({ left, behavior });
  };

  const next = () => {
    const i = clampIndex(active + 1, photos.length);
    setActive(i);
    scrollToIndex(i);
  };

  const prev = () => {
    const i = clampIndex(active - 1, photos.length);
    setActive(i);
    scrollToIndex(i);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId = null;
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const slides = Array.from(el.querySelectorAll("[data-slide]"));
        if (!slides.length) return;
        const center = el.scrollLeft + el.clientWidth / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        for (const s of slides) {
          const idx = Number(s.getAttribute("data-slide"));
          const sCenter = s.offsetLeft + s.clientWidth / 2;
          const dist = Math.abs(center - sCenter);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        }
        setActive(bestIdx);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const id = setInterval(() => {
      next();
    }, 6500);
    return () => clearInterval(id);
  }, [active, isHovering]);

  useEffect(() => {
    const t = setTimeout(() => scrollToIndex(0, "auto"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="galeria" className="w-full px-4 py-24 md:py-32 flex justify-center relative overflow-hidden">
      {googleFonts}

      {/* FONDO */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAF5EE] via-[#EEF0EB] to-[#FAF5EE]" />
      <div
        className="absolute inset-0 z-0 opacity-[0.3] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(167,113,45,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <ComplexSideOrnament side="left" />
      <ComplexSideOrnament side="right" />

      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8" style={{ backgroundColor: `${COLORS.mustard}55` }} />
            <p
              className="font-sans-elegant text-[11px] md:text-xs tracking-[0.32em] uppercase font-bold"
              style={{ color: COLORS.mustard }}
            >
              Galería
            </p>
            <span className="h-[1px] w-8" style={{ backgroundColor: `${COLORS.mustard}55` }} />
          </div>

          <h2 className="font-serif-elegant text-4xl md:text-6xl leading-tight mb-3" style={{ color: "#7F8464" }}>
            Nuestra historia en fotos
          </h2>

          <p className="font-sans-elegant text-sm md:text-[15px] max-w-2xl mx-auto leading-relaxed" style={{ color: "#4F5440" }}>
            “Lo mejor a lo que podemos aferrarnos en la vida es el uno al otro.” - Audrey H.
          </p>

          <OrnamentalDivider />
        </motion.div>

        {/* Carousel frame */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          {/* Flechas */}
          <button
            type="button"
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-lg hover:bg-white/90 transition-all hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke={COLORS.vino} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/70 backdrop-blur border border-white/60 shadow-lg hover:bg-white/90 transition-all hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke={COLORS.vino} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 md:px-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-8"
          >
            {photos.map((p, i) => {
              const isActive = i === active;

              return (
                <div key={i} data-slide={i} className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[50%]">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[4px] overflow-hidden bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] p-2 md:p-3"
                    style={{
                      transform: isActive ? "scale(1.02)" : "scale(0.98)",
                      transition: "transform 0.5s ease-out",
                      borderColor: isActive ? `${COLORS.mustard}33` : "transparent",
                      borderWidth: "1px",
                    }}
                  >
                    {/* Marco interno */}
                    <div className="relative w-full aspect-[4/5] md:aspect-[3/2] overflow-hidden">
                      <motion.img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                        animate={{ scale: isActive ? 1.05 : 1 }}
                        transition={{ duration: 7, ease: "linear" }}
                      />
                      <div className="absolute inset-0 bg-[#631600]/10 mix-blend-overlay pointer-events-none" />
                    </div>

                    {/* Pie de foto personalizable */}
                    <div className="pt-3 flex items-center justify-between gap-4 opacity-90">
                      <span className="font-serif-elegant italic text-[13px] md:text-sm text-[#631600] truncate">
                        {p.caption || `Foto ${i + 1}`}
                      </span>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="h-[1px] w-10 bg-[#A7712D]/45" />
                        <span className="font-sans-elegant text-[11px] tracking-[0.18em] uppercase text-[#631600]/80">
                          {p.year || ""}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-2 flex items-center justify-center gap-3">
            {photos.map((_, i) => {
              const on = i === active;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    scrollToIndex(i);
                  }}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: on ? 24 : 6,
                    backgroundColor: on ? COLORS.mustard : "#D1D5DB",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
