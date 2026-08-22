import React from 'react';
import { IMPACT_METRICS } from '../../data/mockData';
import { CounterTicker } from '../motion/CounterTicker';
import { FadeIn } from '../motion/FadeIn';
import { Users, GraduationCap, Cpu, Briefcase, HeartHandshake, Activity } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-7 h-7 text-emerald-800" />,
  GraduationCap: <GraduationCap className="w-7 h-7 text-teal-800" />,
  Cpu: <Cpu className="w-7 h-7 text-blue-800" />,
  Briefcase: <Briefcase className="w-7 h-7 text-amber-800" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-rose-800" />,
  Activity: <Activity className="w-7 h-7 text-purple-800" />,
};

export const ImpactCounter: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-emerald-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Impact Goals 2035
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bold, Measurable & Transformative Goals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Our 10-year vision is designed with clear metrics to transform India's youth demographic into a global model of inclusive progress.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMPACT_METRICS.map((metric, index) => (
            <FadeIn key={metric.id} direction="up" delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-[#fafaf7] border border-emerald-900/10 hover:border-emerald-700/40 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-100 transition-colors">
                    {iconMap[metric.iconName] || <Users className="w-7 h-7 text-emerald-800" />}
                  </div>
                  <span className="text-xs font-mono text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                    {metric.unit}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-heading font-extrabold text-4xl text-slate-900 tracking-tight group-hover:text-emerald-800 transition-colors">
                    <CounterTicker end={metric.numberValue} suffix="+" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-800">
                    {metric.label}
                  </h3>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                  {metric.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
