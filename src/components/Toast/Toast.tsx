import React, { useEffect, useRef } from "react";
import styles from "./Toast.module.css";
import type { ToastProps } from "./Toast.types";

export function Toast({
  id,
  type,
  title,
  message,
  duration = 5000,
  persistent = false,
  action,
  onClose,
  className,
}: ToastProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!persistent && duration > 0) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, duration);

      // Start progress animation
      if (progressRef.current) {
        progressRef.current.style.animationDuration = `${duration}ms`;
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration, persistent]);

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onClose?.();
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case "error":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case "warning":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case "info":
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]} ${className || ""}`}>
      <div className={styles.content}>
        <div className={styles.icon}>{getIcon()}</div>
        <div className={styles.text}>
          {title && <div className={styles.title}>{title}</div>}
          <div className={styles.message}>{message}</div>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close notification"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9.414 8l2.121-2.121a1 1 0 10-1.414-1.414L8 6.586 5.879 4.465a1 1 0 10-1.414 1.414L6.586 8 4.465 10.121a1 1 0 101.414 1.414L8 9.414l2.121 2.121a1 1 0 001.414-1.414L9.414 8z" />
          </svg>
        </button>
      </div>
      {action && (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        </div>
      )}
      {!persistent && (
        <div className={styles.progress}>
          <div ref={progressRef} className={styles.progressBar} />
        </div>
      )}
    </div>
  );
}
