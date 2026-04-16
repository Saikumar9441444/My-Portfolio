import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const frames = [
  'https://images.unsplash.com/photo-1594834749740-74b3f696cebd?q=80&w=900&auto=format',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=900&auto=format',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=900&auto=format',
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=900&auto=format',
  'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=900&auto=format',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=900&auto=format',
];

const FloatingFrame = ({ src, x, y, rotate, delay, scale = 1, tint = '#FF006E' }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-[-1] select-none"
      style={{ 
        left: x, 
        top: y, 
        scale,
        filter: 'blur(5px) grayscale(50%)', // Depth of field + muted colors
      }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: 0.2, // Reduced from 0.6
        y: [0, -60, 0],
        rotate: [rotate - 3, rotate + 3, rotate - 3]
      }}
      transition={{
        opacity: { duration: 2, delay },
        y: { duration: 15 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 12 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="relative p-2 bg-white/5 border border-white/10 rounded-md shadow-2xl backdrop-blur-sm">
        <img src={src} alt="Film Frame" className="w-56 md:w-80 aspect-video object-cover brightness-50 contrast-125 saturate-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Glow tint */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundColor: tint }} />
        {/* Frame numbering like film strip */}
        <div className="absolute top-0 bottom-0 left-[-15px] flex flex-col justify-between py-4 text-[8px] text-white/20 font-mono tracking-tighter">
           <span>{Math.floor(Math.random()*900+100)}</span>
           <span>FN-{Math.floor(Math.random()*90+10)}</span>
           <span>{Math.floor(Math.random()*900+100)}</span>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingStoryGallery = () => {
  const neon = ['#FF006E', '#00F5FF', '#B8FF00', '#7B2FFF'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      {/* Scattered Frames shifted to EXTREME edges for legibility */}
      <FloatingFrame src={frames[0]} x="-10%" y="10%" rotate={-8} delay={1} scale={1.2} tint={neon[0]} />
      <FloatingFrame src={frames[1]} x="85%" y="20%" rotate={10} delay={1.5} scale={1.1} tint={neon[1]} />
      <FloatingFrame src={frames[2]} x="-5%" y="60%" rotate={4} delay={2} scale={1.3} tint={neon[2]} />
      <FloatingFrame src={frames[3]} x="90%" y="70%" rotate={-6} delay={2.5} scale={1.2} tint={neon[3]} />
      <FloatingFrame src={frames[4]} x="2%" y="40%" rotate={12} delay={3} scale={0.9} tint={neon[0]} />
      <FloatingFrame src={frames[5]} x="82%" y="80%" rotate={-4} delay={3.5} scale={1.1} tint={neon[1]} />

      {/* Extreme background glowing spots */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#FF006E]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#00F5FF]/10 rounded-full blur-[180px]" />
    </div>
  );
};

export default FloatingStoryGallery;
