import React from 'react';
import { FadeIn } from './FadeIn';

export const GalleryCarousel: React.FC = () => {
  const row1 = [
    { src: '/catalog/birthday/Angela.jpeg', tag: 'Birthday', name: 'Angela', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80', tag: 'Editorial', name: 'Between Lines', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80', tag: 'Film Look', name: 'Kolade', size: 'normal' },
    { src: '/catalog/birthday/jane.jpeg', tag: 'Birthday', name: 'Jane', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=80', tag: 'High Fashion', name: 'Tone Poem', size: 'normal' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80', tag: 'Cinematic', name: 'Dusk', size: 'wide' },
  ];

  const row2 = [
    { src: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&auto=format&fit=crop&q=80', tag: 'Portrait', name: 'Nadia', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80', tag: 'Studio', name: 'Joshua', size: 'normal' },
    { src: '/catalog/birthday/Sarah.jpeg', tag: 'Birthday', name: 'Sarah', size: 'tall' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80', tag: 'Vintage', name: 'Emmanuel', size: 'normal' },
    { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80', tag: 'Minimalist', name: 'Chisom', size: 'wide' },
    { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80', tag: 'Campaign', name: 'Victor', size: 'normal' },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'tall':
        return 'w-[280px] h-[420px]';
      case 'wide':
        return 'w-[380px] h-[280px]';
      default:
        return 'w-[280px] h-[360px]';
    }
  };

  return (
    <section className="py-16 md:py-20 overflow-hidden border-t border-brand-white/5 bg-brand-black">
      <FadeIn className="flex items-center justify-between px-6 md:px-12 mb-10">
        <div>
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-2">
            Gallery
          </div>
          <h2 className="font-display text-[2rem] sm:text-[3rem] md:text-[3.5rem] tracking-[0.02em] leading-none text-brand-white">
            Results Speak
          </h2>
        </div>
        <div className="text-[0.72rem] tracking-[0.2em] uppercase text-brand-muted hidden sm:block">
          Hover to pause &nbsp;·&nbsp; All created remotely
        </div>
      </FadeIn>

      {/* Row 1 - moves left */}
      <div className="carousel-row flex gap-[1.2rem] w-max animate-slide-left hover:[animation-play-state:paused] mb-[1.2rem]">
        {[...row1, ...row1].map((img, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 overflow-hidden relative group cursor-pointer ${getSizeClasses(img.size)}`}
          >
            <img
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-[1.1] group-hover:scale-[1.04]"
              src={img.src}
              alt={img.name}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-brand-accent mb-1 block">
                {img.tag}
              </span>
              <span className="font-display text-base tracking-[0.04em] text-brand-white">
                {img.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - moves right */}
      <div className="carousel-row flex gap-[1.2rem] w-max animate-slide-right hover:[animation-play-state:paused]">
        {[...row2, ...row2].map((img, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 overflow-hidden relative group cursor-pointer ${getSizeClasses(img.size)}`}
          >
            <img
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-[1.1] group-hover:scale-[1.04]"
              src={img.src}
              alt={img.name}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-brand-accent mb-1 block">
                {img.tag}
              </span>
              <span className="font-display text-base tracking-[0.04em] text-brand-white">
                {img.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
