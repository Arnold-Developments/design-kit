import React from "react";
import styles from "./Badge.module.css";
import type { BadgeProps } from "./Badge.types";

export function Badge({
  children,
  variant = "default",
  size = "md",
  style,
}: BadgeProps) {
  const className = [
    styles.badge,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
  ].filter(Boolean).join(" ");

  return <span className={className} style={style}>{children}</span>;
}
