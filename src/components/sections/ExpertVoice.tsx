import React, { useState } from 'react';
import { INDUSTRY_EXPERT_VIDEOS } from '../../data/mockData';
import { IndustryExpertVideo } from '../../types';
import { FadeIn } from '../motion/FadeIn';
import { Play, ChevronLeft, ChevronRight, MapPin, Sparkles, X, Volume2, ExternalLink } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const ExpertVoice: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState<IndustryExpertVideo | null>(null);

  // Group videos into sets of 3 for desktop 3-slide row navigation
  const itemsPerPage = 3;
  const maxPages = Math.ceil(INDUSTRY_EXPERT_VIDEOS.length / itemsPerPage);

  const handlePrev = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveVideoIndex((prev) => (prev === maxPages - 1 ? 0 : prev + 1));
  };

  const visibleVideos = INDUSTRY_EXPERT_VIDEOS.slice(
    activeVideoIndex * itemsPerPage,
    activeVideoIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 sm:py-24 bg-[#fafaf7] border-t border-emerald-900/10 relative overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(21, 128, 61, 0.3) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 80%)',
          filter: 'blur(75px)',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-12">
        
        {/* Section Header: "Voice of Industry Experts" + Carousel Navigation Controls */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-emerald-900/10 text-left">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>Mentorship Perspectives & Video Insights</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight flex items-center gap-3 pt-1">
                <span className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1.5 after:bg-[#15803d]">
                  VOICE OF
                </span>
                <span className="text-[#15803d]">INDUSTRY EXPERTS</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                Curated video perspectives, mentorship guidance, and strategic endorsements from senior neurosurgeons, corporate visionaries, and social leaders.
              </p>
            </div>

            {/* Slider Navigation Buttons (3-Slide Set Navigation) */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                0{activeVideoIndex + 1} / 0{maxPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous videos"
                  className="p-3 rounded-2xl bg-white border border-emerald-900/15 text-slate-800 hover:text-emerald-900 hover:bg-emerald-50 hover:border-emerald-500 shadow-sm transition-all duration-200 focus:outline-none active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 text-emerald-800" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next videos"
                  className="p-3 rounded-2xl bg-white border border-emerald-900/15 text-slate-800 hover:text-emerald-900 hover:bg-emerald-50 hover:border-emerald-500 shadow-sm transition-all duration-200 focus:outline-none active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 text-emerald-800" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3 Videos Row Grid Set */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleVideos.map((video, index) => {
            const posterSrc = video.videoType === 'instagram'
              ? (video.thumbnailUrl || video.avatarUrl)
              : `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

            return (
              <FadeIn key={video.id} direction="up" delay={index * 0.08}>
                <div
                  onClick={() => setModalVideo(video)}
                  className="group cursor-pointer rounded-3xl bg-white border border-emerald-900/15 hover:border-emerald-700/50 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full text-left"
                >
                  {/* Video Poster Frame with Custom Play Button */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                    <img
                      src={posterSrc}
                      alt={video.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                    {/* Soft Gradient Mask Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Platform Tag */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/85 text-white text-[11px] font-mono font-bold border border-white/20 backdrop-blur-sm flex items-center gap-1 shadow-sm">
                      {video.videoType === 'instagram' ? (
                        <>
                          <InstagramIcon className="w-3 h-3 text-pink-400" />
                          <span>Instagram Reel</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3 h-3 text-emerald-400" />
                          <span>{video.duration || '04:15'}</span>
                        </>
                      )}
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-emerald-500/40 backdrop-blur-sm shadow-sm">
                      {video.category}
                    </div>

                    {/* Centered Glowing Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white flex items-center justify-center shadow-[0_0_25px_rgba(21,128,61,0.6)] group-hover:scale-110 transition-all duration-300 ring-4 ring-white/30 ${
                        video.videoType === 'instagram' 
                          ? 'bg-gradient-to-tr from-amber-500 via-rose-600 to-purple-600 group-hover:from-amber-600 group-hover:to-purple-700' 
                          : 'bg-[#15803d] group-hover:bg-emerald-600'
                      }`}>
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Speaker Profile Details (Clean, no description line) */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={video.avatarUrl}
                        alt={video.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-600/40 shadow-sm shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-slate-950 truncate group-hover:text-[#15803d] transition-colors">
                          {video.name}
                        </h4>
                        <p className="text-xs font-extrabold text-emerald-800 truncate">
                          {video.role}
                        </p>
                        <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-slate-500 pt-0.5">
                          <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>{video.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVideoIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeVideoIndex === idx
                  ? 'w-8 bg-[#15803d]'
                  : 'w-2.5 bg-slate-300 hover:bg-emerald-600/50'
              }`}
              aria-label={`Go to slide set ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Broadcast Quality Interactive Video Player Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="max-w-4xl w-full bg-slate-900 border border-emerald-500/30 rounded-3xl p-4 sm:p-6 space-y-4 shadow-2xl relative text-left">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <img
                  src={modalVideo.avatarUrl}
                  alt={modalVideo.name}
                  className="w-10 h-10 rounded-xl object-cover border border-emerald-500"
                />
                <div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                    {modalVideo.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-bold">{modalVideo.role} • {modalVideo.location}</p>
                </div>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-emerald-800 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Embed (Instagram Reel or YouTube Iframe) */}
            {modalVideo.videoType === 'instagram' ? (
              <div className="space-y-4">
                <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[9/16] h-[500px] rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner flex items-center justify-center">
                  <iframe
                    src={`https://www.instagram.com/reel/${modalVideo.instagramCode}/embed`}
                    title={modalVideo.name}
                    allowTransparency
                    allow="encrypted-media"
                    className="w-full h-full border-0 rounded-2xl"
                  />
                </div>
                <div className="flex justify-center pt-1">
                  <a
                    href={modalVideo.instagramUrl || `https://www.instagram.com/reel/${modalVideo.instagramCode}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-inner">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`}
                  title={modalVideo.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
