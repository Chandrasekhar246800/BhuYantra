'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { MOTION_VARIANTS, REDUCED_MOTION_VARIANTS } from '@/lib/constants'
import { ReactNode } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export default function RevealSection({ 
  children, 
  className = '', 
  delay = 0,
  amount = 0.4
}: RevealSectionProps) {
  const shouldReduceMotion = useReducedMotion()
  
  const variants = shouldReduceMotion 
    ? REDUCED_MOTION_VARIANTS.slideUp 
    : MOTION_VARIANTS.slideUp

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        amount: amount,
        margin: '0px 0px -20% 0px' // Ensures element is sufficiently visible
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}