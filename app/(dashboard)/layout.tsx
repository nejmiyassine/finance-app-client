import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1">
        <header className="flex h-14 items-center justify-end border-b px-4">
          <ThemeToggle />
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
