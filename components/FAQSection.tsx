'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { question: 'What is Live-Leisure membership?', answer: 'Live-Leisure is a lifetime travel club membership offering exclusive access to resort weeks worldwide, over 1 million hotels, discounted flights, cruises, and more. With a one-time membership fee, you gain access to high savings on your vacations for life.' },
    { question: 'How do Resort Weeks work?', answer: 'Resort Weeks offer 7-night stays in fully equipped, resort-style condos. We have three types: Last Minute Weeks ($399) for bookings within 30 days, Smart Weeks ($499) for planning up to 6 months ahead, and VIP Weeks ($499–$2,999) for premium luxury resorts.' },
    { question: "What's the difference between Last Minute, Smart, and VIP Weeks?", answer: 'Last Minute Weeks are perfect for spontaneous travel at $399 with 5,000+ daily options. Smart Weeks at $499 let you plan ahead (up to 6 months) with thousands of worldwide options. VIP Weeks ($499–$2,999) offer premium accommodations at over 100,000 luxury resorts.' },
    { question: 'How much can I really save with Live-Leisure?', answer: 'Members enjoy high savings on accommodations compared to public rates. Our price match guarantee ensures you get the best deal, plus an additional 5% discount if you find a better price elsewhere.' },
    { question: 'Are there any hidden fees or annual costs?', answer: 'No hidden fees. Live-Leisure membership costs just $9.99 USD per month. You only pay for your bookings at our exclusive member rates. Cancel anytime.' },
    { question: 'How far in advance can I book?', answer: 'Smart Weeks can be booked up to 6 months in advance, while Last Minute Weeks are available within 30 days of check-in. VIP Weeks and hotels have varying availability windows.' },
    { question: 'What if I need to cancel or change my reservation?', answer: 'Cancellation policies vary by property and booking type. We recommend reviewing the specific terms during booking. Our 24/7 support team is always available to assist with changes or cancellations.' },
    { question: 'Do you offer support during my trip?', answer: 'Yes. We provide 24/7 emergency support for all our members. Whether you need assistance before, during, or after your trip, our dedicated team is just a call away.' },
    { question: 'How do I get started?', answer: "Simply click \"Join Now\" to become a member. Once enrolled, you'll get immediate access to our booking platform with all exclusive deals and can start planning your dream vacation right away." },
  ];

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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">Questions</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Frequently Asked
          </h2>
          <p className="font-sans text-white/50 text-lg leading-relaxed">
            Everything you need to know about Live-Leisure membership.
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
          <p className="font-sans text-white/40 text-sm mb-6">Still have questions? Our team is here to help.</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-[#eee273]/30 text-[#eee273] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:border-[#eee273] hover:bg-[#eee273]/5 transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
