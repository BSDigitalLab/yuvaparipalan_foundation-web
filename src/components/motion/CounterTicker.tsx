import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterTickerProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const CounterTicker: React.FC<CounterTickerProps> = ({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out quad
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  const formatNumber = (num: number) => {
    if (num >= 10000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 100000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString('en-IN');
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};
