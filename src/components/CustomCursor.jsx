import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const outer = useRef(null);
  const inner = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const lag = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const raf = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const onEnter = (e) => { if (e.target.closest('a, button, [role="button"]')) setHovered(true); };
    const onLeave = (e) => { if (e.target.closest('a, button, [role="button"]')) setHovered(false); };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    const loop = () => {
      lag.current.x += (pos.current.x - lag.current.x) * 0.1;
      lag.current.y += (pos.current.y - lag.current.y) * 0.1;

      if (outer.current) {
        outer.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px) scale(${hovered ? 1.6 : 1})`;
      }
      if (inner.current) {
        inner.current.style.transform = `translate(${lag.current.x - 4}px, ${lag.current.y - 4}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [hovered]);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outer}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: `1px solid ${hovered ? '#FF006E' : 'rgba(255,255,255,0.4)'}`,
          boxShadow: hovered ? '0 0 12px #FF006E88' : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot */}
      <div
        ref={inner}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          backgroundColor: hovered ? '#FF006E' : '#ffffff',
          boxShadow: hovered ? '0 0 8px #FF006E' : 'none',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
};

export default CustomCursor;
