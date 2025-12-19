import React from "react";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export function Card({
  children,
  variant = "default",
  padding = "md",
  style,
}: CardProps) {
  const className = [
    styles.card,
    styles[`variant-${variant}`],
    styles[`padding-${padding}`],
  ].filter(Boolean).join(" ");

  return <div className={className} style={style}>{children}</div>;
}
