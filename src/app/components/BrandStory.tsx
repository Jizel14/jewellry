'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Gem, Shield } from 'lucide-react';

export function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Award,
      title: 'Certified Gold',
      description: 'Every piece is crafted with certified precious metals',
    },
    {
      icon: Gem,
      title: 'Handcrafted',
      description: 'Meticulously designed by master artisans',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your transaction is protected and encrypted',
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1721103427881-efdc0c7d011f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMGpld2VscnklMjBnb2xkJTIwYXJ0aXNhbnxlbnwxfHx8fDE3Njk4MTM5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Handcrafted jewelry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#D4AF37] rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '3.5rem',
                lineHeight: '1.2',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A Legacy of Excellence
            </h2>

            <div className="space-y-4 mb-10">
              <p
                className="text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                For over three decades, Juman has been the epitome of luxury jewelry craftsmanship. 
                Each piece in our collection is a testament to our unwavering commitment to quality, 
                authenticity, and timeless elegance.
              </p>
              <p
                className="text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Our master artisans combine traditional techniques with contemporary design, 
                using only the finest materials sourced from around the world. Every gemstone is 
                hand-selected, every setting is precision-crafted, and every piece tells a unique story.
              </p>
              <p
                className="text-gray-700 text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                When you choose Juman, you&apos;re not just purchasing jewelry—you&apos;re investing in 
                an heirloom that will be cherished for generations to come.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B76E79] shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: '#000',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
