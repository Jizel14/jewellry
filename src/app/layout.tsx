import type { Metadata } from 'next'
import '@/styles/index.css'

export const metadata: Metadata = {
  title: 'Juman',
  description: 'Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of luxury, craftsmanship, and timeless beauty.',
  keywords: ['jewelry', 'bijouterie', 'luxury jewelry', 'diamond rings', 'necklaces', 'bracelets', 'earrings', 'fine jewelry'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        {children}
      </body>
    </html>
  )
}
