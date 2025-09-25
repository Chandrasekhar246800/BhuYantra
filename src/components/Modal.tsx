'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { MOTION_VARIANTS, FOCUS_CONFIG } from '@/lib/constants'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  children, 
  size = 'md' 
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
      document.body.classList.add('focus-trap-active')

      // Focus the modal after a short delay
      setTimeout(() => {
        modalRef.current?.focus()
      }, FOCUS_CONFIG.trapDelay)
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
      document.body.classList.remove('focus-trap-active')

      // Restore focus to the previously focused element
      if (previousFocusRef.current) {
        setTimeout(() => {
          previousFocusRef.current?.focus()
        }, FOCUS_CONFIG.restoreDelay)
      }
    }

    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('focus-trap-active')
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  const trapFocus = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const modal = modalRef.current
    if (!modal) return

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement?.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement?.focus()
      }
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        variants={MOTION_VARIANTS.backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={handleBackdropClick}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm modal-overlay" />
        
        <motion.div
          ref={modalRef}
          className={`relative bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden`}
          variants={MOTION_VARIANTS.modal}
          initial="hidden"
          animate="visible"
          exit="hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby={description ? "modal-description" : undefined}
          tabIndex={-1}
          onKeyDown={trapFocus}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                {title}
              </h2>
              {description && (
                <p id="modal-description" className="text-sm text-gray-600 mt-1">
                  {description}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  // Use portal to render modal at document body level
  return typeof document !== 'undefined' 
    ? createPortal(modalContent, document.body) 
    : null
}