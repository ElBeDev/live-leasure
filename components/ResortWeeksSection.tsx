'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Calendar, Crown, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const planIcons = [Clock, Calendar, Crown];

export default function ResortWeeksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t } = useLanguage();

  const resortWeeks = t.resortWeeks.plans.map((plan, i) => ({
    icon: planIcons[i],
    type: plan.type,
    price: plan.price,
    tagline: plan.tagline,
    features: plan.features,
    featured: i === 1,
  }));

  return (
    <section id="pricing" className="py-32 relative bg-[#041c28]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.resortWeeks.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.resortWeeks.title}
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.resortWeeks.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resortWeeks.map((resort, index) => (
            <motion.div
              key={resort.type}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex flex-col p-8 border transition-all duration-300 group ${
                resort.featured
                  ? 'border-[#eee273]/60 bg-[#eee273]/5'
                  : 'border-[#eee273]/15 bg-transparent hover:border-[#eee273]/40 hover:bg-[#eee273]/5'
              }`}
            >
              {/* Badge */}
              {resort.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <span className="block bg-[#eee273] text-[#041c28] font-sans font-semibold text-[10px] tracking-[0.15em] uppercase px-4 py-1">
                    {t.resortWeeks.mostPopular}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6 text-[#eee273]/50 group-hover:text-[#eee273] transition-colors duration-300">
                <resort.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Type + tagline */}
              <h3 className="font-playfair font-bold text-[#eee273] text-2xl mb-2">{resort.type}</h3>
              <p className="font-sans text-white/40 text-sm mb-8">{resort.tagline}</p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-[#eee273]/10">
                <div className="font-playfair font-bold text-[#eee273]" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  {resort.price}
                </div>
                <div className="font-sans text-white/30 text-xs tracking-[0.15em] uppercase mt-1">{t.resortWeeks.perStay}</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-grow">
                {resort.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={14} className="text-[#eee273]/50 mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="font-sans text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Nota al pie */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center font-sans text-white/30 text-sm mt-10"
        >
          {t.resortWeeks.note}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
