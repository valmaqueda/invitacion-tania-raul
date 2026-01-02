// src/sections/GiftSection.jsx
import { motion } from "framer-motion";

// --- ICONO DE REGALO ANIMADO (Tamaño ajustado: Elegante) ---
const AnimatedGiftIcon = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    // Reduje de w-32 a w-24 (96px) para que sea proporcional y fino
    <div className="w-24 h-24 mx-auto mb-6">
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#CB9850" // Mustard Fuerte
        strokeWidth="0.8" // Trazo fino
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-full h-full overflow-visible"
      >
        <motion.rect 
          x="3" y="8" width="18" height="4" rx="1" 
          variants={pathVariants}
        />
        <motion.rect 
          x="4" y="12" width="16" height="8" rx="1" 
          variants={pathVariants}
          transition={{ delay: 0.3 }}
        />
        <motion.path 
          d="M12 8V20" 
          variants={pathVariants}
          transition={{ delay: 0.6 }}
        />
        <motion.path 
          d="M12 8C12 8 7 8 7 3C7 0.5 10.5 0.5 12 4C13.5 0.5 17 0.5 17 3C17 8 12 8 12 8Z" 
          variants={pathVariants}
          transition={{ delay: 0.9 }}
        />
      </svg>
    </div>
  );
};

// --- COMPONENTE DE TARJETA BANCARIA (Más compacto y sin negritas) ---
const BankCard = ({ title, type, details, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
    className="
      bg-white
      rounded-xl
      border border-[#EFE2D6]
      p-5 md:p-6           /* Reduje el padding */
      text-center
      shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)]
      hover:shadow-md transition-shadow duration-300
      flex flex-col justify-center h-full
    "
  >
    <p className="text-[9px] tracking-[0.25em] uppercase text-[#949D6A] mb-2">
      {type}
    </p>
    {/* Título un poco más pequeño (text-xl en vez de 2xl) */}
    <h3 className="font-serif text-xl md:text-2xl text-[#CB9850] mb-4">
      {title}
    </h3>
    <div className="space-y-3">
      {details.map((line, index) => (
        <div key={index} className="flex flex-col gap-0.5">
          <span className="font-sans text-[9px] uppercase tracking-wider text-gray-400">
            {line.label}
          </span>
          {/* AQUÍ ESTÁ EL CAMBIO: Sin negritas, gris suave y tamaño delicado */}
          <span className="font-sans text-xs md:text-[13px] text-gray-600 select-all tracking-wide">
            {line.value}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function GiftSection() {
  return (
    // Reduje el padding vertical general (py-16 en vez de 24)
    <section id="regalos" className="relative w-full bg-[#FAF5EE] py-16 px-4 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EFE2D6]/40 to-transparent pointer-events-none" />

      {/* Max-width reducido a 4xl para que todo se vea más junto y editorial */}
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* --- ENCABEZADO --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-10"
        >
          <AnimatedGiftIcon />

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="inline-block mb-3"
          >
            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase text-[#A7712D] border-b border-[#CB9850]/30 pb-1">
              Mesa de Regalos
            </span>
          </motion.div>

          {/* Títulos reducidos proporcionalmente */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-2xl md:text-4xl text-[#2A2A2A] mb-3 leading-tight"
          >
            Su compañía es nuestro<br />mejor regalo
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif italic text-base md:text-lg text-[#949D6A] max-w-lg mx-auto leading-relaxed"
          >
            pero si desean tener un detalle con nosotros, agradecemos infinitamente que sea por este medio.
          </motion.p>
        </motion.div>


        {/* --- GRID DE DATOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
          
          {/* Tarjeta 1: Banregio */}
          <BankCard 
            type="Transferencia"
            title="Banregio"
            delay={0.2}
            details={[
              { label: "Beneficiario", value: "Raul Eduardo Noria Campuzano" },
              { label: "Cuenta", value: "058597000023622438" }
            ]}
          />

          {/* Tarjeta 2: Nu México */}
          <BankCard 
            type="Transferencia"
            title="Nu México"
            delay={0.4}
            details={[
              { label: "Beneficiaria", value: "Tania Fernanda Andrade Maqueda" },
              { label: "CLABE", value: "638180000182567821" }
            ]}
          />

          {/* Tarjeta 3: Depósito en Tiendas */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2 bg-[#FDFBF7] rounded-xl border border-[#CB9850]/20 p-6 md:p-8 text-center shadow-sm"
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#949D6A] mb-3">
              Efectivo / Tiendas
            </p>
            <h3 className="font-serif text-xl text-[#2A2A2A] mb-2">
              Depósito en Tiendas
            </h3>
            <p className="font-sans text-[10px] md:text-xs text-gray-400 mb-5 max-w-md mx-auto leading-relaxed">
              OXXO, Soriana, Kiosko, Chedraui, Farmacias del Ahorro y Waldo’s
            </p>
            
            <div className="inline-block bg-white px-6 py-3 rounded-lg border border-[#EFE2D6] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <p className="flex flex-col md:flex-row md:items-center gap-2 font-sans text-xs text-gray-500">
                <span className="uppercase tracking-wider text-[9px]">Código:</span>
                {/* Código sin negritas, solo un poco más grande para diferenciar */}
                <span className="text-base text-[#CB9850] tracking-widest select-all">
                  5101 2523 0616 5817
                </span>
              </p>
            </div>
          </motion.div>

        </div>

        {/* --- MENSAJE FINAL --- */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em] max-w-lg mx-auto leading-loose"
        >
          Gracias por ayudarnos a hacer posible este día.<br />
          Cada detalle lo guardaremos en el corazón.
        </motion.p>

      </div>
    </section>
  );
}