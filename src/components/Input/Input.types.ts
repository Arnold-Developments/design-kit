export type InputSize = "sm" | "md" | "lg";
export type InputState = "default" | "error" | "success";

export interface InputProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: InputSize;
  state?: InputState;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
