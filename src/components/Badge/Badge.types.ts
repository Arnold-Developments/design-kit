export type BadgeVariant = "default" | "primary" | "success" | "error" | "warning";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: React.CSSProperties;
}
