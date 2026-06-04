import React from 'react';
import { FadeIn } from './FadeIn';

export const About: React.FC = () => {
  const services = [
    {
      name: 'Remote Portraits',
      desc: 'Send a photo, get a studio-quality portrait back',
    },
    {
      name: 'Editorial',
      desc: 'Magazine, lookbook & concept-driven shoots',
    },
    {
      name: 'Brand Campaign',
      desc: 'Campaign imagery that tells a human story',
    },
    {
      name: 'Fine Art Prints',
      desc: 'Limited-edition archival prints, signed',
    },
  ];

  return (
    <section className="px-6 py-16 md:px-12 md:py-28 bg-brand-black border-t border-brand-white/5" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column - Image with Accents */}
        <FadeIn className="relative max-w-[450px] mx-auto lg:max-w-none w-full px-4 lg:px-0 mb-8 lg:mb-0">
          <div className="relative">
            {/* Accent Border Box */}
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-3/5 h-3/5 border border-brand-accent/30 -z-10" />
            
            {/* Main Image */}
            <img
              className="w-full aspect-[3/4] object-cover grayscale-[10%] border border-brand-white/5"
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
              alt="Photographer"
            />

            {/* Stat Box overlay */}
            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-brand-accent text-brand-black px-6 py-4 md:px-8 md:py-6 text-center select-none shadow-lg">
              <span className="font-display text-3xl md:text-[2.5rem] leading-none block">
                340+
              </span>
              <span className="text-[0.6rem] md:text-[0.65rem] tracking-[0.2em] uppercase mt-1 block font-medium">
                Portraits Delivered
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Right Column - Text & Services */}
        <FadeIn delay={100} className="flex flex-col">
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            About the Studio
          </div>
          <h2 className="font-display text-[3rem] sm:text-[4rem] md:text-[4.5rem] leading-[0.95] tracking-[0.02em] text-brand-white mb-8">
            More Than<br />
            <em className="font-serif italic text-brand-accent text-[0.7em] not-italic">
              a Photo
            </em>
          </h2>
          <p className="text-[0.9rem] leading-[1.9] text-brand-muted mb-6">
            Primordialshots was founded in 2026 on a single idea: world-class portrait photography should not require a studio, a wardrobe, or a flight. We work entirely remotely — you send us a photo, we return a masterpiece.
          </p>
          <p className="text-[0.9rem] leading-[1.9] text-brand-muted mb-8">
            We deliver any camera look, any style, any pose, any outfit. Our work reaches clients across Lagos, London, New York, and beyond — all without anyone leaving their home.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-white/5 border border-brand-white/5">
            {services.map((service, idx) => (
              <div key={idx} className="bg-brand-black p-5">
                <div className="text-[0.78rem] tracking-[0.15em] uppercase text-brand-white mb-1.5 font-medium">
                  {service.name}
                </div>
                <p className="text-[0.75rem] text-brand-muted leading-[1.6]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
