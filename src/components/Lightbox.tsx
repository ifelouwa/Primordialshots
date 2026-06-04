import React, { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  src: string;
  caption: string;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, src, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#0a0a0a]/97 z-[999] flex items-center justify-center transition-opacity duration-300"
      onClick={onClose}
    >
      <span
        className="absolute top-6 right-8 md:top-8 md:right-10 text-[0.72rem] tracking-[0.25em] uppercase text-brand-muted hover:text-brand-white cursor-pointer transition-colors duration-200 select-none text-2xl md:text-sm"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        Close &times;
      </span>
      <img
        className="max-w-[90vw] md:max-w-[80vw] max-h-[75vh] md:max-h-[85vh] object-contain select-none"
        src={src}
        alt={caption}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.72rem] tracking-[0.2em] uppercase text-brand-muted text-center max-w-[90vw] whitespace-normal select-none">
        {caption}
      </div>
    </div>
  );
};
