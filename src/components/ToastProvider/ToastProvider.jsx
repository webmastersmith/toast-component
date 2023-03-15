import React from 'react';
import { useKeyDown } from '../Hooks';
import { VARIANT_OPTIONS } from '../ToastPlayground';

export const ToastContext = React.createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    setToasts(() => toasts.filter((toast) => toast.id !== id));
  }
  function createToast(msg = 'default msg', variant = VARIANT_OPTIONS[0]) {
    const id = crypto.randomUUID();
    return { id, msg, variant };
  }

  const clearToast = React.useCallback(() => setToasts([]), []);
  useKeyDown('Escape', clearToast);

  return (
    <ToastContext.Provider value={{ toasts, setToasts, removeToast, createToast }}>
      {children}
    </ToastContext.Provider>
  );
}
