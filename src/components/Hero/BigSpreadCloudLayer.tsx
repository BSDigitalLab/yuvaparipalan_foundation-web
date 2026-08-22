import React from 'react';
import { motion } from 'framer-motion';

export const BigSpreadCloudLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[6] pointer-events-none overflow-hidden will-change-transform">
      {/* Massive Volumetric Cloud Bank (In front of village image z-[4], behind hero text z-[10]) */}
      {/* Diagonal Trajectory: Moving from Bottom-Right to Top-Left */}
      <motion.div
        initial={{ x: '105vw', y: '45vh', opacity: 0 }}
        animate={{
          x: ['105vw', '40vw', '-85vw'],
          y: ['45vh', '22vh', '2vh'], // Bottom-Right to Top-Left upward path
          opacity: [0, 0.92, 0.92, 0],
          scaleX: [1, 1.12, 0.94, 1],
          scaleY: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 transform -rotate-12"
      >
        <div className="relative w-[1000px] sm:w-[1450px] h-[360px] sm:h-[480px]">
          {/* Dense White Core Center */}
          <div 
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.80) 45%, rgba(255, 255, 255, 0.25) 75%, transparent 90%)',
              filter: 'blur(24px)',
            }}
            className="absolute top-8 left-36 w-[700px] sm:w-[1050px] h-[260px] sm:h-[340px] rounded-[220px/120px]"
          />

          {/* Upper Cloud Puff */}
          <div 
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.60) 50%, transparent 85%)',
              filter: 'blur(20px)',
            }}
            className="absolute top-0 left-64 w-[380px] sm:w-[540px] h-[200px] sm:h-[280px] rounded-full"
          />

          {/* Forward Cloud Puff */}
          <div 
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.50) 50%, transparent 82%)',
              filter: 'blur(22px)',
            }}
            className="absolute top-16 left-0 w-[350px] sm:w-[480px] h-[180px] sm:h-[240px] rounded-full"
          />

          {/* Trailing Cloud Feather */}
          <div 
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.40) 55%, transparent 85%)',
              filter: 'blur(28px)',
            }}
            className="absolute top-24 right-0 w-[420px] sm:w-[580px] h-[200px] sm:h-[260px] rounded-[160px/90px]"
          />
        </div>
      </motion.div>
    </div>
  );
};
