'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hotel, Plane, Ship, MapPin, Car, Ticket, Package, Globe, Tag } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const icons = [Hotel, Plane, Ship, MapPin, Ticket, Car, Package, Globe, Tag];

export default function BenefitsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t } = useLanguage();

  const benefits = t.benefits.items.map((item, i) => ({
    icon: icons[i],
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="benefits" className="py-32 relative bg-[#041c28]">
      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#eee273]/40" />
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.benefits.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.benefits.title}
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.benefits.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#eee273]/10"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="group bg-[#041c28] p-8 hover:bg-[#072d3e]/40 transition-colors duration-400"
            >
              <div className="mb-5 text-[#eee273]/50 group-hover:text-[#eee273] transition-colors duration-300">
                <benefit.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair font-semibold text-[#eee273] text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="font-sans text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                {benefit.description}
              </p>
              {/* Línea dorada en hover */}
              <div className="mt-6 h-px w-0 bg-[#eee273]/40 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-[#eee273] text-[#041c28] font-sans font-semibold text-sm tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300"
          >
            {t.benefits.cta}
          </motion.button>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
