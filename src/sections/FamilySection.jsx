// src/sections/FamilySection.jsx
import { motion } from "framer-motion";

// --- GRECA CENTRAL (Hoja minimalista) ---
const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-8 opacity-80">
    <div className="h-[1px] w-12 md:w-24 bg-mustard/40" />
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm text-mustard"
    >
      <path
        d="M12 21C12 21 13.5 16.5 17 14C20.5 11.5 21 8 21 8C21 8 17.5 8.5 15 11C12.5 13.5 12 17 12 17C12 17 11.5 13.5 9 11C6.5 8.5 3 8 3 8C3 8 3.5 11.5 7 14C10.5 16.5 12 21 12 21Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
    </svg>
    <div className="h-[1px] w-12 md:w-24 bg-mustard/40" />
  </div>
);

// --- NUEVA GRECA LATERAL (ramita en mustard) ---
const SideOrnament = ({ side = "left" }) => {
  const isLeft = side === "left";
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        x: isLeft ? -24 : 24,
      }}
      whileInView={{
        opacity: 0.6,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 1,
        ease: [0.22, 0.55, 0.34, 0.99],
      }}
      className={`
        pointer-events-none
        hidden md:flex
        absolute inset-y-16
        ${isLeft ? "left-0 justify-start" : "right-0 justify-end"}
        items-center
      `}
    >
      <svg
        viewBox="0 0 80 260"
        xmlns="http://www.w3.org/2000/svg"
        className="
          h-[220px] lg:h-[260px] xl:h-[320px]
          text-mustard/40
        "
      >
        {/* Ramita principal */}
        <path
          d="M40 260C28 238 26 214 30 192C34 170 32 152 24 134C16 116 16 96 20 80C24 64 32 50 32 34C32 20 28 10 24 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Hojitas */}
        <path
          d="M18 210C26 206 32 198 34 190C26 192 20 196 18 210Z"
          fill="currentColor"
          fillOpacity="0.5"
        />
        <path
          d="M46 175C38 176 32 180 30 188C37 186 42 182 46 175Z"
          fill="currentColor"
          fillOpacity="0.35"
        />
        <path
          d="M14 140C22 138 28 132 30 124C22 126 16 130 14 140Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
        <path
          d="M46 106C38 108 32 112 30 120C37 118 42 114 46 106Z"
          fill="currentColor"
          fillOpacity="0.3"
        />
        <path
          d="M18 74C26 72 32 66 34 58C26 60 20 64 18 74Z"
          fill="currentColor"
          fillOpacity="0.4"
        />
      </svg>
    </motion.div>
  );
};

const cards = [
  {
    title: "Papás de la novia",
    names: ["Marco Antonio Andrade Martínez", "Emma Maqueda Martínez"],
  },
  {
    title: "Papás del novio",
    names: ["Verónica Campuzano", "Raúl Noria"],
  },
  {
    title: "Padrinos de velación",
    names: ["Lorem Ipsum", "Dolor Sit Amet"], // placeholders
  },
];

// Animaciones de las tarjetas
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

function FamilySection() {
  return (
    <section className="w-full bg-champagne/30 py-24 px-4 flex justify-center overflow-hidden relative">
      {/* Fondo de puntitos */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#B2BB89 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Grecas laterales en mustard (solo md+) */}
      <SideOrnament side="left" />
      <SideOrnament side="right" />

      <div className="w-full max-w-5xl text-center relative z-10">
        {/* FRASE PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 0.55, 0.34, 0.99] }}
          viewport={{ once: true, amount: 0.4 }}
          className="px-4"
        >
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-mustard mb-5 font-bold">
            Con el corazón lleno de gratitud
          </p>

          <h2 className="font-serif text-2xl md:text-4xl text-olive leading-snug md:leading-normal max-w-3xl mx-auto">
            Caminamos de la mano de Dios, respaldados por el amor infinito de
            nuestros padres y el cariño incondicional de nuestros padrinos.
          </h2>
        </motion.div>

        {/* GRECA CENTRAL */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <OrnamentalDivider />
        </motion.div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="
                relative 
                bg-ivory/80 
                border border-white/60 
                rounded-3xl 
                px-6 py-10 md:px-7 md:py-10
                shadow-[0_10px_30px_-12px_rgba(0,0,0,0.1)]
                hover:shadow-[0_20px_40px_-10px_rgba(178,187,137,0.25)]
                backdrop-blur-md
                transition-shadow duration-300
              "
            >
              <p className="uppercase tracking-[0.22em] text-[9px] md:text-[10px] text-olive/70 mb-4 font-semibold">
                {card.title}
              </p>

              <div className="w-8 h-[1px] bg-mustard/50 mx-auto mb-5" />

              <div className="space-y-2">
                {card.names.map((name) => (
                  <p
                    key={name}
                    className="font-serif text-lg md:text-xl text-[#4B5530]"
                  >
                    {name}
                  </p>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-8 bg-mustard/20 blur-xl opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FamilySection;
