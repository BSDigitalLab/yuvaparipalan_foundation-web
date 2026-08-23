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
    { id: '01', title: 'Integrity', desc: 'We uphold transparency, ethics, accountability, and trust in everything we do.', icon: <ShieldCheck className="w-6 h-6 text-emerald-800" /> },
    { id: '02', title: 'Compassion', desc: 'We serve society with empathy, respect, and genuine care for every individual.', icon: <Heart className="w-6 h-6 text-rose-800" /> },
    { id: '03', title: 'Innovation', desc: 'We embrace new ideas, emerging technologies, and creative solutions for social transformation.', icon: <Lightbulb className="w-6 h-6 text-amber-800" /> },
    { id: '04', title: 'Inclusiveness', desc: 'We believe every individual deserves equal opportunities irrespective of background, gender, or geography.', icon: <Users className="w-6 h-6 text-blue-800" /> },
    { id: '05', title: 'Excellence', desc: 'We continuously strive for the highest standards in learning, service delivery, and impact.', icon: <Award className="w-6 h-6 text-purple-800" /> },
    { id: '06', title: 'Service', desc: 'We believe true leadership begins with selfless service to humanity.', icon: <Sparkles className="w-6 h-6 text-teal-800" /> },
    { id: '07', title: 'Sustainability', desc: 'We design initiatives that create long-term social, educational, economic, and environmental impact.', icon: <Leaf className="w-6 h-6 text-emerald-800" /> },
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
      badge: 'ORGANIZATION IDENTITY',
      title: 'Foundation Core & Scope',
      icon: <ShieldCheck className="w-5 h-5 text-[#15803d]" />,
      text: 'The Yuvaparipalan Foundation is a national not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.',
    },
    {
      stage: '02',
      badge: '2016 • FOUNDING ROOTS',
      title: 'Palana Trust Genesis',
      icon: <Compass className="w-5 h-5 text-[#15803d]" />,
      text: 'The Foundation traces its roots to the Palana Educational Charitable Trust, established in 2016 by Mr. Biju A. Sivanandan with the vision of identifying hidden talents and helping individuals discover their true potential.',
    },
    {
      stage: '03',
      badge: 'COMPANIES ACT, 2013',
      title: 'Section 8 NGO Registration',
      icon: <Building2 className="w-5 h-5 text-[#15803d]" />,
      text: 'Driven by the growing need for holistic human development, the initiative evolved into the Yuvaparipalan Foundation, a Section 8 company established under the Companies Act, 2013.',
    },
    {
      stage: '04',
      badge: 'PRESENT & VISION 2035',
      title: 'Nationwide Impact Movement',
      icon: <Globe className="w-5 h-5 text-[#15803d]" />,
      text: 'Today, the Foundation is building a nationwide movement that integrates timeless Indian values with modern science, technology, and innovation to create empowered individuals, stronger families, and a progressive nation.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Yuvaparipalan Foundation"
        description="Discover the history, vision, values, and Section 8 governance of Yuvaparipalan Foundation, evolved from Palana Trust in 2016."
      />

      <div className="pt-28 sm:pt-32 pb-20 sm:pb-24 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-20">
          
          {/* Standardized Hero Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Movement Genesis & Identity</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Empowering India's{' '}
                <span className="relative inline-block text-[#15803d] pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-[#15803d] after:rounded-full">
                  Next Generation
                </span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium pt-1 max-w-2xl mx-auto">
                The Yuvaparipalan Foundation is a national Section 8 not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.
              </p>
            </div>
          </FadeIn>

          {/* Standardized 3-Column Metrics Dashboard Bar */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Calendar className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-slate-500 font-mono font-semibold uppercase block">Established</span>
                  <strong className="text-2xl font-heading font-extrabold text-slate-950 block">2016</strong>
                  <span className="text-[11px] text-slate-500 font-medium block">Palana Trust Genesis</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Building2 className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-slate-500 font-mono font-semibold uppercase block">Legal Structure</span>
                  <strong className="text-2xl font-heading font-extrabold text-slate-950 block">Section 8 NGO</strong>
                  <span className="text-[11px] text-slate-500 font-medium block">Companies Act, 2013</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                  <Target className="w-6 h-6 text-[#15803d]" />
                </div>
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-slate-500 font-mono font-semibold uppercase block">Impact Goal 2035</span>
                  <strong className="text-2xl font-heading font-extrabold text-slate-950 block">10M Empowered</strong>
                  <span className="text-[11px] text-slate-500 font-medium block">Nationwide Youth Target</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Vertical Milestone Staging Visualizer Section */}
          <FadeIn direction="up">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Section Header */}
                <div className="lg:col-span-4 text-left space-y-4 lg:sticky lg:top-28">
                  <span className="text-xs font-mono font-bold text-[#15803d] uppercase tracking-widest bg-emerald-100 px-3 py-0.5 rounded-full border border-emerald-300">
                    Historical Milestones
                  </span>
                  
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Historical Milestone Staging
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    Chronological progression from founding trust roots to a nationwide Section 8 NGO movement.
                  </p>

                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-left space-y-2">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                      <Shield className="w-4 h-4 text-[#15803d]" />
                      <span>Registered Section 8 Governance</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                      Operating state chapters, scholarship drives, AI masterclasses, and certified volunteer networks under strict Section 8 transparency standards.
                    </p>
                  </div>
                </div>

                {/* Right Column: Vertical Milestone Staging Line */}
                <div className="lg:col-span-8 relative space-y-6 text-left pl-6 sm:pl-10">
                  {/* Vertical Connector Line */}
                  <div className="absolute top-3 bottom-3 left-3 sm:left-5 w-0.5 bg-gradient-to-b from-[#15803d] via-emerald-400 to-emerald-200" />

                  {historicalMilestones.map((milestone) => (
                    <div key={milestone.stage} className="relative group">
                      {/* Glowing Node Marker */}
                      <div className="absolute -left-6 sm:-left-10 top-5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-2 border-[#15803d] text-[#15803d] font-mono text-[10px] sm:text-xs font-bold flex items-center justify-center shadow-sm group-hover:bg-[#15803d] group-hover:text-white transition-colors z-10">
                        {milestone.stage}
                      </div>

                      {/* Milestone Card */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-[#f8faf8] border border-emerald-900/10 hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-2.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#15803d] text-white font-mono text-[11px] font-bold tracking-wider">
                            {milestone.badge}
                          </span>
                          <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                            {milestone.icon}
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-950">
                          {milestone.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {milestone.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </FadeIn>

          {/* Standardized 7 Core Values Grid */}
          <div className="space-y-6">
            <FadeIn direction="up">
              <div className="text-left space-y-1.5 border-b border-emerald-900/10 pb-4">
                <span className="text-xs font-mono text-[#15803d] uppercase tracking-widest font-bold">
                  Ethical Anchor
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Our 7 Core Values
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium">The guiding principles underpinning all Yuvaparipalan missions and governance.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {coreValues.map((value) => (
                <FadeIn key={value.title} direction="up">
                  <div className="group p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-600/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full text-left relative overflow-hidden">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-100 transition-colors">
                          {value.icon}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#15803d] bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                          {value.id}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-base text-slate-950 group-hover:text-emerald-900 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                          {value.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-100">
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 transition-all duration-300 rounded-full" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Standardized UN SDG Alignment Banner */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#15803d] text-white shadow-xl text-left space-y-8 relative overflow-hidden">
              <div className="max-w-4xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-100 border border-emerald-600 text-xs font-mono font-bold uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-emerald-200" />
                  <span>Global & National Alignment</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Aligned with United Nations SDGs & India's National Vision
                </h2>

                <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed font-medium max-w-3xl">
                  Our initiatives directly advance Sustainable Development Goals in Quality Education (SDG 4), Gender Equality (SDG 5), Decent Work & Economic Growth (SDG 8), Innovation & Infrastructure (SDG 9), and Reduced Inequalities (SDG 10).
                </p>

                {/* SDG Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                  {sdgBadges.map((sdg, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-1 hover:bg-white/20 transition-colors">
                      <span className="text-[10px] font-mono font-bold text-amber-300 block">{sdg.code}</span>
                      <span className="text-xs font-bold text-white block truncate">{sdg.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-6 border-t border-emerald-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-emerald-100 font-mono font-semibold">
                  Section 8 NGO • Kannur & Coimbatore Headquarters • Helpline: +91 95628 58868
                </span>
                <Link to="/volunteer">
                  <button className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 flex items-center gap-2">
                    <span>Join as Volunteer</span>
                    <ArrowRight className="w-4 h-4 text-emerald-900" />
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
