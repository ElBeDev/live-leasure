'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const BRANDS: { name: string; type: 'hotel' | 'airline' }[] = [
  { name: 'JW Marriott',      type: 'hotel' },
  { name: 'American Airlines', type: 'airline' },
  { name: 'Hilton',           type: 'hotel' },
  { name: 'Emirates',         type: 'airline' },
  { name: 'Four Seasons',     type: 'hotel' },
  { name: 'Delta',            type: 'airline' },
  { name: 'Fairmont',         type: 'hotel' },
  { name: 'Lufthansa',        type: 'airline' },
  { name: 'Marriott',         type: 'hotel' },
  { name: 'United Airlines',  type: 'airline' },
  { name: 'Sheraton',         type: 'hotel' },
  { name: 'Air France',       type: 'airline' },
  { name: 'Radisson',         type: 'hotel' },
  { name: 'British Airways',  type: 'airline' },
  { name: 'Conrad',           type: 'hotel' },
  { name: 'Aeromexico',       type: 'airline' },
  { name: 'Hyatt',            type: 'hotel' },
  { name: 'KLM',              type: 'airline' },
  { name: 'InterContinental', type: 'hotel' },
  { name: 'Southwest',        type: 'airline' },
];

// Duplicate for seamless loop
const TRACK = [...BRANDS, ...BRANDS];

export default function HotelsShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative bg-[#041c28] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#eee273]/40" />
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.hotels.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.hotels.title}
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.hotels.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="marquee-pause relative mb-16"
      >
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#041c28] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#041c28] to-transparent" />

        <div className="flex animate-marquee w-max">
          {TRACK.map((brand, i) => (
            <div
              key={i}
              className={`mx-3 flex-shrink-0 flex items-center gap-2 px-5 py-3 border ${
                brand.type === 'hotel'
                  ? 'border-[#eee273]/20 bg-[#eee273]/5'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {brand.type === 'airline' && (
                <svg className="w-3 h-3 text-[#eee273]/50 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
                </svg>
              )}
              {brand.type === 'hotel' && (
                <svg className="w-3 h-3 text-[#eee273]/50 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                </svg>
              )}
              <span className={`font-sans text-sm tracking-wider whitespace-nowrap ${
                brand.type === 'hotel' ? 'text-[#eee273]/80' : 'text-white/60'
              }`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats row */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
        >
          {t.hotels.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair font-bold text-[#eee273] text-4xl mb-1">{stat.value}</div>
              <div className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
