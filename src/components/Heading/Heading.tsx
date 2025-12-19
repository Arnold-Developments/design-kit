import React from "react";
import styles from "./Heading.module.css";
import { HeadingProps } from "./Heading.types";

export function Heading({ level, children }: HeadingProps) {
    const Tag = `h${level}` as const;

    return (
        <Tag className={`${styles.heading} ${styles[`h${level}`]}`}>
            {children}
        </Tag>
    );
}