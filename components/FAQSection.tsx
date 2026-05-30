'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Live-Leisure membership?',
      answer: 'Live-Leisure is a lifetime travel club membership offering exclusive access to resort weeks worldwide, over 1 million hotels, discounted flights, cruises, and more. Our AI-powered platform searches millions of options to find you the best rates. With a one-time membership fee, you gain access to high savings on your vacations for life.',
    },
    {
      question: 'How does the AI-powered pricing work?',
      answer: 'Our advanced AI algorithms continuously scan and compare millions of travel options across hundreds of providers in real-time. It analyzes pricing patterns, availability, and demand to automatically present you with the best possible rates—often better than what you\'d find searching manually.',
    },
    {
      question: 'How do Resort Weeks work?',
      answer: 'Resort Weeks offer 7-night stays in fully equipped, resort-style condos. We have three types: Last Minute Weeks ($399) for bookings within 30 days, Smart Weeks ($499) for planning up to 6 months ahead, and VIP Weeks ($499-$2999) for premium luxury resorts.',
    },
    {
      question: 'What\'s the difference between Last Minute, Smart, and VIP Weeks?',
      answer: 'Last Minute Weeks are perfect for spontaneous travel at $399 with 5,000+ daily options. Smart Weeks at $499 let you plan ahead (up to 6 months) with thousands of worldwide options. VIP Weeks ($499-$2999) offer premium accommodations at over 100,000 luxury resorts.',
    },
    {
      question: 'How much can I really save with Live-Leisure?',
      answer: 'Members enjoy high savings on accommodations compared to public rates. Our price match guarantee ensures you get the best deal, plus an additional 5% discount if you find a better price elsewhere.',
    },
    {
      question: 'Are there any hidden fees or annual costs?',
      answer: 'No hidden fees! Live-Leisure membership costs just $9.99 USD per month. You only pay for your bookings (resort weeks, hotels, flights, etc.) at our exclusive member rates. Cancel anytime.',
    },
    {
      question: 'How far in advance can I book?',
      answer: 'It depends on the type of booking. Smart Weeks can be booked up to 6 months in advance, while Last Minute Weeks are available within 30 days of check-in. VIP Weeks and hotels have varying availability windows.',
    },
    {
      question: 'What if I need to cancel or change my reservation?',
      answer: 'Cancellation policies vary by property and booking type. We recommend reviewing the specific terms during booking. Our 24/7 support team is always available to assist with changes or cancellations.',
    },
    {
      question: 'Do you offer support during my trip?',
      answer: 'Yes! We provide 24/7 emergency support for all our members. Whether you need assistance before, during, or after your trip, our dedicated team is just a call away.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply click "Join Now" to become a member. Once enrolled, you\'ll get immediate access to our booking platform with all exclusive deals and can start planning your dream vacation right away.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-cool-50">
      {/* Clean, professional FAQ ambiance */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#041c28]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#041c28]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#041c28]/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="text-[#041c28]" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-700">
            Got questions? We've got answers. Find everything you need to know about Live-Leisure membership.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-white/80 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300 shadow-lg hover:shadow-xl ${
                  openIndex === index
                    ? 'border-[#041c28] shadow-xl'
                    : 'border-gray-200 hover:border-[#041c28]/50'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`${
                        openIndex === index ? 'text-[#041c28]' : 'text-gray-600'
                      } transition-colors`}
                      size={24}
                    />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Still have questions? Our team is here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#041c28] text-white rounded-full font-semibold text-lg shadow-2xl hover:bg-[#072d3e] transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
