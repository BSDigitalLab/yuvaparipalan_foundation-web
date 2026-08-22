import { useEffect, useState } from 'react';
import { useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const useParallax = () => {
  const { scrollY } = useScroll();

  // Functional scroll transforms (100% robust across all Framer Motion versions)
  const skyY = useTransform(scrollY, (v) => v * 0.05);
  const mountainY = useTransform(scrollY, (v) => v * 0.1);
  const villageY = useTransform(scrollY, (v) => v * 0.18);
  const coconutTreeY = useTransform(scrollY, (v) => v * 0.25);

  const [isDesktop, setIsDesktop] = useState(false);

  // Motion values for smooth mouse physics without state re-renders
  const rawSkyMouseX = useMotionValue(0);
  const rawSkyMouseY = useMotionValue(0);
  const rawMountainMouseX = useMotionValue(0);
  const rawMountainMouseY = useMotionValue(0);
  const rawVillageMouseX = useMotionValue(0);
  const rawVillageMouseY = useMotionValue(0);
  const rawCoconutTreeMouseX = useMotionValue(0);
  const rawCoconutTreeMouseY = useMotionValue(0);

  // Spring physics for smooth jitter-free mouse depth (stiffness 40, damping 20)
  const springConfig = { stiffness: 40, damping: 20 };
  const skyMouseX = useSpring(rawSkyMouseX, springConfig);
  const skyMouseY = useSpring(rawSkyMouseY, springConfig);
  const mountainMouseX = useSpring(rawMountainMouseX, springConfig);
  const mountainMouseY = useSpring(rawMountainMouseY, springConfig);
  const villageMouseX = useSpring(rawVillageMouseX, springConfig);
  const villageMouseY = useSpring(rawVillageMouseY, springConfig);
  const coconutTreeMouseX = useSpring(rawCoconutTreeMouseX, springConfig);
  const coconutTreeMouseY = useSpring(rawCoconutTreeMouseY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const normX = e.clientX / innerWidth - 0.5;
      const normY = e.clientY / innerHeight - 0.5;

      rawSkyMouseX.set(normX * 2);
      rawSkyMouseY.set(normY * 2);
      rawMountainMouseX.set(normX * 5);
      rawMountainMouseY.set(normY * 5);
      rawVillageMouseX.set(normX * 10);
      rawVillageMouseY.set(normY * 10);
      rawCoconutTreeMouseX.set(normX * 15);
      rawCoconutTreeMouseY.set(normY * 15);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [
    rawSkyMouseX,
    rawSkyMouseY,
    rawMountainMouseX,
    rawMountainMouseY,
    rawVillageMouseX,
    rawVillageMouseY,
    rawCoconutTreeMouseX,
    rawCoconutTreeMouseY,
  ]);

  return {
    skyY,
    mountainY,
    villageY,
    coconutTreeY,
    skyMouseX,
    skyMouseY,
    mountainMouseX,
    mountainMouseY,
    villageMouseX,
    villageMouseY,
    coconutTreeMouseX,
    coconutTreeMouseY,
    isDesktop,
  };
};
