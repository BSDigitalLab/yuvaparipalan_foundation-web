import React from 'react';
import { TEAM_MEMBERS, FOUNDER_PATRONS } from '../../data/mockData';
import { FadeIn } from '../motion/FadeIn';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, MapPin, Sparkles } from 'lucide-react';

export const LeadershipHighlight: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#f6f8f6] border-t border-emerald-900/10 relative overflow-hidden">
      {/* Background Decorative Ambient Radial Lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.1) 50%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-16">
        
        {/* Section Main Header: "OUR LEADERSHIP" */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-emerald-900/10">
            <div className="space-y-2 text-left">
              {/* Floating Innovation Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Leadership & Governance</span>
              </div>

              {/* "OUR LEADERSHIP" Headline */}
              <h2 className="font-heading text-4xl sm:text-6xl font-black text-slate-950 tracking-tight flex items-center gap-3 pt-1">
                <span className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-[#15803d]">
                  OUR
                </span>
                <span className="text-[#15803d]">LEADERSHIP</span>
              </h2>
              <p className="text-slate-700 font-semibold text-base sm:text-xl tracking-wide">
                Our Team, Patrons & Advisory Council
              </p>
            </div>

            <Link to="/leadership">
              <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Full Leadership Roster
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* SECTION 1: OUR TEAM */}
        <div className="space-y-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                <Users className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-950 tracking-tight">
                  OUR TEAM
                </h3>
                <p className="text-xs text-slate-600 font-medium">Founding visionaries, executive directors & departmental chiefs leading execution</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {TEAM_MEMBERS.map((leader, index) => (
              <FadeIn key={leader.id} direction="up" delay={index * 0.03}>
                {/* Botanical Hex-Leaf Shield Card */}
                <div className="group relative p-4 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-emerald-50/50 border border-slate-200/80 hover:border-emerald-600/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                  
                  {/* Top Ambient Glow Accent */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/25 transition-all" />

                  <div className="space-y-3 relative z-10">
                    {/* Organic Squircle Avatar Ring */}
                    <div className="relative aspect-square w-full rounded-[1.8rem_0.6rem_1.8rem_0.6rem] overflow-hidden bg-slate-100 ring-2 ring-emerald-900/10 group-hover:ring-emerald-600/60 transition-all duration-300 shadow-sm">
                      <img
                        src={leader.avatarUrl}
                        alt={leader.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-white backdrop-blur-md text-[9px] font-mono font-semibold flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-emerald-400" />
                        <span>{leader.location}</span>
                      </div>
                    </div>

                    {/* Subtext Details */}
                    <div className="text-left space-y-1">
                      <h4 className="font-heading font-extrabold text-sm text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug tracking-tight truncate">
                        {leader.name}
                      </h4>
                      <p className="text-[11px] text-emerald-800 font-bold leading-tight line-clamp-2">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Bottom Progress Bar */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* SECTION 2: PATRONS & MENTORS */}
        <div className="space-y-6 pt-6 border-t border-emerald-900/10">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
                <Award className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-slate-950 tracking-tight">
                  PATRONS & MENTORS
                </h3>
                <p className="text-xs text-slate-600 font-medium">Distinguished national mentors, doctors, senior psychologists & institutional patrons offering advisory guidance</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {FOUNDER_PATRONS.map((leader, index) => (
              <FadeIn key={leader.id} direction="up" delay={index * 0.03}>
                {/* Gold-Emerald Ambient Shield Card */}
                <div className="group relative p-4 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-amber-50/40 border border-amber-500/30 hover:border-emerald-600/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                  
                  {/* Top Ambient Glow Accent */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-amber-500/10 blur-xl group-hover:bg-emerald-500/25 transition-all" />

                  <div className="space-y-3 relative z-10">
                    {/* Organic Squircle Avatar Ring */}
                    <div className="relative aspect-square w-full rounded-[1.8rem_0.6rem_1.8rem_0.6rem] overflow-hidden bg-slate-100 ring-2 ring-amber-500/30 group-hover:ring-emerald-600/60 transition-all duration-300 shadow-sm">
                      <img
                        src={leader.avatarUrl}
                        alt={leader.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 text-white backdrop-blur-md text-[9px] font-mono font-semibold flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-amber-400" />
                        <span>{leader.location}</span>
                      </div>
                    </div>

                    {/* Subtext Details */}
                    <div className="text-left space-y-1">
                      <h4 className="font-heading font-extrabold text-sm text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug tracking-tight truncate">
                        {leader.name}
                      </h4>
                      <p className="text-[11px] text-emerald-800 font-bold leading-tight line-clamp-2">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Bottom Progress Bar */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-emerald-600 transition-all duration-300 rounded-full" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
