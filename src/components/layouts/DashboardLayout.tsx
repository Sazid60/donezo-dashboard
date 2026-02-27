import { Outlet } from 'react-router-dom'
import { Sidebar } from './layout-items/Sidebar'
import { Topbar } from './layout-items/Topbar'

export function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f3f4f6]">
      {/* Sidebar - fixed on desktop, drawer on mobile */}
      <div className="hidden md:flex flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin bg-[#f3f4f6]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
