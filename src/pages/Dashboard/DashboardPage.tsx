import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { StatCards } from '@/components/modules/Dashboard/StatCards'
import { BarChart } from '@/components/modules/Dashboard/BarChart'
import { Reminder } from '@/components/modules/Dashboard/Reminder'
import { ProjectList } from '@/components/modules/Dashboard/ProjectList'
import { TeamCollaboration } from '@/components/modules/Dashboard/TeamCollaboration'
import { ProjectProgress } from '@/components/modules/Dashboard/ProjectProgress'
import { TimeTracker } from '@/components/modules/Dashboard/TimeTracker'
import { DashboardSkeleton } from '@/components/modules/Dashboard/DashboardSkeleton'
import { fetchDashboardData } from '@/lib/dashboard-api'
import type { BarData, Project, StatCard, TeamMember } from '@/types'

interface DashboardViewData {
  statCards: StatCard[]
  barData: BarData[]
  projects: Project[]
  teamMembers: TeamMember[]
  reminder: {
    title: string
    time: string
  }
  projectProgress: {
    percentage: number
    label: string
  }
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function toDayLabel(date: string): string {
  return new Date(date)
    .toLocaleDateString('en-US', { weekday: 'short' })
    .charAt(0)
}

function mapDashboardViewData(data: Awaited<ReturnType<typeof fetchDashboardData>>): DashboardViewData {
  const totalUsers = data.users.length
  const activeUsers = data.users.filter((user) => user.status === 'active').length
  const inactiveUsers = totalUsers - activeUsers

  const statCards: StatCard[] = [
    {
      label: 'Total Users',
      value: totalUsers,
      change: totalUsers > 0 ? 1 : 0,
      changeLabel: 'Live from backend',
    },
    {
      label: 'Active Users',
      value: activeUsers,
      change: activeUsers > 0 ? 1 : 0,
      changeLabel: `${Math.round((activeUsers / Math.max(totalUsers, 1)) * 100)}% currently active`,
    },
    {
      label: 'Revenue',
      value: Math.round(
        data.products.reduce((total, product) => total + product.price * product.sales, 0),
      ),
      change: 1,
      changeLabel: 'Estimated from product sales',
    },
    {
      label: 'Products',
      value: data.products.length,
      change: inactiveUsers > 0 ? 1 : 0,
      changeLabel: inactiveUsers > 0 ? `${inactiveUsers} inactive users` : 'All users are active',
    },
  ]

  const barData: BarData[] =
    data.analytics.length > 0
      ? data.analytics.map((item) => ({
        day: toDayLabel(item.date),
        value: Math.round((item.clicks / Math.max(item.views, 1)) * 100),
        active: item.conversions > 0,
      }))
      : [
        { day: 'S', value: 0, active: true },
        { day: 'M', value: 0, active: true },
        { day: 'T', value: 0, active: true },
        { day: 'W', value: 0, active: true },
        { day: 'T', value: 0, active: true },
      ]

  const projects: Project[] = data.products.map((product) => ({
    id: String(product.id),
    name: product.name,
    dueDate: `${product.sales} sales • $${product.price.toFixed(2)}`,
    color: product.category === 'addon' ? '#f97316' : '#6366f1',
    icon: product.category === 'addon' ? '🧩' : '📦',
  }))

  const teamMembers: TeamMember[] = data.users.map((user, index) => ({
    id: String(user.id),
    name: user.name,
    task: `Joined ${formatDate(user.joinDate)}`,
    status: user.status === 'inactive' ? 'Pending' : index === 0 ? 'Completed' : 'In Progress',
    avatar: getInitials(user.name),
  }))

  const projectProgressPercentage = Math.round((activeUsers / Math.max(totalUsers, 1)) * 100)

  return {
    statCards,
    barData,
    projects,
    teamMembers,
    reminder: {
      title: 'Meeting with Arc Company',
      time: `02.00 pm •  04.00 pm`,
    },
    projectProgress: {
      percentage: projectProgressPercentage,
      label: 'Active Users',
    },
  }
}

export function DashboardPage() {
  const [viewData, setViewData] = useState<DashboardViewData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const loadDashboardData = async () => {
      try {
        const response = await fetchDashboardData()
        if (isMounted) {
          setViewData(mapDashboardViewData(response))
        }
      } catch (error) {
        console.error('Failed to load dashboard data', error)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadDashboardData()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-6 space-y-5 sm:space-y-6 min-h-0">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"
      >

        <div className="flex flex-col">
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>

        <div className="mt-1 flex flex-col gap-2 sm:mt-2 sm:flex-row sm:items-center lg:mt-0">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 active:scale-95">
            <span aria-hidden>+</span>
            Add Project
          </button>
          <button className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition-all hover:bg-gray-50 active:scale-95">
            Import Data
          </button>
        </div>
      </motion.div>

      {isLoading || !viewData ? (
        <DashboardSkeleton />
      ) : (
        <>
          <StatCards stats={viewData.statCards} />

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm md:col-span-2 lg:col-span-2">
              <BarChart data={viewData.barData} />
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Reminder title={viewData.reminder.title} time={viewData.reminder.time} />
            </div>
            <div className="h-full">
              <ProjectList projects={viewData.projects} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:hidden xl:grid xl:grid-cols-4">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 xl:col-span-3 xl:grid-cols-2">
              <div className="h-full">
                <TeamCollaboration members={viewData.teamMembers} />
              </div>
              <div className="h-full">
                <ProjectProgress
                  percentage={viewData.projectProgress.percentage}
                  label={viewData.projectProgress.label}
                />
              </div>
            </div>
            <div className="h-full lg:col-span-1">
              <TimeTracker />
            </div>
          </div>

          <div className="hidden gap-4 sm:gap-5 md:grid md:grid-cols-2 xl:hidden">
            <div className="h-full md:col-span-2">
              <TeamCollaboration members={viewData.teamMembers} />
            </div>
            <div className="h-full">
              <ProjectProgress
                percentage={viewData.projectProgress.percentage}
                label={viewData.projectProgress.label}
              />
            </div>
            <div className="h-full">
              <TimeTracker />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
