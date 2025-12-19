import React from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input({
  value,
  placeholder,
  disabled = false,
  size = "md",
  state = "default",
  onChange,
  style,
}: InputProps) {
  const className = [
    styles.input,
    styles[`size-${size}`],
    state !== "default" && styles[`state-${state}`],
  ].filter(Boolean).join(" ");

  return (
    <input
      className={className}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      style={style}
    />
  );
}
