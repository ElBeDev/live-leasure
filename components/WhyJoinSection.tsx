'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, TrendingUp, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const featureIcons = [Award, TrendingUp, Shield];

function CountUp({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2000;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, end]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function WhyJoinSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { t } = useLanguage();

  const statsData = [
    { end: 500000, suffix: t.whyJoin.stats[0].suffix, label: t.whyJoin.stats[0].label },
    { end: 133000, suffix: t.whyJoin.stats[1].suffix, label: t.whyJoin.stats[1].label },
    { end: 70, suffix: t.whyJoin.stats[2].suffix, label: t.whyJoin.stats[2].label },
  ];

  return (
    <section id="why-join" className="py-32 relative bg-[#061e2c]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.whyJoin.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.whyJoin.title}
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.whyJoin.subtitle}
          </p>
        </motion.div>

        {/* Stats — números grandes, minimalistas */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#eee273]/10 mb-20">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-[#061e2c] p-12 text-center"
            >
              <div className="font-playfair font-bold text-[#eee273] mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {inView ? <CountUp end={stat.end} suffix={stat.suffix} inView={inView} /> : `0${stat.suffix}`}
              </div>
              <div className="font-sans text-white/40 text-xs tracking-[0.2em] uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features — columnas simples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#eee273]/10">
          {t.whyJoin.features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group bg-[#061e2c] p-10 hover:bg-[#072d3e]/40 transition-colors duration-300"
              >
                <div className="mb-5 text-[#eee273]/50 group-hover:text-[#eee273] transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair font-semibold text-[#eee273] text-xl mb-3">{feature.title}</h3>
                <p className="font-sans text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{feature.description}</p>
                <div className="mt-6 h-px w-0 bg-[#eee273]/40 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />
    </section>
  );
}
