export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "glass" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  hover?: boolean;
  clickable?: boolean;
}
