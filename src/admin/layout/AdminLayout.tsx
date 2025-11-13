import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { AdminSidebar } from "../components/AdminSidebar"


export const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
