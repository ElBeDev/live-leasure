'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const links = {
    Navigate: [
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

  return (
    <footer className="bg-[#020f18] text-white/40">

      {/* Línea dorada superior */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#eee273]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative w-40 h-14 mb-6">
              <Image src="/images/LogoLB.png" alt="Live-Leisure" fill className="object-contain object-left" />
            </div>
            <p className="font-sans text-sm leading-relaxed mb-8 max-w-xs">
              Your gateway to exclusive travel experiences. Premium membership with lifetime access to high savings worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.5} className="text-[#eee273]/30 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs leading-relaxed">Villas Vta Loc C 46 Int A, Villas Vta, Las Glorias C.P. 48333, Puerto Vallarta, Jal.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} strokeWidth={1.5} className="text-[#eee273]/30 flex-shrink-0" />
                <span className="font-sans text-xs">322 225 2985</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} strokeWidth={1.5} className="text-[#eee273]/30 flex-shrink-0" />
                <span className="font-sans text-xs">reservations@live-leasure.com</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-sans text-[#eee273]/60 text-xs tracking-[0.2em] uppercase mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-sans text-sm text-white/35 hover:text-[#eee273]/70 transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#eee273]/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/25">
            © {new Date().getFullYear()} Live-Leisure. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white/25 hover:text-[#eee273]/60 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white/25 hover:text-[#eee273]/60 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
