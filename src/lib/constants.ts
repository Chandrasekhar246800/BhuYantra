/**
 * Animation and motion constants for consistent UX across the app
 */

// Motion durations (in seconds)
export const MOTION_DURATION = {
  micro: 0.15,        // Button hovers, micro-interactions
  quick: 0.2,         // Quick state changes, small reveals
  normal: 0.3,        // Standard transitions, section reveals
  slow: 0.5,          // Complex animations, modal open/close
} as const

// Easing curves
export const MOTION_EASE = {
  standard: [0.4, 0, 0.2, 1],     // Material Design standard
  decelerate: [0, 0, 0.2, 1],     // Slow out
  accelerate: [0.4, 0, 1, 1],     // Slow in
  emphasize: [0.4, 0, 0.6, 1],    // Emphasize
  gentle: [0.25, 0.46, 0.45, 0.94], // Gentle ease
} as const

// Animation distances
export const MOTION_DISTANCE = {
  slide: {
    small: 8,         // Subtle micro-movements
    medium: 16,       // Standard slide distance
    large: 24,        // Larger movements (use sparingly)
  },
  scale: {
    subtle: 0.95,     // Subtle scale down
    button: 0.97,     // Button press effect
    modal: 0.9,       // Modal initial scale
  },
} as const

// Stagger delays for sequential animations
export const MOTION_STAGGER = {
  quick: 0.05,        // Fast sequential reveals
  normal: 0.1,        // Standard stagger
  slow: 0.15,         // Slower, more deliberate
} as const

// Scroll configuration
export const SCROLL_CONFIG = {
  headerHeight: 64,   // Height of sticky header in pixels
  scrollMarginTop: 80, // Scroll margin to clear header
  spyThreshold: 0.2,  // IntersectionObserver threshold for scrollspy (lower = more sensitive)
  spyRootMargin: '-20% 0px -60% 0px', // Root margin for scrollspy (better middle detection)
} as const

// Focus management
export const FOCUS_CONFIG = {
  trapDelay: 100,     // Delay before trapping focus in modals
  restoreDelay: 150,  // Delay before restoring focus after modal close
} as const

// Default animation variants
export const MOTION_VARIANTS = {
  // Page/section reveals
  slideUp: {
    hidden: { 
      opacity: 0, 
      y: MOTION_DISTANCE.slide.medium,
      transition: { duration: MOTION_DURATION.normal }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: MOTION_DURATION.normal,
        ease: MOTION_EASE.gentle
      }
    }
  },
  
  // Fade animations
  fade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: MOTION_DURATION.normal }
    }
  },
  
  // Modal animations
  modal: {
    hidden: { 
      opacity: 0, 
      scale: MOTION_DISTANCE.scale.modal,
      transition: { duration: MOTION_DURATION.quick }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: MOTION_DURATION.normal,
        ease: MOTION_EASE.gentle
      }
    }
  },
  
  // Backdrop
  backdrop: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: MOTION_DURATION.quick }
    }
  }
} as const

// Reduced motion fallbacks - preserve some motion for better UX
export const REDUCED_MOTION_VARIANTS = {
  slideUp: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: MOTION_DURATION.quick }
    }
  },
  
  modal: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: MOTION_DURATION.quick }
    }
  },
  
  // Gentle scale for important interactions
  scaleGentle: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: MOTION_DURATION.quick }
    }
  }
} as const