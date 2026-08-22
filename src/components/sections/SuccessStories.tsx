import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { FadeIn } from '../motion/FadeIn';
import { Quote, Award } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-emerald-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Grassroots Impact
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Lives, Real Transformations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Hear directly from scholarship recipients, Shepreneur founders, and student volunteers transformed through Yuvaparipalan.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <FadeIn key={t.id} direction="up" delay={index * 0.1}>
              <div className="p-8 rounded-3xl bg-[#fafaf7] border border-emerald-900/10 hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden shadow-sm hover:shadow-md group">
                <Quote className="w-10 h-10 text-emerald-800/10 absolute top-6 right-6" />

                <div className="space-y-4 relative z-10">
                  <span className="text-[11px] font-mono font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200 inline-block">
                    {t.program}
                  </span>

                  <p className="text-sm text-slate-700 leading-relaxed italic font-medium">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-4">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-emerald-300 shrink-0"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role} ({t.location})</p>
                    <div className="flex items-center gap-1 text-[11px] text-amber-800 font-mono font-bold mt-1">
                      <Award className="w-3 h-3 text-amber-700" />
                      <span>{t.impactAchieved}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
