import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { ClientSidebar } from "../components/ClientSidebar"

export const ClientLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <ClientSidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
