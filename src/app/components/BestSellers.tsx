'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Eternal Diamond Ring',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1766910699414-97d85b681c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBsdXh1cnl8ZW58MXx8fHwxNzY5NzA2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Pearl Elegance Necklace',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1762395363448-0fca7692a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVhcmwlMjBuZWNrbGFjZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4MTM5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Rose Gold Bracelet',
    price: 1950,
    image: 'https://images.unsplash.com/photo-1767921777873-81818b812a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFjZWxldCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2OTgxMzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Golden Hoop Earrings',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1761479250419-b59d1e7b6a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGdvbGQlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk4MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Sapphire Statement Ring',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnQlMjBsdXh1cnklMjBnb2xkfGVufDF8fHx8MTc2OTgxMzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Champagne Gold Chain',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnklMjBqZXdlbHJ5JTIwY2xvc2V8ZW58MXx8fHwxNzY5ODEzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function BestSellers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
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
            Best Sellers
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Discover our most coveted pieces, handpicked by connoisseurs of fine jewelry
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Wishlist Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform translate-y-[-60px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg">
                  <Heart className="w-5 h-5 text-gray-700 hover:fill-[#B76E79] hover:text-[#B76E79] transition-colors duration-300" />
                </button>

                {/* Add to Cart Button */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={hoveredId === product.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="tracking-wider">ADD TO CART</span>
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: '#000',
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="tracking-wider"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.25rem',
                    background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            className="px-10 py-4 bg-white border-2 border-[#D4AF37] text-black relative overflow-hidden group hover:text-white transition-colors duration-500"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="relative z-10 tracking-widest">VIEW ALL PRODUCTS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
