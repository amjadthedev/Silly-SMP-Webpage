import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('play.sillysmp.xyz');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden minecraft-grid">
      {/* Background Animated Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-smp-primary/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      
      {/* Absolute Pixel Blocks for Decor */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 w-16 h-16 bg-smp-primary/20 pixel-border opacity-20 hidden lg:block" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-smp-secondary/20 pixel-border opacity-20 hidden lg:block" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 pixel-border bg-smp-primary/10 text-smp-primary text-sm font-pixel tracking-widest uppercase mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-smp-primary opacity-75"></span>
              <span className="relative inline-flex rounded-none h-3 w-3 bg-smp-primary"></span>
            </span>
            Season 1 is Live
          </motion.div>
          
          <h1 className="font-pixel text-7xl md:text-9xl mb-8 tracking-tighter leading-none minecraft-text-shadow text-white uppercase">
            PURE <span className="text-smp-primary italic">VANILLA</span><br />
            SURVIVAL SMP
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-pixel text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            Experience Minecraft the way it was meant to be played. No plugins, no kits, just pure survival with a friendly community of silly people.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              className="minecraft-btn flex items-center gap-3 min-w-[240px] justify-center group relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-6 h-6" />
                    IP COPIED!
                  </motion.span>
                ) : (
                  <motion.span
                    key="play"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="flex items-center gap-3"
                  >
                    PLAY NOW
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
