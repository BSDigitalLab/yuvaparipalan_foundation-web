import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn } from '../components/motion/FadeIn';
import {
  ShieldCheck, Heart, Sparkles, Award, Lightbulb, Users, Leaf, Globe,
  Calendar, Building2, Target, Compass, ArrowRight, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const coreValues = [
    { id: '01', title: 'Integrity', desc: 'We uphold transparency, ethics, accountability, and trust in everything we do.', icon: <ShieldCheck className="w-4.5 h-4.5 text-emerald-800" /> },
    { id: '02', title: 'Compassion', desc: 'We serve society with empathy, respect, and genuine care for every individual.', icon: <Heart className="w-4.5 h-4.5 text-rose-800" /> },
    { id: '03', title: 'Innovation', desc: 'We embrace new ideas, emerging technologies, and creative solutions for social transformation.', icon: <Lightbulb className="w-4.5 h-4.5 text-amber-800" /> },
    { id: '04', title: 'Inclusiveness', desc: 'We believe every individual deserves equal opportunities irrespective of background, gender, or geography.', icon: <Users className="w-4.5 h-4.5 text-blue-800" /> },
    { id: '05', title: 'Excellence', desc: 'We continuously strive for the highest standards in learning, service delivery, and impact.', icon: <Award className="w-4.5 h-4.5 text-purple-800" /> },
    { id: '06', title: 'Service', desc: 'We believe true leadership begins with selfless service to humanity.', icon: <Sparkles className="w-4.5 h-4.5 text-teal-800" /> },
    { id: '07', title: 'Sustainability', desc: 'We design initiatives that create long-term social, educational, economic, and environmental impact.', icon: <Leaf className="w-4.5 h-4.5 text-emerald-800" /> },
  ];

  const sdgBadges = [
    { code: 'SDG 4', title: 'Quality Education' },
    { code: 'SDG 5', title: 'Gender Equality' },
    { code: 'SDG 8', title: 'Decent Work & Growth' },
    { code: 'SDG 9', title: 'Industry & Innovation' },
    { code: 'SDG 10', title: 'Reduced Inequalities' },
    { code: 'SDG 16', title: 'Peace & Strong Institutions' },
  ];

  const historicalMilestones = [
    {
      stage: '01',
      year: '2016',
      badge: 'ORGANIZATION IDENTITY',
      title: 'Foundation Core & Scope',
      icon: <ShieldCheck className="w-4 h-4 text-[#15803d]" />,
      text: 'The Yuvaparipalan Foundation is a national not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.',
    },
    {
      stage: '02',
      year: '2016',
      badge: 'PALANA TRUST ROOTS',
      title: 'Palana Educational Charitable Trust',
      icon: <Compass className="w-4 h-4 text-[#15803d]" />,
      text: 'The Foundation traces its roots to the Palana Educational Charitable Trust, established in 2016 by Mr. Biju A. Sivanandan with the vision of identifying hidden talents and helping individuals discover their true potential.',
    },
    {
      stage: '03',
      year: '2021',
      badge: 'COMPANIES ACT, 2013',
      title: 'Section 8 NGO Registration',
      icon: <Building2 className="w-4 h-4 text-[#15803d]" />,
      text: 'Driven by the growing need for holistic human development, the initiative evolved into the Yuvaparipalan Foundation, a Section 8 company established under the Companies Act, 2013.',
    },
    {
      stage: '04',
      year: '2025+',
      badge: 'PRESENT & VISION 2035',
      title: 'Nationwide Impact Movement',
      icon: <Globe className="w-4 h-4 text-[#15803d]" />,
      text: 'Today, the Foundation is building a nationwide movement that integrates timeless Indian values with modern science, technology, and innovation to create empowered individuals, stronger families, and a progressive nation.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Yuvaparipalan Foundation"
        description="Discover the history, vision, values, and Section 8 governance of Yuvaparipalan Foundation, evolved from Palana Trust in 2016."
      />

      <div className="pt-20 sm:pt-24 pb-14 sm:pb-16 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
          
          {/* Standardized Compact Hero Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 text-emerald-700" />
                <span>Movement Genesis & Identity</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Empowering India's{' '}
                <span className="relative inline-block text-[#15803d] pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#15803d] after:rounded-full">
                  Next Generation
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium max-w-xl mx-auto">
                The Yuvaparipalan Foundation is a national Section 8 not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.
              </p>
            </div>
          </FadeIn>

          {/* Expanded 3-Column Metrics Dashboard Bar with Vertical Icon Alignment & 3 Text Lines */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Calendar className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5 flex-1 min-w-0">
                  <span className="text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Established</span>
                  <strong className="text-xl sm:text-2xl font-heading font-extrabold text-slate-950 block leading-tight truncate">2016</strong>
                  <span className="text-xs text-slate-600 font-medium block truncate">Palana Trust Genesis</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Building2 className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5 flex-1 min-w-0">
                  <span className="text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Legal Structure</span>
                  <strong className="text-xl sm:text-2xl font-heading font-extrabold text-slate-950 block leading-tight truncate">Section 8 NGO</strong>
                  <span className="text-xs text-slate-600 font-medium block truncate">Companies Act, 2013</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Target className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5 flex-1 min-w-0">
                  <span className="text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Impact Goal 2035</span>
                  <strong className="text-xl sm:text-2xl font-heading font-extrabold text-slate-950 block leading-tight truncate">10M Empowered</strong>
                  <span className="text-xs text-slate-600 font-medium block truncate">Nationwide Youth Target</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Alternating Left and Right Vertical Milestone Line Timeline Section */}
          <FadeIn direction="up">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-md relative overflow-hidden space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-mono font-bold text-[#15803d] uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Historical Milestones
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Our Evolution & Milestone Staging
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">
                  Chronological progression from founding trust roots to a nationwide Section 8 movement.
                </p>
              </div>

              {/* Timeline Staging Grid Container */}
              <div className="relative py-4">
                {/* Central Vertical Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#15803d] via-emerald-400 to-emerald-200 rounded-full" />
                
                {/* Left Vertical Connector Line (Mobile) */}
                <div className="lg:hidden absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-[#15803d] via-emerald-400 to-emerald-200 rounded-full" />

                <div className="space-y-8 sm:space-y-12">
                  {historicalMilestones.map((milestone, index) => {
                    const isEven = index % 2 === 1; // 0 & 2 on left, 1 & 3 on right

                    return (
                      <div key={milestone.stage} className="relative flex flex-col lg:flex-row items-center">
                        
                        {/* Central Year Node Marker (Desktop) */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-4 flex-col items-center justify-center z-20">
                          <div className="px-3.5 py-1 rounded-full bg-[#15803d] text-white font-mono text-xs font-black shadow-md border-2 border-white ring-4 ring-emerald-100">
                            {milestone.year}
                          </div>
                        </div>

                        {/* Mobile Left Node */}
                        <div className="lg:hidden absolute left-4 -translate-x-1/2 top-4 z-20">
                          <div className="px-2.5 py-0.5 rounded-full bg-[#15803d] text-white font-mono text-[10px] font-bold shadow-md border-2 border-white">
                            {milestone.year}
                          </div>
                        </div>

                        {/* Alternating Card Placement */}
                        <div className={`w-full lg:w-1/2 ${isEven ? 'lg:ml-auto lg:pl-12 pl-10' : 'lg:mr-auto lg:pr-12 pl-10 lg:pl-0 lg:text-right'}`}>
                          <div className="p-4 sm:p-5 rounded-2xl bg-[#f8faf8] border border-emerald-900/10 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md space-y-2.5">
                            <div className={`flex flex-wrap items-center gap-2 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#15803d] border border-emerald-300 font-mono text-[10px] font-bold tracking-wider">
                                {milestone.badge}
                              </span>
                              <div className="p-1 rounded-md bg-white border border-emerald-200 shadow-xs">
                                {milestone.icon}
                              </div>
                            </div>

                            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950">
                              {milestone.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                              {milestone.text}
                            </p>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Compact 7 Core Values Grid (Icon on Left of Card Title, Low Profile Height) */}
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="text-left space-y-1 border-b border-emerald-900/10 pb-3">
                <span className="text-[11px] font-mono text-[#15803d] uppercase tracking-widest font-bold">
                  Ethical Anchor
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Our 7 Core Values
                </h2>
                <p className="text-slate-600 text-xs font-medium">The guiding principles underpinning all Yuvaparipalan missions and governance.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {coreValues.map((value) => (
                <FadeIn key={value.title} direction="up">
                  <div className="group p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full text-left relative overflow-hidden">
                    <div className="space-y-2">
                      {/* Header Row: Icon + Title on Left, Number Tag on Right */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-100 transition-colors shrink-0">
                            {value.icon}
                          </div>
                          <h3 className="font-heading font-bold text-sm text-slate-950 group-hover:text-emerald-900 transition-colors truncate">
                            {value.title}
                          </h3>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#15803d] bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300 shrink-0">
                          {value.id}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-slate-600 leading-relaxed font-medium pt-0.5">
                        {value.desc}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-1 border-t border-slate-100">
                      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 transition-all duration-300 rounded-full" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Compact UN SDG Alignment Banner */}
          <FadeIn direction="up">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#15803d] text-white shadow-xl text-left space-y-6 relative overflow-hidden">
              <div className="max-w-4xl space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-800 text-emerald-100 border border-emerald-600 text-[10px] font-mono font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Global & National Alignment</span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Aligned with United Nations SDGs & India's National Vision
                </h2>

                <p className="text-emerald-100 text-xs leading-relaxed font-medium max-w-3xl">
                  Our initiatives directly advance Sustainable Development Goals in Quality Education (SDG 4), Gender Equality (SDG 5), Decent Work & Economic Growth (SDG 8), Innovation & Infrastructure (SDG 9), and Reduced Inequalities (SDG 10).
                </p>

                {/* SDG Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1">
                  {sdgBadges.map((sdg, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-0.5 hover:bg-white/20 transition-colors">
                      <span className="text-[9px] font-mono font-bold text-amber-300 block">{sdg.code}</span>
                      <span className="text-[11px] font-bold text-white block truncate">{sdg.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-4 border-t border-emerald-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-emerald-100 font-mono font-semibold">
                  Section 8 NGO • Kannur & Coimbatore Headquarters • Helpline: +91 95628 58868
                </span>
                <Link to="/volunteer">
                  <button className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs px-4 py-2 rounded-lg shadow-md transition-all hover:scale-105 flex items-center gap-1.5">
                    <span>Join as Volunteer</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-900" />
                  </button>
                </Link>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </>
  );
};
