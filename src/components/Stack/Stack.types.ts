export type StackGap = "0" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type StackAlign = "start" | "center" | "end" | "stretch";

export interface StackProps {
  gap?: StackGap;
  align?: StackAlign;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
