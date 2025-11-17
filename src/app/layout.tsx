import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/MotionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://BhuYanthra.vercel.app'),
  title: 'BhuYanthra – Satellite-powered crop health insights',
  description: 'BhuYanthra uses AI and satellite data to detect crop stress and alert farmers via a multilingual mobile app and chatbot. Providing real-time NDVI/NDWI insights for every farmer.',
  keywords: 'satellite imagery, crop health monitoring, NDVI, NDWI, precision agriculture, AI farming, crop stress detection, ISRO Bhuvan, Sentinel-2, multilingual chatbot',
  icons: {
    icon: '/BhuYanthra.png',
    shortcut: '/BhuYanthra.png',
    apple: '/BhuYanthra.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/BhuYanthra.png',
    },
  },
  openGraph: {
    title: 'BhuYanthra – Satellite-powered crop health insights',
    description: 'AI-powered satellite monitoring for crop health. Real-time alerts, multilingual support, and precision agriculture insights for farmers.',
    type: 'website',
    images: ['/BhuYanthra.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BhuYanthra – Satellite-powered crop health insights',
    description: 'AI-powered satellite monitoring for crop health. Real-time alerts and multilingual support for farmers.',
    images: ['/BhuYanthra.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}