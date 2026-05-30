'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, DollarSign, Award, TrendingUp, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhyJoinSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users,
      end: 50000,
      suffix: '+',
      label: 'Members Worldwide',
      description: 'Join an exclusive community',
    },
    {
      icon: Globe,
      end: 133028,
      suffix: '+',
      label: 'Travel Destinations',
      description: 'Explore the world',
    },
    {
      icon: DollarSign,
      end: null,
      suffix: '',
      label: 'High Savings',
      description: 'On your vacations',
      displayText: 'High',
    },
  ];

  const features = [
    {
      icon: Award,
      title: 'AI-Powered Best Prices',
      description: 'Our AI constantly searches and compares millions of options to guarantee you the best rates available.',
    },
    {
      icon: TrendingUp,
      title: 'Lifetime Membership',
      description: 'One-time payment for lifetime access to exclusive travel deals worldwide.',
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Our dedicated team is always ready to help with emergencies and questions.',
    },
  ];

  return (
    <section id="why-join" className="py-24 relative overflow-hidden bg-gradient-to-br from-cool-50 via-warm-50 to-cool-100">
      {/* Tropical background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(4, 114, 171, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(4, 114, 171, 0.2) 0%, transparent 50%)'
      }} />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Join <span className="text-gradient">Live-Leisure</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer our members exclusive access to incredible vacation deals and one-of-a-kind experiences—all designed to make every journey unforgettable.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-[#041c28]/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-xl bg-[#041c28] flex items-center justify-center mb-6"
              >
                <feature.icon className="text-[#eee273]" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#041c28] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || stat.end === null) return;

    let startTime: number;
    const duration = 2000;
    const startValue = 0;
    const endValue = stat.end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, stat.end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-[#041c28]/50 transition-all duration-300 text-center group hover:scale-105"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#041c28] flex items-center justify-center"
      >
        <stat.icon className="text-[#eee273]" size={36} />
      </motion.div>
      <div className="text-5xl md:text-6xl font-bold text-[#eee273] mb-2">
        {stat.displayText ? stat.displayText : `${count.toLocaleString()}${stat.suffix}`}
      </div>
      <div className="text-xl font-semibold text-[#041c28] mb-2">
        {stat.label}
      </div>
      <p className="text-gray-400">
        {stat.description}
      </p>
    </motion.div>
  );
}
