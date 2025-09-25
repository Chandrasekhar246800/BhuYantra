import { ReactNode } from 'react'

interface AnimatedWrapperProps {
  children: ReactNode
  delay?: number
  amount?: number
  className?: string
}

export default function AnimatedWrapper({ 
  children, 
  delay = 0, 
  amount = 0.4,
  className = ''
}: AnimatedWrapperProps) {
  // Return children directly without animations
  return (
    <div className={className}>
      {children}
    </div>
  )
}