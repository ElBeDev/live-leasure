'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const footerLinks = {
    Navigation: [
      { label: 'Benefits', href: '#benefits' },
      { label: 'Why Join', href: '#why-join' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Destinations', href: '#destinations' },
    ],
    Support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
    ],
    Legal: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-40 h-16 mb-4"
            >
              <Image
                src="/images/LogoLB.png"
                alt="Live-Leisure"
                fill
                className="object-contain object-left"
              />
            </motion.div>
            <p className="text-gray-400 mb-6">
              Your gateway to exclusive travel experiences. Our AI-powered platform finds you high savings on your next vacation with our premium membership.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-[#041c28]" />
                <span>Villas Vta Loc C 46 Int A, Villas Vta, Las Glorias C.P. 48333, Puerto Vallarta, Jal.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-[#041c28]" />
                <span>322 225 2985</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-[#041c28]" />
                <span>reservations@live-leasure.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#041c28] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 glass rounded-2xl"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to get exclusive deals and travel tips
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-dark-800 border border-gray-600 rounded-full focus:outline-none focus:border-[#041c28] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-[#041c28] text-white rounded-full font-semibold hover:bg-[#072d3e] hover:shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Live-Leisure. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-[#041c28] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
