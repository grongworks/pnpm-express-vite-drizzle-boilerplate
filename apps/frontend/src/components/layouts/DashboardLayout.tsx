import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex">
      {/* Sidebar könnte hier später hinzugefügt werden */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
