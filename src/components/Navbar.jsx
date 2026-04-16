import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about', neon: '#FF006E' },
  { label: 'Films', href: '#portfolio', neon: '#00F5FF' },
  { label: 'Journey', href: '#journey', neon: '#B8FF00' },
  { label: 'OCW', href: '#production', neon: '#7B2FFF' },
  { label: 'Contact', href: '#contact', neon: '#FF006E' },
];

const Navbar = ({ onHireMeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[200] px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-700 ${scrolled ? 'premium-glass border-b-cyan-400/20 shadow-[0_0_40px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >


        {/* Logo — full name glows neon pink */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative group flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          <span
            className="font-extralight text-sm tracking-[0.6em] uppercase transition-all duration-500 text-white group-hover:text-cyan-400 group-hover:glow-premium-cyan"
          >
            SAIKUMAR
          </span>
        </motion.button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link, i) => (
            <motion.button
              key={link.label}
              onClick={() => go(link.href)}
              className="relative text-[11px] uppercase tracking-[0.2em] text-gray-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '';
              }}
            >
              {link.label}
              {/* Neon underline slide in on hover */}
              <span
                className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px transition-all duration-300 bg-white"
              />
            </motion.button>
          ))}
          <motion.button
            onClick={onHireMeClick}
            className="px-5 py-2 border border-white/20 text-white text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            Join The Crew
          </motion.button>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-[5px]" onClick={() => setMenuOpen(v => !v)}>
          <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-[#FF006E] block transition-all" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-px bg-white block" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-[#FF006E] block transition-all" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[199] bg-[#050505] flex flex-col items-center justify-center md:hidden grid-bg"
            initial={{ clipPath: 'circle(0% at 95% 3%)' }}
            animate={{ clipPath: 'circle(150% at 95% 3%)' }}
            exit={{ clipPath: 'circle(0% at 95% 3%)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => go(link.href)}
                  className="text-5xl font-black uppercase text-white hover:text-[#FF006E] hover:glow-pink transition-colors duration-200"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => { setMenuOpen(false); onHireMeClick(); }}
                className="mt-4 px-10 py-4 border border-[#FF006E] text-[#FF006E] text-lg font-black uppercase tracking-[0.2em] hover:bg-[#FF006E] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,0,110,0.3)]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 }}
              >
                Join The Crew
              </motion.button>
            </div>
            <p className="absolute bottom-12 text-[10px] text-gray-700 uppercase tracking-widest">"A Home for Independent Cinema."</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
