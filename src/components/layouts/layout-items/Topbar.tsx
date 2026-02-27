import { useState } from 'react'
import { Search, Mail, Bell, Menu, X} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/context/auth.context'
import { Sidebar } from './Sidebar'

export function Topbar() {
  const { user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const displayName = user?.name ?? (user?.email === 'tmichael20@mail.com' ? 'Totok Michael' : user?.email?.split('@')[0] ?? 'User')
  const displayEmail = user?.email ?? 'tmichael20@mail.com'
  const initials = displayName?.slice(0, 2).toUpperCase() ?? 'TM'

  return (
    <>
      <header className="h-16 bg-white border-b border-gray-100 flex items-center gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 sticky top-0 z-30 shrink-0">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Search - white input field */}
        <div className="flex-1 min-w-0 max-w-md">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 shrink-0 pointer-events-none" />
            <input
              type="text"
              placeholder="Search task"
              className="w-full h-10 sm:h-9 pl-10 pr-20 sm:pr-24 rounded-xl bg-white border border-gray-200 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-colors shadow-sm"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded font-mono hidden sm:inline">
              ⌘ F
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
          <button className="w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors" aria-label="Messages">
            <Mail size={18} />
          </button>
          <button className="w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors relative" aria-label="Notifications">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* User avatar - light pink/rose tint to match design */}
          <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-gray-100">
            <div className="text-right hidden sm:block min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">{displayName}</p>
              <p className="text-xs text-gray-400 truncate">{displayEmail}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center text-gray-800 text-sm font-bold shrink-0 border border-white shadow-sm">
              {initials}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 md:hidden"
            >
              <div className="relative h-full">
                <Sidebar onClose={() => setMobileMenuOpen(false)} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
