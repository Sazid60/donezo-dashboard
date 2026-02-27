import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'completed' | 'inProgress' | 'pending'
  className?: string
}

const variantStyles = {
  completed: 'bg-green-600 text-white border-0',
  inProgress: 'bg-amber-100 text-amber-800 border border-amber-200',
  pending: 'bg-red-400/90 text-white border-0',
}

export function Badge({ children, variant = 'completed', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
