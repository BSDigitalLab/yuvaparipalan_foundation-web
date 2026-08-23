import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake } from 'lucide-react';

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-[10] w-full h-full min-h-[850px] lg:h-screen flex flex-col justify-between items-start px-6 sm:px-12 lg:px-20 pt-28 lg:pt-36 pb-14 sm:pb-20 lg:pb-24 pointer-events-none">
      
      {/* Lower-Positioned Left-Aligned Text Block */}
      <div className="mt-auto mb-6 lg:mb-8 flex flex-col items-start text-left max-w-[650px] lg:max-w-[720px] space-y-5 pointer-events-auto">
        
        {/* Main Headline: Left-Aligned 3-Line Stack */}
        <motion.h1
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14] drop-shadow-[0_2px_4px_rgba(255,255,255,0.85)] text-left flex flex-col items-start gap-1 sm:gap-2"
        >
          <span>Empowering Minds.</span>
          <span className="bg-gradient-to-r from-emerald-900 via-teal-850 to-emerald-950 bg-clip-text text-transparent">
            Enriching Lives.
          </span>
          <span>Building The Nation.</span>
        </motion.h1>

        {/* Supporting Text: Soft Transparent Backdrop Pill (Left Slide-In) */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm sm:text-lg text-slate-950 font-semibold leading-relaxed max-w-xl text-left drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] bg-white/20 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-white/40 shadow-sm"
        >
          Creating opportunities, nurturing leadership, and empowering the next generation through education, innovation, entrepreneurship, and social impact.
        </motion.p>
      </div>

      {/* Clubbed Action Card Hub: Primary Brand Green CTA Button & Precision-Fitted Google Playstore Image */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: 'easeOut' }}
        className="w-full flex items-start justify-start pb-6 sm:pb-10 lg:pb-12 pointer-events-auto"
      >
        {/* Glassmorphic Action Card Hub */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-2 gap-3 rounded-3xl bg-white/35 backdrop-blur-md border border-white/60 shadow-lg w-full sm:w-auto">
          
          {/* Primary CTA Button: Join the Program (#15803d) */}
          <a
            href="https://www.yuvaparipalan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto h-[48px] sm:h-[50px] bg-[#15803d] hover:bg-[#166534] text-white font-bold text-base px-7 rounded-2xl shadow-md flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-700">
              <HeartHandshake className="w-5 h-5 text-emerald-100" />
              <span>Join the Program</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </a>

          <div className="hidden sm:block w-px h-8 bg-slate-400/40" />

          {/* Official Google Playstore Badge Image (playstore_google.png) - 100% Width & Height Fit to Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.yuvaparipalan.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[48px] sm:h-[50px] w-[155px] sm:w-[165px] p-0 m-0 border-0 outline-none rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-emerald-700 shrink-0"
          >
            <img
              src="/brands/playstore_google.png"
              alt="Get it on Google Play"
              className="w-full h-full object-contain sm:object-fill rounded-2xl block p-0 m-0"
            />
          </a>
        </div>
      </motion.div>

    </div>
  );
};
