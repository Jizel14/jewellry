'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const collections = [
  {
    title: 'Rings',
    image: 'https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnQlMjBsdXh1cnklMjBnb2xkfGVufDF8fHx8MTc2OTgxMzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Timeless symbols of eternal love',
  },
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnklMjBqZXdlbHJ5JTIwY2xvc2V8ZW58MXx8fHwxNzY5ODEzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Elegance that drapes with grace',
  },
  {
    title: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1767921777873-81818b812a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFjZWxldCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2OTgxMzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Adornments for the modern woman',
  },
  {
    title: 'Earrings',
    image: 'https://images.unsplash.com/photo-1761479250419-b59d1e7b6a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGdvbGQlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk4MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Whispers of sophistication',
  },
];

export function FeaturedCollections() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
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
            Our Collections
          </h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '120px' } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            />
          </div>
        </motion.div>

        {/* Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Gold Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-500 rounded-lg" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2rem',
                      color: 'white',
                    }}
                  >
                    {collection.title}
                  </h3>
                  <p
                    className="text-white/80 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {collection.description}
                  </p>
                  <button
                    className="text-[#D4AF37] flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="text-sm tracking-widest">EXPLORE</span>
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
