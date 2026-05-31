'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Hotel, Plane } from 'lucide-react';

export default function MultiCitySection() {
  const steps = [
    { icon: MapPin, step: '01', title: 'Choose Destinations', description: 'Select multiple cities you want to visit.' },
    { icon: Calendar, step: '02', title: 'Pick Dates', description: 'Set your travel dates for each destination.' },
    { icon: Hotel, step: '03', title: 'Select Hotels', description: 'Choose accommodations for each stop.' },
    { icon: Plane, step: '04', title: 'Book Flights', description: 'Add connecting flights between destinations.' },
  ];

  return (
    <section className="py-32 relative bg-[#061e2c]">
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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">Multi-Destination</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Multi-City Travel Made Easy
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Why limit your trip to one destination? Seamless itineraries with multiple stops, best prices and perfect connections — all in one booking.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#eee273]/10 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#061e2c] p-8 hover:bg-[#072d3e]/40 transition-colors duration-300"
            >
              <div className="font-sans text-[#eee273]/20 text-xs tracking-[0.2em] mb-4">{step.step}</div>
              <div className="mb-5 text-[#eee273]/40 group-hover:text-[#eee273] transition-colors duration-300">
                <step.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-playfair font-semibold text-[#eee273] text-lg mb-2">{step.title}</h3>
              <p className="font-sans text-white/35 text-sm leading-relaxed">{step.description}</p>
              <div className="mt-5 h-px w-0 bg-[#eee273]/30 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#eee273]/10"
        >
          {[
            { title: 'One Click', desc: 'Book everything in a single transaction' },
            { title: 'Best Rates', desc: 'Automatically finds the best package deals' },
            { title: 'Seamless', desc: 'Perfectly coordinated itineraries' },
          ].map((item) => (
            <div key={item.title} className="bg-[#061e2c] px-8 py-6 text-center">
              <div className="font-playfair font-bold text-[#eee273]/80 text-xl mb-1">{item.title}</div>
              <div className="font-sans text-white/35 text-sm">{item.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-[#eee273] text-[#041c28] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300"
          >
            Plan Your Multi-City Trip
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
