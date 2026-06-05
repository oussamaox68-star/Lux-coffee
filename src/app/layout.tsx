import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'LUX Coffee - Premium Luxury Coffee Experience',
  description: 'Experience the finest luxury coffee crafted with passion and precision. Every cup tells a story of excellence at LUX Coffee.',
  keywords: ['luxury coffee', 'premium coffee', 'gourmet coffee', 'artisan coffee', 'coffee shop'],
  authors: [{ name: 'LUX Coffee' }],
  creator: 'LUX Coffee',
  publisher: 'LUX Coffee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://luxcoffee.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxcoffee.com',
    title: 'LUX Coffee - Premium Luxury Coffee Experience',
    description: 'Experience the finest luxury coffee crafted with passion and precision.',
    siteName: 'LUX Coffee',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LUX Coffee',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUX Coffee - Premium Luxury Coffee Experience',
    description: 'Experience the finest luxury coffee crafted with passion and precision.',
    images: ['/og-image.jpg'],
    creator: '@luxcoffee',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col bg-luxury-black">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
