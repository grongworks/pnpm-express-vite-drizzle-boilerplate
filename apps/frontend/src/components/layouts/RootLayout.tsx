import { Outlet } from "react-router-dom";
import { Notification } from "../shared/Notification";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Notification />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
