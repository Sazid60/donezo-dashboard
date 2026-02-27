export interface User {
  id: number
  email: string
  name?: string
  avatar?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface LoginResponse {
  id: number
  email: string
  token: string
}

export interface Project {
  id: string
  name: string
  dueDate: string
  color: string
  icon: string
}

export interface TeamMember {
  id: string
  name: string
  task: string
  status: 'Completed' | 'In Progress' | 'Pending'
  avatar: string
}

export interface StatCard {
  label: string
  value: number
  change: number
  changeLabel: string
}

export interface BarData {
  day: string
  value: number
  active?: boolean
}

export interface OverviewApiResponse {
  name: string
  email: string
  phone: string
  message: string
}

export interface DashboardUserApi {
  id: number
  name: string
  email: string
  status: 'active' | 'inactive'
  joinDate: string
}

export interface AnalyticsApi {
  date: string
  views: number
  clicks: number
  conversions: number
}

export interface ProductApi {
  id: number
  name: string
  price: number
  sales: number
  category: string
}

export interface DashboardOverviewApi {
  totalUsers: number
  activeUsers: number
  revenue: number
  growth: number
}

export interface DashboardApiResponse {
  overview: DashboardOverviewApi
  users: DashboardUserApi[]
  analytics: AnalyticsApi[]
  products: ProductApi[]
}
