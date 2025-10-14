'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SCROLL_CONFIG, MOTION_VARIANTS } from '@/lib/constants'

export default function Nav() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = useMemo(() => [
    { href: '#hero', label: 'Home' },
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#features', label: 'Features' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#cost', label: 'Cost' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#vision', label: 'Vision' },
    { href: '#contact', label: 'Contact' },
  ], [])

  // Enhanced scrollspy with IntersectionObserver
  useEffect(() => {
    const sections = navItems.map(item => item.href.substring(1))
    const sectionElements = sections
      .map(id => document.getElementById(id))
      .filter(Boolean) as Element[]

    if (sectionElements.length === 0) return

    // Track which sections are currently visible
    const visibleSections = new Set<string>()
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        // Set active section based on scroll position priority
        if (visibleSections.size > 0) {
          // Convert to array to find the first visible section in document order
          const sectionsArray = sections.filter(id => visibleSections.has(id))
          
          if (sectionsArray.length > 0) {
            // For multiple visible sections, choose based on scroll position
            let targetSection = sectionsArray[0]
            
            // If we're scrolling down, prefer the last visible section
            // If we're scrolling up, prefer the first visible section
            const scrollY = window.scrollY
            const lastScrollY = (window as any).lastScrollY || 0
            
            if (scrollY > lastScrollY && sectionsArray.length > 1) {
              // Scrolling down - take the section that's most in view
              targetSection = sectionsArray[sectionsArray.length - 1]
            }
            
            setActiveSection(targetSection)
            ;(window as any).lastScrollY = scrollY
          }
        }
      },
      {
        threshold: [0, SCROLL_CONFIG.spyThreshold, 0.5, 1],
        rootMargin: SCROLL_CONFIG.spyRootMargin,
      }
    )

    sectionElements.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [navItems])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const getNavLinkProps = (href: string) => {
    const isActive = activeSection === href.substring(1)
    return {
      'aria-current': isActive ? ('page' as const) : undefined,
      className: `relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
        isActive
          ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 font-semibold shadow-sm border border-green-200'
          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
      }`
    }
  }

  const getMobileNavLinkProps = (href: string) => {
    const isActive = activeSection === href.substring(1)
    return {
      'aria-current': isActive ? ('page' as const) : undefined,
      className: `relative block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
        isActive
          ? 'bg-gradient-to-r from-green-100 to-green-50 text-green-800 font-semibold shadow-sm border border-green-200'
          : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
      }`
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200"
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="#hero"
              className="flex items-center space-x-3 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md"
            >
              <Image 
                src="/BhuYantra.png" 
                alt="BhuYantra Logo" 
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                BhuYantra
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  {...getNavLinkProps(item.href)}
                >
                  {item.label}
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <div className="space-y-1">
                <motion.div 
                  className="w-5 h-0.5 bg-current"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-5 h-0.5 bg-current"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="w-5 h-0.5 bg-current"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              id="mobile-menu"
              className="md:hidden border-t border-gray-200 bg-white"
              variants={MOTION_VARIANTS.slideUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <motion.div
                      key={item.href}
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        {...getMobileNavLinkProps(item.href)}
                      >
                        {item.label}
                        {/* Active indicator for mobile */}
                        {isActive && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-green-600 rounded-r-full"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}