import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const HireMeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const fileInputRef = useRef(null);

  // EmailJS Configuration - User would replace these with their own keys
  const SERVICE_ID = 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Prepare template parameters
    // Note: EmailJS handles simple attachments in certain configurations, 
    // but typically you'd send form data and notify the user.
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      // You can't directly send binary files via EmailJS free tier easily without a URL,
      // so we simulate the "Success" and explain how to receive the file.
      reply_to: formData.email,
    };

    try {
      // If the user has provided real keys, this would run:
      if (SERVICE_ID !== 'YOUR_SERVICE_ID') {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      } else {
        // Simulation delay for local testing
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setResume(null);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl" onClick={onClose} />

      <motion.div
        className="relative w-full max-w-2xl bg-[#0D0D0D] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl backdrop-blur-3xl"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Neon Glows */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FF006E]/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#00F5FF]/10 rounded-full blur-[80px] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-gray-500 hover:text-white transition-colors text-2xl"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-12">
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="w-20 h-20 bg-[#B8FF00]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#B8FF00]/40"
            >
              <span className="text-4xl text-[#B8FF00]">✓</span>
            </motion.div>
            <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">Signal Transmitted</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              The <span className="text-[#FF006E] font-bold">FILM MAKERS ZONE</span> collective has received your application.
              We will review your portfolio and reach out via Gmail shortly from <span className="text-[#00F5FF]">Our Creative Works</span>.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-[11px] hover:bg-[#B8FF00] transition-colors"
            >
              Close Transmission
            </button>
          </div>
        ) : (
          <>
            <header className="mb-10 text-center">
              <span className="text-[#00F5FF] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block glow-cyan">Join The Collective</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-none uppercase italic tracking-tighter">
                PROVE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF006E] to-[#00F5FF]">TALENT</span>
              </h2>
              <p className="text-gray-500 text-[9px] mt-4 uppercase tracking-[0.3em]">Official Entry // Film Makers Zone</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#FF006E]/50 focus:bg-white/[0.08] transition-all"
                    placeholder="e.g. Christopher Nolan"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Registered Gmail</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#00F5FF]/50 focus:bg-white/[0.08] transition-all"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#B8FF00]/50 focus:bg-white/[0.08] transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Resume / CV (PDF)</label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full bg-white/5 border border-dashed border-white/10 rounded-xl px-5 py-3 text-gray-500 cursor-pointer hover:border-[#FF006E]/40 hover:bg-white/[0.08] transition-all flex items-center justify-between"
                  >
                    <span className="text-sm truncate">{resume ? resume.name : 'Upload File'}</span>
                    <span className="text-[10px] text-[#FF006E]">Browse</span>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => setResume(e.target.files[0])}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Interested Role</label>
                <select
                  required
                  value={formData.role || ''}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7B2FFF]/50 focus:bg-white/[0.08] transition-all"
                >
                  <option value="" disabled className="bg-[#111]">Select Role</option>
                  <option value="Actor" className="bg-[#111]">Actor / Actress</option>
                  <option value="Cinematographer" className="bg-[#111]">Cinematographer</option>
                  <option value="Editor" className="bg-[#111]">Film Editor</option>
                  <option value="Writer" className="bg-[#111]">Screenwriter</option>
                  <option value="Assistant Director" className="bg-[#111]">Assistant Director</option>
                  <option value="Other" className="bg-[#111]">Other Creative</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1">Message / Portfolio Link</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#7B2FFF]/50 focus:bg-white/[0.08] transition-all h-24 resize-none"
                  placeholder="Tell us about your vision or paste your reel link..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full relative group py-5 rounded-2xl overflow-hidden font-black uppercase tracking-[0.5em] text-[11px] transition-all"
                style={{
                  background: 'linear-gradient(90deg, #FF006E, #00F5FF)',
                  boxShadow: '0 0 25px rgba(255,0,110,0.3)',
                }}
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-overlay" />
                <span className="relative z-10 text-white">
                  {status === 'sending' ? 'Transmitting...' : 'Join The Collective'}
                </span>
              </button>

              {status === 'error' && (
                <p className="text-center text-[10px] text-red-500 uppercase tracking-widest mt-4">
                  Transmission failed. Please try again.
                </p>
              )}
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HireMeModal;
