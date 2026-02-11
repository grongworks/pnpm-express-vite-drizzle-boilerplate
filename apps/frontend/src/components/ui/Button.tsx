import { ReactNode } from "react";
import cx from "classnames";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  children,
  className,
}: ButtonProps) {
  const baseClasses =
    "font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Lädt..." : children}
    </button>
  );
}
