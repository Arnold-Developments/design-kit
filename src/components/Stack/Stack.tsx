import React from "react";
import styles from "./Stack.module.css";
import type { StackProps } from "./Stack.types";

export function Stack({
  gap = "md",
  align = "start",
  children,
  style,
}: StackProps) {
  const className = [
    styles.stack,
    styles[`gap-${gap}`],
    styles[`align-${align}`],
  ].filter(Boolean).join(" ");

  return <div className={className} style={style}>{children}</div>;
}
