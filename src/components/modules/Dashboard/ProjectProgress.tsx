import { motion } from 'framer-motion'
import { useEffect, useId, useState } from 'react'

interface ProjectProgressProps {
  percentage: number
  label: string
}

export function ProjectProgress({ percentage, label }: ProjectProgressProps) {
  const [animated, setAnimated] = useState(0)
  const patternId = useId()

  const normalizedPercentage = Math.max(0, Math.min(100, percentage))

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(normalizedPercentage), 300)
    return () => clearTimeout(timer)
  }, [normalizedPercentage])


  const size = 200
  const strokeWidth = 28 
  const radius = (size - strokeWidth) / 2
  const cx = size / 2
  const cy = size / 2

  const startAngle = 180
  const endAngle = 0
  const totalAngle = startAngle - endAngle

  const toRad = (deg: number) => (deg * Math.PI) / 180

  const arcPath = (start: number, end: number) => {
    const s = toRad(start)
    const e = toRad(end)
    const x1 = cx + radius * Math.cos(s)
    const y1 = cy - radius * Math.sin(s) 
    const x2 = cx + radius * Math.cos(e)
    const y2 = cy - radius * Math.sin(e)
    return `M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`
  }


  const currentAngle = startAngle - (animated / 100) * totalAngle

  const splitAngle = Math.min(startAngle, currentAngle + (totalAngle * 0.15))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="h-full rounded-4xl bg-white p-6 shadow-sm border border-gray-50"
    >
      <h2 className="mb-4 text-lg font-sans font-bold text-gray-900">
        Project Progress
      </h2>

      <div className="flex flex-col items-center">
        <div className="relative h-32 w-48">
          <svg viewBox={`0 0 ${size} ${size / 2 + 20}`} className="absolute left-0 top-0 w-full h-auto overflow-visible">
            <defs>
              <pattern id={patternId} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#cbd5e1" strokeWidth="4" />
              </pattern>
            </defs>

            <path
              d={arcPath(startAngle, endAngle)}
              fill="none"
              stroke={`url(#${patternId})`}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />

            <motion.path
              d={arcPath(startAngle, splitAngle)}
              fill="none"
              stroke="#41835C"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />

            <motion.path
              d={arcPath(splitAngle, currentAngle)}
              fill="none"
              stroke="#1B4332"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            <motion.span
              className="text-5xl font-black text-gray-900 tracking-tighter"
            >
              {animated}%
            </motion.span>
            <span className="text-[10px] font-bold text-[#41835C] uppercase tracking-widest mt-1">
              {label}
            </span>
          </div>
        </div>

        <div className="mt-10 flex justify-center w-full gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#41835C]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Completed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#1B4332]" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">In Progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-sm stripe-pattern bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 uppercase">Pending</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}