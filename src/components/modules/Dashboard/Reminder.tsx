import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

interface ReminderProps {
  title: string
  time: string
}

export function Reminder({ title, time }: ReminderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="h-full"
    >
      <div className="flex h-full min-h-55 flex-col justify-between gap-5 sm:min-h-60 sm:gap-6">
        <div>
          <h2 className="mb-4 text-base font-display font-semibold text-gray-900 sm:mb-5">Reminders</h2>

          <div>
            <p className="mb-4 text-2xl leading-tight font-display font-semibold text-gray-900 sm:mb-5 sm:text-3xl">
              {title}
            </p>
            <p className="text-sm text-gray-500">Time: {time}</p>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 active:scale-95"
          >
            <Play size={16} fill="currentColor" className="shrink-0" />
            Start Meeting
          </button>
        </div>
      </div>
    </motion.div>
  )
}
