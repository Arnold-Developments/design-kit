export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}