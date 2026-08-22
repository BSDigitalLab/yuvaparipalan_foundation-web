import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { FadeIn } from '../components/motion/FadeIn';
import { ShieldCheck, Heart, Sparkles, Award, Lightbulb, Users, Leaf, Globe } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const coreValues = [
    { title: 'Integrity', desc: 'We uphold transparency, ethics, accountability, and trust in everything we do.', icon: <ShieldCheck className="w-6 h-6 text-emerald-800" /> },
    { title: 'Compassion', desc: 'We serve society with empathy, respect, and genuine care for every individual.', icon: <Heart className="w-6 h-6 text-rose-800" /> },
    { title: 'Innovation', desc: 'We embrace new ideas, emerging technologies, and creative solutions for social transformation.', icon: <Lightbulb className="w-6 h-6 text-amber-800" /> },
    { title: 'Inclusiveness', desc: 'We believe every individual deserves equal opportunities irrespective of background, gender, or geography.', icon: <Users className="w-6 h-6 text-blue-800" /> },
    { title: 'Excellence', desc: 'We continuously strive for the highest standards in learning, service delivery, and impact.', icon: <Award className="w-6 h-6 text-purple-800" /> },
    { title: 'Service', desc: 'We believe true leadership begins with selfless service to humanity.', icon: <Sparkles className="w-6 h-6 text-teal-800" /> },
    { title: 'Sustainability', desc: 'We design initiatives that create long-term social, educational, economic, and environmental impact.', icon: <Leaf className="w-6 h-6 text-emerald-800" /> },
  ];

  return (
    <>
      <SEOHead
        title="About Us - Yuvaparipalan Foundation"
        description="Discover the history, vision, values, and Section 8 governance of Yuvaparipalan Foundation, evolved from Palana Trust in 2016."
      />

      <div className="pt-32 pb-24 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <FadeIn direction="up">
            <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Movement Genesis & Identity
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
                Empowering India's Next Generation
              </h1>
              <p className="text-slate-700 text-base sm:text-xl leading-relaxed font-medium">
                The Yuvaparipalan Foundation is a national Section 8 not-for-profit organization dedicated to empowering individuals through education, skill development, leadership, mental well-being, entrepreneurship, and social responsibility.
              </p>
            </div>
          </FadeIn>

          {/* Organizational Evolution Timeline */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-900/15 shadow-md mb-24 relative overflow-hidden">
              <div className="max-w-3xl space-y-6">
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Our Evolution: From Trust to National Movement
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  <p>
                    The Foundation traces its roots to the <strong className="text-slate-900">Palana Educational Charitable Trust</strong>, established in <strong className="text-emerald-900">2016 by Mr. Biju A. Sivanandan</strong> with the vision of identifying hidden talents and helping individuals discover their true potential.
                  </p>
                  <p>
                    Driven by the growing need for holistic human development, the initiative evolved into the <strong className="text-slate-900">Yuvaparipalan Foundation</strong>, a registered Section 8 company established under the Companies Act, 2013.
                  </p>
                  <p>
                    Today, the Foundation is building a nationwide movement that integrates timeless Indian values with modern science, technology, and innovation to create empowered individuals, stronger families, and a progressive nation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <span className="text-slate-600 block font-semibold">Established</span>
                    <strong className="text-lg text-emerald-900">2016</strong>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <span className="text-slate-600 block font-semibold">Legal Structure</span>
                    <strong className="text-lg text-emerald-900">Section 8 Company</strong>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                    <span className="text-slate-600 block font-semibold">Impact Goal 2035</span>
                    <strong className="text-lg text-emerald-900">10 Million Empowered</strong>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Core Values Grid */}
          <div className="mb-24 space-y-12">
            <FadeIn direction="up">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-mono text-emerald-900 uppercase bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 font-semibold">
                  Ethical Anchor
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">Our 7 Core Values</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value) => (
                <FadeIn key={value.title} direction="up">
                  <div className="p-6 rounded-2xl bg-white border border-emerald-900/10 hover:border-emerald-700/40 transition-all h-full space-y-3 shadow-sm hover:shadow-md">
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 w-fit">
                      {value.icon}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">{value.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* UN SDG Commitment Banner */}
          <FadeIn direction="up">
            <div className="p-8 sm:p-12 rounded-3xl bg-emerald-900 text-white shadow-xl text-center space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-800 text-emerald-100 border border-emerald-600 inline-flex items-center gap-1.5 font-semibold">
                <Globe className="w-4 h-4" /> Global Alignment
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                Aligned with United Nations SDGs & India's National Vision
              </h2>
              <p className="text-emerald-100 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
                Our initiatives directly advance Sustainable Development Goals in Quality Education (SDG 4), Gender Equality (SDG 5), Decent Work & Economic Growth (SDG 8), Innovation & Infrastructure (SDG 9), and Reduced Inequalities (SDG 10).
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};
