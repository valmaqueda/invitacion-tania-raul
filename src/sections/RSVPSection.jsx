// src/sections/RSVPSection.jsx
import { motion } from "framer-motion";

// --- GOOGLE FONTS (homogeneizar) ---
const googleFonts = (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap');
      .font-sans-elegant { font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      .font-serif-elegant { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }
    `}
  </style>
);

// --- ANIMACIONES ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Animación "Levitación Luxury"
const floatAnimation = {
  animate: {
    y: [0, -6, 0],
    scale: [1, 1.01, 1],
    rotate: [-1, 1, -1],
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// --- COMPONENTES ---
// El Emblema Central
const RSVPStamp = () => (
  <motion.div
    variants={floatAnimation}
    animate="animate"
    className="relative w-36 h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 flex items-center justify-center select-none"
  >
    {/* Marco estilo 'Reloj Antiguo' */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="#A7712D"
        strokeWidth="0.5"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="43"
        fill="none"
        stroke="#A7712D"
        strokeWidth="0.25"
        opacity="0.4"
      />
      <circle cx="50" cy="2" r="1.2" fill="#631600" />
      <circle cx="50" cy="98" r="1.2" fill="#631600" />
      <circle cx="2" cy="50" r="1.2" fill="#631600" />
      <circle cx="98" cy="50" r="1.2" fill="#631600" />
    </svg>

    {/* Info */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center">
      {/* Header */}
      <h3 className="font-sans-elegant text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#7F8464] font-bold mb-1">
        Favor de confirmar
      </h3>

      {/* Conector */}
      <span className="font-serif-elegant italic text-[11px] text-[#b08240]/60 mb-0">
        antes del
      </span>

      {/* Fecha */}
      <div className="flex flex-col items-center leading-none mt-1">
        <span className="font-serif-elegant text-5xl md:text-6xl text-[#631600] italic">
          01
        </span>
        <span className="font-sans-elegant text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#A7712D] mt-1 font-medium ml-1">
          agosto
        </span>
      </div>
    </div>
  </motion.div>
);

const TALLY_BASE = "https://tally.so/r/QKe7qG";

const getTallyUrl = () => {
  if (typeof window === "undefined") return TALLY_BASE;

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const max = params.get("max");

  // Si no hay code, manda al formulario genérico
  if (!code) return TALLY_BASE;

  // Si hay code y max, pásalos. Si no hay max, pasa solo code.
  const tallyParams = new URLSearchParams();
  tallyParams.set("code", code);
  if (max) tallyParams.set("max", max);

  return `${TALLY_BASE}?${tallyParams.toString()}`;
};

const tallyUrl = getTallyUrl();

/** =========================
 *  WhatsApp RSVP (personalizado por max + code)
 *  ========================= */
const WHATSAPP_NUMBER = "527441914142"; // +52 744 191 4142 (sin signos ni espacios)

const getWhatsAppUrl = () => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (typeof window === "undefined") return base;

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const max = params.get("max");

  const maxNum = max ? Number(max) : null;
  const validMax = Number.isFinite(maxNum) && maxNum > 0;

  // Línea principal (adaptada a max)
  const confirmLine = validMax
    ? maxNum === 1
      ? "Confirmo para 1 persona (yo)."
      : `Confirmo para ___ personas (máximo ${maxNum}).`
    : "Confirmo para ___ personas (incluyéndome).";

  // Líneas de nombres (adaptadas a max)
  // (cap suave para que no se vuelva enorme si alguien pone max gigante)
  const attendeeCount = validMax ? Math.min(maxNum, 8) : 3;
  const attendeeLines = Array.from({ length: attendeeCount }, (_, i) => `${i + 1}) —`);

  // ✅ Sin emojis para evitar "�" en algunos dispositivos/navegadores
  const lines = [
    "Hola!",
    "Escribo para confirmar mi asistencia a la boda de Tania & Raúl.",
    "",
    "Nombre(s):",
    "—",
    "",
    confirmLine,
    "Nombres de los asistentes:",
    ...attendeeLines,
    "",
    "Gracias.",
  ];

  if (code) {
    lines.push("", `Código de invitación: ${code}`);
  }

  // Si quieres mantener la “nota” adicional, la dejamos (ya no es necesaria porque confirmLine ya incluye max)
  // pero puede ayudar como referencia:
  if (validMax) {
    lines.push(`(Referencia: pase hasta ${maxNum} personas)`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `${base}?text=${text}`;
};

const whatsappUrl = getWhatsAppUrl();

export default function RSVPSection() {
  return (
    <section
      id="asistencia"
      className="scroll-mt-28 w-full py-24 md:py-32 px-4 flex justify-center relative overflow-hidden bg-[#FAF5EE]"
    >
      {googleFonts}

      {/* BACKGROUND LAYERS */}
      <div className="confirm absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#FAF5EE] to-[#EEF0EB] z-0" />
      <div className="absolute inset-0 opacity-[0.35] bg-[url('https://www.transparenttextures.com/patterns/cream-dust.png')] mix-blend-multiply pointer-events-none z-0"></div>

      <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* COLUMNA 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 md:order-1"
        >
          <RSVPStamp />
        </motion.div>

        {/* COLUMNA 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-2 w-full max-w-xl"
        >
          <div
            className="
              relative 
              bg-white/60 backdrop-blur-xl
              border border-white/60
              shadow-[0_20px_40px_-15px_rgba(167,113,45,0.08)]
              p-1.5 
              rounded-[2px]
            "
          >
            <div
              className="
                border border-[#A7712D]/15
                px-8 py-12 md:px-14 md:py-16
                flex flex-col items-center text-center
                bg-[#FAF5EE]/30
              "
            >
              <span className="font-sans-elegant text-[10px] tracking-[0.3em] uppercase text-[#A7712D] font-bold mb-6">
                R.S.V.P.
              </span>

              {/* TÍTULO: mobile igual, desktop más grande */}
              <h2 className="font-serif-elegant text-3xl md:text-6xl text-[#631600] leading-tight mb-6">
                Celebra con nosotros
              </h2>

              {/* COPY */}
              <div className="font-sans-elegant text-sm md:text-[15px] text-[#4F5440] leading-relaxed max-w-md mb-10 font-light">
                <p className="mb-4">
                  Para cuidar cada detalle de nuestra boda, por favor confírmanos
                  tu asistencia{" "}
                  <span className="font-serif-elegant italic text-[#631600]">
                    (o ausencia)
                  </span>{" "}
                  lo antes posible.
                </p>

                <div className="w-8 h-[1px] bg-[#A7712D]/30 mx-auto my-4"></div>

                <p className="font-serif-elegant italic text-[#631600]/80 text-xs">
                  Tu respuesta es esencial para nosotros.
                </p>
              </div>

              {/* BOTÓN */}
              <a
                href={tallyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group relative 
                    inline-flex items-center justify-center
                    w-full max-w-[260px]
                    h-14
                    bg-[#631600] 
                    text-[#FAF5EE]
                    overflow-hidden
                    transition-all duration-300
                    shadow-lg shadow-[#631600]/10
                "
              >
                <div className="absolute inset-0 w-full h-full bg-[#A7712D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 font-sans-elegant text-[11px] uppercase tracking-[0.25em] font-semibold group-hover:text-white transition-colors">
                  Confirmar Ahora
                </span>
              </a>

              {/* WhatsApp (intuitivo/clickeable) */}
              <div className="mt-7 text-center">
                <p className="font-sans-elegant text-[12px] md:text-[13px] text-[#4F5440]/80 font-light">
                  Si te es más cómodo, también puedes confirmar por WhatsApp{" "}
                  <span className="font-serif-elegant italic text-[#631600]/80">
                    (incluyendo cuántas personas asistirán)
                  </span>
                  .
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 inline-flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    border border-[#A7712D]/25
                    bg-white/50
                    shadow-sm shadow-[#A7712D]/10
                    hover:bg-white/70 hover:border-[#A7712D]/40
                    transition-all duration-300
                    group
                  "
                  aria-label="Abrir WhatsApp para confirmar asistencia"
                  title="Toca para abrir WhatsApp"
                >
                  <span className="w-2 h-2 rounded-full bg-[#A7712D]/70 group-hover:bg-[#A7712D] transition-colors" />
                  <span className="font-sans-elegant text-[11px] uppercase tracking-[0.2em] text-[#4F5440]/80">
                    WhatsApp
                  </span>
                  <span className="font-serif-elegant italic text-[#631600] text-[13px] md:text-[14px]">
                    +52 744 191 4142
                  </span>
                  <span className="font-sans-elegant text-[#631600]/70 group-hover:text-[#631600] transition-colors">
                    →
                  </span>
                </a>

                <p className="mt-2 font-sans-elegant text-[11px] text-[#4F5440]/60">
                  Toca el número para abrir WhatsApp
                </p>

                <div className="w-10 h-[1px] bg-[#A7712D]/25 mx-auto mt-4"></div>
              </div>
              {/* /WhatsApp */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
