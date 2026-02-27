import api from '@/lib/axios'
import type {
    AnalyticsApi,
    DashboardApiResponse,
    DashboardUserApi,
    OverviewApiResponse,
    ProductApi,
} from '@/types'

export interface DashboardApiData {
    overviewContact: OverviewApiResponse
    users: DashboardUserApi[]
    analytics: AnalyticsApi[]
    products: ProductApi[]
}

export async function fetchDashboardData(): Promise<DashboardApiData> {
    try {
        const [overviewContact, users, analytics, products] = await Promise.all([
            api.get<OverviewApiResponse>('/api/overview'),
            api.get<DashboardUserApi[]>('/api/users'),
            api.get<AnalyticsApi[]>('/api/analytics'),
            api.get<ProductApi[]>('/api/products'),
        ])

        return {
            overviewContact: overviewContact.data,
            users: users.data,
            analytics: analytics.data,
            products: products.data,
        }
    } catch {
        const { data } = await api.get<DashboardApiResponse>('/api/dashboard')

        return {
            overviewContact: {
                name: 'Dashboard Overview',
                email: 'dashboard@example.com',
                phone: 'N/A',
                message: 'Data loaded from dashboard endpoint',
            },
            users: data.users,
            analytics: data.analytics,
            products: data.products,
        }
    }
}
