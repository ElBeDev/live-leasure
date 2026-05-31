'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const testimonials = [
    { name: 'Sarah Johnson', location: 'New York, USA', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80', rating: 5, text: 'Live-Leisure has transformed how we travel! We saved over $3,000 on our European vacation and the accommodations were absolutely stunning.', trip: 'European Tour' },
    { name: 'Michael Chen', location: 'San Francisco, USA', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80', rating: 5, text: 'The Smart Weeks program is a game changer! Being able to book 6 months in advance gave us access to premium resorts in Bali and Thailand at unbeatable prices.', trip: 'Asia Adventure' },
    { name: 'Emma Rodriguez', location: 'Miami, USA', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80', rating: 5, text: 'As a family of 5, traveling was always expensive. With Live-Leisure, we get spacious condos and incredible savings. We can finally afford to travel multiple times a year!', trip: 'Cancún Family Vacation' },
    { name: 'David Thompson', location: 'London, UK', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80', rating: 5, text: 'The multi-city packages are brilliant! Booked Dubai, Singapore, and Tokyo in one go. Everything was perfectly coordinated and the savings were massive.', trip: 'World Tour' },
    { name: 'Lisa Martinez', location: 'Los Angeles, USA', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80', rating: 5, text: 'Best investment ever! The VIP Weeks gave us access to luxury resorts we could never afford otherwise. Customer service is outstanding too.', trip: 'Maldives Getaway' },
  ];

  return (
    <section className="py-32 relative bg-[#041c28]">
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
            <span className="font-sans text-[#eee273]/60 text-xs tracking-[0.35em] uppercase">Member Stories</span>
            <div className="h-px w-12 bg-[#eee273]/40" />
          </div>
          <h2 className="font-playfair font-bold text-[#eee273] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            What Our Members Say
          </h2>
          <p className="font-sans text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Join 500,000+ satisfied travelers who have transformed their vacation experiences with Live-Leisure.
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
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination]}
            className="testimonials-swiper pb-10"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="border border-[#eee273]/10 bg-[#041c28] p-8 h-full flex flex-col group hover:border-[#eee273]/30 transition-colors duration-300 mx-px">

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-[#eee273]/60 fill-[#eee273]/60" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-playfair italic text-white/55 text-sm leading-relaxed flex-grow mb-6 group-hover:text-white/70 transition-colors duration-300">
                    "{t.text}"
                  </p>

                  {/* Trip */}
                  <div className="mb-5">
                    <span className="font-sans text-[#eee273]/40 text-[10px] tracking-[0.2em] uppercase">{t.trip}</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-[#eee273]/10 mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden flex-shrink-0">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-sans text-[#eee273]/70 text-sm">{t.name}</div>
                      <div className="font-sans text-white/30 text-xs">{t.location}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eee273]/20 to-transparent" />

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(238,226,115,0.3) !important;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #eee273 !important;
        }
      `}</style>
    </section>
  );
}
