import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn } from '../components/motion/FadeIn';
import {
  ShieldCheck, Heart, Sparkles, Award, Lightbulb, Users, Leaf, Globe,
  Calendar, Building2, Target, Compass, ArrowRight,
  GraduationCap, Brain, HeartHandshake, CheckCircle2
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

  const focusCategories = [
    {
      title: 'Empowerment & Scholarships',
      icon: <GraduationCap className="w-5 h-5 text-emerald-300" />,
      items: [
        'Student Empowerment',
        'Youth Empowerment',
        'Women Empowerment',
        'Scholarship Programmes',
      ],
    },
    {
      title: 'Leadership & Career Guidance',
      icon: <Compass className="w-5 h-5 text-amber-300" />,
      items: [
        'Career Guidance & Mentoring',
        'Leadership Development',
        'Personality Development',
        'Entrepreneurship Development',
      ],
    },
    {
      title: 'Digital Skills & Wellbeing',
      icon: <Brain className="w-5 h-5 text-cyan-300" />,
      items: [
        'Financial Literacy',
        'Digital Marketing & Digital Skills',
        'Artificial Intelligence (AI) Awareness',
        'Mental Health & Emotional Well-being',
      ],
    },
    {
      title: 'Healthcare & Community Impact',
      icon: <HeartHandshake className="w-5 h-5 text-rose-300" />,
      items: [
        'Preventive Healthcare',
        'Community Development',
        'Volunteerism & Social Service',
      ],
    },
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
        description="Discover the history, vision, values, focus areas, and Section 8 governance of Yuvaparipalan Foundation, evolved from Palana Trust in 2016."
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

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10 sm:space-y-12">
          
          {/* Standardized Hero Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-5xl mx-auto space-y-3.5">
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-950 tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
                Empowering India's{' '}
                <span className="relative inline-block text-[#15803d] pb-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#15803d] after:rounded-full">
                  Next Generation
                </span>
              </h1>

              <p className="text-slate-600 text-xs sm:text-sm sm:text-base leading-relaxed font-medium max-w-4xl mx-auto">
                The Yuvaparipalan Foundation is a national Section 8 not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.
              </p>
            </div>
          </FadeIn>

          {/* Historical Milestones Container with Merged Top 3 Metrics Cards */}
          <FadeIn direction="up">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-emerald-900/15 shadow-md relative overflow-hidden space-y-8">
              
              {/* 1. Main Head Content */}
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

              {/* 2. Merged 3-Column Metrics Dashboard Bar (Under Main Head Content, Above Timeline) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2 border-y border-slate-100">
                <div className="p-4 rounded-2xl bg-[#f8faf8] border border-emerald-900/10 shadow-xs flex items-center gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                    <Calendar className="w-5 h-5 text-[#15803d]" />
                  </div>
                  <div className="text-left space-y-0.5 flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Established</span>
                    <strong className="text-lg sm:text-xl font-heading font-extrabold text-slate-950 block leading-tight truncate">2026</strong>
                    <span className="text-[11px] text-slate-600 font-medium block truncate">Yuvaparipalan Foundation</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8faf8] border border-emerald-900/10 shadow-xs flex items-center gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                    <Building2 className="w-5 h-5 text-[#15803d]" />
                  </div>
                  <div className="text-left space-y-0.5 flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Legal Structure</span>
                    <strong className="text-lg sm:text-xl font-heading font-extrabold text-slate-950 block leading-tight truncate">Section 8 NGO</strong>
                    <span className="text-[11px] text-slate-600 font-medium block truncate">Companies Act, 2013</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8faf8] border border-emerald-900/10 shadow-xs flex items-center gap-3.5 group">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:scale-105 transition-transform shrink-0">
                    <Target className="w-5 h-5 text-[#15803d]" />
                  </div>
                  <div className="text-left space-y-0.5 flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wider block">Impact Goal 2035</span>
                    <strong className="text-lg sm:text-xl font-heading font-extrabold text-slate-950 block leading-tight truncate">10M Empowered</strong>
                    <span className="text-[11px] text-slate-600 font-medium block truncate">Nationwide Youth Target</span>
                  </div>
                </div>
              </div>

              {/* 3. Alternating Left & Right Vertical Milestone Timeline Staging Grid Container */}
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

          {/* Compact Our Core Values Grid (Icon on Left of Card Title, Low Profile Height) */}
          <div className="space-y-4">
            <FadeIn direction="up">
              <div className="text-left space-y-1 border-b border-emerald-900/10 pb-3">
                <span className="text-[11px] font-mono text-[#15803d] uppercase tracking-widest font-bold">
                  Ethical Anchor
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                  Our Core Values
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

          {/* Professional & Innovative "OUR FOCUS AREAS" Section */}
          <FadeIn direction="up">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#15803d] text-white shadow-xl text-left space-y-8 relative overflow-hidden">
              {/* Background Ambient Radial Glow */}
              <div 
                className="absolute top-0 right-0 w-[500px] h-[300px] pointer-events-none opacity-15"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Side-by-Side Header Row with Vertical Separator Line */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 pb-2 border-b border-emerald-700/50">
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight shrink-0">
                    OUR FOCUS AREAS
                  </h2>

                  {/* Vertical Separator Line */}
                  <div className="hidden md:block w-px h-10 bg-emerald-400/30 shrink-0" />

                  <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl">
                    15 core strategic domains driving holistic human development, skill acquisition, and social transformation across India.
                  </p>
                </div>

                {/* 4 Pillar Category Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {focusCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 space-y-3.5 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 pb-2 border-b border-white/15">
                          <div className="p-2 rounded-xl bg-emerald-950/40 border border-white/20">
                            {category.icon}
                          </div>
                          <h3 className="font-heading font-bold text-sm text-white leading-tight">
                            {category.title}
                          </h3>
                        </div>

                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-xs text-emerald-50 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-amber-300 opacity-30 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-6 border-t border-emerald-700/60 flex justify-end items-center relative z-10">
                <Link to="/volunteer">
                  <button className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 flex items-center gap-1.5">
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
