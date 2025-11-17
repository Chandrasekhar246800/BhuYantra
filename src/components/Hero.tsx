'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MOTION_DURATION } from '@/lib/constants'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const handleGetStarted = () => {
    console.log('Get Started clicked') // Debug log
    const element = document.querySelector('#features')
    console.log('Features element found:', element) // Debug log
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    } else {
      // Fallback: scroll to a position if element not found
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      })
    }
  }

  const handleLearnMore = () => {
    console.log('Learn More clicked') // Debug log
    const element = document.querySelector('#problem')
    console.log('Problem element found:', element) // Debug log
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    } else {
      // Fallback: scroll to a position if element not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0.1 : MOTION_DURATION.normal,
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : MOTION_DURATION.normal }
    }
  }

  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-green-50 to-blue-50"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              BhuYantra
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Satellite-powered crop health insights for every farmer
          </motion.p>

          {/* Value Proposition */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-lg border border-gray-200"
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
              BhuYanthra uses AI and satellite data to detect crop stress and alert farmers 
              via a multilingual mobile app and chatbot, providing real-time NDVI/NDWI insights 
              for precision agriculture.
            </p>
          </motion.div>

          {/* Key Technologies */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={itemVariants}
          >
            {[
              'ISRO Bhuvan',
              'Sentinel-2',
              'NDVI/NDWI',
              'AI Detection',
              'Multilingual Support',
              'Real-time Alerts',
              'OpenWeather API',
              'Firebase'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
              aria-describedby="get-started-description"
            >
              Get Started Today
            </button>
            <button
              onClick={handleLearnMore}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
              aria-describedby="learn-more-description"
            >
              Learn More
            </button>
          </motion.div>

          {/* Hidden descriptions for screen readers */}
          <p id="get-started-description" className="sr-only">
            Click to scroll to the features section and explore BhuYanthra&apos;s capabilities
          </p>
          <p id="learn-more-description" className="sr-only">
            Click to scroll to the problem section and learn about the challenges we&apos;re addressing
          </p>

          {/* Scroll Indicator */}
          <motion.div 
            className="mt-20"
            variants={itemVariants}
            animate={shouldReduceMotion ? {} : {
              y: [0, 10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <button
              onClick={handleLearnMore}
              className="inline-block text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full p-2"
              aria-label="Scroll down to learn about the problem we're solving"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}