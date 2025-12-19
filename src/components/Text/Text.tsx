import React from "react";
import styles from "./Text.module.css";
import { TextProps } from "./Text.types";

export function Text({
  as: Component = "p",
  size = "md",
  weight = "regular",
  muted = false,
  style,
  children,
}: TextProps) {
  return (
    <Component
      className={[
        styles.text,
        styles[`size-${size}`],
        styles[`weight-${weight}`],
        muted && styles.muted,
      ].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
}