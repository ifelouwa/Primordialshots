import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

interface CatalogProps {
  onPhotoClick: (src: string, caption: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onPhotoClick }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'portrait', 'editorial', 'campaign', 'documentary'];

  const cardsData = [
    {
      id: 1,
      category: 'portrait',
      caption: 'Amara — The Quiet Storm — 2026',
      title: 'The Quiet Storm',
      year: 'Amara — 2026',
      src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-5 md:row-span-2',
    },
    {
      id: 2,
      category: 'editorial',
      caption: 'Between Lines — Editorial — 2026',
      title: 'Between Lines',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-7',
    },
    {
      id: 3,
      category: 'campaign',
      caption: 'Vestige Campaign — 2026',
      title: 'Vestige',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 4,
      category: 'portrait',
      caption: 'Nadia — Self — 2026',
      title: 'Self',
      year: 'Nadia — 2026',
      src: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-3',
    },
    {
      id: 5,
      category: 'documentary',
      caption: 'Corners — Documentary — 2026',
      title: 'Corners',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-5',
    },
    {
      id: 6,
      category: 'editorial',
      caption: 'Tone Poem — Editorial — 2026',
      title: 'Tone Poem',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-4',
    },
    {
      id: 7,
      category: 'campaign',
      caption: 'Dusk Campaign — 2026',
      title: 'Dusk',
      year: '2026',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      gridClass: 'col-span-12 md:col-span-3',
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
          Portraits / Editorial<br />
          2026
        </div>
      </FadeIn>

      {/* Filter Tabs */}
      <FadeIn delay={50} className="filter-bar flex gap-2 mb-12 flex-wrap select-none">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-body text-[0.72rem] tracking-[0.18em] uppercase px-5 py-2 border transition-all duration-200 cursor-pointer ${
              activeFilter === filter
                ? 'bg-brand-accent border-brand-accent text-brand-black font-medium'
                : 'bg-transparent border-brand-white/12 text-brand-muted hover:border-brand-accent hover:text-brand-accent'
            }`}
          >
            {filter}
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
                className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0 group-hover:contrast-[1.08] min-h-[260px]"
                src={card.src}
                alt={card.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] flex flex-col justify-end p-6">
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-brand-accent mb-1.5 block">
                  {card.category}
                </span>
                <span className="font-display text-2xl tracking-[0.05em] text-brand-white leading-none">
                  {card.title}
                </span>
                <span className="text-[0.72rem] text-brand-muted mt-1">
                  {card.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
