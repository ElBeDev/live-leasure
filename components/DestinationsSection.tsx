'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function DestinationsSection() {
  // Las imágenes deben estar en public/images/ con nombres en minúsculas y extensión .jpg
  // Por ejemplo: dubai.jpg, bali.jpg, paris.jpg, cancun.jpg, tokyo.jpg, new-york.jpg, maldives.jpg, rome.jpg
  const destinations = [
    {
      name: 'Dubai',
      country: 'United Arab Emirates',
      image: '/images/dubai.jpg',
      rating: 4.9,
      properties: '1,250+',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      image: '/images/bali.jpg',
      rating: 4.8,
      properties: '980+',
    },
    {
      name: 'Paris',
      country: 'France',
      image: '/images/paris.jpg',
      rating: 4.9,
      properties: '2,100+',
    },
    {
      name: 'Cancún',
      country: 'Mexico',
      image: '/images/cancun.jpg',
      rating: 4.7,
      properties: '1,500+',
    },
    {
      name: 'Tokyo',
      country: 'Japan',
      image: '/images/tokyo.jpg',
      rating: 4.9,
      properties: '1,800+',
    },
    {
      name: 'New York',
      country: 'United States',
      image: '/images/new-york.jpg',
      rating: 4.8,
      properties: '3,200+',
    },
    {
      name: 'Maldives',
      country: 'Maldives',
      image: '/images/maldives.jpg',
      rating: 5.0,
      properties: '450+',
    },
    {
      name: 'Rome',
      country: 'Italy',
      image: '/images/rome.jpg',
      rating: 4.9,
      properties: '1,600+',
    },
  ];

  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-white">
      {/* World map subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Cpath fill="%23FF8C42" d="M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 L1200,600 L0,600 Z"/%3E%3C/svg%3E")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#041c28]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

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
            Explore <span className="text-gradient">Destinations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            From tropical getaways to city escapes, choose from 133,028+ destinations worldwide.
          </p>
          <div className="flex items-center justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#041c28]" size={20} />
              <span className="font-semibold">All Over the World</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-primary-gold" size={20} />
              <span className="font-semibold">Premium Locations</span>
            </div>
          </div>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pb-16"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="destinations-swiper"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={destination.name} className="!w-[350px] !h-[450px]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="text-3xl font-bold text-[#eee273] mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-gray-300 mb-4 flex items-center gap-2">
                        <MapPin size={16} />
                        {destination.country}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="text-primary-gold fill-primary-gold" size={18} />
                          <span className="text-[#eee273] font-semibold">{destination.rating}</span>
                        </div>
                        <div className="text-[#eee273] font-semibold">
                          {destination.properties} Properties
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-6 right-6 px-4 py-2 bg-[#041c28] rounded-full text-[#eee273] font-semibold text-sm shadow-lg"
                  >
                    View Deals
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 201, 167, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#041c28] text-[#eee273] rounded-full font-semibold text-lg shadow-2xl hover:bg-[#072d3e] transition-colors"
          >
            Explore All Destinations
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .destinations-swiper {
          padding: 40px 0 80px !important;
        }
        
        .destinations-swiper .swiper-pagination-bullet {
          background: #041c28 !important;
          opacity: 0.5;
        }
        
        .destinations-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
        
        .destinations-swiper .swiper-button-next,
        .destinations-swiper .swiper-button-prev {
          color: #041c28 !important;
          background: rgba(4, 114, 171, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        
        .destinations-swiper .swiper-button-next:after,
        .destinations-swiper .swiper-button-prev:after {
          font-size: 20px !important;
        }
      `}</style>
    </section>
  );
}
