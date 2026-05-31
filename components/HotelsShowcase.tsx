'use client';

import { motion } from 'framer-motion';

export default function HotelsShowcase() {
  const brands = [
    'Marriott', 'Hilton', 'Hyatt', 'InterContinental', 'Radisson',
    'Best Western', 'Holiday Inn', 'Sheraton', 'Wyndham', 'Royalton',
  ];

  return (
    <section className="py-32 relative bg-[#041c28]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#eee273]/40" />
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">1M+ Hotels Worldwide</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Stay Your Way, Anywhere
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Access over 1 million hotels worldwide — from boutique hideaways to globally recognized luxury brands.
          </p>
        </motion.div>

        {/* Brands grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#eee273]/10 mb-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#041c28] py-6 px-4 flex items-center justify-center group hover:bg-[#072d3e]/40 transition-colors duration-300"
            >
              <span className="font-sans text-white/40 text-sm tracking-wider group-hover:text-[#eee273]/70 transition-colors duration-300">
                {brand}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
        >
          {[
            { value: '1M+', label: 'Hotels' },
            { value: '200+', label: 'Airlines' },
            { value: '5%', label: 'Price Match Bonus' },
          ].map((stat) => (
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
