import React, { useState } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { HowItWorks } from './components/HowItWorks';
import { Capabilities } from './components/Capabilities';
import { GalleryCarousel } from './components/GalleryCarousel';
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { Testimonial } from './components/Testimonial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';

const App: React.FC = () => {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    src: '',
    caption: '',
  });

  const handlePhotoClick = (src: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      src,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white select-none selection:bg-brand-accent selection:text-brand-black">
      {/* Global Utilities */}
      <ScrollProgress />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <Marquee />
      <HowItWorks />
      <Capabilities />
      <GalleryCarousel />
      <Catalog onPhotoClick={handlePhotoClick} />
      <About />
      <Testimonial />
      <Contact />
      <Footer />

      {/* Lightbox modal overlay */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />
    </div>
  );
};

export default App;
