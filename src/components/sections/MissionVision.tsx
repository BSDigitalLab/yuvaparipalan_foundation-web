import React, { useState } from 'react';
import { FadeIn } from '../motion/FadeIn';
import { Target, Eye, BookOpen, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'philosophy'>('mission');

  const contentMap = {
    mission: {
      title: 'Our Mission',
      subtitle: 'To make quality education, mentoring, counselling, leadership development, financial literacy, entrepreneurship, digital education, AI awareness, preventive healthcare, and personality development accessible to every individual.',
      points: [
        'Empowering 10 Million (1 Crore) People by 2035',
        'Creating opportunities for lifelong learning & economic independence',
        'Fostering emotional well-being and responsible citizenship',
        'Bridging the urban-rural opportunity gap across India'
      ],
      icon: <Target className="w-8 h-8 text-emerald-800" />
    },
    vision: {
      title: 'Our Vision',
      subtitle: 'To nurture a generation of confident, compassionate, technologically empowered, emotionally resilient, and socially responsible leaders who will contribute towards making India a global model of inclusive and sustainable development.',
      points: [
        'Global leadership rooted in timeless Indian ethics',
        'Technologically empowered & AI-ready youth workforce',
        'Emotionally resilient and compassionate communities',
        'Sustainable development through social innovation'
      ],
      icon: <Eye className="w-8 h-8 text-teal-800" />
    },
    philosophy: {
      title: 'Our Philosophy',
      subtitle: 'We believe that every individual possesses extraordinary abilities waiting to be discovered. Education alone is not enough. True success is achieved when knowledge is combined with character, emotional intelligence, leadership, values, health, and social responsibility.',
      points: [
        'Character-first educational approach',
        'Emotional intelligence alongside technical aptitude',
        'Unlocking hidden human potential in every youth',
        'Service to humanity as the ultimate measure of success'
      ],
      icon: <BookOpen className="w-8 h-8 text-amber-800" />
    }
  };

  const activeContent = contentMap[activeTab];

  return (
    <section className="py-24 bg-[#fafaf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Every Great Transformation Begins with a Great Dream
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Evolved from Palana Educational Charitable Trust (Est. 2016 by Mr. Biju A. Sivanandan), Yuvaparipalan Foundation is now a Section 8 movement for holistic human empowerment.
            </p>
          </div>
        </FadeIn>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm max-w-md w-full">
            {(['mission', 'vision', 'philosophy'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  'flex-1 py-3 px-4 rounded-xl text-sm font-heading font-bold capitalize transition-all duration-200 focus:outline-none',
                  activeTab === tab
                    ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                    : 'text-slate-600 hover:text-emerald-900 hover:bg-emerald-50'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display */}
        <FadeIn key={activeTab} direction="none" duration={0.3}>
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border border-emerald-900/15 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-200">
                {activeContent.icon}
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {activeContent.title}
                </h3>
                <span className="text-xs font-mono text-emerald-800 font-semibold">Yuvaparipalan Core Standard</span>
              </div>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              {activeContent.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              {activeContent.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 font-semibold">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
