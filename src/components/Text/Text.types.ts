export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "regular" | "medium" | "semibold" | "600";

export interface TextProps {
    as?: "p" | "span" | "label" | "div";
    size?: TextSize;
    weight?: TextWeight;
    muted?: boolean;
    children: React.ReactNode;
}