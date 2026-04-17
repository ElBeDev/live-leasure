'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-warm-100">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#0472ab] hover:text-[#035a8a] transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-gray-600">Last updated: January 26, 2026</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-lg space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Live-Leisure's services, you agree to be bound by these Terms and Conditions. 
                  If you do not agree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Membership Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Live-Leisure provides a premium travel membership platform offering access to exclusive travel deals, 
                  accommodations, and experiences worldwide. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access to discounted hotel rates and resort accommodations</li>
                  <li>AI-powered travel recommendations and booking assistance</li>
                  <li>Exclusive member-only deals and offers</li>
                  <li>24/7 customer support for travel-related inquiries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Membership Fees and Payment</h2>
                <p className="text-gray-700 leading-relaxed">
                  Membership fees are charged according to the plan you select. All fees are non-refundable unless 
                  otherwise stated. Payment must be made in advance and will be automatically renewed unless you 
                  cancel your membership before the renewal date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking and Reservations</h2>
                <p className="text-gray-700 leading-relaxed">
                  All bookings are subject to availability. Prices and availability are subject to change without notice. 
                  You are responsible for reviewing all booking details before confirming your reservation. Cancellation 
                  and modification policies vary by property and service provider.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">As a member, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide accurate and complete information when creating your account</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the services in compliance with all applicable laws and regulations</li>
                  <li>Not share your membership benefits with non-members</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Live-Leisure acts as an intermediary between you and service providers. We are not responsible for 
                  the quality, safety, or legality of accommodations, transportation, or other services provided by 
                  third parties. Our liability is limited to the amount you paid for your membership.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel your membership at any time by contacting our support team. Cancellations will be 
                  effective at the end of your current billing period. No refunds will be provided for partial months 
                  or unused benefits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective 
                  immediately upon posting to our website. Your continued use of our services after changes are posted 
                  constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p><strong>Email:</strong> reservations@live-leasure.com</p>
                  <p><strong>Phone:</strong> 322 225 2985</p>
                  <p><strong>Address:</strong> 2688 SW 137 Avenue, Miami, Florida 33175</p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
