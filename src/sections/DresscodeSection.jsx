// src/sections/DresscodeSection.jsx
import { motion } from "framer-motion";
import pinterestBg from "../assets/pinterest-bg.jpg"; 

// --- COLORES ---
const colorPalette = [
  { hex: "#91962c", name: "Verde olivo" },
  { hex: "#d18653", name: "Naranja" },
  { hex: "#a84da6", name: "Fucsia" },
  { hex: "#028f7d", name: "Aqua" },
  { hex: "#8C6A4B", name: "Camel" }
];

// --- COMPONENTE DE FONDO ANIMADO ---
const FloatingBlob = ({ color, className, delay }) => (
  <motion.div
    className={`absolute rounded-full blur-[80px] opacity-40 mix-blend-multiply filter ${className}`}
    style={{ backgroundColor: color }}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -40, 20, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
      delay: delay,
    }}
  />
);

// --- CÍRCULO DE COLOR ---
const ColorCircle = ({ color, name, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      delay: index * 0.1,
      type: "spring", 
      stiffness: 200, 
      damping: 10 
    }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 group"
  >
    <div 
      className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-sm border-2 border-white/60 group-hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: color }}
    />
    <span className="text-[9px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 group-hover:translate-y-0">
      {name}
    </span>
  </motion.div>
);

// --- NUEVO COMPONENTE: TÍTULO CON GRECA (El diseño bonito) ---
const ElegantHeader = ({ title, color }) => (
  <div className="flex items-center justify-center gap-3 mb-4 opacity-90">
    {/* Línea izquierda */}
    <span className="h-px w-6 md:w-8" style={{ backgroundColor: color }} />
    {/* Rombo decorativo izquierdo */}
    <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: color }} />
    
    {/* Texto */}
    <h4 className="font-serif text-xl md:text-2xl text-[#2A2A2A] px-1">
      {title}
    </h4>
    
    {/* Rombo decorativo derecho */}
    <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: color }} />
    {/* Línea derecha */}
    <span className="h-px w-6 md:w-8" style={{ backgroundColor: color }} />
  </div>
);

export default function DresscodeSection() {
  return (
    <section id="dresscode" className="relative w-full bg-[#FAF5EE] py-12 md:py-24 px-6 overflow-hidden">
      
      {/* --- FONDO CON VIDA --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBlob color="#B2BB89" className="w-96 h-96 top-0 -left-20" delay={0} />
        <FloatingBlob color="#CB9850" className="w-80 h-80 bottom-0 -right-20" delay={2} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-5"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-[#A7712D] border-b border-[#CB9850]/40 pb-1">
              Código de Vestimenta
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-[#2A2A2A] mb-6 tracking-tight"
          >
            Elegant Coastal
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif italic text-lg md:text-2xl text-[#949D6A] max-w-3xl mx-auto leading-relaxed"
          >
            "Un estilo formal que respira: bienvenidos los colores vivos, las texturas naturales y la frescura frente al mar."
          </motion.p>
        </div>


        {/* --- CONTENIDO PRINCIPAL --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IZQUIERDA: Guía Visual (Ocupa 7 columnas) */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Paleta de Colores */}
            <div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center lg:text-left text-[10px] font-bold tracking-[0.25em] uppercase text-[#2A2A2A] mb-8"
              >
                Inspiración de Color
              </motion.h3>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                {colorPalette.map((item, idx) => (
                  <ColorCircle key={idx} color={item.hex} name={item.name} index={idx} />
                ))}
              </div>
            </div>

            {/* --- TARJETAS CON NUEVO DISEÑO --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Ellas */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white/50 backdrop-blur-md p-8 rounded-2xl border border-white/60 hover:bg-white/70 transition-colors duration-500 text-center shadow-sm"
              >
                {/* Header con Greca Dorada */}
                <ElegantHeader title="Ellas" color="#CB9850" />
                
                <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed px-2">
                Vestido largo. Evitar blanco y tonos muy claros que se perciban como blanco (hueso, marfil, crema), incluyendo estampados con fondo blanco.<br/>
                  <span className="text-[#949D6A] font-medium mt-3 block tracking-wide">Tip: Tacón ancho para el jardín.</span>
                </p>
              </motion.div>

              {/* Ellos */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-white/50 backdrop-blur-md p-8 rounded-2xl border border-white/60 hover:bg-white/70 transition-colors duration-500 text-center shadow-sm"
              >
                {/* Header con Greca Olivo */}
                <ElegantHeader title="Ellos" color="#B2BB89" />
                
                <p className="font-sans text-xs md:text-sm text-gray-600 leading-relaxed px-2">
                Traje en tonos claros o medios (gris, azul, verde). Evitar beige.<br/>
                  <span className="text-[#949D6A] font-medium mt-3 block tracking-wide">Corbata opcional, relajado pero elegante.</span>
                </p>
              </motion.div>
            </div>
          </div>


          {/* DERECHA: Tarjeta Pinterest */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-sm aspect-[3/4] group cursor-pointer"
            >
              <a 
                href="https://pin.it/2BGodosv8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                {/* Marco de la foto */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/80">
                  <img 
                    src={pinterestBg} 
                    alt="Inspiración" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2A2A2A]/20 group-hover:bg-[#2A2A2A]/10 transition-colors duration-500" />
                </div>

                {/* Badge Flotante "Moodboard" */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md px-6 py-5 rounded-xl shadow-lg text-center border border-white/50">
                   <div className="flex justify-center -mt-10 mb-3">
                      <div className="bg-[#CB9850] text-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                        {/* Pinterest Icon */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.852-2.433-4.587 0-3.728 2.708-7.152 7.847-7.152 4.125 0 7.333 2.944 7.333 6.883 0 4.108-2.585 7.41-6.173 7.41-1.206 0-2.341-.629-2.731-1.371l-.741 2.829c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z"/></svg>
                      </div>
                   </div>
                   <h3 className="font-serif text-xl text-[#2A2A2A] mb-1">Inspiración Visual</h3>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#CB9850] group-hover:underline">
                      Ver tablero completo
                   </span>
                </div>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}