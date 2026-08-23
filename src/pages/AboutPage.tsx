import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn } from '../components/motion/FadeIn';
import {
  ShieldCheck, Heart, Sparkles, Award, Lightbulb, Users, Leaf, Globe,
  Calendar, Building2, Target, CheckCircle2, Compass, ArrowRight, Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const coreValues = [
    { id: '01', title: 'Integrity', desc: 'We uphold transparency, ethics, accountability, and trust in everything we do.', icon: <ShieldCheck className="w-7 h-7 text-emerald-800" /> },
    { id: '02', title: 'Compassion', desc: 'We serve society with empathy, respect, and genuine care for every individual.', icon: <Heart className="w-7 h-7 text-rose-800" /> },
    { id: '03', title: 'Innovation', desc: 'We embrace new ideas, emerging technologies, and creative solutions for social transformation.', icon: <Lightbulb className="w-7 h-7 text-amber-800" /> },
    { id: '04', title: 'Inclusiveness', desc: 'We believe every individual deserves equal opportunities irrespective of background, gender, or geography.', icon: <Users className="w-7 h-7 text-blue-800" /> },
    { id: '05', title: 'Excellence', desc: 'We continuously strive for the highest standards in learning, service delivery, and impact.', icon: <Award className="w-7 h-7 text-purple-800" /> },
    { id: '06', title: 'Service', desc: 'We believe true leadership begins with selfless service to humanity.', icon: <Sparkles className="w-7 h-7 text-teal-800" /> },
    { id: '07', title: 'Sustainability', desc: 'We design initiatives that create long-term social, educational, economic, and environmental impact.', icon: <Leaf className="w-7 h-7 text-emerald-800" /> },
  ];

  const sdgBadges = [
    { code: 'SDG 4', title: 'Quality Education' },
    { code: 'SDG 5', title: 'Gender Equality' },
    { code: 'SDG 8', title: 'Decent Work & Growth' },
    { code: 'SDG 9', title: 'Industry & Innovation' },
    { code: 'SDG 10', title: 'Reduced Inequalities' },
    { code: 'SDG 16', title: 'Peace & Strong Institutions' },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Yuvaparipalan Foundation"
        description="Discover the history, vision, values, and Section 8 governance of Yuvaparipalan Foundation, evolved from Palana Trust in 2016."
      />

      <div className="pt-32 sm:pt-40 pb-32 bg-[#f6f8f6] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(90px)',
          }}
        />

        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-24 sm:space-y-32">
          
          {/* Spacious Hero Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-5xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 text-emerald-950 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Movement Genesis & Identity</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.1]">
                Empowering India's{' '}
                <span className="relative inline-block text-[#15803d] pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-[#15803d] after:rounded-full">
                  Next Generation
                </span>
              </h1>

              <p className="text-slate-700 text-base sm:text-2xl leading-relaxed font-medium pt-2 max-w-4xl mx-auto">
                The Yuvaparipalan Foundation is a national Section 8 not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.
              </p>
            </div>
          </FadeIn>

          {/* Expansive 3-Column Metrics Dashboard Bar */}
          <FadeIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-110 transition-transform shrink-0">
                  <Calendar className="w-8 h-8 text-[#15803d]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider block">Established</span>
                  <strong className="text-3xl sm:text-4xl font-heading font-black text-slate-950 block">2016</strong>
                  <span className="text-xs text-slate-600 font-medium block">Founded as Palana Trust</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-110 transition-transform shrink-0">
                  <Building2 className="w-8 h-8 text-[#15803d]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider block">Legal Structure</span>
                  <strong className="text-3xl sm:text-4xl font-heading font-black text-slate-950 block">Section 8</strong>
                  <span className="text-xs text-slate-600 font-medium block">Companies Act, 2013</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-[2.2rem] bg-white border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-110 transition-transform shrink-0">
                  <Target className="w-8 h-8 text-[#15803d]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="text-xs text-slate-500 font-mono font-bold uppercase tracking-wider block">Impact Goal 2035</span>
                  <strong className="text-3xl sm:text-4xl font-heading font-black text-slate-950 block">10M Empowered</strong>
                  <span className="text-xs text-slate-600 font-medium block">Nationwide Youth Target</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 2-Column Split Evolution Journey Layout */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-16 rounded-[2.5rem] bg-white border border-emerald-900/15 shadow-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Heading & Summary */}
                <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-32">
                  <span className="text-xs font-mono font-bold text-[#15803d] uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                    Historical Milestones
                  </span>
                  
                  <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                    Our Evolution: From Trust to National Movement
                  </h2>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                    From a regional initiative identifying hidden talents to a nationwide Section 8 non-profit organization driving youth empowerment across India.
                  </p>

                  <div className="p-6 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-left space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <Shield className="w-5 h-5 text-[#15803d]" />
                      <span>Registered Section 8 Governance</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Operating state chapters, scholarship drives, AI masterclasses, and certified volunteer networks under strict Section 8 transparency and governance standards.
                    </p>
                  </div>
                </div>

                {/* Right Column: 3 Evolution Cards */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  {/* Step 1 */}
                  <div className="p-8 rounded-[2rem] bg-[#f8faf8] border border-emerald-900/10 space-y-4 hover:border-emerald-500/40 transition-all shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#15803d] text-white font-mono text-xs font-extrabold tracking-wider">
                        2016 • GENESIS
                      </span>
                      <Compass className="w-6 h-6 text-[#15803d]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-950">Palana Trust Foundation</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      The Foundation traces its roots to the <strong className="text-slate-950">Palana Educational Charitable Trust</strong>, established in <strong className="text-[#15803d]">2016 by Mr. Biju A. Sivanandan</strong> with the vision of identifying hidden talents and helping individuals discover their true potential.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="p-8 rounded-[2rem] bg-[#f8faf8] border border-emerald-900/10 space-y-4 hover:border-emerald-500/40 transition-all shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#15803d] text-white font-mono text-xs font-extrabold tracking-wider">
                        SECTION 8 NGO
                      </span>
                      <Building2 className="w-6 h-6 text-[#15803d]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-950">Yuvaparipalan Foundation</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Driven by the growing need for holistic human development, the initiative evolved into the <strong className="text-slate-950">Yuvaparipalan Foundation</strong>, a registered Section 8 company established under the Companies Act, 2013 for nationwide scale.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="p-8 rounded-[2rem] bg-[#f8faf8] border border-emerald-900/10 space-y-4 hover:border-emerald-500/40 transition-all shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#15803d] text-white font-mono text-xs font-extrabold tracking-wider">
                        VISION 2035
                      </span>
                      <Globe className="w-6 h-6 text-[#15803d]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-slate-950">Nationwide Impact Movement</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      Today, the Foundation is building a nationwide movement that integrates timeless Indian values with modern science, technology, and innovation to create empowered individuals, stronger families, and a progressive nation.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* Spacious 7 Core Values Grid */}
          <div className="space-y-10">
            <FadeIn direction="up">
              <div className="text-left space-y-2 border-b border-emerald-900/10 pb-6">
                <span className="text-xs font-mono text-[#15803d] uppercase tracking-widest font-bold">
                  Ethical Anchor
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
                  Our 7 Core Values
                </h2>
                <p className="text-slate-600 text-sm sm:text-base font-medium">The guiding principles underpinning all Yuvaparipalan missions and governance.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <FadeIn key={value.title} direction="up">
                  <div className="group p-7 rounded-[2rem] bg-white border border-slate-200/90 hover:border-emerald-600/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full text-left relative overflow-hidden">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-100 transition-colors">
                          {value.icon}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#15803d] bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
                          {value.id}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-heading font-black text-xl text-slate-950 group-hover:text-emerald-900 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {value.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-2 border-t border-slate-100">
                      <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 transition-all duration-300 rounded-full" />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Expansive UN SDG Alignment Banner */}
          <FadeIn direction="up">
            <div className="p-10 sm:p-16 rounded-[2.5rem] bg-[#15803d] text-white shadow-2xl text-left space-y-10 relative overflow-hidden">
              <div className="max-w-5xl space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800 text-emerald-100 border border-emerald-600 text-xs font-mono font-bold uppercase tracking-wider">
                  <Globe className="w-4 h-4 text-emerald-200" />
                  <span>Global & National Alignment</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  Aligned with United Nations SDGs & India's National Vision
                </h2>

                <p className="text-emerald-100 text-base sm:text-xl leading-relaxed font-medium max-w-4xl">
                  Our initiatives directly advance Sustainable Development Goals in Quality Education (SDG 4), Gender Equality (SDG 5), Decent Work & Economic Growth (SDG 8), Innovation & Infrastructure (SDG 9), and Reduced Inequalities (SDG 10).
                </p>

                {/* SDG Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
                  {sdgBadges.map((sdg, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-1.5 hover:bg-white/20 transition-colors">
                      <span className="text-xs font-mono font-bold text-amber-300 block">{sdg.code}</span>
                      <span className="text-xs font-extrabold text-white block truncate">{sdg.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-8 border-t border-emerald-700/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                <span className="text-xs sm:text-sm text-emerald-100 font-mono font-semibold">
                  Section 8 NGO • Kannur & Coimbatore Headquarters • Helpline: +91 95628 58868
                </span>
                <Link to="/volunteer">
                  <button className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 flex items-center gap-2">
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
