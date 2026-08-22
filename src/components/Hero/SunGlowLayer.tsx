import React from 'react';
import { motion } from 'framer-motion';

export const SunGlowLayer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] pointer-events-none z-[1] will-change-transform flex items-center justify-center"
    >
      {/* Elegant Compact Golden Morning Sun Disc */}
      <div 
        className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-r from-[#fff59d] via-[#fde047] to-[#fb923c] shadow-[0_0_80px_rgba(253,224,71,0.85)] opacity-95 blur-[4px]"
      />

      {/* Atmospheric Golden Sunbeam Glow Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(254, 240, 138, 0.6) 0%, rgba(253, 224, 71, 0.3) 40%, rgba(249, 115, 22, 0.18) 65%, transparent 85%)',
          filter: 'blur(60px)',
        }}
      />
    </motion.div>
  );
};
