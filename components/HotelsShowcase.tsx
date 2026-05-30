'use client';

import { motion } from 'framer-motion';
import { Hotel, Building2, Star, Search } from 'lucide-react';

export default function HotelsShowcase() {
  const hotelBrands = [
    'Marriott', 'Hilton', 'Hyatt', 'InterContinental', 'Radisson',
    'Best Western', 'Holiday Inn', 'Sheraton', 'Wyndham', 'Royalton'
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-cool-50">
      {/* Luxury hotel ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Stay Your Way, <span className="text-gradient">Anywhere</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Access to over 1 million hotels worldwide, from boutique accommodations to globally recognized brands.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-2xl font-bold">
            <Hotel className="text-[#041c28]" size={32} />
            <span className="text-gradient">1M+</span>
            <span className="text-gray-900">Hotels Worldwide</span>
          </div>
        </motion.div>

        {/* Hotel Brands Grid - Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16"
        >
          {hotelBrands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl flex items-center justify-center hover:border-[#041c28]/50 border border-gray-200 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="text-gray-900 font-semibold text-sm md:text-base">{brand}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Preview - Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl max-w-4xl mx-auto border border-gray-200 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <Search className="text-[#041c28]" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">Find Your Perfect Stay</h3>
          </div>
          <p className="text-gray-700 text-center">
            Hotel search and booking system coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
