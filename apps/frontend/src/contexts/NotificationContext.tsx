import React, { createContext, ReactNode, useContext, useState } from "react";

interface NotificationContextType {
  message: string | null;
  type: "success" | "error" | "info" | "warning" | null;
  show: (msg: string, type: "success" | "error" | "info" | "warning") => void;
  hide: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | "info" | "warning" | null>(null);

  const show = (msg: string, notificationType: "success" | "error" | "info" | "warning") => {
    setMessage(msg);
    setType(notificationType);
    setTimeout(() => hide(), 3000);
  };

  const hide = () => {
    setMessage(null);
    setType(null);
  };

  return (
    <NotificationContext.Provider value={{ message, type, show, hide }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
}
