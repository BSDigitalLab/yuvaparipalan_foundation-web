import React from 'react';
import { motion } from 'framer-motion';

export const BacksideMistLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden will-change-transform">
      
      {/* Formation 1: Large Asymmetrical Volumetric Cumulus Bank (3 Custom Blobs, Dense Center, Feathered Edges - Angle: -8deg) */}
      <motion.div
        initial={{ x: '105vw', y: '4vh', opacity: 0 }}
        animate={{
          x: ['105vw', '45vw', '-75vw'],
          y: ['4vh', '7vh', '10vh'],
          opacity: [0, 0.96, 0.96, 0],
          scaleX: [1, 1.14, 0.92, 1],
          scaleY: [1, 0.88, 1.12, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 transform -rotate-8"
      >
        <div className="relative w-[520px] sm:w-[680px] h-[180px] sm:h-[230px]">
          {/* Dense White Core Center */}
          <div 
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.3) 70%, transparent 88%)', filter: 'blur(16px)' }}
            className="absolute top-4 left-16 w-[340px] sm:w-[460px] h-[130px] sm:h-[160px] rounded-[140px/80px]" 
          />
          {/* Feathered Top Puff */}
          <div 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 45%, transparent 80%)', filter: 'blur(14px)' }}
            className="absolute top-0 left-28 w-[180px] sm:w-[240px] h-[120px] sm:h-[150px] rounded-full" 
          />
          {/* Feathered Trailing Puff */}
          <div 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.4) 50%, transparent 82%)', filter: 'blur(18px)' }}
            className="absolute top-8 left-0 w-[160px] sm:w-[210px] h-[90px] sm:h-[120px] rounded-full" 
          />
        </div>
      </motion.div>

      {/* Formation 2: Spread Echelon Cloud Group (4 Custom Blobs - Angle: +12deg) */}
      <motion.div
        initial={{ x: '105vw', y: '14vh', opacity: 0 }}
        animate={{
          x: ['105vw', '40vw', '-85vw'],
          y: ['14vh', '11vh', '7vh'],
          opacity: [0, 0.94, 0.94, 0],
          scaleX: [1, 0.92, 1.15, 1],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          delay: 11,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 transform rotate-12"
      >
        <div className="relative w-[650px] sm:w-[880px] h-[160px] sm:h-[210px]">
          {/* Core Main Cloud */}
          <div 
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.80) 42%, rgba(255,255,255,0.25) 75%, transparent 90%)', filter: 'blur(18px)' }}
            className="absolute top-2 left-36 w-[380px] sm:w-[500px] h-[130px] sm:h-[170px] rounded-[180px/90px]" 
          />
          {/* Secondary Forward Blob */}
          <div 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.5) 48%, transparent 85%)', filter: 'blur(15px)' }}
            className="absolute top-8 left-0 w-[200px] sm:w-[260px] h-[100px] sm:h-[130px] rounded-full" 
          />
          {/* Secondary Upper Blob */}
          <div 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.45) 50%, transparent 82%)', filter: 'blur(16px)' }}
            className="absolute top-0 left-60 w-[170px] sm:w-[220px] h-[90px] sm:h-[120px] rounded-full" 
          />
        </div>
      </motion.div>

      {/* Formation 3: Compact Dense Cloud Blob (Dense Thick Center, Soft Edge Haze - Angle: -14deg) */}
      <motion.div
        initial={{ x: '105vw', y: '2vh', opacity: 0 }}
        animate={{
          x: ['105vw', '50vw', '-70vw'],
          y: ['2vh', '4vh', '7vh'],
          opacity: [0, 0.95, 0.95, 0],
          scaleY: [1, 1.16, 0.9, 1],
        }}
        transition={{
          duration: 56,
          repeat: Infinity,
          delay: 21,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 transform -rotate-14"
      >
        <div className="relative w-[360px] sm:w-[460px] h-[190px] sm:h-[240px]">
          <div 
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.2) 75%, transparent 88%)', filter: 'blur(14px)' }}
            className="absolute top-4 left-4 w-[310px] sm:w-[400px] h-[150px] sm:h-[190px] rounded-[130px/90px]" 
          />
          <div 
            style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.5) 50%, transparent 80%)', filter: 'blur(12px)' }}
            className="absolute top-0 left-20 w-[150px] sm:w-[190px] h-[110px] sm:h-[140px] rounded-full" 
          />
        </div>
      </motion.div>

      {/* Formation 4: Staggered Double Volumetric Cloud Stream (Angle: +7deg) */}
      <motion.div
        initial={{ x: '105vw', y: '18vh', opacity: 0 }}
        animate={{
          x: ['105vw', '38vw', '-90vw'],
          y: ['18vh', '15vh', '11vh'],
          opacity: [0, 0.93, 0.93, 0],
          scaleX: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 64,
          repeat: Infinity,
          delay: 32,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 transform rotate-7"
      >
        <div className="relative w-[600px] sm:w-[820px] h-[170px] sm:h-[220px]">
          {/* Cloud 1 */}
          <div 
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.78) 42%, rgba(255,255,255,0.2) 75%, transparent 88%)', filter: 'blur(17px)' }}
            className="absolute top-2 left-0 w-[320px] sm:w-[420px] h-[130px] sm:h-[170px] rounded-[150px/80px]" 
          />
          {/* Cloud 2 (Offset Behind) */}
          <div 
            style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.72) 44%, rgba(255,255,255,0.2) 75%, transparent 88%)', filter: 'blur(20px)' }}
            className="absolute top-8 left-64 sm:left-96 w-[280px] sm:w-[360px] h-[110px] sm:h-[150px] rounded-[130px/70px]" 
          />
        </div>
      </motion.div>

      {/* Formation 5: Ambient Feathered Horizon Dew Mist (Behind Village Horizon - 45s cycle) */}
      <motion.div
        initial={{ x: '20%', opacity: 0.50 }}
        animate={{
          x: ['20%', '-20%', '20%'],
          opacity: [0.50, 0.80, 0.50],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.45) 55%, transparent 85%)',
          filter: 'blur(32px)',
        }}
        className="absolute top-[22%] sm:top-[25%] left-[-15%] w-[130%] h-[280px]"
      />

    </div>
  );
};
