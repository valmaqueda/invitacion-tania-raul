// src/components/FloatingNav.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "itinerario", label: "Itinerario" },
  { id: "ubicacion", label: "Ubicación" },
  { id: "regalos", label: "Mesa de regalos" },
  { id: "dresscode", label: "Dress code" }, // ⬅ añadido
  { id: "hospedaje", label: "Hospedaje" }, // ⬅ añadido
];

export default function FloatingNav() {
  const [activeId, setActiveId] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // ⬅ 1) Forzamos que el menú pinte activo inmediatamente
    setActiveId(id);

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        // ⬅ 2) Hacemos más “generosa” la zona de detección,
        // para que también entren bien las secciones del final
        rootMargin: "-35% 0px -20% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const existingSections = SECTIONS.filter(({ id }) =>
    typeof document !== "undefined" ? document.getElementById(id) : true
  );

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
                className={`
                  group relative text-[11px] tracking-[0.18em] uppercase
                  px-3 py-1.5 text-left rounded-full
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#CB9850] text-ivory shadow-[0_6px_16px_rgba(0,0,0,0.22)]"
                      : "text-[#7A8270] hover:bg-[#EFE2D6] hover:text-[#CB9850]"
                  }
                `}
              >
                {label}
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* MÓVIL: botón + tarjetita */}
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
                      className={`
                        text-[11px] tracking-[0.18em] uppercase text-left
                        px-3 py-1.5 rounded-full
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#CB9850] text-ivory"
                            : "text-[#7A8270] hover:bg-[#EFE2D6] hover:text-[#CB9850]"
                        }
                      `}
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
            "
          >
            {isOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
