import { NavLink, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart2,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Smartphone,
  Download,
  LayoutGrid,
} from 'lucide-react'
import { useAuth } from '@/context/auth.context'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard', badge: null },
  { label: 'Tasks', icon: CheckSquare, to: '/dashboard/tasks', badge: 12 },
  { label: 'Calendar', icon: Calendar, to: '/dashboard/calendar', badge: null },
  { label: 'Analytics', icon: BarChart2, to: '/dashboard/analytics', badge: null },
  { label: 'Team', icon: Users, to: '/dashboard/team', badge: null },
]

const generalItems = [
  { label: 'Settings', icon: Settings, to: '/dashboard/settings' },
  { label: 'Help', icon: HelpCircle, to: '/dashboard/help' },
]

function NavItem({
  to,
  icon: Icon,
  label,
  badge,
}: {
  to: string
  icon: React.ElementType
  label: string
  badge?: number | null
}) {
  return (
    <NavLink
      to={to}
      end={to === '/dashboard'}
      className={({ isActive }) =>
        cn(
          'relative flex items-center gap-3 py-2.5 pr-3 rounded-r-xl text-sm font-medium transition-all min-h-[44px]',
          isActive
            ? 'border-l-4 border-brand-600 bg-brand-50/90 pl-[11px] text-gray-900'
            : 'border-l-4 border-transparent pl-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={18}
            className={cn(isActive && 'text-brand-700')}
          />
          <span className={cn(isActive && 'font-bold')}>{label}</span>
          {badge != null && (
            <span className="ml-auto bg-brand-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {badge}+
            </span>
          )}
        </>
      )}
    </NavLink>
  )
}

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
    onClose?.()
  }

  return (
    <aside className="flex flex-col h-full bg-white w-64 border-r border-gray-100 flex-shrink-0">
      {/* Logo - stylized overlapping squares / grid icon */}
      <div className="flex items-center gap-2.5 px-5 py-6 border-b border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-[#21613A] flex items-center justify-center">
          <LayoutGrid size={18} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-display font-semibold text-xl text-gray-900">Donezo</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto scrollbar-thin">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-3">
          MENU
        </p>
        {menuItems.map((item) => (
          <NavItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label={item.label}
            badge={item.badge}
          />
        ))}

        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-3 mt-6 mb-3">
          GENERAL
        </p>
        {generalItems.map((item) => (
          <NavItem key={item.label} to={item.to} icon={item.icon} label={item.label} />
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all w-full mt-1"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>

      {/* Download App Banner */}
      <div className="mx-3 mb-4 rounded-2xl bg-[#21613A] p-4 text-white relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brand-600" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-brand-700" />
        </div>
        <div className="relative">
          <div className="relative w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
            <Smartphone size={14} className="text-white" />
            <Download size={10} className="text-white absolute bottom-0 right-0" />
          </div>
          <p className="text-sm font-semibold leading-snug">Download our Mobile App</p>
          <p className="text-xs text-brand-300 mt-1 mb-3">Get easy in another way</p>
          <button className="w-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
            Download
          </button>
        </div>
      </div>
    </aside>
  )
}
