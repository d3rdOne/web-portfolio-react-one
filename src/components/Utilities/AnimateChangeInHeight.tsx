
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

interface AnimateChangeInHeightProps {
  children: React.ReactNode
  className?: string,
  handleClick? : () => void
}

export const AnimateChangeInHeight: React.FC<AnimateChangeInHeightProps> = ({ children, className, handleClick}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<number | 'auto'>('auto')

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height
        // added 8 px to fix clipping
        setHeight(observedHeight + 8 )
      })

      resizeObserver.observe(containerRef.current)

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect()
      }
    }
  }, [])

  return (
<motion.div className={className} style={{ height }} animate={{ height }} transition={{ duration: 0.2 }} onClick={handleClick}>
      <div className="h-fit" ref={containerRef}>{children}</div>
    </motion.div>
  )
}