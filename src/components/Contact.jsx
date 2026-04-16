import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  { label: 'Personal Instagram', handle: '@neverend_s', sub: 'Personal Creative Feed', href: 'https://www.instagram.com/neverend_s?igsh=MWdoeHJlbXhrZW9reA%3D%3D&utm_source=qr', color: '#FF006E' },
  { label: 'Studio Instagram', handle: '@our_creative_works', sub: 'Production House', href: 'https://www.instagram.com/our_creative_works?igsh=bjNsM2NpMmltc2dw&utm_source=qr', color: '#B8FF00' },
  { label: 'YouTube', handle: '@saikumarcreations1', sub: 'Watch All Films Here', href: 'https://youtube.com/@saikumarcreations1?si=m14g69LfUD5dMymh', color: '#00F5FF' },
  { label: 'Email', handle: 'saikumar@example.com', sub: 'Get in Touch Directly', href: 'mailto:saikumar@example.com', color: '#7B2FFF' },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Construct WhatsApp message
    const message = `Hi Saikumar, I am ${formData.name}. My phone number is ${formData.phone}. I am interested in your cinematic works!`;
    const whatsappUrl = `https://wa.me/919014002314?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setStatus('success');
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      setFormData({ name: '', phone: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="relative bg-transparent py-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Colorful ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,0,110,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>
      {/* Cinematic scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 3px, transparent 4px)', backgroundSize: '100% 4px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />



      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">


        {/* Ghost identifier */}
        <motion.div
          className="mb-8 text-[10px] uppercase tracking-[1em] text-gray-500 font-bold"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1 }}
        >
          To Reach // Us
        </motion.div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            className="text-6xl md:text-8xl font-black text-white leading-none uppercase tracking-tighter"
          style={{ textShadow: '0 0 15px rgba(255,0,110,0.25)' }}
            initial={{ y: '100%' }} animate={inView ? { y: 0 } : {}} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's CONNECT
          </motion.h2>
        </div>

        <motion.p
          className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 1 }}
        >
          Beyond the frame, every great story starts with a transmission. Reach out and let's manifest the vision.
        </motion.p>

        {/* Focused Contact Form */}
        <motion.div
          className="relative max-w-xl mx-auto p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-2xl overflow-hidden"
          style={{ boxShadow: '0 0 60px rgba(123,47,255,0.15), inset 0 0 30px rgba(0,0,0,0.3)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* Inner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-[60px]" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="absolute -top-6 left-0 text-[9px] uppercase tracking-widest text-gray-500 group-focus-within:text-white transition-colors">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Christopher Nolan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 placeholder:text-white/10"
                />
                <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-white transition-all duration-700" />
              </div>

              <div className="relative group">
                <label className="absolute -top-6 left-0 text-[9px] uppercase tracking-widest text-gray-500 group-focus-within:text-white transition-colors">Your Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all duration-500 placeholder:text-white/10"
                />
                <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-white transition-all duration-700" />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full relative py-5 mt-4 rounded-xl overflow-hidden group transition-all duration-500"
              style={{
                background: status === 'success' ? '#FFFFFF' : 'rgba(255,255,255,0.03)',
                border: status === 'success' ? '1px solid #FFFFFF' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <span className={`text-[11px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${status === 'success' ? 'text-black' : 'text-white group-hover:text-black'}`}>
                {status === 'idle' ? 'CONTACT US →' : status === 'sending' ? 'Transmitting...' : 'Link Established!'}
              </span>
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-[10px] text-white font-bold uppercase tracking-widest mt-6"
              >
                Signal received. Redirecting to WhatsApp...
              </motion.p>
            )}
          </form>
        </motion.div>

        {/* Floating Social Nodes */}
        <div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
            >
              <div
                className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = s.color;
                  e.currentTarget.style.boxShadow = `0 0 30px ${s.color}44, inset 0 0 15px ${s.color}22`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <span className="text-xl group-hover:animate-pulse" style={{ color: s.color }}>→</span>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{s.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-gray-600"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}
        >
          <span>© 2026 Saikumar Creations. Direct Contact: 9014002314</span>
          <span className="text-white/20 italic normal-case tracking-normal">"Reality is just the first draft."</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
