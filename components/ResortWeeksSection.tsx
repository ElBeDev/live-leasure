'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Calendar, Crown, Check } from 'lucide-react';

export default function ResortWeeksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resortWeeks = [
    {
      icon: Clock,
      type: 'Last Minute',
      price: 399,
      tagline: 'Spontaneity Made Affordable',
      gradient: 'from-[#041c28] to-[#041c28]',
      features: [
        'Fixed price for every week',
        'Book within 30 days of check-in',
        'Over 5,000 options daily',
        'Any destination or unit size',
        'Unbeatable last-minute value',
      ],
      popular: false,
    },
    {
      icon: Calendar,
      type: 'Smart Weeks',
      price: 499,
      tagline: 'Plan Ahead & Save',
      gradient: 'from-[#041c28] to-[#041c28]',
      features: [
        'One price for all weeks',
        'Book up to 6 months in advance',
        'Thousands of options worldwide',
        'High-end condos (studio to multi-bedroom)',
        'Exceptional quality guaranteed',
      ],
      popular: true,
    },
    {
      icon: Crown,
      type: 'VIP Weeks',
      price: 499,
      priceRange: '499 - 2999',
      tagline: 'Premium Luxury Experience',
      gradient: 'from-[#041c28] to-[#041c28]',
      features: [
        'Flexible pricing for premium stays',
        'Over 100,000 resort options',
        'Premium destinations worldwide',
        'Spacious family accommodations',
        'Top-tier amenities included',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      {/* Tropical ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#041c28]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#041c28]/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Resort Weeks</span> Pricing
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Seven-night stays in fully equipped, resort-style accommodations. Perfect for families, couples, or solo adventurers.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {resortWeeks.map((resort, index) => (
            <motion.div
              key={resort.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-8 rounded-3xl border-2 ${
                resort.popular 
                  ? 'bg-[#041c28] text-[#eee273] border-[#041c28] shadow-2xl' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-900 border-gray-200 hover:border-[#041c28]/50 shadow-lg'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {resort.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#041c28] rounded-full text-[#eee273] font-semibold text-sm shadow-lg"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${
                  resort.popular
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br ' + resort.gradient
                } flex items-center justify-center shadow-lg`}
              >
                <resort.icon className="text-[#eee273]" size={40} />
              </motion.div>

              {/* Type */}
              <h3 className={`text-3xl font-bold text-center mb-2 ${
                resort.popular ? 'text-[#eee273]' : 'text-gray-900'
              }`}>
                {resort.type}
              </h3>

              {/* Tagline */}
              <p className={`text-center mb-6 ${
                resort.popular ? 'text-[#eee273]/90' : 'text-gray-600'
              }`}>
                {resort.tagline}
              </p>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-2xl ${resort.popular ? 'text-[#eee273]/80' : 'text-gray-600'}`}>$</span>
                  <span className={`text-6xl font-bold ${
                    resort.popular ? 'text-[#eee273]' : 'text-[#041c28]'
                  }`}>
                    {resort.priceRange || resort.price}
                  </span>
                  <span className={`text-2xl ${resort.popular ? 'text-[#eee273]/80' : 'text-gray-600'}`}>USD</span>
                </div>
                <p className={`mt-2 ${resort.popular ? 'text-[#eee273]/70' : 'text-gray-500'}`}>per 7-night stay</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {resort.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Check className={`flex-shrink-0 mt-1 ${
                      resort.popular ? 'text-[#eee273]' : 'text-[#041c28]'
                    }`} size={20} />
                    <span className={resort.popular ? 'text-[#eee273]/90' : 'text-gray-700'}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  resort.popular
                    ? 'bg-white text-[#041c28] shadow-lg hover:shadow-xl'
                    : 'bg-[#041c28] text-[#eee273] shadow-lg hover:shadow-xl hover:bg-[#072d3e]'
                }`}
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg">
            All resort weeks include fully equipped accommodations with comfort and convenience for your perfect vacation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
