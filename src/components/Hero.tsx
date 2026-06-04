import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-brand-black">
      {/* Left Content Column */}
      <div className="flex flex-col justify-end px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-20 z-10">
        <div className="text-[0.7rem] tracking-[0.3em] uppercase text-brand-accent mb-6">
          Portrait &amp; People — Est. 2026
        </div>
        <h1 className="font-display text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] leading-[0.92] tracking-[0.01em] text-brand-white mb-8">
          Raw<br />Human<br />
          <em className="font-serif italic text-brand-accent text-[0.65em] leading-[1.1] block not-italic">
            &amp; Unapologetic
          </em>
        </h1>
        <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 px-4 py-1.5 mb-8 w-fit select-none">
          <div className="w-[7px] h-[7px] bg-brand-accent rounded-full animate-pulse-slow" />
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-brand-accent">
            100% Remote — Anywhere in the World
          </span>
        </div>
        <p className="text-[0.85rem] leading-[1.8] text-brand-muted max-w-[320px] mb-8">
          Send us your photo. We deliver any camera look, style, pose, and outfit — no studio, no travel, no limits. Just results.
        </p>
        <a className="hero-cta inline-flex items-center gap-4 text-[0.75rem] tracking-[0.2em] uppercase border-b border-brand-accent pb-2 text-brand-accent hover:gap-6 transition-[gap] duration-300 w-fit cursor-pointer" href="#catalog">
          View Catalog &nbsp;&#8594;
        </a>
      </div>

      {/* Right Image Column */}
      <div className="relative overflow-hidden h-[40vh] md:h-full">
        <img
          className="w-full h-full object-cover grayscale-[20%] contrast-[1.05] scale-[1.02] transition-transform duration-[8000ms] ease-out hover:scale-[1.06]"
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=80"
          alt="Portrait hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent md:bg-gradient-to-r md:from-brand-black md:to-transparent z-1" />
      </div>

      {/* Hero Counter Overlay */}
      <div className="absolute bottom-8 right-8 z-10 font-display text-[5rem] text-brand-white/5 leading-none select-none hidden md:block">
        001
      </div>
    </section>
  );
};
