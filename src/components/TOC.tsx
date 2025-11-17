'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'

export default function TOC() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMdScreen, setIsMdScreen] = useState(false)

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const sections = useMemo(() => [
    { id: 'problem', title: 'Problem', description: 'Current crop monitoring challenges' },
    { id: 'solution', title: 'Solution', description: 'Satellite monitoring system' },
    { id: 'architecture', title: 'Architecture', description: 'System design and structure' },
    { id: 'features', title: 'Features', description: 'Core capabilities and tools' },
    { id: 'hardware', title: 'Hardware', description: 'IoT devices and sensors' },
    { id: 'benefits', title: 'Benefits', description: 'Value for farmers and agriculture' },
    { id: 'cost', title: 'Cost Analysis', description: 'Investment and pricing model' },
    { id: 'roadmap', title: 'Roadmap', description: '4-phase development plan' },
    { id: 'vision', title: 'Vision', description: 'Our purpose and future direction' },
    { id: 'contact', title: 'Contact', description: 'Get in touch with our team' },
  ], [])

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigate through our comprehensive approach to revolutionizing crop health monitoring 
            with satellite technology and AI-powered insights.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
          {/* Header with expand toggle for mobile */}
          <div
            className="flex justify-between items-center p-6 border-b border-gray-100 cursor-pointer md:cursor-default"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="text-xl font-semibold text-gray-900">Table of Contents</h3>
            
            {/* Toggle Icon */}
            <div className="md:hidden">
              <svg 
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Content - expandable on mobile, always visible on desktop */}
          <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {sections.map((section, index) => (
                <div key={section.id}>
                  <Link
                    href={`#${section.id}`}
                    className="block text-left p-4 rounded-xl hover:bg-gray-50 transition-colors group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <span className="text-sm font-semibold text-green-700">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                          {section.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 p-6 border-t border-gray-100">
            {[
              { value: '₹5.5K-12K', label: 'Monthly MVP Cost', color: 'text-green-600' },
              { value: '4 Phases', label: 'Development Plan', color: 'text-blue-600' },
              { value: '9 Features', label: 'Core Capabilities', color: 'text-purple-600' },
              { value: '24/7', label: 'Monitoring', color: 'text-orange-600' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-lg md:text-xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Download PDF Section */}
          <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-b-2xl border-t border-gray-100">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                📄 Complete Project Documentation
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Download our comprehensive BhuYanthra overview with detailed technical specifications and project insights.
              </p>
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/BhuYantra-final-copy.pdf'
                  link.download = 'BhuYantra-Overview.pdf'
                  link.target = '_blank'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Project Overview (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}