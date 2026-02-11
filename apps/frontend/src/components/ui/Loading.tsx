import { ReactNode } from "react";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = "Lädt..." }: LoadingProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
}
