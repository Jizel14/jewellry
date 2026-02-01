'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Slider } from '@/app/components/ui/slider';
import { Heart, ShoppingBag, Filter, X } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    name: 'Eternal Diamond Ring',
    price: 3500,
    category: 'Rings',
    material: 'Diamond',
    image: 'https://images.unsplash.com/photo-1766910699414-97d85b681c42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwZW5nYWdlbWVudCUyMHJpbmclMjBsdXh1cnl8ZW58MXx8fHwxNzY5NzA2MTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 2,
    name: 'Pearl Elegance Necklace',
    price: 2800,
    category: 'Necklaces',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1762395363448-0fca7692a4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGVhcmwlMjBuZWNrbGFjZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njk4MTM5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 3,
    name: 'Rose Gold Bracelet',
    price: 1950,
    category: 'Bracelets',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1767921777873-81818b812a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFjZWxldCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2OTgxMzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 4,
    name: 'Golden Hoop Earrings',
    price: 1200,
    category: 'Earrings',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1761479250419-b59d1e7b6a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGdvbGQlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk4MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 5,
    name: 'Sapphire Statement Ring',
    price: 4200,
    category: 'Rings',
    material: 'Diamond',
    image: 'https://images.unsplash.com/photo-1738800076744-c37b80b37d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcmluZyUyMGVsZWdhbnQlMjBsdXh1cnklMjBnb2xkfGVufDF8fHx8MTc2OTgxMzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 6,
    name: 'Champagne Gold Chain',
    price: 2100,
    category: 'Necklaces',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1586878341523-7acb55eb8c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBsdXh1cnklMjBqZXdlbHJ5JTIwY2xvc2V8ZW58MXx8fHwxNzY5ODEzOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 7,
    name: 'Silver Bracelet Charm',
    price: 850,
    category: 'Bracelets',
    material: 'Silver',
    image: 'https://images.unsplash.com/photo-1767921777873-81818b812a4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFjZWxldCUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2OTgxMzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 8,
    name: 'Diamond Stud Earrings',
    price: 3200,
    category: 'Earrings',
    material: 'Diamond',
    image: 'https://images.unsplash.com/photo-1761479250419-b59d1e7b6a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGdvbGQlMjBqZXdlbHJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3Njk4MTM5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ShopSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'];
  const materials = ['All', 'Gold', 'Diamond', 'Silver'];

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const materialMatch = selectedMaterial === 'All' || product.material === selectedMaterial;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && materialMatch && priceMatch;
  });

  return (
    <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2
            className="inline-block relative mb-4 text-3xl sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'var(--font-serif)',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Shop Our Collection
          </h2>
        </motion.div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6 flex justify-end">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
            <span className="text-sm">{showFilters ? 'Close' : 'Filter'}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block lg:w-64 flex-shrink-0`}
          >
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              {/* Category Filter */}
              <div className="mb-6 sm:mb-8">
                <h3
                  className="mb-3 sm:mb-4 text-black text-lg sm:text-xl"
                  style={{
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6 sm:mb-8">
                <h3
                  className="mb-3 sm:mb-4 text-black text-lg sm:text-xl"
                  style={{
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`w-full text-left px-4 py-2 rounded transition-all duration-300 ${
                        selectedMaterial === material
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3
                  className="mb-3 sm:mb-4 text-black text-lg sm:text-xl"
                  style={{
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  Price Range
                </h3>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={5000}
                  step={100}
                  className="mb-4"
                />
                <div
                  className="flex justify-between text-sm"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: '#D4AF37',
                  }}
                >
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Heart className="w-4 h-4 text-gray-700 hover:fill-[#B76E79] hover:text-[#B76E79]" />
                    </button>
                    <button className="absolute inset-x-3 bottom-3 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white py-2 rounded flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingBag className="w-4 h-4" />
                      <span className="text-sm tracking-wider" style={{ fontFamily: 'var(--font-sans)' }}>
                        ADD TO CART
                      </span>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.125rem',
                        color: '#000',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
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
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p
                  className="text-gray-500 text-xl"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
