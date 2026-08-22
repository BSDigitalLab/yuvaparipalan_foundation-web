import React from 'react';
import { PARTNERS_LIST, SDG_GOALS } from '../../data/mockData';
import { FadeIn } from '../motion/FadeIn';
import { Globe, Building2, ShieldCheck, HeartPulse, GraduationCap, Sparkles, Briefcase, Cpu, Scale, Home } from 'lucide-react';

const sdgIconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Scale: <Scale className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

export const PartnerNetwork: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-emerald-900/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UN SDG Alignment Grid */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
              Global Alignment
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              United Nations Sustainable Development Goals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              All Yuvaparipalan Foundation missions contribute directly towards India's National Vision and global UN SDG commitments.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
          {SDG_GOALS.map((sdg, index) => (
            <FadeIn key={sdg.id} direction="up" delay={index * 0.04}>
              <div className="p-4 rounded-2xl bg-[#fafaf7] border border-emerald-900/10 text-center hover:border-emerald-700/40 transition-all duration-300 group flex flex-col items-center justify-center space-y-2 h-full shadow-sm">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 group-hover:scale-110 transition-transform">
                  {sdgIconMap[sdg.iconName] || <Globe className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-900">{sdg.code}</span>
                <h4 className="font-heading font-bold text-xs text-slate-800 line-clamp-2 leading-tight">
                  {sdg.title}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Associated Partners Banner */}
        <FadeIn direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#fafaf7] border border-emerald-900/15 shadow-md space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-800">Institutional Alliances</span>
                <h3 className="font-heading font-bold text-2xl text-slate-900">Associated Partners & Ecosystem</h3>
              </div>
              <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-800" /> Collaborative Transformation
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {PARTNERS_LIST.map((partner, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-emerald-900/10 hover:border-emerald-700/40 transition-all flex flex-col items-center justify-center text-center space-y-1 group shadow-sm"
                >
                  <span className="font-heading font-extrabold text-xs tracking-wider text-slate-800 group-hover:text-emerald-800 transition-colors uppercase">
                    {partner.logoText}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono line-clamp-1 font-medium">{partner.category}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
