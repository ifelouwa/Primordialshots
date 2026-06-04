import React from 'react';
import { FadeIn } from './FadeIn';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'You Send a Photo',
      desc: 'Any selfie, casual snapshot, or existing portrait works. We only need your face — everything else is up to us.',
    },
    {
      num: '02',
      title: 'Pick Your Vision',
      desc: 'Choose your desired camera look, shooting style, pose direction, and outfit or dress from our style catalog — or send your own reference.',
    },
    {
      num: '03',
      title: 'We Create',
      desc: 'Our team crafts your portraits with precision — light, tone, and composition tuned to the exact aesthetic you specified.',
    },
    {
      num: '04',
      title: 'You Receive',
      desc: 'High-resolution files delivered to your inbox. Revisions included. No location required — ever.',
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 md:py-28 border-t border-brand-white/5 bg-brand-black" id="how">
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            The Process
          </div>
          <h2 className="font-display text-[3rem] sm:text-[4rem] md:text-[5rem] leading-[0.95] tracking-[0.02em] text-brand-white">
            Done Entirely<br />
            <em className="font-serif italic text-brand-accent text-[0.7em] not-italic">
              Remote
            </em>
          </h2>
        </div>
        <p className="text-[0.82rem] text-brand-muted leading-[1.8] max-w-[300px] md:text-right">
          No studio. No travel. You send us a photo — we handle everything else. Delivered in days, not weeks.
        </p>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-white/5 border border-brand-white/5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-brand-black p-8 transition-colors duration-300 hover:bg-brand-dark-surface"
            >
              {/* Growing Accent Border */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-500 ease-out group-hover:w-full" />
              
              <div className="font-display text-[3.5rem] text-brand-accent/15 leading-none mb-6 select-none">
                {step.num}
              </div>
              <div className="font-display text-xl tracking-[0.05em] text-brand-white mb-3">
                {step.title}
              </div>
              <p className="text-[0.78rem] text-brand-muted leading-[1.8]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
