import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const CinemaLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 100) { 
          clearInterval(interval); 
          setShowFlash(true);
          setTimeout(onComplete, 800); 
          return 100; 
        }
        return c + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center flex-col overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* 3D Spinning Film Reel Silhouette */}
      <motion.div 
        className="absolute z-0 opacity-[0.03] select-none pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg width="80vw" height="80vw" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="0.5" />
          {[0, 60, 120, 180, 240, 300].map(deg => (
             <circle key={deg} cx={50 + 30 * Math.cos(deg * Math.PI / 180)} cy={50 + 30 * Math.sin(deg * Math.PI / 180)} r="12" fill="white" />
          ))}
        </svg>
      </motion.div>

      {/* Light Leak Flashes */}
      <AnimatePresence>
        {showFlash && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 0.8, 0] }}
            className="absolute inset-0 z-[10000] pointer-events-none bg-orange-600/30 mix-blend-screen"
          />
        )}
      </AnimatePresence>

      {/* Film holes top */}
      <motion.div 
        animate={{ x: [-20, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-10 flex items-center gap-3 px-4 overflow-hidden opacity-20"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-none w-8 h-6 rounded-sm border border-white/20 bg-white/5" />
        ))}
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative inline-block"
        >
          <motion.p
            className="text-[#FF006E] text-[10px] tracking-[1.2em] uppercase mb-8 font-black"
          >
            FILM MAKERS ZONE
          </motion.p>
          
          <div className="overflow-hidden relative">
            <h1 className="text-[12vw] font-black tracking-tighter leading-none text-white uppercase italic">
              PRODUCTION
            </h1>
            {/* Scanline reveal on text */}
            <motion.div 
              className="absolute inset-0 bg-[#FF006E] mix-blend-overlay"
              animate={{ top: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Optical Sound visualizer */}
        <div className="flex items-center justify-center gap-1 mt-8 h-4 opacity-40">
           {Array.from({ length: 20 }).map((_, i) => (
             <motion.div
               key={i}
               className="w-0.5 bg-white"
               animate={{ height: [2, Math.random() * 16 + 4, 2] }}
               transition={{ duration: 0.2, repeat: Infinity, delay: i * 0.02 }}
             />
           ))}
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-20 left-0 right-0 px-20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] text-gray-500 uppercase tracking-[0.5em] font-black">Syncing Reels</span>
          <span className="text-[14px] text-white font-mono font-black">{Math.min(count, 100)}</span>
        </div>
        <div className="h-[2px] bg-white/5 w-full relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${Math.min(count, 100)}%` }}
            transition={{ ease: 'easeOut' }}
          />
          {/* Progress glow */}
          <motion.div
            className="absolute top-0 h-full bg-white blur-md"
            style={{ left: `${Math.min(count, 100) - 2}%`, width: '4%' }}
          />
        </div>
      </div>

      {/* Film holes bottom */}
      <motion.div 
        animate={{ x: [0, -20] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-10 flex items-center gap-3 px-4 overflow-hidden opacity-20"
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex-none w-8 h-6 rounded-sm border border-white/20 bg-white/5" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CinemaLoader;

