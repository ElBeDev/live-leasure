'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Sparkles, Globe, Award } from 'lucide-react';

export default function HeroSection() {
  const stats = [
    { icon: Globe, value: '70+', label: 'Worldwide' },
    { icon: Sparkles, value: 'AI', label: 'Powered' },
    { icon: Award, value: 'High', label: 'Savings' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beach/Travel Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0472ab]/50" />
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0472ab]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0472ab]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0472ab]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center space-x-2 px-4 py-2 glass-dark rounded-full mb-8 border border-white/20"
          >
            <Sparkles className="text-[#0472ab]" size={20} />
            <span className="text-white text-sm font-medium">Premium Travel Membership</span>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
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
              className="group px-8 py-4 bg-[#0472ab] text-white rounded-full font-semibold text-lg shadow-xl flex items-center space-x-2 hover:bg-[#035d8c] transition-colors"
            >
              <span>Join Now</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-dark text-white rounded-full font-semibold text-lg border border-white/30 hover:border-white/50 transition-colors backdrop-blur-md"
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
                <stat.icon className="text-[#0472ab] mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
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
