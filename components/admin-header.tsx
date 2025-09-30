import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Heart, LogOut, Settings, User } from "lucide-react"

export function AdminHeader() {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">VitalCare Admin</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Dashboard
            </Badge>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500">3</Badge>
            </Button>

            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 pl-4 border-l">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Admin User</div>
                <div className="text-muted-foreground text-xs">admin@vitalcare.com.br</div>
              </div>
            </div>

            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
