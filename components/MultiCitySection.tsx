'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Plane, Hotel, ArrowRight } from 'lucide-react';

export default function MultiCitySection() {
  const steps = [
    {
      icon: MapPin,
      title: 'Choose Destinations',
      description: 'Select multiple cities you want to visit',
    },
    {
      icon: Calendar,
      title: 'Pick Dates',
      description: 'Set your travel dates for each destination',
    },
    {
      icon: Hotel,
      title: 'Select Hotels',
      description: 'Choose accommodations for each stop',
    },
    {
      icon: Plane,
      title: 'Book Flights',
      description: 'Add flights between destinations',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-cool-50">
      {/* Travel route visualization ambiance */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(4, 114, 171, 0.15) 1px, transparent 1px), linear-gradient(180deg, rgba(4, 114, 171, 0.15) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0472ab]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0472ab]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Multi-City</span> Travel Made Easy
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Why limit your trip to one destination? Create seamless itineraries with multiple stops—all in one simple booking.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#0472ab] transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 hover:border-[#0472ab]/50 transition-all text-center shadow-lg hover:shadow-xl">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0472ab] flex items-center justify-center shadow-lg"
                  >
                    <step.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
                
                {/* Arrow between steps - desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-[#0472ab]" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">One Click</h3>
            <p className="text-gray-400">Book everything in a single transaction</p>
          </div>
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">Best Rates</h3>
            <p className="text-gray-400">Package deals save you more money</p>
          </div>
          <div className="glass p-8 rounded-2xl border border-white/10 text-center">
            <h3 className="text-4xl font-bold text-gradient mb-2">Seamless</h3>
            <p className="text-gray-400">Perfectly coordinated itineraries</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#0472ab] text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-[#035d8c] transition-colors"
          >
            Plan Your Multi-City Trip
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
