import React from 'react';
import { GALLERY_ITEMS } from '../../data/mockData';
import { useAppStore } from '../../stores/useAppStore';
import { FadeIn } from '../motion/FadeIn';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Maximize2, ArrowRight, Camera } from 'lucide-react';

export const GalleryTeaser: React.FC = () => {
  const { openLightbox } = useAppStore();
  const teaserItems = GALLERY_ITEMS.slice(0, 3);

  return (
    <section className="py-24 bg-[#fafaf7] border-t border-emerald-900/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Moments of Impact & Transformation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Visual highlights from state minister inaugurations, scholarship ceremonies, AI workshops, and community camps.
              </p>
            </div>

            <Link to="/gallery">
              <Button variant="outline" leftIcon={<Camera className="w-4 h-4" />} rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore Full Photo Gallery
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teaserItems.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.1}>
              <div
                onClick={() => openLightbox(item)}
                className="group cursor-pointer rounded-3xl bg-white border border-emerald-900/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-700/40 transition-all duration-300 relative"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 space-y-2 relative -mt-10 bg-white mx-4 mb-4 rounded-2xl border border-emerald-900/10 shadow-md">
                  <span className="text-[10px] font-mono font-bold text-emerald-900 uppercase bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {item.location}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
