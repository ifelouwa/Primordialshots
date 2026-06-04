import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const percentage = (window.scrollY / totalScroll) * 100;
        setScrollWidth(percentage);
      } else {
        setScrollWidth(0);
      }
    };

    // Run once on load/render
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-brand-accent z-[200] transition-[width] duration-75 ease-out"
      style={{ width: `${scrollWidth}%` }}
    />
  );
};
