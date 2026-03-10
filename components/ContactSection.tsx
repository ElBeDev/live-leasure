'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-warm-50">
      {/* Contact section with welcoming ambiance */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0472ab]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#0472ab]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions? Our team is here to help you plan your next adventure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0472ab] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Address</h4>
                    <p className="text-gray-700">
                      VILLAS VTA LOC C 46 INT A<br />
                      VILLAS VTA<br />
                      LAS GLORIAS C.P. 48333<br />
                      PUERTO VALLARTA, JAL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0472ab] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Phone</h4>
                    <p className="text-gray-700">
                      (305) 686-0653
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0472ab] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">Email</h4>
                    <p className="text-gray-700">
                      reservations@vacancyrewards.com<br />
                      reservations@live-leasure.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0472ab] flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">24/7 Support</h4>
                    <p className="text-gray-700">Emergency assistance available anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 h-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <Mail className="text-[#0472ab] mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Form</h3>
                <p className="text-gray-700 mb-6">
                  Contact form and Google Maps integration coming soon...
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#0472ab] text-white rounded-full font-semibold shadow-lg hover:bg-[#035d8c] transition-colors"
                >
                  Email Us Directly
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
