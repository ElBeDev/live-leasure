'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  const info = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Villas Vta Loc C 46 Int A\nVillas Vta, Las Glorias C.P. 48333\nPuerto Vallarta, Jal.',
    },
    { icon: Phone, label: 'Phone', value: '322 225 2985' },
    { icon: Mail, label: 'Email', value: 'reservations@live-leasure.com' },
    { icon: Clock, label: 'Support', value: '24/7 Emergency Assistance' },
  ];

  return (
    <section id="contact" className="py-32 relative bg-[#041c28]">
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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">Get In Touch</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Contact Us
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Our team is here to help you plan your next unforgettable journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#eee273]/10">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#041c28] p-12 space-y-10"
          >
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-5">
                <div className="text-[#eee273]/40 mt-0.5 flex-shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-sans text-[#eee273]/40 text-xs tracking-[0.2em] uppercase mb-1">{label}</div>
                  <div className="font-sans text-white/70 text-sm leading-relaxed whitespace-pre-line">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#041c28] p-12 flex flex-col justify-center"
          >
            <h3 className="font-playfair font-semibold text-[#eee273] text-2xl mb-4">
              Start Your Journey
            </h3>
            <p className="font-sans text-white/40 text-sm leading-relaxed mb-10">
              Become a member today and unlock exclusive access to the world's finest travel experiences at member-only prices.
            </p>

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#eee273] text-[#041c28] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300"
              >
                Become a Member
              </motion.button>
              <motion.a
                href="mailto:reservations@live-leasure.com"
                whileHover={{ scale: 1.02 }}
                className="block w-full py-4 border border-[#eee273]/30 text-[#eee273] font-sans font-semibold text-xs tracking-[0.12em] uppercase text-center hover:border-[#eee273] hover:bg-[#eee273]/5 transition-all duration-300"
              >
                Send Us an Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
