import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import type { TeamMember } from '@/types'

const avatarColors = [
  'from-pink-400 to-red-500',
  'from-green-400 to-teal-500',
  'from-purple-400 to-indigo-500',
  'from-amber-400 to-orange-500',
]

export function TeamCollaboration({ members }: { members: TeamMember[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-semibold text-gray-900 text-base">Team Collaboration</h2>
        <button className="flex items-center gap-1 text-xs text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-full transition-colors font-medium">
          <span className="text-brand-600 font-bold">+</span>
          Add Member
        </button>
      </div>

      <div className="space-y-3">
        {members.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.07 }}
            className="flex items-center gap-3"
          >

            <div
              className={`w-9 h-9 rounded-full bg-linear-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
            >
              {member.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800">{member.name}</p>
              <p className="text-xs text-gray-400 truncate">
                Working on{' '}
                <span className="font-medium text-gray-600">{member.task}</span>
              </p>
            </div>

            <Badge
              variant={
                member.status === 'Completed'
                  ? 'completed'
                  : member.status === 'In Progress'
                  ? 'inProgress'
                  : 'pending'
              }
            >
              {member.status}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
