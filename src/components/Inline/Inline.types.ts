export type InlineGap = "0" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type InlineAlign = "start" | "center" | "end" | "stretch";
export type InlineWrap = "wrap" | "nowrap";

export interface InlineProps {
  gap?: InlineGap;
  align?: InlineAlign;
  wrap?: InlineWrap;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
