'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#D4AF37] opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[#B76E79] opacity-20 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B76E79] shadow-2xl">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>

          {/* Title */}
          <h2
            className="mb-4 text-3xl sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #D4AF37 0%, #CFB53B 50%, #B76E79 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Join Our World of Elegance
          </h2>

          {/* Description */}
          <p
            className="text-white/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Subscribe to our newsletter and be the first to discover new collections, 
            exclusive offers, and timeless jewelry inspiration.
          </p>

          {/* Newsletter Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-[#D4AF37]/50 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] transition-all duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#B76E79]/20 rounded-lg -z-10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-lg relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <span className="relative z-10 tracking-widest">SUBSCRIBE</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </button>
          </motion.form>

          {/* Privacy Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/50 text-sm mt-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
