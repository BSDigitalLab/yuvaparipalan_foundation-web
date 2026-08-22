import React from 'react';
import { motion } from 'framer-motion';

// Bird SVG with realistic animated wing flapping
const FlappingBird: React.FC<{ delay?: number; className?: string }> = ({ delay = 0, className = "text-slate-800/85" }) => {
  return (
    <svg className="w-7 h-7 drop-shadow-sm" viewBox="0 0 32 20" fill="currentColor">
      <motion.path
        animate={{
          d: [
            "M 0 10 Q 8 -10 16 3 Q 24 -10 32 10 Q 22 3 16 6 Q 10 3 0 10 Z", // Wings Up
            "M 0 3 Q 8 14 16 5 Q 24 14 32 3 Q 22 5 16 6 Q 10 5 0 3 Z",   // Wings Down
            "M 0 10 Q 8 -10 16 3 Q 24 -10 32 10 Q 22 3 16 6 Q 10 3 0 10 Z", // Wings Up
          ],
        }}
        transition={{
          duration: 0.28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
        className={className}
      />
    </svg>
  );
};

export const BirdsFlock: React.FC = () => {
  // 1. Group 1: 5 Birds in Wide V-Formation (Left to Center Distance - Disappearing at Center)
  const flock1 = [
    { x: 0, y: 0, scale: 1, delay: 0 },
    { x: -16, y: 12, scale: 0.85, delay: 0.08 },
    { x: 16, y: 14, scale: 0.85, delay: 0.08 },
    { x: -32, y: 24, scale: 0.7, delay: 0.16 },
    { x: 32, y: 26, scale: 0.7, delay: 0.16 },
  ];

  // 2. Group 2: Right to Left Distant Flock Flying Directly In Front of Sun (Very Long View)
  const flockSunRightToLeft = [
    { x: 0, y: 0, scale: 0.35, delay: 0.02 },
    { x: 16, y: -8, scale: 0.28, delay: 0.09 },
    { x: 32, y: -16, scale: 0.22, delay: 0.16 },
    { x: -16, y: 8, scale: 0.28, delay: 0.09 },
  ];

  // 3. Group 3: 6 Birds in Staggered Echelon (Left to Right Ascending Sky)
  const flock3 = [
    { x: 0, y: 0, scale: 0.85, delay: 0 },
    { x: -12, y: 10, scale: 0.75, delay: 0.07 },
    { x: -24, y: 20, scale: 0.68, delay: 0.14 },
    { x: -36, y: 30, scale: 0.60, delay: 0.21 },
    { x: -48, y: 40, scale: 0.52, delay: 0.28 },
    { x: -60, y: 50, scale: 0.45, delay: 0.35 },
  ];

  // 4. Group 4: Left to Right Flock Flying Across Sun Disc
  const flock4 = [
    { x: 0, y: 0, scale: 0.85, delay: 0.02 },
    { x: -14, y: -8, scale: 0.7, delay: 0.09 },
    { x: -28, y: -16, scale: 0.6, delay: 0.16 },
    { x: 14, y: 8, scale: 0.7, delay: 0.09 },
  ];

  // 5. Group 5: 2 Birds Pair (Distant Upper Atmosphere)
  const flock5 = [
    { x: 0, y: 0, scale: 0.6, delay: 0.03 },
    { x: -14, y: 8, scale: 0.5, delay: 0.10 },
  ];

  return (
    <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden will-change-transform">
      
      {/* Group 1: 5 Birds V-Formation (Left to Center Distance - Disappearing at Center) */}
      <motion.div
        initial={{ x: '-10vw', y: '35vh', scale: 1.1, opacity: 0.9 }}
        animate={{
          x: ['-10vw', '20vw', '48vw'],
          y: ['35vh', '22vh', '12vh'],
          scale: [1.1, 0.6, 0.12],
          opacity: [0.9, 0.8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatDelay: 4,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 flex items-center justify-center transform -rotate-12"
      >
        {flock1.map((bird, idx) => (
          <div key={idx} style={{ transform: `translate(${bird.x}px, ${bird.y}px) scale(${bird.scale})` }} className="absolute">
            <FlappingBird delay={bird.delay} />
          </div>
        ))}
      </motion.div>

      {/* Group 2: Distant Flock Flying RIGHT TO LEFT Directly In Front of Sun (Very Long View) */}
      <motion.div
        initial={{ x: '105vw', y: '10vh', scale: 0.35, opacity: 0 }}
        animate={{
          x: ['105vw', '50vw', '-10vw'], // Passes directly in front of the morning sun disc at center!
          y: ['10vh', '10vh', '12vh'],
          scale: [0.35, 0.22, 0.12], // Very long view scale!
          opacity: [0, 0.95, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 3,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 flex items-center justify-center transform rotate-[170deg]"
      >
        {flockSunRightToLeft.map((bird, idx) => (
          <div key={idx} style={{ transform: `translate(${bird.x}px, ${bird.y}px) scale(${bird.scale})` }} className="absolute">
            <FlappingBird delay={bird.delay} className="text-amber-950/90" />
          </div>
        ))}
      </motion.div>

      {/* Group 3: 6 Birds Staggered Echelon (Left to Right Ascending Sky) */}
      <motion.div
        initial={{ x: '-10vw', y: '24vh', scale: 0.5, opacity: 0 }}
        animate={{
          x: ['-10vw', '50vw', '105vw'],
          y: ['24vh', '14vh', '4vh'],
          scale: [0.5, 0.7, 0.85],
          opacity: [0, 0.85, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatDelay: 6,
          delay: 9,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 flex items-center justify-center transform -rotate-[10deg]"
      >
        {flock3.map((bird, idx) => (
          <div key={idx} style={{ transform: `translate(${bird.x}px, ${bird.y}px) scale(${bird.scale})` }} className="absolute">
            <FlappingBird delay={bird.delay} />
          </div>
        ))}
      </motion.div>

      {/* Group 4: Left to Right Flock Flying Across Sun Disc */}
      <motion.div
        initial={{ x: '-10vw', y: '10vh', scale: 0.85, opacity: 0 }}
        animate={{
          x: ['-10vw', '50vw', '105vw'],
          y: ['12vh', '10vh', '8vh'],
          scale: [0.85, 0.75, 0.65],
          opacity: [0, 0.95, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 7,
          delay: 2,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 flex items-center justify-center transform -rotate-6"
      >
        {flock4.map((bird, idx) => (
          <div key={idx} style={{ transform: `translate(${bird.x}px, ${bird.y}px) scale(${bird.scale})` }} className="absolute">
            <FlappingBird delay={bird.delay} className="text-amber-950/90" />
          </div>
        ))}
      </motion.div>

      {/* Group 5: 2 Birds Pair (Distant Upper Atmosphere) */}
      <motion.div
        initial={{ x: '105vw', y: '5vh', scale: 0.5, opacity: 0 }}
        animate={{
          x: ['105vw', '50vw', '-10vw'],
          y: ['5vh', '7vh', '10vh'],
          scale: [0.5, 0.35, 0.2],
          opacity: [0, 0.75, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatDelay: 8,
          delay: 13,
          ease: 'linear',
        }}
        className="absolute top-0 left-0 flex items-center justify-center transform rotate-[170deg]"
      >
        {flock5.map((bird, idx) => (
          <div key={idx} style={{ transform: `translate(${bird.x}px, ${bird.y}px) scale(${bird.scale})` }} className="absolute">
            <FlappingBird delay={bird.delay} />
          </div>
        ))}
      </motion.div>

    </div>
  );
};
