import React from 'react';
import { FadeIn } from './FadeIn';

export const Capabilities: React.FC = () => {
  const pills = [
    'Film Look',
    'Studio Light',
    'Golden Hour',
    'Cinematic',
    'Dark & Moody',
    'High Fashion',
    'Editorial',
    'Minimalist',
    'Any Outfit',
    'Any Backdrop',
    'Any Pose',
    'Vintage',
  ];

  const cards = [
    {
      icon: '▶',
      title: 'Camera Looks',
      desc: '35mm film grain, medium format softness, sharp digital, vintage Polaroid, cinematic anamorphic — name it.',
    },
    {
      icon: '✦',
      title: 'Dress & Outfit',
      desc: "From streetwear to couture, traditional to futuristic — you don't need to own it or wear it. We build it into the shot.",
    },
    {
      icon: '■',
      title: 'Poses & Composition',
      desc: 'Candid, power pose, reclining, walking — any body language, any angle, any energy. We direct the frame around you.',
    },
    {
      icon: '○',
      title: 'Scene & Location',
      desc: 'Rooftop Lagos, Paris street café, desert dunes, clean white studio — any backdrop, no travel required.',
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 bg-brand-dark-surface border-t border-brand-white/5" id="capabilities">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-center">
        {/* Left Info Column */}
        <FadeIn className="flex flex-col">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            What We Deliver
          </div>
          <h2 className="font-display text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[0.95] tracking-[0.02em] text-brand-white mb-6">
            Any Look.<br />Any World.<br />
            <em className="font-serif italic text-brand-accent text-[0.72em] not-italic">
              Your Face.
            </em>
          </h2>
          <p className="text-[0.85rem] leading-[1.9] text-brand-muted mb-6">
            Whether you want a moody film portrait shot on 35mm, a sharp commercial headshot, a high-fashion editorial in couture, or a cinematic still — we deliver it. Remotely.
          </p>
          <p className="text-[0.85rem] leading-[1.9] text-brand-muted mb-8">
            You never have to own the clothes, visit the studio, or fly to the location. We reconstruct the entire scene around you.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] tracking-[0.18em] uppercase px-4 py-1.5 border border-brand-accent/35 text-brand-accent select-none"
              >
                {pill}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Right Cards Grid */}
        <FadeIn delay={100} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-white/5 border border-brand-white/5">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-brand-black p-8 relative overflow-hidden group hover:bg-brand-dark-surface/50 transition-colors duration-300"
            >
              <span className="text-xl text-brand-accent mb-4 block select-none">
                {card.icon}
              </span>
              <div className="font-display text-lg tracking-[0.05em] text-brand-white mb-2">
                {card.title}
              </div>
              <p className="text-[0.75rem] text-brand-muted leading-[1.7]">
                {card.desc}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};
