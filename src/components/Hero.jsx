import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Hero = ({ onHireMeClick }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blob1X = useSpring(useTransform(mouseX, v => v * 0.02), { stiffness: 40, damping: 20 });
  const blob1Y = useSpring(useTransform(mouseY, v => v * 0.02), { stiffness: 40, damping: 20 });

  useEffect(() => {
    const fn = (e) => { mouseX.set(e.clientX - window.innerWidth / 2); mouseY.set(e.clientY - window.innerHeight / 2); };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section ref={ref} id="home" className="relative w-full h-screen overflow-hidden" style={{ background: '#07071a' }}>

      {/* ── ANIMATED COLOR BLOBS ── */}
      <motion.div style={{ x: blob1X, y: blob1Y }} className="absolute inset-0 pointer-events-none z-0">
        {/* Indigo blob – top left */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{ top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(99,20,255,0.55) 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Cyan blob – top right */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ top: '-5%', right: '-5%', background: 'radial-gradient(circle, rgba(0,200,255,0.45) 0%, transparent 70%)', filter: 'blur(60px)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Magenta blob – bottom center */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ bottom: '-15%', left: '30%', background: 'radial-gradient(circle, rgba(220,0,120,0.40) 0%, transparent 70%)', filter: 'blur(80px)' }}
          animate={{ scale: [1, 1.1, 1], x: [-20, 20, -20] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Purple mid blob */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{ top: '40%', left: '50%', background: 'radial-gradient(circle, rgba(123,47,255,0.3) 0%, transparent 70%)', filter: 'blur(50px)' }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </motion.div>

      {/* ── GLASS NOISE OVERLAY ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'rgba(7,7,26,0.28)', backdropFilter: 'blur(1px)' }} />

      {/* ── GRID LINES ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(150,100,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(150,100,255,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        className="relative z-[10] h-full flex flex-col items-center justify-center text-center px-4"
        style={{ opacity: fade, y: yUp }}
      >
        {/* Role pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 px-5 py-2 rounded-full border text-[10px] uppercase tracking-[0.4em] text-white/70"
          style={{ borderColor: 'rgba(150,100,255,0.4)', background: 'rgba(99,20,255,0.12)', backdropFilter: 'blur(12px)' }}
        >
          ✦ Filmmaker &nbsp;·&nbsp; Director &nbsp;·&nbsp; Storyteller ✦
        </motion.div>

        {/* SAIKUMAR heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-outfit font-black text-white leading-none uppercase"
            style={{
              fontSize: 'clamp(4rem, 15vw, 14rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 0 20px rgba(150,80,255,0.4), 0 0 50px rgba(0,200,255,0.15)'
            }}
          >
            SAIKUMAR
          </h1>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9 }}
          className="mt-6 text-white/70 text-lg md:text-2xl font-light tracking-[0.08em]"
        >
          Don't Just Tell Stories...{' '}
          <span
            className="font-black text-white"
            style={{ textShadow: '0 0 8px #FF006E, 0 0 20px rgba(255,0,110,0.4)' }}
          >
            LIVE THEM!
          </span>
        </motion.p>

        {/* Neon divider bars */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-[3px] mt-10"
          style={{ width: '280px', height: '3px', transformOrigin: 'left' }}
        >
          <div className="flex-1 rounded-full" style={{ background: '#FF006E', boxShadow: '0 0 16px #FF006E' }} />
          <div className="flex-1 rounded-full" style={{ background: '#00F5FF', boxShadow: '0 0 16px #00F5FF' }} />
          <div className="flex-1 rounded-full" style={{ background: '#B8FF00', boxShadow: '0 0 16px #B8FF00' }} />
          <div className="flex-1 rounded-full" style={{ background: '#7B2FFF', boxShadow: '0 0 16px #7B2FFF' }} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #7B2FFF, #FF006E)', boxShadow: '0 0 30px rgba(123,47,255,0.5)' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 50px rgba(255,0,110,0.7)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(123,47,255,0.5)'}
          >
            View My Films
          </button>
          <button
            onClick={onHireMeClick}
            className="px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest text-white border transition-all duration-300"
            style={{ borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00F5FF'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Hire Me
          </button>
        </motion.div>

        {/* Floating role tags */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
        >
          {[
            { label: 'Director', color: '#FF006E' },
            { label: 'Writer', color: '#00F5FF' },
            { label: 'Actor', color: '#B8FF00' },
            { label: 'Founder – OCW', color: '#7B2FFF' },
          ].map(({ label, color }) => (
            <span key={label}
              className="px-4 py-2 text-[10px] uppercase tracking-widest rounded-full border font-medium"
              style={{ borderColor: color + '50', color, background: color + '10', boxShadow: `0 0 10px ${color}30` }}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/30">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-48 z-[5] pointer-events-none"
        style={{ background: 'linear-gradient(to top, #050505 0%, transparent 100%)' }} />
    </section>
  );
};

export default Hero;
