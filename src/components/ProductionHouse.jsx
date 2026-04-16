import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProductionHouse = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="production" ref={ref} className="relative bg-transparent py-32 px-6 md:px-20 overflow-hidden">
      {/* Colorful ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,0,110,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      </div>

      {/* Ghost number */}
      <div className="absolute left-6 top-16 ghost-number">04</div>

      <div className="relative z-10 max-w-4xl mx-auto text-center section-header-wrap">
        {/* Neon logo */}
        <motion.div className="mb-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
          <div className="relative">
            <div className="w-28 h-28 md:w-40 md:h-40 rounded-full border-2 border-purple-500/40 flex items-center justify-center overflow-hidden bg-black p-1"
              style={{ boxShadow: '0 0 40px rgba(123,47,255,0.4), 0 0 80px rgba(123,47,255,0.15)' }}>
              <img src="/ocw_logo.JPEG" alt="OCW Logo" className="w-full h-full object-contain scale-105" />
            </div>
            {/* Orbit ring */}
            <motion.div className="absolute inset-[-15px] rounded-full border border-cyan-400/30"
              style={{ boxShadow: '0 0 15px rgba(0,245,255,0.2)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div className="absolute inset-[-30px] rounded-full border border-pink/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        <motion.p className="text-accent text-[10px] uppercase mb-4"
          style={{ color: '#FF006E' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }}>
          Founded by Saikumar
        </motion.p>

        <div className="overflow-hidden mb-8">
          <motion.h2 className="text-cinematic text-5xl md:text-7xl leading-none"
            initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            OUR CREATIVE <br/><span className="font-black text-pink glow-premium-pink uppercase">Works</span>
          </motion.h2>
        </div>

        <motion.p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.9 }}>
          An independent production house built not from capital, but from conviction.
          Providing <span className="text-white font-bold">25+ professional services</span> across the creative spectrum — from concept to final cut.
          Stories that needed to exist. Films that had to be made.
        </motion.p>

        {/* Professional Stats */}
        <motion.div className="flex justify-center gap-8 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 0.8 }}>
          <div className="text-center group">
            <h4 className="text-4xl md:text-5xl font-black text-white">25+</h4>
            <p className="text-[9px] uppercase tracking-[0.4em] mt-2 text-gray-500">Services Provided</p>
          </div>
          <div className="w-px h-12 bg-white/5 self-center" />
          <div className="text-center group">
            <h4 className="text-4xl md:text-5xl font-black text-white">100%</h4>
            <p className="text-[9px] uppercase tracking-[0.4em] mt-2 text-gray-500">Vision Delivered</p>
          </div>
        </motion.div>

        {/* Neon tags */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.8 }}>
          {[
            'Film Making', 'Mini Events', 'Photo Shoots', 'Reel Making', 'Digital Marketing', 'Script Doctoring'
          ].map(t => (
            <span key={t}
              className="px-5 py-2 text-[10px] uppercase tracking-widest border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/5 hover:text-white">
              {t}
            </span>
          ))}
        </motion.div>

        {/* CTA to Studio Instagram */}
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 border border-white text-sm uppercase tracking-[0.3em] font-medium transition-all duration-300 mr-4 mb-4 hover:bg-white hover:text-black"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9, duration: 0.8 }}
          >
            Join Our Crew
          </motion.button>
          <motion.a
            href="https://www.instagram.com/our_creative_works?igsh=bjNsM2NpMmltc2dw&utm_source=qr"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white/60 text-sm uppercase tracking-[0.3em] font-medium transition-all duration-300 hover:border-white hover:text-white"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1, duration: 0.8 }}
          >
            Follow @our_creative_works
          </motion.a>
      </div>
    </section>
  );
};

export default ProductionHouse;
