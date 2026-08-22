import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const ColorfulLandingBird: React.FC = () => {
  const [isFlapping, setIsFlapping] = useState(true);
  const [wingState, setWingState] = useState(true);

  // Toggle wing flap when in flight
  useEffect(() => {
    if (!isFlapping) return;
    const interval = setInterval(() => {
      setWingState((prev) => !prev);
    }, 140);
    return () => clearInterval(interval);
  }, [isFlapping]);

  // Keyframe timeline control for flapping vs perched resting state (4 seconds pause on button)
  useEffect(() => {
    const runCycle = () => {
      // 0s to 3s: Flying from bottom left to button (Flapping ON)
      setIsFlapping(true);

      // At 3.0s: Touchdown on "Join Movement" button -> Perched state for 4s (Flapping OFF)
      const landTimer = setTimeout(() => {
        setIsFlapping(false);
      }, 3000);

      // At 7.0s: Takeoff from button -> Soaring to top right (Flapping ON again)
      const takeoffTimer = setTimeout(() => {
        setIsFlapping(true);
      }, 7000);

      return () => {
        clearTimeout(landTimer);
        clearTimeout(takeoffTimer);
      };
    };

    runCycle();
    const cycleInterval = setInterval(runCycle, 14000); // Repeat full loop every 14 seconds
    return () => clearInterval(cycleInterval);
  }, []);

  return (
    <motion.div
      initial={{ x: '-40vw', y: '45vh', scale: 0.8, rotate: -15 }}
      animate={{
        // Flight path: Bottom Left -> Land on Button Top -> Hold 4s -> Soar to Top Right
        x: [
          '-40vw',                // 0s: Start bottom-left
          '15px',                 // 3s: Land on Join Movement button top
          '15px',                 // 7s: Hold on button for 4 full seconds
          '55vw',                 // 10s: Soar off-screen to top right
          '55vw'                  // 14s: Hold off-screen before loop reset
        ],
        y: [
          '45vh',                 // 0s: Bottom left height
          '-22px',                // 3s: Soft touchdown right on top of button
          '-22px',                // 7s: Stay parked on button top
          '-50vh',                // 10s: Soar high up right
          '-50vh'
        ],
        rotate: [
          -15,                   // Flight angle up
          0,                     // Perched posture
          0,                     // Perched posture
          -25,                   // Takeoff steep angle
          -25
        ],
        scale: [
          0.8,
          1,                     // Touchdown scale
          1,
          0.85,
          0.85
        ]
      }}
      transition={{
        duration: 14,
        times: [0, 0.21, 0.5, 0.71, 1], // 3s fly in (21%), 4s pause (50%), 3s fly out (71%)
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute top-0 left-0 pointer-events-none z-30 drop-shadow-md"
    >
      <div className="relative">
        {/* Colorful Malabar Emerald & Sunbird Vector */}
        <svg width="42" height="34" viewBox="0 0 44 36" className="overflow-visible">
          {/* Bird Shadow when perched */}
          {!isFlapping && (
            <ellipse cx="22" cy="33" rx="10" ry="2.5" fill="rgba(0,0,0,0.25)" />
          )}

          {/* Tail Feathers (Cobalt Blue & Emerald) */}
          <path d="M 6 22 L -4 28 L 4 25 L -2 33 L 8 24 Z" fill="#1d4ed8" />

          {/* Bird Main Body (Vibrant Emerald Green) */}
          <path d="M 10 18 Q 16 8 28 12 Q 36 14 40 18 Q 36 26 24 26 Q 14 26 10 18 Z" fill="#15803d" />

          {/* Golden Chest Accent */}
          <path d="M 20 16 Q 28 15 34 20 Q 28 25 20 23 Z" fill="#fbbf24" />

          {/* Head & Beak (Sharp Golden Beak) */}
          <circle cx="34" cy="14" r="5.5" fill="#166534" />
          <polygon points="38,13 44,15 38,17" fill="#f59e0b" />
          <circle cx="36" cy="13" r="1.2" fill="#ffffff" />
          <circle cx="36.3" cy="13" r="0.6" fill="#000000" />

          {/* Animated Wings (Flapping state vs Perched folded state) */}
          {isFlapping ? (
            <path
              d={
                wingState
                  ? 'M 18 14 Q 10 -8 24 2 Q 22 10 18 14 Z' // Wing Up (Cobalt Blue Accent)
                  : 'M 18 14 Q 8 28 22 22 Q 22 16 18 14 Z'  // Wing Down
              }
              fill="#2563eb"
              stroke="#1d4ed8"
              strokeWidth="0.8"
            />
          ) : (
            /* Folded Wing resting on back during 4-second wait */
            <path
              d="M 14 16 Q 24 12 30 18 Q 22 21 14 16 Z"
              fill="#2563eb"
              stroke="#1d4ed8"
              strokeWidth="0.8"
            />
          )}
        </svg>

        {/* Small "Touchdown Sparkle" when perched */}
        {!isFlapping && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: 3 }}
            className="absolute -top-2 right-0 text-amber-400 text-xs font-bold"
          >
            ✨
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};
