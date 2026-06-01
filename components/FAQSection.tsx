'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = t.faq.items;

  return (
    <section id="faq" className="py-32 relative bg-[#061e2c]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">

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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.faq.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.faq.title}
          </h2>
          <p className="font-sans text-white/50 text-lg leading-relaxed">
            {t.faq.subtitle}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#eee273]/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-6 py-7 text-left group"
              >
                <h3 className="font-playfair text-[#eee273]/80 group-hover:text-[#eee273] transition-colors duration-300 text-lg leading-snug">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 mt-1 text-[#eee273]/40 group-hover:text-[#eee273]/70 transition-colors duration-300">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-white/45 text-sm leading-relaxed pb-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16 pt-12 border-t border-[#eee273]/10"
        >
          <p className="font-sans text-white/40 text-sm mb-6">{t.faq.stillQuestions}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-[#eee273]/30 text-[#eee273] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:border-[#eee273] hover:bg-[#eee273]/5 transition-all duration-300"
          >
            {t.faq.contactSupport}
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
