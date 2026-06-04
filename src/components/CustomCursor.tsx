import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '56px';
        ringRef.current.style.height = '56px';
        ringRef.current.style.opacity = '0.6';
      }
    };

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '32px';
        ringRef.current.style.height = '32px';
        ringRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Setup event listeners for elements that should expand the cursor ring
    const setupHoverListeners = () => {
      const hoverables = document.querySelectorAll(
        'a, button, .card, .filter-btn, .submit-btn, .hero-cta, .step, .cap-card'
      );
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Run setup initially
    setupHoverListeners();

    // Since React might re-render or add new elements, we observe mutations to bind new elements
    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      const hoverables = document.querySelectorAll(
        'a, button, .card, .filter-btn, .submit-btn, .hero-cta, .step, .cap-card'
      );
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-brand-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,opacity] duration-200 mix-blend-difference hidden md:block"
        style={{ left: '-10px', top: '-10px' }}
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-brand-accent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[left_0.12s_ease,top_0.12s_ease,width_0.3s,height_0.3s,opacity_0.3s] hidden md:block"
        style={{ left: '-30px', top: '-30px' }}
      />
    </>
  );
};
