import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { TEAM_MEMBERS, FOUNDER_PATRONS } from '../data/mockData';
import { Leader } from '../types';
import { FadeIn } from '../components/motion/FadeIn';
import { ShieldCheck, MapPin, Building2, UserCheck, HeartHandshake } from 'lucide-react';
import { cn } from '../utils/cn';

export const LeadershipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'executive' | 'mentor' | 'patron'>('all');
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const allLeaders = [...TEAM_MEMBERS, ...FOUNDER_PATRONS];
  const filteredLeaders = allLeaders.filter(
    (l) => activeTab === 'all' || l.category === activeTab
  );

  return (
    <>
      <SEOHead
        title="Leadership & Patrons - Yuvaparipalan Foundation"
        description="Meet the visionaries, directors, senior neurosurgeons, former BSF ADG, and patrons guiding Yuvaparipalan Foundation."
      />

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Governance & Mentorship
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Leadership, Mentors & Patrons
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
                Guided by senior administrators, medical neurosurgeons, corporate visionaries, and social leaders across Kerala, Tamil Nadu, and New Delhi.
              </p>
            </div>
          </FadeIn>

          {/* Roster Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-xl">
              {[
                { id: 'all', label: 'Complete Roster' },
                { id: 'executive', label: 'Executive Team' },
                { id: 'mentor', label: 'Chief Mentors' },
                { id: 'patron', label: 'Founders & Patrons' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all focus:outline-none',
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLeaders.map((leader, idx) => (
              <FadeIn key={leader.id} direction="up" delay={idx * 0.04}>
                <div
                  onClick={() => setSelectedLeader(leader)}
                  className="group cursor-pointer p-5 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between h-full shadow-xl overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950">
                      <img
                        src={leader.avatarUrl}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                        {leader.category.toUpperCase()}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-emerald-400 transition-colors">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium">{leader.role}</p>
                      {leader.organization && (
                        <p className="text-[11px] text-slate-400 font-mono">{leader.organization}</p>
                      )}
                    </div>

                    {leader.bio && (
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {leader.bio}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {leader.location}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-500/50" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Leader Bio Drawer Popup */}
          {selectedLeader && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
              <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl relative">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedLeader.avatarUrl}
                    alt={selectedLeader.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-emerald-500/30"
                  />
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {selectedLeader.category}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white mt-1">
                      {selectedLeader.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-medium">{selectedLeader.role}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedLeader.bio || 'Dedicated to shaping Yuvaparipalan Foundation’s youth empowerment initiatives.'}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {selectedLeader.location}
                  </span>
                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="px-4 py-2 rounded-xl text-xs bg-slate-800 text-slate-200 hover:text-white"
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
