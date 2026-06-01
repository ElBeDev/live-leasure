'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t, lang } = useLanguage();

  // Build TypeAnimation sequence from translations
  const sequence = t.hero.headlines.flatMap((h) => [h, 2500]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#041c28]">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#041c28]/80 via-[#041c28]/60 to-[#041c28]/90" />
      </div>

      {/* Línea dorada decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/40 to-transparent z-20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-40 text-center">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-[#eee273]/50" />
          <span className="font-sans text-[#eee273]/80 text-xs tracking-[0.35em] uppercase">
            {t.hero.eyebrow}
          </span>
          <div className="h-px w-12 bg-[#eee273]/50" />
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-playfair font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#eee273' }}
        >
          <TypeAnimation
            key={lang}
            sequence={sequence}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="font-playfair italic text-white/70 text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-10 py-4 bg-[#eee273] text-[#041c28] font-sans font-semibold text-sm tracking-[0.12em] uppercase transition-all duration-300 hover:bg-white"
          >
            <span>{t.hero.cta1}</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 border border-[#eee273]/50 text-[#eee273] font-sans font-semibold text-sm tracking-[0.12em] uppercase hover:border-[#eee273] hover:bg-[#eee273]/5 transition-all duration-300"
          >
            {t.hero.cta2}
          </motion.button>
        </motion.div>

        {/* Separador dorado */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-24 h-px bg-[#eee273]/40 mx-auto mb-16"
        />

        {/* Stats — minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
        >
          {t.hero.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div
                className="font-playfair font-bold text-[#eee273] mb-1"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {stat.value}
              </div>
              <div className="font-sans text-white/50 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Línea dorada decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/30 to-transparent z-20" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-white/30 text-[10px] tracking-[0.3em] uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#eee273]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}

