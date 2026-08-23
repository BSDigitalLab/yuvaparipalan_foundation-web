import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { GALLERY_ITEMS } from '../data/mockData';
import { FadeIn } from '../components/motion/FadeIn';
import { LightboxModal } from '../components/common/LightboxModal';
import { useAppStore } from '../stores/useAppStore';
import { Camera, Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { openLightbox } = useAppStore();

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <>
      <SEOHead
        title="Movement Gallery - Yuvaparipalan Foundation"
        description="Browse photo highlights from Yuvaparipalan Foundation events, state minister inaugurations, AI workshops, and awards ceremonies."
      />

      <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 bg-[#f8faf8] relative overflow-hidden">
        {/* Background Ambient Radial Lighting */}
        <div 
          className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(21, 128, 61, 0.35) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Movement Photo Gallery
              </h1>
              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Capturing moments of inspiration, leadership conclaves, scholarship honors, and youth workshops across India.
              </p>
            </div>
          </FadeIn>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'vip_visits', label: 'Minister & VIP Visits' },
              { id: 'events', label: 'Conclaves & Summits' },
              { id: 'workshops', label: 'AI & Skill Workshops' },
              { id: 'awards', label: 'Scholarship Awards' },
              { id: 'community', label: 'Community Drives' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#15803d] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <FadeIn key={item.id} direction="up" delay={index * 0.05}>
                <div
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer rounded-3xl bg-white border border-emerald-900/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs text-emerald-300 font-mono flex items-center gap-1.5 font-bold">
                        <Camera className="w-4 h-4" /> View High-Res Photo
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>{item.date}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                        {item.location}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-slate-950 group-hover:text-[#15803d] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal />
    </>
  );
};
