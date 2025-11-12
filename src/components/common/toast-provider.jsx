import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Toast from "@/components/common/toast";
import { ToastContext } from "@/hooks/use-toast";

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const autoCloseTimerRef = useRef(null);
  const closeAnimTimerRef = useRef(null);

  const hideToast = useCallback(() => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
      autoCloseTimerRef.current = null;
    }

    if (closeAnimTimerRef.current) {
      clearTimeout(closeAnimTimerRef.current);
      closeAnimTimerRef.current = null;
    }

    setToast((prev) => {
      if (!prev || prev.isClosing) return prev;
      return { ...prev, isClosing: true };
    });

    closeAnimTimerRef.current = setTimeout(() => {
      setToast(null);
      closeAnimTimerRef.current = null;
    }, 300);
  }, []);

  const showToast = useCallback(
    (message, type = "success") => {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      if (closeAnimTimerRef.current) {
        clearTimeout(closeAnimTimerRef.current);
      }

      setToast({
        message,
        type,
        key: Date.now(),
        isClosing: false,
      });

      autoCloseTimerRef.current = setTimeout(() => {
        hideToast();
      }, 5000);
    },
    [hideToast]
  );

  const contextValue = {
    success: (message) => showToast(message, "success"),
    delete: (message) => showToast(message, "delete"),
  };

  const toastContainer = document.getElementById("toast");

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toastContainer &&
        createPortal(
          <>
            {toast && (
              <Toast
                key={toast.key}
                type={toast.type}
                isClosing={toast.isClosing}
                onClose={hideToast}
              >
                {toast.message}
              </Toast>
            )}
          </>,
          toastContainer
        )}
    </ToastContext.Provider>
  );
}
