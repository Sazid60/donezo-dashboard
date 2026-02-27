import { useState, useEffect, useCallback } from 'react'
import { Pause, Play, Square } from 'lucide-react'
import { motion } from 'framer-motion'

export function TimeTracker() {
  const [seconds, setSeconds] = useState(5048) 
  const [running, setRunning] = useState(true)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const reset = useCallback(() => {
    setRunning(false)
    setSeconds(0)
  }, [])

  const fmt = (n: number) => String(n).padStart(2, '0')
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative h-full min-h-55 overflow-hidden rounded-2xl bg-brand-800 p-4 text-white shadow-sm sm:min-h-60 sm:p-5"
    >

      <div className="absolute inset-0 opacity-30">
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-brand-700" />
        <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-brand-800" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-brand-600 opacity-50" />
      </div>

      <div className="relative flex h-full flex-col justify-between gap-5 sm:gap-6">
        <h2 className="mb-1 text-base font-display font-semibold text-brand-100">Time Tracker</h2>

        <motion.div
          animate={running ? { opacity: [1, 0.8, 1] } : {}}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mb-1 text-center"
        >
          <span className="font-display text-3xl font-bold tracking-wide tabular-nums sm:text-4xl sm:tracking-widest">
            {fmt(h)}:{fmt(m)}:{fmt(s)}
          </span>
        </motion.div>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30 active:scale-90 sm:h-11 sm:w-11"
          >
            {running ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            type="button"
            onClick={reset}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/80 transition-all hover:bg-red-500 active:scale-90 sm:h-11 sm:w-11"
          >
            <Square size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
