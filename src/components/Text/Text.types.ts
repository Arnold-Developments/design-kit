export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export interface TextProps {
    as?: "p" | "span" | "label" | "div";
    size?: TextSize;
    weight?: TextWeight;
    muted?: boolean;
    style?: React.CSSProperties;
    children: React.ReactNode;
}