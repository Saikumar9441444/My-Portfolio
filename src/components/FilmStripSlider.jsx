import { motion } from 'framer-motion';

// YouTube video IDs extracted from Saikumar's film links
const FILMS = [
  { id: 'bEpE8m5_2Wg', title: 'ASALU EM JARIGINDI' },
  { id: 'D7syRfMkE_g',  title: 'MONEY' },
  { id: 'WkvAWrCY32A',  title: 'LUCID DREAMING' },
  { id: 'ajOXB0Ut8uc',  title: 'HE IS NOT RAM' },
  { id: 'x0eQOAO8UmQ',  title: 'TWINS' },
];

// Tripled so the seamless loop looks continuous
const SLIDES = [...FILMS, ...FILMS, ...FILMS];

const FilmStripSlider = () => {
  return (
    <div className="w-full overflow-hidden select-none border-y border-white/5 bg-black/30 backdrop-blur-sm" style={{ height: '140px' }}>
      <motion.div
        className="flex gap-5 items-center h-full w-max px-6"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {SLIDES.map((film, i) => (
          <div key={i} className="relative flex-none">
            {/* Film frame wrapper */}
            <div className="relative bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl"
              style={{ width: '200px', height: '112px' }}
            >
              {/* Sprocket holes top */}
              <div className="absolute top-0 left-0 right-0 h-3 flex items-center justify-around px-2 z-10 bg-black">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>

              {/* YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${film.id}/hqdefault.jpg`}
                alt={film.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.8) contrast(1.1) saturate(0.9)' }}
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Overlay gradient + title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 z-10" />
              <div className="absolute bottom-3 left-2 right-2 z-20">
                <p className="text-white text-[8px] font-black uppercase tracking-widest truncate"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                  {film.title}
                </p>
              </div>

              {/* Sprocket holes bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-3 flex items-center justify-around px-2 z-10 bg-black">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div key={j} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Edge vignette fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default FilmStripSlider;

