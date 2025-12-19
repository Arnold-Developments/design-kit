import React from "react";
import styles from "./Inline.module.css";
import type { InlineProps } from "./Inline.types";

export function Inline({
  gap = "md",
  align = "start",
  wrap = "nowrap",
  children,
  style,
}: InlineProps) {
  const className = [
    styles.inline,
    styles[`gap-${gap}`],
    styles[`align-${align}`],
    styles[`wrap-${wrap}`],
  ].filter(Boolean).join(" ");

  return <div className={className} style={style}>{children}</div>;
}
