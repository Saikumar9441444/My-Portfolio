import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const NEON = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']; // Neutralized for professional look

// Real works including YouTube embeddable videos
const works = [
  {
    id: 1, num: '01', title: 'ASALU EM JARIGINDI', type: 'Web Series', year: '2022',
    role: 'Writer · Director · Actor',
    desc: 'A web series diving into the awakening of identity, choice, and consequence.',
    img: 'https://images.unsplash.com/photo-1594834749740-74b3f696cebd?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtu.be/bEpE8m5_2Wg?si=DtWo3Okh16lP7JZs', neon: '#FF006E',
  },
  {
    id: 2, num: '02', title: 'MONEY', type: 'Short Film', year: '2023',
    role: 'Writer · Director · Actor',
    desc: 'A haunting short film about the weight of memory and the ghosts we carry.',
    img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtu.be/D7syRfMkE_g?si=jSjdyfleAVM3vtYV', neon: '#00F5FF',
  },
  {
    id: 3, num: '03', title: 'LUCID DREAMING', type: 'Short Film', year: '2024',
    role: 'Writer · Director · Actor',
    desc: 'A film about the echoes of decisions that linger long after the moment passes.',
    img: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtu.be/WkvAWrCY32A?si=TNig6av4umYlkDUI', neon: '#B8FF00',
  },
  {
    id: 4, num: '04', title: 'HE IS NOT RAM', type: 'Short Tale', year: '2025',
    role: 'Writer · Director',
    desc: 'A quiet night monologue that speaks the unspeakable truths of a restless soul.',
    img: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtu.be/ajOXB0Ut8uc?si=TL-ZmpFvpjiMZjDa', neon: '#7B2FFF',
  },
  {
    id: 5, num: '05', title: 'TWINS', type: 'Short Tale', year: '2026',
    role: 'Writer · Director',
    desc: 'A fleeting moment captured in film — a glimpse into a life lived between frames.',
    img: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtu.be/x0eQOAO8UmQ?si=c1m-zt7iK0Tpo2cK', neon: '#FF006E',
  },
  {
    id: 6, num: '06', title: 'PARUGU', type: 'Demo - Film', year: '2026',
    role: 'Associate . Director',
    desc: 'An independent feature created alongside fellow filmmakers — a labor of collective vision.',
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=900&auto=format',
    youtubeId: null, link: 'https://youtube.com/@saikumarcreations1', neon: '#00F5FF',
  }
];



import FlowingMenu from './FlowingMenu';
import FilmStripSlider from './FilmStripSlider';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getYoutubeThumbnail = (url, fallback) => {
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return fallback;
  };

  const flowingMenuItems = works.map(work => ({
    link: work.link,
    text: work.title,
    image: getYoutubeThumbnail(work.link, work.img),
    color: work.neon
  }));

  return (
    <section id="portfolio" ref={ref} className="relative bg-transparent py-24 pt-32 scroll-mt-32 overflow-hidden">

      {/* Colorful ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,0,110,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* Film Reel Introduction Slider */}
      <div className="mb-20">
         <FilmStripSlider />
      </div>

      {/* Ghost number */}
      <div className="absolute left-6 top-16 ghost-number">02</div>

      {/* Header */}
      <div className="px-6 md:px-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="section-header-wrap">
          <motion.p className="text-accent text-[10px] uppercase mb-4"
            style={{ color: '#00F5FF' }}
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            Selected Works
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 className="text-cinematic text-6xl md:text-8xl"
              initial={{ y: '100%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
              FILMS
            </motion.h2>
          </div>
        </div>

        <motion.a
          href="https://youtube.com/@saikumarcreations1?si=m14g69LfUD5dMymh"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 border text-sm uppercase tracking-widest font-medium transition-all duration-300 group self-end"
          style={{ borderColor: '#FF006E50', color: '#FF006E' }}
          whileHover={{ backgroundColor: '#FF006E', color: '#000', boxShadow: '0 0 30px #FF006E66' }}
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M23.5 6.2s-.3-2-1.2-2.8c-1.1-1.2-2.4-1.2-3-1.3C16.8 2 12 2 12 2s-4.8 0-7.3.1c-.6.1-1.9.1-3 1.3C.8 4.2.5 6.2.5 6.2S.2 8.5.2 10.8v2.1C.2 15.2.5 17.5.5 17.5s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C7.2 21.7 12 21.7 12 21.7s4.8 0 7.3-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.5v-2.1C23.8 8.5 23.5 6.2 23.5 6.2zM9.7 15.5V8.2l6.6 3.7-6.6 3.6z" />
          </svg>
          View All on YouTube
        </motion.a>
      </div>

      {/* Works list */}
      <div style={{ height: '600px', position: 'relative' }}>
         <FlowingMenu 
           items={flowingMenuItems} 
           speed={20}
           textColor="#fff"
           bgColor="transparent"
           marqueeBgColor="#00F5FF"
           marqueeTextColor="#000"
         />
      </div>

      <div className="mt-16 px-6 md:px-16">
        <div className="h-px bg-white/5" />
      </div>
    </section>
  );
};

export default Portfolio;
