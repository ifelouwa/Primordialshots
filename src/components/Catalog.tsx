import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

interface CatalogProps {
  onPhotoClick: (src: string, caption: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onPhotoClick }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'birthday', label: 'Birthday' },
    { key: 'headshots', label: 'Professional Headshots' },
    { key: 'couples', label: 'Couples/Anniversaries' },
    { key: 'family', label: 'Family Portraits' },
    { key: 'milestones', label: 'Milestones' },
    { key: 'fashion', label: 'Fashion/Style' },
    { key: 'holiday', label: 'Holiday Season' },
  ];

  const cardsData = [
    {
      id: 1,
      category: 'birthday',
      caption: 'Angela — Birthday Session — 2026',
      title: 'Warm Glow',
      year: 'Angela — 2026',
      src: '/catalog/birthday/Angela.jpeg',
      gridClass: 'col-span-12 md:col-span-4 md:row-span-2',
    },
    {
      id: 2,
      category: 'headshots',
      caption: 'Joshua — Professional Headshot — 2026',
      title: 'Creative Director',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-5',
    },
    {
      id: 3,
      category: 'couples',
      caption: 'Teni & Victor — Anniversary — 2026',
      title: 'Golden Bond',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-3',
    },
    {
      id: 4,
      category: 'family',
      caption: 'The Okonkwo Family — Portrait — 2026',
      title: 'Legacy',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-5 md:row-span-2',
    },
    {
      id: 5,
      category: 'milestones',
      caption: 'Kelechi — Graduation — 2026',
      title: 'New Horizons',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-3',
    },
    {
      id: 6,
      category: 'fashion',
      caption: 'Editorial — Fashion Shoot — 2026',
      title: 'High Couture',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 7,
      category: 'holiday',
      caption: 'Holiday Session — Winter Cozy — 2026',
      title: 'Festive Light',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-3',
    },
    {
      id: 8,
      category: 'birthday',
      caption: 'Sarah — Birthday Session — 2026',
      title: 'Golden Hour Celebration',
      year: 'Sarah — 2026',
      src: '/catalog/birthday/Sarah.jpeg',
      gridClass: 'col-span-12 md:col-span-3',
    },
    {
      id: 9,
      category: 'headshots',
      caption: 'Nadia — Executive Headshot — 2026',
      title: 'Corporate Power',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-5',
    },
    {
      id: 10,
      category: 'couples',
      caption: 'Chinedu & Zara — Couples Portrait — 2026',
      title: 'Sunkissed Embrace',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 11,
      category: 'milestones',
      caption: 'Segun — Executive Promotion — 2026',
      title: 'The Next Chapter',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 12,
      category: 'family',
      caption: 'The Obi Family — Portrait — 2026',
      title: 'Generations',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 13,
      category: 'birthday',
      caption: 'Jane — Birthday Session — 2026',
      title: 'Candlelit Smile',
      year: 'Jane — 2026',
      src: '/catalog/birthday/jane.jpeg',
      gridClass: 'col-span-12 md:col-span-4',
    },
  ];

  const filteredCards = cardsData.filter(
    (card) => activeFilter === 'all' || card.category === activeFilter
  );

  return (
    <section className="px-6 py-16 md:px-12 md:py-24 bg-brand-black" id="catalog">
      {/* Catalog Header */}
      <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div>
          <div className="text-[0.65rem] tracking-[0.35em] uppercase text-brand-accent mb-4">
            Selected Works
          </div>
          <h2 className="font-display text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] leading-[0.95] tracking-[0.02em] text-brand-white">
            The<br />Catalog
          </h2>
        </div>
        <div className="text-[0.8rem] text-brand-muted tracking-[0.15em] uppercase md:text-right leading-[1.8]">
          Portraits / Sessions<br />
          2026
        </div>
      </FadeIn>

      {/* Filter Tabs */}
      <FadeIn delay={50} className="filter-bar flex gap-2 mb-12 flex-wrap select-none">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`font-body text-[0.72rem] tracking-[0.18em] uppercase px-5 py-2 border transition-all duration-200 cursor-pointer ${
              activeFilter === filter.key
                ? 'bg-brand-accent border-brand-accent text-brand-black font-medium'
                : 'bg-transparent border-brand-white/12 text-brand-muted hover:border-brand-accent hover:text-brand-accent'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </FadeIn>

      {/* Grid */}
      <FadeIn delay={100}>
        <div className="grid grid-cols-12 gap-5 auto-rows-max">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onPhotoClick(card.src, card.caption)}
              className={`relative overflow-hidden bg-brand-dark-surface cursor-pointer group transition-all duration-500 ${card.gridClass}`}
            >
              <img
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:contrast-[1.08] min-h-[260px] max-h-[550px]"
                src={card.src}
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] flex flex-col justify-end p-6">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-brand-accent mb-1.5 block">
                  {filters.find(f => f.key === card.category)?.label || card.category}
                </span>
                <span className="font-display text-2xl tracking-[0.05em] text-brand-white leading-none">
                  {card.title}
                </span>
                <span className="text-[0.72rem] text-brand-muted mt-1">
                  {card.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
