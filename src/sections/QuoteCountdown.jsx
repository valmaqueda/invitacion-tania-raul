// src/sections/QuoteCountdown.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const googleFontLink = (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
    `}
  </style>
);

const weddingDate = new Date("2026-11-21T00:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  return { days, hours, minutes, seconds };
}

// Greca Ornamental
const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-6 opacity-70">
    <div className="h-[1px] w-12 md:w-24 bg-mustard/70"></div>
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="#B77C33"
        fillOpacity="0.95"
      />
    </svg>
    <div className="h-[1px] w-12 md:w-24 bg-mustard/70"></div>
  </div>
);

function QuoteCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section
      id="cuenta"
      className="
        w-full 
        bg-gradient-to-b from-ivory via-[#F3E6D6] to-[#EBD7BF]
        py-20 px-4 
        flex justify-center 
        overflow-hidden 
        relative
      "
    >
      {googleFontLink}

      {/* Fondo de puntitos */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#929772 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="w-full max-w-4xl text-center relative z-10 flex flex-col items-center">
        {/* FRASE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="px-4 max-w-2xl"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#929772] mb-6 font-semibold">
            Save the Date
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#929772] leading-relaxed italic">
            "Dicen que la felicidad es real solo cuando se comparte, y nosotros
            no podríamos imaginar compartir la nuestra con nadie más."
          </h2>
        </motion.div>

        {/* SEPARADOR */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <OrnamentalDivider />
        </motion.div>

        {/* TÍTULO CUENTA REGRESIVA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3
            className="text-5xl md:text-7xl"
            style={{
              fontFamily: '"Pinyon Script", cursive',
              color: "#B77C33",
              textShadow: "0px 3px 6px rgba(183,124,51,0.22)",
            }}
          >
            Cuenta Regresiva
          </h3>
        </motion.div>

        {/* COUNTDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-3 md:gap-6 max-w-3xl w-full px-2"
        >
          {timeUnits.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div
                className="
                  relative
                  flex flex-col justify-center items-center
                  w-full aspect-[3/4]
                  rounded-t-[80px] rounded-b-[10px] md:rounded-t-[100px]
                  bg-champagne/70
                  border border-[#E0C29C]
                  backdrop-blur-md
                  shadow-[0_8px_30px_-8px_rgba(140,104,55,0.45)]
                "
              >
                {/* Número Grande */}
                <span className="font-serif text-2xl md:text-5xl text-[#929772] font-semibold pt-3 md:pt-6">
                  {String(item.value).padStart(2, "0")}
                </span>

                {/* Etiqueta pequeña */}
                <span className="mt-1 md:mt-2 pb-3 md:pb-4 text-[7px] md:text-[10px] uppercase tracking-[0.22em] text-mustard font-semibold">
                  {item.label}
                </span>

                {/* Detalle decorativo inferior */}
                <div className="absolute bottom-2 w-1/3 h-[1px] bg-mustard/80" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteCountdown;
