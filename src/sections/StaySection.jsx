// src/sections/StaySection.jsx
import { motion } from "framer-motion";
import tresVidasImg from "../assets/hotel-tres-vidas.jpg"; // sí la tienes

import princessImg from "../assets/princess.jpg";
import pierreImg from "../assets/pierre.jpg";
import palacioImg from "../assets/palacio.jpg";


const hotels = [
  {
    name: "Princess Mundo Imperial",
    href: "https://www.mundoimperial.com/en/princess/",
    tag: "Mundo Imperial",
    priceRange: "$$$",
    image: princessImg,
  },
  {
    name: "Pierre Mundo Imperial",
    href: "https://www.mundoimperial.com/en/pierre",
    tag: "All-Inclusive",
    priceRange: "$$$$",
    image: pierreImg,
  },
  {
    name: "Palacio Mundo Imperial",
    href: "https://www.mundoimperial.com/en/palacio",
    tag: "All-Inclusive",
    priceRange: "$$$",
    image: palacioImg,
  },
  {
    name: "Hotel Tres Vidas",
    href: "https://www.google.com/maps/search/?api=1&query=Hotel+Tres+Vidas+Acapulco",
    tag: "Sede del evento",
    priceRange: "Sede",
    image: tresVidasImg,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const Wave = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1440 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      d="M0 70C220 115 520 20 760 48C1010 76 1210 120 1440 72V140H0V70Z"
      fill="currentColor"
      fillOpacity="0.12"
    />
  </svg>
);

function StaySection() {
  return (
    <section
      id="hospedaje"
      className="w-full py-24 md:py-32 px-4 flex justify-center relative overflow-hidden"
    >
      {/* Coastal gradient (sage + seafoam) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAF5EE] via-[#EAF2EE] to-[#E8F3F4]" />

      {/* textura sutil (sin assets externos) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(127,132,100,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* olas suaves */}
      <div className="absolute bottom-0 left-0 w-full text-[#A7712D] pointer-events-none z-0">
        <Wave className="w-full h-24 md:h-32 opacity-30" />
      </div>

      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-14 max-w-3xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-[#A7712D]/35" />
            <p className="text-[11px] md:text-xs tracking-[0.32em] uppercase font-bold text-[#A7712D]">
              Hospedaje sugerido
            </p>
            <span className="h-[1px] w-10 bg-[#A7712D]/35" />
          </div>

          {/* Título nuevo (menos cliché) */}
          <h2 className="font-serif text-4xl md:text-6xl text-[#631600] leading-tight mb-5">
            Planea tu estancia
          </h2>

          {/* Copy más claro + “no es obligatorio” */}
          <p className="text-sm md:text-base text-[#4F5440] leading-relaxed">
            Para tu comodidad, te compartimos algunas opciones sugeridas
            <br className="hidden md:block" />
            <span className="font-semibold text-[#595e29]">
               . Eres libre de elegir la que prefieras
            </span>
            , incluyendo Airbnb u otras alternativas.
          </p>
        </motion.div>

        {/* INFO BOX: DESCUENTO */}
       
        {/* --- INFO BOX: DESCUENTO --- */}
        <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-2xl mb-16 relative"
        >
        <div className="
            relative overflow-hidden
            bg-white/40 backdrop-blur-md
            border border-[#A7712D]/20
            rounded-2xl p-7 md:p-8
            text-center
            shadow-[0_8px_30px_rgba(167,113,45,0.06)]
        ">
            {/* ⭐ Estrella EXACTA como la original */}
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#631600">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            </div>

            <h3 className="font-serif text-2xl text-[#631600] mb-2">
            Descuento Especial
            </h3>

            {/* ✅ Verde más oscuro */}
            <p className="text-[#595e29] text-sm mb-6">
            Válido exclusivamente para hoteles Mundo Imperial
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#A7712D] mb-1">
                Beneficio
                </span>
                <span className="font-serif text-3xl md:text-4xl text-[#631600]">
                -20% OFF
                </span>
            </div>

            <div className="hidden md:block w-[1px] h-12 bg-[#A7712D]/20"></div>

            <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-[#A7712D] mb-2">
                Reservar vía telefónica
                </span>
                <a
                href="tel:8000909900"
                className="
                    font-mono text-lg text-[#631600] font-semibold
                    border-b border-[#631600]/30 hover:border-[#631600]
                    transition-colors pb-1
                "
                >
                800 09 09 900
                </a>
            </div>
            </div>

            <p className="mt-6 text-[10px] text-[#2e2106]/60 uppercase tracking-wide">
            Menciona la boda para aplicar el código
            </p>
        </div>
        </motion.div>



                {/* GRID DE HOTELES (cards más pequeñas + botón visible) */}
                <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
                >
                {hotels.map((h) => (
                    <motion.a
                    key={h.name}
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                        hidden: { opacity: 0, y: 18 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                    }}
                    className="
                        group relative
                        rounded-2xl overflow-hidden
                        border border-[#A7712D]/14
                        shadow-[0_10px_26px_rgba(0,0,0,0.06)]
                        hover:shadow-[0_22px_46px_rgba(167,113,45,0.14)]
                        transition-shadow duration-500
                        bg-white/30
                    "
                    >
                    {/* “imagen” / hero area */}
                    <div className="relative h-[150px]">
                        {/* fallback coastal si no hay foto */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF5EE] via-[#EEF4F0] to-[#E6F2F3]" />

                        {h.image ? (
                        <img
                            src={h.image}
                            alt={h.name}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                        />
                        ) : null}

                        {/* overlay para legibilidad */}
                        <div className="absolute inset-0 bg-[#FAF5EE]/68" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#631600]/14 via-transparent to-transparent" />
                    </div>

                    {/* content */}
                    <div className="p-5 flex flex-col gap-3">
                        <div className="flex items-start justify-between gap-3">
                        <span
                            className="
                            inline-flex items-center
                            px-3 py-1.5 rounded-full
                            bg-[#FAF5EE]/80 backdrop-blur
                            border border-[#A7712D]/18
                            text-[10px] uppercase tracking-[0.18em]
                            font-bold text-[#A7712D]
                            "
                        >
                            {h.tag}
                        </span>

                        <span className="font-serif italic text-xs text-[#631600]/70 whitespace-nowrap">
                            {h.priceRange}
                        </span>
                        </div>

                        <div>
                        <h4 className="font-serif text-xl text-[#631600] leading-snug">
                            {h.name}
                        </h4>
                        <div className="mt-2 h-[1px] w-10 bg-[#A7712D]/55 group-hover:w-full transition-all duration-500 ease-out" />
                        </div>

                        {/* botón visible (mobile friendly) */}
                        <div className="pt-1">
                        <span
                            className="
                            inline-flex items-center gap-2
                            rounded-full px-4 py-2
                            bg-[#A7712D]/12
                            border border-[#A7712D]/18
                            text-[#631600] text-[11px]
                            uppercase tracking-[0.22em]
                            font-bold
                            group-hover:bg-[#A7712D]/16 group-hover:border-[#A7712D]/26
                            transition-colors
                            "
                        >
                            Ir al sitio
                            <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </span>
                        </div>
                    </div>
                    </motion.a>
                ))}
                </motion.div>

        {/* nota al pie */}
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="
            mt-12 text-sm text-[#4F5440] text-center max-w-2xl
            italic font-serif font-semibold
            bg-white/35 border border-[#A7712D]/15
            rounded-2xl px-5 py-4
            backdrop-blur-sm
        "
        >
        <span className="text-[#631600]/90 font-bold">
            Hotel Tres Vidas (sede del evento):
        </span>{" "}
        <span className="text-[#4F5440] font-bold">
            disponibilidad muy limitada (9 habitaciones). Reserva con anticipación.
        </span>
        </motion.p>

      </div>
    </section>
  );
}

export default StaySection;
