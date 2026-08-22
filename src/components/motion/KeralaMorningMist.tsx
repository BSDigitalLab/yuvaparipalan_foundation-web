import React from 'react';
import { motion } from 'framer-motion';

export const KeralaMorningMist: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-1">
      {/* 1. Visible Low-Lying Morning Dew Mist Waves */}
      <motion.div
        initial={{ x: '-20%' }}
        animate={{
          x: ['-20%', '20%', '-20%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-[140%] h-72 bg-gradient-to-t from-white/80 via-white/40 to-transparent blur-xl opacity-90"
      />

      {/* 2. Visible Mid-Level Floating Mist Cloud */}
      <motion.div
        initial={{ x: '20%', y: '0%' }}
        animate={{
          x: ['20%', '-20%', '20%'],
          y: ['0%', '-5%', '0%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-0 w-[140%] h-60 bg-gradient-to-r from-emerald-100/40 via-white/70 to-emerald-50/40 blur-2xl opacity-85"
      />

      {/* 3. High Sky Mist Puff */}
      <motion.div
        initial={{ x: '-10%' }}
        animate={{ x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-0 w-[600px] h-[250px] bg-white/60 rounded-full blur-3xl opacity-80"
      />
    </div>
  );
};
