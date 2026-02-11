import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  title?: string;
}

/**
 * Standard Page Container für konsistentes Styling
 */
export function PageContainer({ children, title }: PageContainerProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}
      {children}
    </div>
  );
}
