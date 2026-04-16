import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ROLES = ['Director', 'Writer', 'Actor', 'Storyteller', 'Founder'];
const STATS = [
  { value: 1, label: 'Web Series', color: '#FF006E' },
  { value: 2, label: 'Short Films', color: '#00F5FF' },
  { value: 2, label: 'Short Tales', color: '#B8FF00' },
  { value: 5, label: 'Years', color: '#7B2FFF' },
];

const Counter = ({ target, color }) => {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const step = target / 40;
    const t = setInterval(() => {
      i += step;
      if (i >= target) { setN(target); clearInterval(t); } else setN(Math.floor(i));
    }, 28);
    return () => clearInterval(t);
  }, [inView, target]);
  return (
    <span ref={ref} style={{ color, textShadow: `0 0 20px ${color}88` }}>{n}+</span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative bg-transparent overflow-hidden scroll-mt-32">



      {/* Background neon grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Colorful ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,0,110,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] items-center">

        {/* LEFT — Portrait */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(500px, 90vh, 900px)', height: '100%' }}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/saikumar.jpg"
            alt="Saikumar"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.90) contrast(1.05)',
            }}
          />

          {/* Neon duotone overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255,0,110,0.25) 0%, rgba(0,245,255,0.1) 100%)', mixBlendMode: 'screen' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.2) 60%, transparent 100%)' }} />

          {/* Neon bracket corners */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2" style={{ borderColor: '#FF006E', boxShadow: '-4px -4px 16px rgba(255,0,110,0.5)' }} />
          <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2" style={{ borderColor: '#00F5FF', boxShadow: '4px -4px 16px rgba(0,245,255,0.5)' }} />
          <div className="absolute bottom-16 left-4 md:bottom-20 md:left-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2" style={{ borderColor: '#B8FF00', boxShadow: '-4px 4px 16px rgba(184,255,0,0.5)' }} />
          <div className="absolute bottom-16 right-4 md:bottom-20 md:right-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2" style={{ borderColor: '#7B2FFF', boxShadow: '4px 4px 16px rgba(123,47,255,0.5)' }} />

          {/* Name overlay */}
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-[10px] uppercase tracking-[0.5em] mb-1" style={{ color: '#FF006E', textShadow: '0 0 10px #FF006E' }}>The Founder</p>
            <h2 className="text-4xl font-black text-white" style={{ textShadow: '0 0 30px rgba(255,0,110,0.4)' }}>Saikumar</h2>
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <div className="relative px-8 md:px-16 py-20 flex flex-col justify-center">
          {/* Ghost number */}
          <div className="absolute top-6 right-6 ghost-number">01</div>

          <motion.p className="text-[10px] uppercase mb-6 font-bold tracking-[0.4em]"
            style={{ color: '#FF006E' }}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            ✦ The Filmmaker
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2 className="text-cinematic text-4xl md:text-5xl leading-[1.2]"
              initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              A Storyteller Who <br />
              <span className="font-black" style={{ color: '#FF006E' }}>Becomes</span> <br />
              His Own Character.
            </motion.h2>
          </div>

          <motion.p className="text-gray-500 leading-relaxed mb-10 max-w-md"
            initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.8 }}>
            "I don't just capture moments — I craft worlds where reality and fiction blur. Every frame is a heartbeat, every script is a mirror, and every role is a transformation."
          </motion.p>

          {/* Neon role tags */}
          <motion.div className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.8 }}>
            {[
              { r: 'Director', c: '#FF006E' },
              { r: 'Writer', c: '#00F5FF' },
              { r: 'Actor', c: '#B8FF00' },
              { r: 'Storyteller', c: '#7B2FFF' },
              { r: 'Founder', c: '#FF006E' },
            ].map(({ r, c }) => (
              <motion.span key={r}
                className="px-4 py-2 text-[11px] uppercase tracking-widest border font-medium cursor-default"
                style={{ borderColor: c + '40', color: c, textShadow: `0 0 8px ${c}55` }}
                whileHover={{ borderColor: c, boxShadow: `0 0 20px ${c}44`, y: -2 }}
                transition={{ duration: 0.2 }}>
                {r}
              </motion.span>
            ))}
          </motion.div>

          {/* Neon stats */}
          <div className="grid grid-cols-4 gap-4 border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {STATS.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}>
                <div className="text-4xl font-black mb-1">
                  <Counter target={s.value} color={s.color} />
                </div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
