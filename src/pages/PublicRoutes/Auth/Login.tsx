import { motion } from 'framer-motion'
import { LoginForm } from '@/components/modules/Auth/LoginForm'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Organize projects and tasks effortlessly',
  'Real-time team collaboration',
  'Smart deadline tracking',
  'Beautiful analytics & insights',
]

export function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex flex-col justify-between w-1/2 bg-brand-900 text-white p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-700 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-800 rounded-full translate-y-1/2 -translate-x-1/4 opacity-60" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-brand-600 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" />
        </div>
        <div className="relative flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-brand-900 font-bold text-lg font-display">D</span>
          </div>
          <span className="font-display font-bold text-2xl">Donezo</span>
        </div>

        <div className="relative space-y-8">
          <div>
            <h1 className="font-display font-bold text-4xl leading-tight mb-3">
              Plan, prioritize, and accomplish your tasks with ease.
            </h1>
            <p className="text-brand-300 text-base leading-relaxed">
              The all-in-one task management platform built for modern teams. Stay organized, meet deadlines, and collaborate seamlessly.
            </p>
          </div>

          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={18} className="text-brand-400 flex-shrink-0" />
                <span className="text-sm text-brand-200">{f}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {[['24', 'Projects'], ['12', 'Team Members'], ['98%', 'On Time']].map(([val, lbl]) => (
              <div key={lbl}>
                <p className="font-display font-bold text-2xl">{val}</p>
                <p className="text-xs text-brand-300 mt-0.5">{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-xs text-brand-400">
          © 2026 Donezo. All rights reserved.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-6 bg-gray-50"
      >
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">D</span>
            </div>
            <span className="font-display font-semibold text-xl text-gray-900">Donezo</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-8"
          >
            <div className="mb-7">
              <h2 className="font-display font-bold text-2xl text-gray-900">Welcome back</h2>
              <p className="text-gray-500 text-sm mt-1.5">
                Sign in to your Donezo account to continue
              </p>
            </div>

            <LoginForm />
          </motion.div>

          <p className="text-center text-xs text-gray-400 mt-6">
            By signing in, you agree to our{' '}
            <a href="#" className="underline hover:text-gray-600">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
