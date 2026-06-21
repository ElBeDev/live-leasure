'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';

const BRANDS: { name: string; src: string; type: 'hotel' | 'airline' }[] = [
  { name: 'JW Marriott',       src: '/brands/jw-marriott.png',      type: 'hotel' },
  { name: 'American Airlines', src: '/brands/american-airlines.svg', type: 'airline' },
  { name: 'Hilton',            src: '/brands/hilton.png',            type: 'hotel' },
  { name: 'Emirates',          src: '/brands/emirates-icon.svg',     type: 'airline' },
  { name: 'Four Seasons',      src: '/brands/four-seasons.png',      type: 'hotel' },
  { name: 'Delta',             src: '/brands/delta.svg',             type: 'airline' },
  { name: 'Fairmont',          src: '/brands/fairmont.png',          type: 'hotel' },
  { name: 'Lufthansa',         src: '/brands/lufthansa.svg',         type: 'airline' },
  { name: 'Marriott',          src: '/brands/marriott.png',          type: 'hotel' },
  { name: 'United Airlines',   src: '/brands/united.svg',            type: 'airline' },
  { name: 'Sheraton',          src: '/brands/sheraton.png',          type: 'hotel' },
  { name: 'Air France',        src: '/brands/air-france.svg',        type: 'airline' },
  { name: 'Radisson',          src: '/brands/radisson.png',          type: 'hotel' },
  { name: 'British Airways',   src: '/brands/british-airways.svg',   type: 'airline' },
  { name: 'Conrad',            src: '/brands/conrad.png',            type: 'hotel' },
  { name: 'Aeromexico',        src: '/brands/aeromexico.svg',        type: 'airline' },
  { name: 'Leading Hotels',    src: '/brands/leading-hotels.png',    type: 'hotel' },
  { name: 'KLM',               src: '/brands/klm.svg',               type: 'airline' },
  { name: 'Baglioni',          src: '/brands/baglioni.png',          type: 'hotel' },
  { name: 'Southwest',         src: '/brands/southwest.svg',         type: 'airline' },
];

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
              className={`mx-6 flex-shrink-0 flex flex-col items-center justify-center gap-3 px-8 py-6 border ${
                brand.type === 'hotel'
                  ? 'border-[#eee273]/15 bg-[#eee273]/5'
                  : 'border-white/10 bg-white/4'
              }`}
              style={{ minWidth: '220px' }}
            >
              <div className="relative w-40 h-16 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  className={`object-contain ${brand.type === 'hotel' ? 'brightness-0 invert opacity-70' : 'opacity-85'}`}
                  style={brand.type === 'airline' ? { filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(105%)' } : undefined}
                  sizes="160px"
                />
              </div>
              <span className={`font-sans text-[10px] tracking-[0.12em] uppercase whitespace-nowrap ${
                brand.type === 'hotel' ? 'text-[#eee273]/50' : 'text-white/40'
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
