import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { GALLERY_ITEMS } from '../data/mockData';
import { useAppStore } from '../stores/useAppStore';
import { LightboxModal } from '../components/common/LightboxModal';
import { FadeIn } from '../components/motion/FadeIn';
import { Maximize2, Tag, Calendar, MapPin } from 'lucide-react';
import { cn } from '../utils/cn';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { openLightbox } = useAppStore();

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      <SEOHead
        title="Movement Gallery - Yuvaparipalan Foundation"
        description="Browse photo highlights from Yuvaparipalan Foundation events, state minister inaugurations, AI workshops, and awards ceremonies."
      />

      <div className="pt-32 pb-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                Visual Archives
              </span>
              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Movement Photo Gallery
              </h1>
              <p className="text-slate-300 text-base sm:text-lg">
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
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs font-medium transition-all focus:outline-none',
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <FadeIn key={item.id} direction="up" delay={idx * 0.06}>
                <div
                  onClick={() => openLightbox(item)}
                  className="group cursor-pointer rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all duration-300 relative"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3 relative -mt-12">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {item.category.replace('_', ' ')}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" /> {new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <LightboxModal />
    </>
  );
};
