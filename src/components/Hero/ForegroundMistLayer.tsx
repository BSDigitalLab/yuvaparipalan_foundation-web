import React from 'react';
import { motion } from 'framer-motion';

export const ForegroundMistLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[7] pointer-events-none overflow-hidden will-change-transform">
      {/* Foreground Drifting Morning Dew Cloud Stream (32s cycle) */}
      <motion.div
        initial={{ x: '10%', opacity: 0.25 }}
        animate={{
          x: ['10%', '-10%', '10%'],
          opacity: [0.25, 0.50, 0.25],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(to top, rgba(255, 255, 255, 0.50) 0%, rgba(235, 250, 240, 0.20) 60%, transparent 100%)',
          filter: 'blur(45px)',
        }}
        className="absolute bottom-0 left-[-15%] w-[130%] h-[220px]"
      />
    </div>
  );
};
