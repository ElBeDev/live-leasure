'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
      rating: 5,
      text: 'Live-Leisure has transformed how we travel! We saved over $3,000 on our European vacation and the accommodations were absolutely stunning. The resort weeks are incredible value.',
      trip: 'European Tour - 3 Weeks',
    },
    {
      name: 'Michael Chen',
      location: 'San Francisco, USA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
      rating: 5,
      text: 'The Smart Weeks program is a game changer! Being able to book 6 months in advance gave us access to premium resorts in Bali and Thailand at unbeatable prices.',
      trip: 'Asia Adventure',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Miami, USA',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
      rating: 5,
      text: 'As a family of 5, traveling was always expensive. With Live-Leisure, we get spacious condos and incredible savings on hotels. We can finally afford to travel multiple times a year!',
      trip: 'Family Vacation - Cancún',
    },
    {
      name: 'David Thompson',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
      rating: 5,
      text: 'The multi-city packages are brilliant! Booked Dubai, Singapore, and Tokyo in one go. Everything was perfectly coordinated and the savings were massive.',
      trip: 'World Tour',
    },
    {
      name: 'Lisa Martinez',
      location: 'Los Angeles, USA',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
      rating: 5,
      text: 'Best investment ever! The VIP Weeks gave us access to luxury resorts we could never afford otherwise. Customer service is outstanding too.',
      trip: 'Maldives Luxury Getaway',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-warm-50">
      {/* Warm testimonial ambiance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#041c28]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#041c28]/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Members</span> Say
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join 50,000+ satisfied travelers who have transformed their vacation experiences with Live-Leisure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 hover:border-[#041c28]/50 transition-all h-full shadow-lg hover:shadow-xl"
                >
                  {/* Quote Icon */}
                  <Quote className="text-[#041c28] mb-4" size={32} />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-primary-gold fill-primary-gold"
                        size={18}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Trip Info */}
                  <div className="mb-6 px-4 py-2 bg-[#041c28]/10 rounded-full inline-block">
                    <span className="text-[#041c28] text-sm font-semibold">
                      {testimonial.trip}
                    </span>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#041c28]/50">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #041c28 !important;
          opacity: 0.5;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
