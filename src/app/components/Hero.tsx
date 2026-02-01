'use client';

import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Desktop: Diagonal Split Container */}
      <div className="hidden lg:flex absolute inset-0">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-1/2 h-full"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1721103427863-7a675c7423a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwd29tYW4lMjBoYW5kJTIwZWxlZ2FudCUyMHJpbmd8ZW58MXx8fHwxNzY5ODEzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </motion.div>

        {/* Right Section - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="relative w-1/2 h-full bg-black flex items-center justify-center"
        >
          {/* Gold Decorative Lines */}
          <div className="absolute top-20 right-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div className="absolute bottom-20 left-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B76E79] to-transparent" />

          <div className="max-w-xl px-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '4rem',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #D4AF37 0%, #CFB53B 50%, #B76E79 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Where Elegance Becomes Timeless
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-white/80 mb-10 text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of luxury, 
              craftsmanship, and timeless beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-6 justify-center"
            >
              <button
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white relative overflow-hidden group"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="relative z-10 tracking-wider">SHOP COLLECTION</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] relative overflow-hidden group hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="relative z-10 tracking-wider">DISCOVER OUR STORY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="lg:hidden relative min-h-screen flex flex-col">
        {/* Mobile Image Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[50vh] w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1721103427863-7a675c7423a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwd29tYW4lMjBoYW5kJTIwZWxlZ2FudCUyMHJpbmd8ZW58MXx8fHwxNzY5ODEzOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury jewelry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </motion.div>

        {/* Mobile Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex-1 bg-black flex items-center justify-center px-6 py-12"
        >
          <div className="max-w-xl text-center">
            <h1
              className="mb-6 text-3xl sm:text-4xl"
              style={{
                fontFamily: 'var(--font-serif)',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #D4AF37 0%, #CFB53B 50%, #B76E79 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Where Elegance Becomes Timeless
            </h1>

            <p
              className="text-white/80 mb-8 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of luxury, 
              craftsmanship, and timeless beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white relative overflow-hidden group"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="relative z-10 tracking-wider text-sm sm:text-base">SHOP COLLECTION</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#D4AF37] text-[#D4AF37] relative overflow-hidden group hover:text-white transition-colors duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="relative z-10 tracking-wider text-sm sm:text-base">DISCOVER OUR STORY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
