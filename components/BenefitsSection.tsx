'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Hotel,
  Plane,
  Ship,
  MapPin,
  Car,
  Ticket,
  Package,
  Globe,
  Tag,
} from 'lucide-react';

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Hotel,
      title: 'Exclusive Hotel Rates',
      description: 'Over 1 million hotels worldwide with exclusive rates. Price Match Guarantee + 5% discount.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Plane,
      title: 'Discounted Flights',
      description: 'Connect globally with 200+ airlines, including low-cost carriers.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Ship,
      title: 'Member-only Cruises',
      description: 'Access to 25K+ cruise itineraries to navigate the seven seas.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: MapPin,
      title: 'Vacation Rentals',
      description: 'Resort-style accommodations in fully equipped condos worldwide.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Ticket,
      title: 'Tours & Activities',
      description: 'Discover local experiences, theme parks, and entertainment tickets.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Car,
      title: 'Wholesale Car Rentals',
      description: 'Discounted rates at over 10,000 pickup locations worldwide.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Package,
      title: 'AI-Powered Travel Packages',
      description: 'Our AI finds the best prices on custom packages with flights, hotels, and curated experiences tailored just for you.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Globe,
      title: 'AI Multi-City Packages',
      description: 'AI-assisted planning for multi-destination trips with optimized routes, hotels, flights, and activities at the best prices.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
    {
      icon: Tag,
      title: 'My Deals at Home',
      description: 'Unlock discounts on 700,000+ merchants across North America.',
      gradient: 'from-[#041c28] to-[#041c28]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-warm-50">
      {/* Tropical pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FF8C42" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px'
      }} />
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#041c28]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#041c28]/8 rounded-full blur-3xl" />

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
            Member <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock exclusive access to incredible vacation deals and one-of-a-kind experiences—all designed to make every journey unforgettable.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl h-full border border-gray-200 hover:border-[#041c28]/50 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                >
                  <benefit.icon className="text-[#eee273]" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#041c28] transition-colors relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed relative z-10">
                  {benefit.description}
                </p>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 201, 167, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#041c28] text-[#eee273] rounded-full font-semibold text-lg shadow-2xl hover:bg-[#072d3e] transition-colors"
          >
            Unlock All Benefits
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
