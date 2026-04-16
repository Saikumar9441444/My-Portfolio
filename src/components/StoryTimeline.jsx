import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const chapters = [
  { num: '01', year: '2022', title: 'The Beginning', body: 'A pen. A blank page. A story that refused to stay silent. The universe of Saikumar began not with a camera, but with a sentence that changed everything.', color: '#FF006E', icon: '✍' },
  { num: '02', year: '2023', title: 'Behind the Struggle', body: 'From page to frame. He stepped behind the camera and never looked back. The director was not born in a film school — he was born in obsession.', color: '#00F5FF', icon: '🎬' },
  { num: '03', year: '2024', title: 'Proved What I Can', body: 'The director became the actor. Who better to perform a character than the one who created them? He stepped into the frame and delivered truth, not performance.', color: '#B8FF00', icon: '🎭' },
  { num: '04', year: '2025', title: 'Our Creative Works is Born', body: '"Our Creative Works" — not just a name, a declaration. A home for every story that deserved to live on screen. The one-man force became a production house.', color: '#7B2FFF', icon: '🏛' },
  { num: '05', year: '2026', title: 'The Story Continues', body: 'Web series. Short films. Short tales. Podcasts. Every project a new world. Every frame a new truth. The universe is still expanding.', color: '#FF006E', icon: '∞' },
];

const Chapter = ({ ch, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] items-start">
      {/* Left slot */}
      {isLeft ? (
        <motion.div
          className="md:text-right px-6 md:pr-12 py-20 md:border-r"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] mb-3 block text-gray-500">{ch.year}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 transition-all duration-700">
            {ch.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">{ch.body}</p>
        </motion.div>
      ) : (
        <div className="md:border-r" style={{ borderColor: 'rgba(255,255,255,0.04)' }} />
      )}

      {/* Center node */}
      <div className="hidden md:flex flex-col items-center pt-24 relative">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <motion.div
          className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border-2"
          style={{ 
            borderColor: ch.color, 
            color: '#FFF', 
            backgroundColor: '#0D0D0D',
            boxShadow: `0 0 20px ${ch.color}88, inset 0 0 10px ${ch.color}44`
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        >
          {ch.icon}
        </motion.div>
        <span className="text-[9px] font-mono mt-2 relative z-10 text-gray-600">{ch.num}</span>
      </div>

      {/* Right slot */}
      {!isLeft ? (
        <motion.div
          className="px-6 md:pl-12 py-20"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] mb-3 block text-gray-500">{ch.year}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 transition-all duration-700">
            {ch.title}
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm">{ch.body}</p>
        </motion.div>
      ) : (
        <div />
      )}
    </div>
  );
};

const StoryTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="journey" ref={ref} className="relative bg-transparent py-24 overflow-hidden grid-bg">
      {/* Colorful ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(184,255,0,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      {/* Ghost number */}
      <div className="absolute left-6 top-16 ghost-number">03</div>

      <div className="px-6 md:px-16 mb-20 section-header-wrap">
          <motion.p className="text-[10px] uppercase mb-4 font-bold tracking-[0.4em]"
          style={{ color: '#B8FF00' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8 }}>
          ✦ The Journey
        </motion.p>
        <div className="overflow-hidden">
          <motion.h2 className="text-cinematic text-6xl md:text-8xl"
            initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
            CHAPTERS
          </motion.h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {chapters.map((ch, i) => <Chapter key={i} ch={ch} index={i} />)}
      </div>
    </section>
  );
};

export default StoryTimeline;
