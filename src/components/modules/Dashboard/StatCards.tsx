import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'
import type { StatCard } from '@/types'

interface StatCardProps {
  stat: StatCard
  index: number
  primary?: boolean
}

function StatCardItem({ stat, index, primary }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className={`relative flex flex-col gap-3 overflow-hidden rounded-2xl p-4 shadow-sm transition-transform group cursor-pointer hover:-translate-y-0.5 sm:p-5 ${primary ? 'bg-[#21613A] text-white' : 'bg-white text-gray-900 shadow-sm'
        }`}
    >

      <div
        className={`self-end w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${primary
            ? 'bg-white/20 border border-white/40 text-white'
            : 'bg-white border border-gray-200 text-gray-600 shadow-sm'
          }`}
      >
        <ArrowUpRight size={16} />
      </div>


      <p className={`text-xs font-medium sm:text-sm ${primary ? 'text-brand-200' : 'text-gray-500'}`}>
        {stat.label}
      </p>

      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08 + 0.2, type: 'spring', stiffness: 200 }}
        className={`font-display text-3xl leading-none font-bold sm:text-4xl lg:text-5xl ${primary ? 'text-white' : 'text-gray-900'
          }`}
      >
        {stat.value}
      </motion.p>

      <div className={`flex items-center gap-1.5 text-xs font-medium ${primary ? 'text-white/90' : 'text-gray-500'}`}>
        {stat.change > 0 ? (
          <>
            <span className={primary ? 'text-white' : 'text-green-600'} aria-hidden>
              <TrendingUp size={14} strokeWidth={2.5} />
            </span>
            <span>{stat.changeLabel}</span>
          </>
        ) : (
          <span className="text-gray-400">{stat.changeLabel}</span>
        )}
      </div>
    </motion.div>
  )
}

export function StatCards({ stats }: { stats: StatCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCardItem key={stat.label} stat={stat} index={i} primary={i === 0} />
      ))}
    </div>
  )
}
