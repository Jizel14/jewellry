'use client';

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    shop: ['All Products', 'Rings', 'Necklaces', 'Bracelets', 'Earrings'],
    about: ['Our Story', 'Craftsmanship', 'Sustainability', 'Press'],
    support: ['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #D4AF37 0%, #CFB53B 50%, #B76E79 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Juman
            </h2>
            <p
              className="text-white/70 mb-6 max-w-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Crafting timeless elegance since 1990. Each piece tells a story of luxury, 
              craftsmanship, and unwavering commitment to excellence.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-[#D4AF37] hover:to-[#B76E79] transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#D4AF37',
              }}
            >
              Shop
            </h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#D4AF37',
              }}
            >
              About
            </h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#D4AF37',
              }}
            >
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p
              className="text-white/50 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              © 2026 Juman Jewelry. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
