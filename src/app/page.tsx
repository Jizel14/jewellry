import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { FeaturedCollections } from '@/app/components/FeaturedCollections';
import { BestSellers } from '@/app/components/BestSellers';
import { ShopSection } from '@/app/components/ShopSection';
import { BrandStory } from '@/app/components/BrandStory';
import { Testimonials } from '@/app/components/Testimonials';
import { Newsletter } from '@/app/components/Newsletter';
import { Footer } from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <ShopSection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
