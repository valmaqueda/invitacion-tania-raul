// src/sections/EventTimeline.jsx
import { motion } from "framer-motion";

// --- DATOS DEL EVENTO (Intactos) ---
const events = [
  { time: "16:30 hrs", title: "Recepción de invitados", type: "reception" },
  { time: "17:00 hrs", title: "Ceremonia religiosa", type: "ceremony" },
  { time: "18:00 hrs", title: "Cóctel", type: "cocktail" },
  { time: "19:40 hrs", title: "Cena", type: "dinner" },
  { time: "02:00 hrs", title: "Fin del evento", type: "end" },
];

// --- ICONOS (Intactos) ---
const EventIcon = ({ type }) => {
  const baseProps = {
    className: "w-9 h-9 md:w-10 md:h-10",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (type) {
    case "ceremony":
      return (
        <svg {...baseProps}>
          <path
            d="M6 26V14L16 6L26 14V26H6Z"
            stroke="#CB9850"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 26V19H19V26"
            stroke="#CB9850"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="16"
            cy="11"
            r="2.3"
            stroke="#B2BB89"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "cocktail":
      return (
        <svg {...baseProps}>
          <path
            d="M8 6H24L18.5 11.5"
            stroke="#CB9850"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 26V18L24 10"
            stroke="#CB9850"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 26H20"
            stroke="#B2BB89"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 10L16 16L13 19"
            stroke="#B2BB89"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "dinner":
      return (
        <svg {...baseProps}>
          <path
            d="M10 6V17"
            stroke="#CB9850"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M8 7.5H12"
            stroke="#CB9850"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M22 6C24.21 6 26 7.79 26 10C26 13 24 17 22 17C20 17 18 13 18 10C18 7.79 19.79 6 22 6Z"
            stroke="#CB9850"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 22H24"
            stroke="#B2BB89"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "end":
      return (
        <svg {...baseProps}>
          <circle
            cx="16"
            cy="16"
            r="9"
            stroke="#CB9850"
            strokeWidth="1.5"
          />
          <path
            d="M16 11V16L19 19"
            stroke="#CB9850"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 23L23 9"
            stroke="#B2BB89"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <path
            d="M16 6.5C15.2 5.7 14.02 5.4 13 5.9C11.98 6.4 11.33 7.46 11.33 8.6C11.33 10.52 12.96 12 16 14C19.04 12 20.67 10.52 20.67 8.6C20.67 7.46 20.02 6.4 19 5.9C17.98 5.4 16.8 5.7 16 6.5Z"
            stroke="#CB9850"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="10"
            cy="17"
            r="2"
            stroke="#B2BB89"
            strokeWidth="1.3"
          />
          <circle
            cx="16"
            cy="17"
            r="2"
            stroke="#CB9850"
            strokeWidth="1.4"
          />
          <circle
            cx="22"
            cy="17"
            r="2"
            stroke="#B2BB89"
            strokeWidth="1.3"
          />
          <path
            d="M7.5 22C8.1 20.6 9.4 19.6 11 19.6C12.6 19.6 13.9 20.6 14.5 22"
            stroke="#B2BB89"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M13.5 22C14.1 20.6 15.4 19.6 17 19.6C18.6 19.6 19.9 20.6 20.5 22"
            stroke="#CB9850"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
  }
};

// --- ANIMACIONES ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      mass: 1,
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// --- COMPONENTE DECORATIVO: GRECA LATERAL ---
const GrecaBorder = ({ side = "left" }) => {
  const isLeft = side === "left";
  return (
    <div
      className={`absolute top-20 bottom-20 w-12 hidden lg:flex flex-col justify-center pointer-events-none opacity-40 ${
        isLeft ? "left-4 md:left-8" : "right-4 md:right-8 scale-x-[-1]"
      }`}
    >
      <svg viewBox="0 0 50 600" className="h-full w-full overflow-visible">
        <motion.path
          d="M25,0 Q40,50 25,100 T25,200 T25,300 T25,400 T25,500 T25,600"
          fill="none"
          stroke="#CB9850"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        {[100, 300, 500].map((y, i) => (
          <motion.circle
            key={i}
            cx="25"
            cy={y}
            r="3"
            fill="#B2BB89"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 1 + i * 0.3,
              duration: 0.5,
              type: "spring",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

function EventTimeline() {
  return (
    <section
      id="itinerario"
      className="
        w-full 
        bg-gradient-to-b from-ivory via-[#F3E6D6] to-[#EBD7BF]
        py-24 px-4 flex justify-center relative overflow-hidden
      "
    >
      {/* Fondo degradado extra suave encima (textura) */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(127,132,100,0.12) 0, transparent 55%), radial-gradient(circle at bottom right, #E8C6B6 0, transparent 55%)",
        }}
      />

      {/* Grecas animadas */}
      <GrecaBorder side="left" />
      <GrecaBorder side="right" />

      <div className="w-full max-w-5xl relative z-10">
        {/* --- ENCABEZADO --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#A7712D] font-bold border-b border-[#CB9850]/30 pb-1">
              Programa del día
            </span>
          </div>
          {/* Título en #7F8464 */}
          <h2 className="font-serif text-3xl md:text-5xl text-[#7F8464] mb-6">
            Así viviremos nuestro día
          </h2>
          <div className="max-w-xl mx-auto px-4 relative">
            <p className="font-serif italic text-lg md:text-xl text-[#717848] leading-relaxed">
              Cada hora de este día fue pensada con el corazón. Acompáñennos a
              vivir cada instante de nuestro día favorito.
            </p>
          </div>
        </motion.div>

        {/* --- TIMELINE --- */}
        <div className="relative mt-6">
          {/* Línea central */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#B2BB89]/30 -translate-x-1/2"
          />

          {/* Eventos */}
          <motion.div
            className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.title + event.time}
                variants={itemVariants}
                className={`
                  relative flex items-stretch gap-4 md:gap-5
                  ${
                    index % 2 === 0
                      ? "md:justify-self-end"
                      : "md:justify-self-start md:flex-row-reverse"
                  }
                `}
              >
                {/* Punto central */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.5 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                    className="relative w-5 h-5"
                  >
                    <span className="absolute inset-0 rounded-full bg-[#CB9850]/60" />
                    <span className="absolute inset-1 rounded-full bg-[#FAF5EE] border border-white/70" />
                  </motion.div>
                </div>

                {/* TARJETA */}
                <div
                  className="
                    relative flex-1 bg-white/80 rounded-3xl border border-white/70
                    shadow-[0_12px_32px_-16px_rgba(0,0,0,0.15)] backdrop-blur-md
                    px-5 py-5 md:px-6 md:py-6 group transition-all duration-300 
                    hover:shadow-lg hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#EFE2D6]/70 p-2.5 md:p-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <EventIcon type={event.type} />
                    </div>

                    <div className="text-left">
                      {/* Hora en #631600 */}
                      <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-[#aa6957] font-bold mb-1">
                        {event.time}
                      </p>
                      {/* Título en #631600 */}
                      <h3 className="font-serif text-base md:text-lg text-[#631600] leading-snug">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-6 bg-[#CB9850]/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
