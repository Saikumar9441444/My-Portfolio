import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const GearItem = ({ 
  src, 
  initialX, 
  initialY, 
  rotationRange = 8, 
  yRange = 40, 
  delay = 0, 
  scale = 1, 
  baseOpacity = 0.6,
  mouseX,
  mouseY,
  isBeam = false 
}) => {
  const { scrollYProgress } = useScroll();
  
  // Parallax link to scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -800]);
  
  // MOUSE REACTIVE TILT (3D Effect)
  const springConfig = { stiffness: 60, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [rotationRange, -rotationRange]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-rotationRange, rotationRange]), springConfig);

  // DYNAMIC OPACITY: Fades out in reading zones
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [baseOpacity, baseOpacity * 0.4, baseOpacity * 0.1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.25], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.div
      className="absolute pointer-events-none select-none z-[-1]"
      style={{ 
        left: initialX, 
        top: initialY, 
        scale,
        y: yParallax,
        rotateX,
        rotateY,
        opacity,
        filter: blurValue,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      initial={{ opacity: 0, scale: scale * 0.2, z: -500, rotateX: 45 }}
      animate={{ opacity: baseOpacity, scale, z: 0, rotateX: 0 }}
      transition={{ duration: 2.2, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ 
          y: [-yRange/2, yRange/2, -yRange/2],
          rotateZ: [-rotationRange/6, rotationRange/6, -rotationRange/6]
        }}
        transition={{ 
          duration: 12 + Math.random() * 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }}
        className="relative"
      >
        <img 
          src={src} 
          alt="Filmmaking Gear" 
          className={`w-auto max-w-[500px] ${isBeam ? 'mix-blend-screen opacity-70' : 'drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]'}`}
        />
        
        {/* Spotlight Beam Specific Glow */}
        {isBeam && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full" />
        )}
      </motion.div>
    </motion.div>
  );
};

const MovieGearAssets = () => {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* 1. MASSIVE FOCUS CAMERA - Centered Right */}
      <GearItem 
        src="/assets/cinema_camera.png" 
        initialX="55%" 
        initialY="20%" 
        rotationRange={15} 
        scale={2.2} 
        baseOpacity={0.7} 
        mouseX={mouseX} mouseY={mouseY}
        delay={0.5}
      />

      {/* 2. VOLUMETRIC LIGHT BEAM - Strong Shaft */}
      <GearItem 
        src="/assets/light_beam.png" 
        initialX="40%" 
        initialY="0%" 
        rotationRange={20} 
        scale={3.5} 
        baseOpacity={0.45} 
        mouseX={mouseX} mouseY={mouseY}
        isBeam={true}
        delay={0.8}
      />

      {/* 3. SUBTLE GHOST LIGHT - Far Left Top */}
      <GearItem 
        src="/assets/light_beam.png" 
        initialX="-20%" 
        initialY="-10%" 
        rotationRange={12} 
        scale={2.8} 
        baseOpacity={0.3} 
        mouseX={mouseX} mouseY={mouseY}
        isBeam={true}
        delay={1.2}
      />

      {/* Atmospheric depth / High-end Haze */}
      <div className="absolute inset-0 z-[-2] pointer-events-none">
         <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-cyan-600/5 to-transparent blur-[300px]" />
         <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-pink-600/5 rounded-full blur-[250px] opacity-30" />
      </div>
    </div>
  );
};

export default MovieGearAssets;
