import React from "react";
import styles from "./Avatar.module.css";
import type { AvatarProps } from "./Avatar.types";

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  style,
}: AvatarProps) {
  const className = [
    styles.avatar,
    styles[`size-${size}`],
    !src && styles.fallback,
  ].filter(Boolean).join(" ");

  if (src) {
    return (
      <div className={className} style={style}>
        <img src={src} alt={alt || "Avatar"} className={styles.image} />
      </div>
    );
  }

  const initials = fallback
    ? fallback
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  return <div className={className} style={style}>{initials}</div>;
}
