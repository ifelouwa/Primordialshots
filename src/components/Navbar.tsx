import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#how', label: 'How It Works' },
    { href: '#catalog', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 mix-blend-difference">
        <div className="font-display text-2xl tracking-[0.08em] text-brand-white select-none">
          Primordialshots
        </div>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.75rem] tracking-[0.2em] uppercase text-brand-white opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-between w-6 h-4 bg-transparent border-none cursor-pointer focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <span className={`w-full h-[1px] bg-brand-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
          <span className={`w-full h-[1px] bg-brand-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-[1px] bg-brand-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Panel Overlay */}
      <div
        className={`fixed inset-0 bg-brand-black/98 z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-8 items-center text-center list-none">
          {navLinks.map((link, idx) => (
            <li
              key={link.href}
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 75}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              className="transition-all duration-500 ease-out"
            >
              <a
                href={link.href}
                onClick={closeMobileMenu}
                className="font-display text-4xl tracking-[0.1em] uppercase text-brand-white hover:text-brand-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
