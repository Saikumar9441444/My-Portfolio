import { motion } from 'framer-motion';

const sketches = [
  { id: 1, src: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format", label: "Sketch I" },
  { id: 2, src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=600&auto=format", label: "Sketch II" },
  { id: 3, src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format", label: "Sketch III" },
  { id: 4, src: "https://images.unsplash.com/photo-1546514355-7fdc90ccbd03?q=80&w=600&auto=format", label: "Sketch IV" },
  { id: 5, src: "https://images.unsplash.com/photo-1599557285994-f83b8dbe5obb?q=80&w=600&auto=format", label: "Sketch V" },
  { id: 6, src: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=600&auto=format", label: "Sketch VI" },
];

const ArtCard = ({ sketch, index }) => (
  <motion.div
    className="relative overflow-hidden rounded-md group cursor-pointer"
    style={{ gridRow: index % 3 === 1 ? 'span 2' : 'span 1' }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    whileHover={{ scale: 1.03, zIndex: 10 }}
  >
    <img
      src={sketch.src}
      alt={sketch.label}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      style={{ minHeight: '250px' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
    <motion.p
      className="absolute bottom-4 left-4 text-sm uppercase tracking-widest text-[#E50914] font-bold"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {sketch.label}
    </motion.p>
  </motion.div>
);

const ArtGallery = () => {
  return (
    <section id="art" className="relative w-full min-h-screen bg-[#1A1A1A] py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#FFFFFF]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Art &amp; <span className="text-[#E50914]">Sketches</span>
          </motion.h1>
          <p className="text-gray-500 mt-4 uppercase tracking-widest text-sm">The raw hand behind the camera</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {sketches.map((sketch, i) => (
            <ArtCard key={sketch.id} sketch={sketch} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
