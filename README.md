# Yakouta - Luxury Jewelry E-commerce Website

A stunning, modern e-commerce website for luxury jewelry (bijouterie) built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion** animations.

## ✨ Features

- 🎨 **Luxury Design**: Elegant gold gradients, sophisticated typography, and premium aesthetics
- ⚡ **Next.js 15**: Latest Next.js with App Router for optimal performance
- 🎭 **Smooth Animations**: Beautiful scroll animations and transitions using Motion (Framer Motion)
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎯 **TypeScript**: Full type safety throughout the application
- 🎨 **Tailwind CSS 4**: Modern utility-first CSS framework
- 🧩 **Radix UI**: Accessible, unstyled UI components
- 💎 **Premium Components**:
  - Hero section with diagonal split design
  - Featured collections showcase
  - Product grids with interactive cards
  - Filtering system (category, material, price)
  - Customer testimonials carousel
  - Newsletter subscription
  - Elegant footer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Features

### Color Palette

- **Gold Champagne**: `#D4AF37`
- **Gold Rose**: `#B76E79`
- **Gold Metallic**: `#CFB53B`
- **Gold Light**: `#F4E5C3`

### Typography

- **Serif Font**: Cormorant Garamond (headings)
- **Sans Font**: Inter (body text)

### Key Sections

1. **Navbar**: Sticky navigation with scroll effects
2. **Hero**: Diagonal split design with image and content
3. **Collections**: 4 featured jewelry categories
4. **Best Sellers**: Grid of top products
5. **Shop Section**: Filterable product catalog
6. **Brand Story**: Company heritage and values
7. **Testimonials**: Customer reviews carousel
8. **Newsletter**: Email subscription
9. **Footer**: Links and social media

## 📁 Project Structure

```
bijoux/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedCollections.tsx
│   │   │   ├── BestSellers.tsx
│   │   │   ├── ShopSection.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/         # Radix UI components
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── styles/
│       ├── fonts.css       # Google Fonts
│       ├── index.css       # Main styles
│       ├── tailwind.css    # Tailwind imports
│       └── theme.css       # Design tokens
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.mjs
```

## 🛠️ Technologies

- **Framework**: Next.js 15.1.6
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS 4.0.0
- **Animations**: Motion (Framer Motion) 11.18.0
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Components**: React Hook Form (ready to add)

## 🎯 Customization

### Changing Colors

Edit the CSS variables in `src/styles/theme.css`:

```css
:root {
  --gold-champagne: #D4AF37;
  --gold-rose: #B76E79;
  --gold-metallic: #CFB53B;
  --gold-light: #F4E5C3;
}
```

### Adding Products

Update the product arrays in:
- `src/app/components/BestSellers.tsx`
- `src/app/components/ShopSection.tsx`

### Modifying Animations

Animation settings are in each component using the `motion` library from Motion (Framer Motion).

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email your support contact or create an issue in the repository.

---

**Built with ❤️ for luxury jewelry e-commerce**
