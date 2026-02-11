import { useNotification } from "../../contexts";

export function Notification() {
  const { message, type } = useNotification();

  if (!message) return null;

  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-3 rounded-lg border ${
        type ? typeStyles[type] : ""
      } animate-fade-in`}
    >
      {message}
    </div>
  );
}
