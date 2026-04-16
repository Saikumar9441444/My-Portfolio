import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CinemaSet = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#080808]">
      {/* Background Silhouettes */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 overflow-hidden select-none">
         <motion.div
           animate={{ x: [0, 50, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -left-20 top-0 text-[30vw] font-black leading-none text-white whitespace-nowrap"
         >
           CAMERAS · LIGHTS · PRODUCTION
         </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.p
            className="text-[#FF006E] text-[10px] uppercase tracking-[0.6em] mb-4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}
          >
            Technical Excellence
          </motion.p>
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          >
            BEHIND THE <span className="text-[#00F5FF]">LENS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Waveform Scopes */}
          <motion.div
            className="aspect-video bg-[#050505] p-6 border border-white/5 rounded-2xl relative overflow-hidden group shadow-[0_0_20px_rgba(0,245,255,0.05)]"
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, borderColor: '#00F5FF/30' }}
          >
            <div className="flex justify-between items-center mb-4">
               <span className="text-[9px] uppercase tracking-widest text-[#00F5FF] font-black">Waveform Monitor</span>
               <div className="w-2 h-2 rounded-full bg-[#00F5FF]/50 animate-pulse" />
            </div>
            <div className="h-full flex items-end gap-1 pb-4">
               {Array.from({ length: 40 }).map((_, i) => (
                 <motion.div
                   key={i}
                   className="flex-1 bg-[#00F5FF]"
                   animate={{ height: [`${Math.random()*40+20}%`, `${Math.random()*60+40}%`, `${Math.random()*30+10}%`] }}
                   transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                 />
               ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
          </motion.div>

          {/* Color Bars Display */}
          <motion.div
            className="aspect-video bg-[#050505] p-6 border border-white/5 rounded-2xl relative overflow-hidden flex"
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.4 }}
          >
             {['#F0F0F0', '#B8FF00', '#00F5FF', '#3BFF5F', '#FF00DE', '#FF1E1E', '#1E47FF'].map((c, i) => (
               <div key={i} className="flex-1 h-full" style={{ background: c, opacity: 0.4 }} />
             ))}
             <div className="absolute inset-0 bg-[#050505]/60 flex items-center justify-center">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Digital Interface</span>
             </div>
          </motion.div>

          {/* Camera Viewfinder */}
          <motion.div
            className="aspect-video bg-cover bg-center rounded-2xl border border-[#FF006E]/30 relative overflow-hidden group"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format")' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-4 left-4 text-[#FF006E] flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-[#FF006E] rounded-full animate-ping" />
               <span className="text-[8px] font-black">REC</span>
            </div>
            <div className="absolute top-4 right-4 text-white text-[8px] font-black">2.35:1</div>
            {/* Viewfinder brackets */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-white/40" />
            <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-white/40" />
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-white/40" />
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/40" />
            <center className="absolute inset-0 flex items-center justify-center">
               <div className="w-2 h-2 border border-white/20 rounded-full" />
            </center>
          </motion.div>
        </div>

        {/* Big Clapperboard Quote */}
        <div className="mt-24 text-center">
          <motion.h3
            className="text-2xl md:text-4xl font-light text-gray-400 italic"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          >
            "Great cinema is not just what you see, <br className="hidden md:block"/>
            but how you feel the <span className="text-white font-bold">Atmosphere</span>."
          </motion.h3>
        </div>
      </div>

      {/* Side Scroll Movie Strip Decor */}
      <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-white/5 opacity-10 flex flex-col items-center gap-4 py-10 overflow-hidden hidden xl:flex">
         {Array.from({ length: 40 }).map((_, i) => (
           <div key={i} className="w-4 h-3 bg-white/20 rounded-sm shrink-0" />
         ))}
      </div>
    </section>
  );
};

export default CinemaSet;
