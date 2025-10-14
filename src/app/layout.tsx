import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/MotionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BhuYantra – Satellite-powered crop health insights',
  description: 'BhuYantra uses AI and satellite data to detect crop stress and alert farmers via a multilingual mobile app and chatbot. Providing real-time NDVI/NDWI insights for every farmer.',
  keywords: 'satellite imagery, crop health monitoring, NDVI, NDWI, precision agriculture, AI farming, crop stress detection, ISRO Bhuvan, Sentinel-2, multilingual chatbot',
  icons: {
    icon: '/BhuYantra.png',
    shortcut: '/BhuYantra.png',
    apple: '/BhuYantra.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/BhuYantra.png',
    },
  },
  openGraph: {
    title: 'BhuYantra – Satellite-powered crop health insights',
    description: 'AI-powered satellite monitoring for crop health. Real-time alerts, multilingual support, and precision agriculture insights for farmers.',
    type: 'website',
    images: ['/BhuYantra.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BhuYantra – Satellite-powered crop health insights',
    description: 'AI-powered satellite monitoring for crop health. Real-time alerts and multilingual support for farmers.',
    images: ['/BhuYantra.png'],
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