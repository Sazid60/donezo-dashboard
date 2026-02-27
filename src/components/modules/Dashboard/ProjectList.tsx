import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Project } from '@/types'

const iconColors: Record<string, string> = {
  '⚡': 'bg-indigo-100',
  '🎯': 'bg-green-100',
  '🏗️': 'bg-yellow-100',
  '🚀': 'bg-orange-100',
  '🧪': 'bg-purple-100',
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-white rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-semibold text-gray-900 text-base">Project</h2>
        <button className="flex items-center gap-1 text-xs text-white bg-brand-800 hover:bg-brand-700 px-3 py-1.5 rounded-full transition-colors font-medium shadow-sm">
          <Plus size={12} />
          New
        </button>
      </div>

      <div className="space-y-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.06 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 ${iconColors[project.icon] ?? 'bg-gray-100'
                }`}
            >
              {project.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 group-hover:text-brand-800 transition-colors truncate">
                {project.name}
              </p>
              <p className="text-xs text-gray-400">{project.dueDate}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
