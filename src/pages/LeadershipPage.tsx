import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { TEAM_MEMBERS, FOUNDER_PATRONS } from '../data/mockData';
import { Leader } from '../types';
import { FadeIn } from '../components/motion/FadeIn';
import { Award, Users, MapPin, Sparkles } from 'lucide-react';

export const LeadershipPage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <>
      <SEOHead
        title="Leadership & Patrons - Yuvaparipalan Foundation"
        description="Meet Our Team and Patrons & Advisory Council guiding Yuvaparipalan Foundation across Kerala, Tamil Nadu, New Delhi, and UAE."
      />

      <div className="pt-20 sm:pt-24 pb-14 sm:pb-16 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.1) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-12">
          
          {/* Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 text-emerald-700" />
                <span>Leadership & Governance</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-950 tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                Our Team, Patrons &{' '}
                <span className="relative inline-block text-[#15803d] pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#15803d] after:rounded-full">
                  Advisory Council
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-xl mx-auto">
                Guided by senior administrators, medical neurosurgeons, corporate visionaries, and social leaders across Kerala, Tamil Nadu, New Delhi, and UAE.
              </p>
            </div>
          </FadeIn>

          {/* SECTION 1: OUR TEAM (Founder Profile Card Style) */}
          <div className="space-y-6">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 text-left border-b border-emerald-900/10 pb-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                  <Users className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight">
                    OUR TEAM
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">Founding visionaries, executive directors & departmental chiefs leading execution</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {TEAM_MEMBERS.map((leader, index) => (
                <FadeIn key={leader.id} direction="up" delay={index * 0.04}>
                  {/* Founder's Gold-Emerald Ambient Glow Shield Card Style */}
                  <div 
                    onClick={() => setSelectedLeader(leader)}
                    className="group cursor-pointer relative p-5 rounded-[2.2rem] bg-gradient-to-br from-white via-amber-50/30 to-emerald-50/50 border border-amber-500/40 hover:border-emerald-600/60 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col sm:flex-row items-center gap-5 overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl group-hover:bg-emerald-500/30 transition-all duration-500" />
                    
                    {/* Photo Frame: Botanical Leaf Ring */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem_0.8rem_2rem_0.8rem] overflow-hidden bg-slate-100 ring-4 ring-amber-500/40 group-hover:ring-emerald-600/60 transition-all duration-300 shrink-0 shadow-md">
                      <img
                        src={leader.avatarUrl}
                        alt={leader.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Leader Details */}
                    <div className="text-left space-y-1.5 flex-1 min-w-0">
                      <div>
                        <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                          {leader.id === 'biju-sivanandan' 
                            ? 'FOUNDER' 
                            : leader.id === 'manoj-rohini' || leader.id === 'manikandan-p'
                            ? 'DIRECTOR & CO-FOUNDER' 
                            : leader.id === 'pk-mishra'
                            ? 'CHIEF MENTOR'
                            : leader.id === 'abdul-rahman-haji'
                            ? 'CHIEF PATRON'
                            : 'OUR TEAM'}
                        </span>
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug mt-1">
                          {leader.name}
                        </h3>
                        <p className="text-xs font-extrabold text-emerald-800 leading-relaxed mt-0.5">
                          {leader.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-slate-600 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{leader.location}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* SECTION 2: PATRONS & MENTORS (Kept Current Grid Styling) */}
          <div className="space-y-6 pt-4">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 text-left border-b border-emerald-900/10 pb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
                  <Award className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight">
                    PATRONS & MENTORS
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">Distinguished national mentors, senior psychologists, doctors & institutional patrons offering advisory guidance</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {FOUNDER_PATRONS.map((leader, index) => (
                <FadeIn key={leader.id} direction="up" delay={index * 0.03}>
                  {/* Gold-Emerald Ambient Shield Card */}
                  <div 
                    onClick={() => setSelectedLeader(leader)}
                    className="group cursor-pointer relative p-4 rounded-3xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-amber-50/40 border border-amber-500/30 hover:border-emerald-600/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
                  >
                    
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
                        <h3 className="font-heading font-extrabold text-sm text-slate-950 group-hover:text-emerald-900 transition-colors leading-snug tracking-tight truncate">
                          {leader.name}
                        </h3>
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

          {/* Leader Bio Drawer Popup */}
          {selectedLeader && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
              <div className="max-w-lg w-full bg-white border border-emerald-900/20 rounded-3xl p-6 space-y-6 shadow-2xl relative text-left">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedLeader.avatarUrl}
                    alt={selectedLeader.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-600 shadow-md"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-emerald-900 font-bold uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                      {selectedLeader.category.toUpperCase()}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-slate-950 mt-1">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs text-emerald-800 font-extrabold">{selectedLeader.role}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedLeader.bio || 'Dedicated to shaping Yuvaparipalan Foundation’s youth empowerment initiatives.'}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-600 flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" /> {selectedLeader.location}
                  </span>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-900 transition-colors shadow-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
