'use client'

import { MotionConfig } from 'framer-motion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/constants'

interface MotionProviderProps {
  children: React.ReactNode
}

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      transition={{
        duration: MOTION_DURATION.normal,
        ease: MOTION_EASE.gentle,
      }}
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  )
}