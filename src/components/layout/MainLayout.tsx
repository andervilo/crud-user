import { useState } from "react";
import { Menu, X, Users, Settings, Home, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Users, label: "Customers", href: "/customers" },
    { icon: BarChart2, label: "Reports", href: "/reports" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="fixed top-0 z-40 w-full bg-[#3c6382]">
        <div className="flex h-16 items-center px-4 gap-4 text-white">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-[#2c5170] rounded-md text-white"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 bg-[#3c6382] transition-transform duration-300",
          !sidebarOpen && "-translate-x-full",
        )}
      >
        <nav className="space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/80 transition-all hover:text-white hover:bg-[#2c5170]"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "pt-16 transition-all duration-300",
          sidebarOpen ? "pl-64" : "pl-0",
        )}
      >
        {children}
      </main>
    </div>
  );
}
