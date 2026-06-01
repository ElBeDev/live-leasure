'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '@/lib/LanguageContext';

const destinationImages = [
  '/images/dubai.jpg', '/images/bali.jpg', '/images/paris.jpg', '/images/cancun.jpg',
  '/images/tokyo.jpg', '/images/new-york.jpg', '/images/maldives.jpg', '/images/rome.jpg',
];

export default function DestinationsSection() {
  const { t } = useLanguage();

  const destinations = t.destinations.items.map((item, i) => ({
    ...item,
    image: destinationImages[i],
  }));

  return (
    <section id="destinations" className="py-32 relative bg-[#061e2c]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#eee273]/40" />
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">{t.destinations.eyebrow}</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {t.destinations.title}
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {t.destinations.subtitle}
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-12"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            modules={[Autoplay, Pagination]}
            className="destinations-swiper pb-10"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={destination.name}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ height: '400px' }}
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041c28]/90 via-[#041c28]/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="h-px w-8 bg-[#eee273]/50 mb-3" />
                    <h3 className="font-playfair font-bold text-[#eee273] text-2xl mb-1">{destination.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-white/50 text-xs flex items-center gap-1">
                        <MapPin size={12} strokeWidth={1.5} />
                        {destination.country}
                      </p>
                      <p className="font-sans text-[#eee273]/60 text-xs tracking-wider">{destination.properties} {t.destinations.propertiesLabel}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <style jsx global>{`
        .destinations-swiper .swiper-pagination-bullet {
          background: rgba(238,226,115,0.4) !important;
        }
        .destinations-swiper .swiper-pagination-bullet-active {
          background: #eee273 !important;
        }
      `}</style>
    </section>
  );
}
