import React from "react";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types";

export function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const className = [
    styles.button,
    styles[`button--${variant}`],
    styles[`size-${size}`],
  ].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
