import React from "react";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export function Card({
  children,
  variant = "default",
  padding = "md",
  rounded = "lg",
  hover = true,
  clickable = false,
  style,
  onClick,
}: CardProps) {
  const className = [
    styles.card,
    styles[`variant-${variant}`],
    styles[`padding-${padding}`],
    styles[`rounded-${rounded}`],
    hover && styles.hover,
    clickable && styles.clickable,
  ].filter(Boolean).join(" ");

  return <div className={className} style={style} onClick={onClick}>{children}</div>;
}
