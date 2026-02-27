import { createBrowserRouter, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layouts/DashboardLayout'
import { LoginPage } from '@/pages/PublicRoutes/Auth/Login'
import { DashboardPage } from '@/pages/Dashboard/DashboardPage'
import { ProtectedRoute, PublicOnlyRoute } from '@/utils/withAuth'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-6 flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h1 className="font-display font-bold text-2xl text-gray-800 mb-2">{title}</h1>
        <p className="text-gray-400 text-sm">Coming soon</p>
      </div>
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    element: <PublicOnlyRoute />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/dashboard/tasks', element: <PlaceholderPage title="Tasks" /> },
          { path: '/dashboard/calendar', element: <PlaceholderPage title="Calendar" /> },
          { path: '/dashboard/analytics', element: <PlaceholderPage title="Analytics" /> },
          { path: '/dashboard/team', element: <PlaceholderPage title="Team" /> },
          { path: '/dashboard/settings', element: <PlaceholderPage title="Settings" /> },
          { path: '/dashboard/help', element: <PlaceholderPage title="Help" /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
])
