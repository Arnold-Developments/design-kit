import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "./Toast";
import styles from "./Toast.module.css";
import type { ToastContainerProps, ToastProps, ToastContextValue, ToastPosition } from "./Toast.types";

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const toastCounter = useRef(0);

  const addToast = useCallback((props: Omit<ToastProps, "id">) => {
    const id = uuidv4();
    const newToast: ToastProps = { ...props, id };
    
    setToasts(prev => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const toast = useCallback((props: Omit<ToastProps, "id">) => {
    return addToast(props);
  }, [addToast]);

  const success = useCallback((message: string, title?: string) => {
    return addToast({ type: "success", message, title });
  }, [addToast]);

  const error = useCallback((message: string, title?: string) => {
    return addToast({ type: "error", message, title });
  }, [addToast]);

  const warning = useCallback((message: string, title?: string) => {
    return addToast({ type: "warning", message, title });
  }, [addToast]);

  const info = useCallback((message: string, title?: string) => {
    return addToast({ type: "info", message, title });
  }, [addToast]);

  const dismiss = useCallback((id: string) => {
    removeToast(id);
  }, [removeToast]);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextValue = {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerPropsExtended extends ToastContainerProps {
  toasts: ToastProps[];
  onRemove: (id: string) => void;
}

function ToastContainer({ 
  toasts, 
  onRemove, 
  position = "top-right",
  className 
}: ToastContainerPropsExtended) {
  if (toasts.length === 0) return null;

  const container = (
    <div className={`${styles.container} ${styles[position]} ${className || ""}`}>
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  );

  return createPortal(container, document.body);
}

export { ToastContainer };
