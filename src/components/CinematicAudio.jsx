import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AMBIENT_URL = 'https://assets.mixkit.co/music/preview/mixkit-cinematic-mystery-atmosphere-593.mp3';
const SNAP_URL = 'https://assets.mixkit.co/sfx/preview/mixkit-mechanical-clapper-board-3068.mp3';
const BLIP_URL = 'https://assets.mixkit.co/sfx/preview/mixkit-digital-ping-interface-2591.mp3';

const CinematicAudio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);
  const snapRef = useRef(null);

  useEffect(() => {
    // Background Ambient Pad
    audioRef.current = new Audio(AMBIENT_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Clapperboard Snap SFX
    snapRef.current = new Audio(SNAP_URL);
    snapRef.current.volume = 0.5;

    // First interaction trigger to start audio (Broswer Autoplay Policy)
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setIsMuted(false);
        audioRef.current.play().catch(e => console.log('Audio Autoplay Blocked', e));
        snapRef.current.play(); // SNAP on first entry
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('scroll', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      audioRef.current.pause();
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newState = !isMuted;
      setIsMuted(newState);
      audioRef.current.muted = newState;
      if (!newState && audioRef.current.paused) {
        audioRef.current.play();
      }
    }
  };

  return (
    <>
      {/* Sound Toggle UI - Floating Neon Frequency Pulse */}
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-10 left-10 z-[1000] flex items-center gap-3 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-xl bg-black/40 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {/* Pulsing Hertz Waveform Animation */}
          <div className="flex items-end gap-[2px] h-4">
             {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-[2px] bg-cyan-400"
                  animate={!isMuted ? { height: [h*2, h*6, h*2] } : { height: 2 }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                />
             ))}
          </div>
          
          {isMuted && (
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="absolute inset-0 bg-[#FF006E]/10 flex items-center justify-center"
             >
                <div className="w-[1px] h-10 bg-[#FF006E] rotate-45" />
             </motion.div>
          )}
        </div>

        {/* Status tooltip */}
        <AnimatePresence>
          {!hasInteracted && (
             <motion.span 
               initial={{ opacity: 0, x: -10 }} 
               animate={{ opacity: 1, x: 0 }}
               className="text-[8px] uppercase tracking-[0.4em] text-white/40 italic whitespace-nowrap bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-white/5"
             >
               Click anywhere for Audio
             </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default CinematicAudio;
