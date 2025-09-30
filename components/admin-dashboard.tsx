import { DashboardStats } from "@/components/dashboard-stats"
import { LeadsTable } from "@/components/leads-table"
import { QuickActions } from "@/components/quick-actions"
import { RecentActivity } from "@/components/recent-activity"
import { SalesChart } from "@/components/sales-chart"

export function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Visão geral das vendas e leads</p>
          </div>
          <QuickActions />
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SalesChart />
            <LeadsTable />
          </div>
          <div className="space-y-8">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}
