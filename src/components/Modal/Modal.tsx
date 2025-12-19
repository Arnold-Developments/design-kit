import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import type { ModalProps, ModalHeaderProps, ModalBodyProps, ModalFooterProps, ModalCloseButtonProps } from "./Modal.types";

export function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  variant = "centered",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  title,
  description,
  footer,
  className,
  overlayClassName,
  contentClassName,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose();
      }
    };

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleFocusTrap);
    document.body.style.overflow = "hidden";

    // Focus the modal when it opens
    modalRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleFocusTrap);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const modalContent = (
    <div className={`${styles.overlay} ${overlayClassName || ""}`} onClick={handleOverlayClick}>
      <div
        ref={modalRef}
        className={`${styles.modal} ${styles[`size-${size}`]} ${styles[`variant-${variant}`]} ${contentClassName || ""}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
      >
        <div className={`${styles.content} ${className || ""}`}>
          {(title || showCloseButton) && (
            <div className={styles.header}>
              {title && (
                <h2 id="modal-title" className={styles.title}>
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
            </div>
          )}
          
          {description && (
            <p id="modal-description" className={styles.description}>
              {description}
            </p>
          )}

          <div className={styles.body}>
            {children}
          </div>

          {footer && (
            <div className={styles.footer}>
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export function ModalHeader({ children, className }: ModalHeaderProps) {
  return <div className={`${styles.header} ${className || ""}`}>{children}</div>;
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={`${styles.body} ${className || ""}`}>{children}</div>;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={`${styles.footer} ${className || ""}`}>{children}</div>;
}

export function ModalCloseButton({ onClose, className }: ModalCloseButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.closeButton} ${className || ""}`}
      onClick={onClose}
      aria-label="Close modal"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
}
