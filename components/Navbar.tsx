'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#why-join', label: 'Why Join' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#041c28]/95 backdrop-blur-md border-b border-[#eee273]/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Línea dorada superior — solo cuando no scrolleado */}
      {!isScrolled && (
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-44 h-14">
              <Image
                src={isScrolled ? '/images/LogoLB.png' : '/images/LogoL.png'}
                alt="Live-Leisure"
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07 }}
              >
                <Link
                  href={link.href}
                  className="relative font-sans text-[#eee273]/70 hover:text-[#eee273] text-sm tracking-[0.08em] uppercase transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#eee273]/60 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons — estilo luxury */}
          <div className="hidden md:flex items-center gap-5">
            <motion.a
              href="https://login.live-leisure.com"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-sans text-[#eee273]/70 hover:text-[#eee273] text-sm tracking-[0.08em] uppercase transition-colors duration-300"
            >
              Login
            </motion.a>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#eee273] text-[#041c28] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300"
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#eee273] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden bg-[#041c28]/98 backdrop-blur-md border-t border-[#eee273]/10"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans text-[#eee273]/70 hover:text-[#eee273] text-sm tracking-[0.1em] uppercase transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 space-y-3 border-t border-[#eee273]/10">
                <a
                  href="https://login.live-leisure.com"
                  className="block w-full text-center py-3 font-sans text-[#eee273]/70 hover:text-[#eee273] text-sm tracking-[0.1em] uppercase border border-[#eee273]/20 hover:border-[#eee273]/50 transition-all duration-300"
                >
                  Login
                </a>
                <button className="block w-full text-center py-3 bg-[#eee273] text-[#041c28] font-sans font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white transition-colors duration-300">
                  Join Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
