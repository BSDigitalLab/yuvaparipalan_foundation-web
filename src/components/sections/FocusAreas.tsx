import React, { useState } from 'react';
import { FOCUS_AREAS } from '../../data/mockData';
import { FadeIn } from '../motion/FadeIn';
import {
  School, UserCheck, Sparkles, Award, Compass, Target, Smile, TrendingUp,
  PiggyBank, Share2, Cpu, Brain, Activity, Home, Heart, Globe, ArrowUpRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

const iconMap: Record<string, React.ReactNode> = {
  School: <School className="w-6 h-6 text-emerald-800" />,
  UserCheck: <UserCheck className="w-6 h-6 text-teal-800" />,
  Sparkle: <Sparkles className="w-6 h-6 text-amber-800" />,
  Award: <Award className="w-6 h-6 text-rose-800" />,
  Compass: <Compass className="w-6 h-6 text-blue-800" />,
  Target: <Target className="w-6 h-6 text-purple-800" />,
  Smile: <Smile className="w-6 h-6 text-emerald-800" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-amber-800" />,
  PiggyBank: <PiggyBank className="w-6 h-6 text-emerald-800" />,
  Share2: <Share2 className="w-6 h-6 text-cyan-800" />,
  Cpu: <Cpu className="w-6 h-6 text-blue-800" />,
  Brain: <Brain className="w-6 h-6 text-indigo-800" />,
  Activity: <Activity className="w-6 h-6 text-rose-800" />,
  Home: <Home className="w-6 h-6 text-teal-800" />,
  Heart: <Heart className="w-6 h-6 text-pink-800" />,
  Globe: <Globe className="w-6 h-6 text-emerald-800" />,
};

export const FocusAreas: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'skills' | 'empowerment' | 'wellness' | 'governance'>('all');

  const filteredAreas = FOCUS_AREAS.filter(
    (area) => filter === 'all' || area.category === filter
  );

  return (
    <section className="py-24 bg-white border-t border-emerald-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              16 Focus Spheres
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Comprehensive Youth & Society Empowerment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our initiatives span 16 distinct focus areas to address education, financial resilience, artificial intelligence literacy, and health.
            </p>
          </div>
        </FadeIn>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All 16 Spheres' },
            { id: 'skills', label: 'Skills & Tech' },
            { id: 'empowerment', label: 'Empowerment & Grants' },
            { id: 'wellness', label: 'Health & Wellness' },
            { id: 'governance', label: 'Leadership & Community' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 focus:outline-none',
                filter === cat.id
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 border border-slate-200'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Focus Area Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAreas.map((area, index) => (
            <FadeIn key={area.id} direction="up" delay={index * 0.04}>
              <div className="p-6 rounded-2xl bg-[#fafaf7] border border-emerald-900/10 hover:border-emerald-700/40 hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col justify-between shadow-sm hover:shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white border border-emerald-200 group-hover:bg-emerald-50 transition-colors">
                      {iconMap[area.iconName] || <Sparkles className="w-6 h-6 text-emerald-800" />}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-800 transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
