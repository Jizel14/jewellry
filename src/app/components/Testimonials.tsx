'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Laurent',
    role: 'New York',
    quote: 'The craftsmanship is absolutely exquisite. My engagement ring from Juman is a work of art that I will treasure forever. The attention to detail is unmatched.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Isabella Martinez',
    role: 'Los Angeles',
    quote: 'I have purchased several pieces from Juman, and each one exceeds my expectations. The quality is exceptional, and the customer service is impeccable.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Olivia Chen',
    role: 'San Francisco',
    quote: 'Juman jewelry is the perfect blend of classic elegance and modern sophistication. I receive compliments every time I wear my necklace.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'London',
    quote: 'The most luxurious jewelry I have ever owned. The gold has a beautiful luster, and the diamonds sparkle brilliantly. Worth every penny.',
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#B76E79] opacity-10 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="inline-block relative mb-4"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '3.5rem',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            What Our Clients Say
          </h2>
          <p
            className="text-white/70 text-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Testimonials from our valued customers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-[#D4AF37]/30 shadow-2xl">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]"
                />
              ))}
            </div>

            {/* Quote */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p
                className="text-white/90 text-xl text-center mb-8 leading-relaxed italic"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="text-center">
                <h4
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {testimonials[currentIndex].name}
                </h4>
                <p
                  className="text-white/60"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#D4AF37] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
