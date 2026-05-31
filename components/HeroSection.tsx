'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Globe, Award, Star } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { value: '70+', label: 'Countries' },
    { value: '500K+', label: 'Members' },
    { value: '60%', label: 'Avg. Savings' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#041c28]">
      {/* Full-screen background image — dark overlay elegante */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay oscuro profundo, estilo Belmond/Four Seasons */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041c28]/80 via-[#041c28]/60 to-[#041c28]/90" />
      </div>

      {/* Línea dorada decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/40 to-transparent z-20" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-40 text-center">

        {/* Eyebrow label — estilo club exclusivo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-12 bg-[#eee273]/50" />
          <span className="font-sans text-[#eee273]/80 text-xs tracking-[0.35em] uppercase">
            Private Travel Membership
          </span>
          <div className="h-px w-12 bg-[#eee273]/50" />
        </motion.div>

        {/* Headline principal — Playfair Display, estilo editorial */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="font-playfair font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: '#eee273' }}
        >
          <TypeAnimation
            sequence={[
              'High Savings',
              2500,
              'Travel the World',
              2500,
              'Live Your Dreams',
              2500,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </motion.h1>

        {/* Subtítulo en italic — Playfair italic, estilo Four Seasons */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="font-playfair italic text-white/70 text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Access exclusive deals on hotels, flights, cruises, and tours worldwide.
        </motion.p>

        {/* CTAs — estilo luxury outlined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
        >
          {/* Botón primario — gold filled */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-10 py-4 bg-[#eee273] text-[#041c28] font-sans font-semibold text-sm tracking-[0.12em] uppercase transition-all duration-300 hover:bg-white"
          >
            <span>Become a Member</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </motion.button>

          {/* Botón secundario — ghost dorado */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 border border-[#eee273]/50 text-[#eee273] font-sans font-semibold text-sm tracking-[0.12em] uppercase hover:border-[#eee273] hover:bg-[#eee273]/5 transition-all duration-300"
          >
            Explore Benefits
          </motion.button>
        </motion.div>

        {/* Separador dorado */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-24 h-px bg-[#eee273]/40 mx-auto mb-16"
        />

        {/* Stats — minimalistas, sin cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="font-playfair font-bold text-[#eee273] mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                {stat.value}
              </div>
              <div className="font-sans text-white/50 text-xs tracking-[0.2em] uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Línea dorada decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/30 to-transparent z-20" />

      {/* Scroll indicator elegante */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#eee273]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beach/Travel Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#041c28]/50" />
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url("/images/1.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px)'
          }}
        />
        {/* Ocean wave pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="%23FFB627" stroke-width="0.5"/%3E%3Cpath d="M0 15 Q25 5 50 15 T100 15" fill="none" stroke="%23FF8C42" stroke-width="0.3" opacity="0.5"/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          animation: 'wave 20s linear infinite'
        }} />
      </div>

      {/* Luminous floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#041c28]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#041c28]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Main Headline with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#eee273] mb-6"
          >
            <TypeAnimation
              sequence={[
                'High Savings',
                2000,
                'Travel the World',
                2000,
                'Live Your Dreams',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-xl md:text-2xl text-white drop-shadow-lg mb-12 max-w-3xl mx-auto font-medium"
          >
            Access exclusive deals on hotels, flights, cruises, and tours worldwide.
            Powered by AI to find you the best prices every time. 
            Your journey to exceptional vacations begins here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-[#041c28] text-[#eee273] rounded-full font-semibold text-lg shadow-xl flex items-center space-x-2 hover:bg-[#072d3e] transition-colors"
            >
              <span>Join Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-dark text-[#eee273] rounded-full font-semibold text-lg border border-white/30 hover:border-white/50 transition-colors backdrop-blur-md"
            >
              Explore Benefits
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-dark p-6 rounded-2xl border border-white/20 backdrop-blur-md"
              >
                <stat.icon className="text-[#041c28] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-[#eee273] mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
