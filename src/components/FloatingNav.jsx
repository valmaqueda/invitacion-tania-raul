// src/components/FloatingNav.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "itinerario", label: "Itinerario" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "regalos", label: "Mesa de regalos" },
  { id: "dresscode", label: "Dress code" },
  { id: "hospedaje", label: "Hospedaje" },
  { id: "asistencia", label: "Asistencia" },
];

export default function FloatingNav() {
  const [activeId, setActiveId] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Pinta activo inmediato
    setActiveId(id);

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getSectionEls = () =>
      SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean);

    let sectionEls = getSectionEls();

    const computeActive = () => {
      // Punto guía: 35% desde arriba del viewport (ajústalo si quieres)
      const probe = window.scrollY + window.innerHeight * 0.35;

      let current = sectionEls[0]?.id || "inicio";

      for (const el of sectionEls) {
        if (el.offsetTop <= probe) current = el.id;
      }

      setActiveId(current);
    };

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        // por si el DOM cambió (lazy sections, imágenes que cambian altura, etc.)
        sectionEls = getSectionEls();
        computeActive();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Inicial
    computeActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const existingSections = SECTIONS.filter(({ id }) =>
    typeof document !== "undefined" ? document.getElementById(id) : true
  );

  const btnBase =
    "group relative text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 text-left rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CB9850]/35";

  return (
    <>
      {/* DESKTOP */}
      <motion.nav
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden md:flex flex-col gap-2 fixed top-1/2 right-6 -translate-y-1/2 z-40"
      >
        <div className="rounded-full bg-[#FAF5EE]/90 border border-[#EFE2D6] shadow-[0_18px_40px_rgba(0,0,0,0.15)] px-2 py-3 flex flex-col gap-1.5">
          {existingSections.map(({ id, label }) => {
            const isActive = activeId === id;

            return (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`${btnBase} ${
                  isActive
                    ? "bg-[#CB9850] text-ivory shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
                    : "text-[#7A8270] hover:bg-[#EFE2D6] hover:text-[#CB9850]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* MÓVIL */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="fixed bottom-6 right-4 z-40 md:hidden"
      >
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="mb-3 w-52 bg-[#FAF5EE]/96 backdrop-blur-md border border-[#EFE2D6] rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.25)] py-3 px-3 flex flex-col gap-1.5"
              >
                {existingSections.map(({ id, label }) => {
                  const isActive = activeId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => handleClick(id)}
                      className={`${btnBase} ${
                        isActive
                          ? "bg-[#CB9850] text-ivory"
                          : "text-[#7A8270] hover:bg-[#EFE2D6] hover:text-[#CB9850]"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              w-14 h-14 rounded-full
              bg-[#CB9850]
              shadow-[0_14px_30px_rgba(0,0,0,0.35)]
              flex items-center justify-center
              text-[9px] tracking-[0.22em] uppercase
              text-ivory
              border border-white/60
              active:scale-95 transition-transform
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CB9850]/35
            "
          >
            {isOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
