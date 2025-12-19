export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}
