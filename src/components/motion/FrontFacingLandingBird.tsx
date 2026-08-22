import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TargetPos {
  x: number;
  y: number;
}

export const GlobalLandingBirdsController: React.FC = () => {
  const [joinPos, setJoinPos] = useState<TargetPos | null>(null);
  const [partnerPos, setPartnerPos] = useState<TargetPos | null>(null);

  // Measure exact viewport positions of the two target CTA buttons
  useEffect(() => {
    const updatePositions = () => {
      const joinEl = document.getElementById('join-movement-cta');
      if (joinEl) {
        const rect = joinEl.getBoundingClientRect();
        setJoinPos({
          x: rect.left + rect.width / 2 - 18,
          y: rect.top - 24,
        });
      }

      const partnerEl = document.getElementById('partner-csr-cta');
      if (partnerEl) {
        const rect = partnerEl.getBoundingClientRect();
        setPartnerPos({
          x: rect.left + rect.width / 2 - 18,
          y: rect.top - 24,
        });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', updatePositions);
    const interval = setInterval(updatePositions, 1000);

    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Bird 1: Target Join Movement Button */}
      {joinPos && (
        <SingleLandingBird
          target={joinPos}
          startOffset={{ x: -180, y: window.innerHeight * 0.55 }}
          endOffset={{ x: window.innerWidth + 200, y: -120 }}
          delay={0}
        />
      )}

      {/* Bird 2: Target Partner CSR Header Button */}
      {partnerPos && (
        <SingleLandingBird
          target={partnerPos}
          startOffset={{ x: -180, y: window.innerHeight * 0.2 }}
          endOffset={{ x: window.innerWidth + 200, y: -100 }}
          delay={1.2}
        />
      )}
    </div>
  );
};

interface SingleLandingBirdProps {
  target: TargetPos;
  startOffset: { x: number; y: number };
  endOffset: { x: number; y: number };
  delay: number;
}

const SingleLandingBird: React.FC<SingleLandingBirdProps> = ({
  target,
  startOffset,
  endOffset,
  delay,
}) => {
  const [isFlapping, setIsFlapping] = useState(true);
  const [wingUp, setWingUp] = useState(true);

  // Wing flapping state during flight
  useEffect(() => {
    if (!isFlapping) return;
    const interval = setInterval(() => {
      setWingUp((prev) => !prev);
    }, 130);
    return () => clearInterval(interval);
  }, [isFlapping]);

  // Infinite loop timeline: Fly in from left edge -> Touchdown facing viewers (4s) -> Fly out to right edge -> Reset loop
  useEffect(() => {
    const runCycle = () => {
      setIsFlapping(true);

      // Touchdown at 3.2s
      const landTimer = setTimeout(() => {
        setIsFlapping(false);
      }, 3200 + delay * 1000);

      // Takeoff at 7.2s
      const takeoffTimer = setTimeout(() => {
        setIsFlapping(true);
      }, 7200 + delay * 1000);

      return () => {
        clearTimeout(landTimer);
        clearTimeout(takeoffTimer);
      };
    };

    const initialTimer = setTimeout(runCycle, delay * 1000);
    const loopInterval = setInterval(runCycle, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(loopInterval);
    };
  }, [delay]);

  return (
    <motion.div
      initial={{ x: startOffset.x, y: startOffset.y, scale: 0.8 }}
      animate={{
        // 0s: Outside Left Screen -> 3.2s: Land on Button -> 7.2s: Hold 4s -> 10.4s: Outside Right Screen
        x: [startOffset.x, target.x, target.x, endOffset.x, endOffset.x],
        y: [startOffset.y, target.y, target.y, endOffset.y, endOffset.y],
        scale: [0.8, 1, 1, 0.85, 0.85],
        rotate: [-10, 0, 0, -22, -22],
      }}
      transition={{
        duration: 14,
        times: [0, 0.23, 0.51, 0.74, 1],
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      className="absolute top-0 left-0 pointer-events-none drop-shadow-md"
    >
      <div className="relative">
        {/* PERCHED STATE: Front-Facing Bird looking directly at Viewers */}
        {!isFlapping ? (
          <div className="relative flex flex-col items-center">
            {/* Shadow on button top */}
            <div className="w-6 h-1.5 bg-black/30 rounded-full blur-[1px] absolute -bottom-1" />

            {/* Front-Facing Bird Vector */}
            <svg width="36" height="32" viewBox="0 0 36 32" className="overflow-visible animate-bounce-short">
              {/* Folded Side Wings */}
              <ellipse cx="6" cy="18" rx="4" ry="9" fill="#1d4ed8" />
              <ellipse cx="30" cy="18" rx="4" ry="9" fill="#1d4ed8" />

              {/* Main Body (Emerald Green) */}
              <ellipse cx="18" cy="19" rx="10" ry="11" fill="#15803d" />

              {/* Golden Yellow Chest */}
              <ellipse cx="18" cy="21" rx="6.5" ry="7" fill="#fbbf24" />

              {/* Head facing front */}
              <circle cx="18" cy="10" r="7" fill="#166534" />

              {/* Two Cute Forward-Facing Eyes */}
              <circle cx="15" cy="9" r="1.8" fill="#ffffff" />
              <circle cx="15.3" cy="9" r="0.9" fill="#000000" />
              <circle cx="21" cy="9" r="1.8" fill="#ffffff" />
              <circle cx="20.7" cy="9" r="0.9" fill="#000000" />

              {/* Front-Pointing Golden Beak */}
              <polygon points="16,11 20,11 18,15" fill="#f59e0b" />

              {/* Tail Feathers behind */}
              <path d="M 15 28 L 18 34 L 21 28 Z" fill="#1d4ed8" />
            </svg>

            {/* 4-Second Touchdown Sparkle Indicator */}
            <span className="absolute -top-3 text-amber-400 text-xs font-bold animate-ping">
              ✨
            </span>
          </div>
        ) : (
          /* FLYING STATE: Side Profile with Active Wing Flapping */
          <svg width="40" height="32" viewBox="0 0 44 36" className="overflow-visible">
            {/* Tail Feathers */}
            <path d="M 6 22 L -4 28 L 4 25 L -2 33 L 8 24 Z" fill="#1d4ed8" />

            {/* Emerald Body */}
            <path d="M 10 18 Q 16 8 28 12 Q 36 14 40 18 Q 36 26 24 26 Q 14 26 10 18 Z" fill="#15803d" />

            {/* Golden Chest */}
            <path d="M 20 16 Q 28 15 34 20 Q 28 25 20 23 Z" fill="#fbbf24" />

            {/* Head & Beak */}
            <circle cx="34" cy="14" r="5.5" fill="#166534" />
            <polygon points="38,13 44,15 38,17" fill="#f59e0b" />
            <circle cx="36" cy="13" r="1.2" fill="#ffffff" />
            <circle cx="36.3" cy="13" r="0.6" fill="#000000" />

            {/* Wing Flapping Motion */}
            <path
              d={
                wingUp
                  ? 'M 18 14 Q 10 -8 24 2 Q 22 10 18 14 Z'
                  : 'M 18 14 Q 8 28 22 22 Q 22 16 18 14 Z'
              }
              fill="#2563eb"
              stroke="#1d4ed8"
              strokeWidth="0.8"
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
};
