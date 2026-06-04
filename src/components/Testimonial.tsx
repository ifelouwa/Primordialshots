import React from 'react';
import { FadeIn } from './FadeIn';

export const Testimonial: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-12 md:py-24 text-center border-t border-b border-brand-white/5 bg-brand-dark-surface">
      <FadeIn>
        <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-8">
          What Clients Say
        </div>
        <blockquote className="font-serif italic text-xl sm:text-2xl md:text-[2.2rem] leading-[1.5] text-brand-white max-w-[750px] mx-auto mb-8 opacity-90">
          "I sent them a casual selfie and received a fashion editorial. They dressed me, posed me, and lit me — all without me moving from my couch. Truly unreal."
        </blockquote>
        <cite className="text-[0.72rem] tracking-[0.25em] uppercase text-brand-accent not-italic font-medium">
          — Zara Obi, Creative Director
        </cite>
      </FadeIn>
    </section>
  );
};
