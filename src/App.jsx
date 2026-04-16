import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import CinemaLoader from './components/CinemaLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import StoryTimeline from './components/StoryTimeline';
import ProductionHouse from './components/ProductionHouse';
import Contact from './components/Contact';
import HireMeModal from './components/HireMeModal';
import MovieGearAssets from './components/MovieGearAssets';
import FloatingStoryGallery from './components/FloatingStoryGallery';
import './index.css';

import CinematicAudio from './components/CinematicAudio';

function App() {
  const [loading, setLoading] = useState(false); // Direct Open (previously true)
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const toggleHireMe = () => setIsHireMeOpen(!isHireMeOpen);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = 'auto'; };
  }, []);

  return (
    <>
      {/* Cinematic Sound Controller (Always Active) */}
      <CinematicAudio />

      <AnimatePresence mode="wait">
        {loading && <CinemaLoader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          className="relative bg-[#050505]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Custom cursor */}
          <CustomCursor />

          {/* Film grain */}
          <div className="grain" />

          {/* Scanline */}
          <div className="scanline-effect" />

          {/* Floating Movie Gear (Cameras, Reels, etc.) */}
          <MovieGearAssets />
          <FloatingStoryGallery />



          <Navbar onHireMeClick={toggleHireMe} />

          <main>
            <Hero onHireMeClick={toggleHireMe} />
            <About />
            <Portfolio />
            <StoryTimeline />
            <ProductionHouse />
            <Contact />
          </main>

          {/* Hire Me Modal Overlay */}
          <AnimatePresence>
            {isHireMeOpen && (
              <HireMeModal
                key="hire-modal"
                isOpen={isHireMeOpen}
                onClose={() => setIsHireMeOpen(false)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}

export default App;
