import { useState } from 'react'
import { motion } from 'framer-motion'
import type { BarData } from '@/types'

export function BarChart({ data }: { data: BarData[] }) {
  const maxVal = Math.max(...data.map((d) => d.value))
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  const getBarColor = (index: number, isActive: boolean) => {
    if (!isActive) return 'bg-[#B4C6C0] stripe-pattern' 

    if (index === 1) return 'bg-[#3A7E59]' 
    if (index === 2) return 'bg-[#73C096]'
    if (index === 3) return 'bg-[#1D472E]' 
    return 'bg-[#3A7E59]' 
  }

  return (
    <div className="">
      <h2 className="mb-6 text-base font-display font-semibold text-gray-900 sm:mb-8 sm:text-lg">
        Project Analytics
      </h2>

      <div className="flex h-28 items-end justify-between gap-2 px-1 sm:h-32 sm:gap-3 sm:px-2">
        {data.map((bar, i) => {
          const heightPct = maxVal > 0 ? (bar.value / maxVal) * 100 : 0
          const isActive = bar.active !== false
          const isTuesday = bar.day === 'T' && i === 2
          const showTooltip = hoveredIndex === i || (hoveredIndex === null && isTuesday)

          return (
            <div
              key={i}
              className="relative flex flex-col items-center flex-1 h-full"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Tooltip */}
              <div className="absolute -top-7 z-10 sm:-top-8">
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="rounded-full border border-gray-100 bg-white px-1.5 py-0.5 text-[10px] font-bold text-gray-400 shadow-sm sm:px-2">
                      {bar.value}%
                    </span>

                    <div className="w-1.5 h-1.5 bg-white border-b border-r border-gray-100 rotate-45 -mt-1" />
                  </motion.div>
                )}
              </div>

              <div className="relative flex h-full w-full max-w-12 items-end sm:max-w-15">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${heightPct}%` }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: 'circOut' }}
                  className={`w-full rounded-full transition-colors duration-300 ${getBarColor(i, isActive)}`}
                />
              </div>

              <span className="absolute -bottom-7 text-[11px] font-semibold text-gray-400 sm:-bottom-8 sm:text-xs">
                {bar.day}
              </span>
            </div>
          )
        })}
      </div>
      <div className="" />
    </div>
  )
}