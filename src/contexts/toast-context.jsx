import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Toast from "@/components/common/toast";
import { ToastContext } from "./toast-context-state";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (type, message) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, type, message, isClosing: false }]);
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, isClosing: true } : t))
        );
        setTimeout(() => removeToast(id), 300);
      }, 4700);
    },
    [removeToast]
  );

  const toast = {
    success: (msg) => addToast("success", msg),
    delete: (msg) => addToast("delete", msg),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {createPortal(
        <>
          {toasts.map((t) => (
            <Toast
              key={t.id}
              type={t.type}
              isClosing={t.isClosing}
              onClose={() => removeToast(t.id)}
            >
              {t.message}
            </Toast>
          ))}
        </>,
        document.getElementById("toast")
      )}
    </ToastContext.Provider>
  );
}
