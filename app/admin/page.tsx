import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminHeader } from "@/components/admin-header"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-muted/20">
      <AdminHeader />
      <AdminDashboard />
    </main>
  )
}
