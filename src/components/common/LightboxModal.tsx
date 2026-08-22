import React, { useEffect } from 'react';
import { useAppStore } from '../../stores/useAppStore';
import { X, MapPin, Calendar, Tag } from 'lucide-react';

export const LightboxModal: React.FC = () => {
  const { activeLightboxItem, closeLightbox } = useAppStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeLightbox]);

  if (!activeLightboxItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-fadeIn">
      <button
        onClick={closeLightbox}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 p-3 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="md:w-3/5 bg-slate-950 relative min-h-[300px] flex items-center justify-center">
          <img
            src={activeLightboxItem.imageUrl}
            alt={activeLightboxItem.title}
            className="w-full h-full object-cover max-h-[70vh]"
          />
        </div>
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1.5 uppercase">
              <Tag className="w-3.5 h-3.5" /> {activeLightboxItem.category.replace('_', ' ')}
            </span>
            <h3 className="font-heading font-bold text-xl text-white leading-snug">
              {activeLightboxItem.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeLightboxItem.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{activeLightboxItem.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>{new Date(activeLightboxItem.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
