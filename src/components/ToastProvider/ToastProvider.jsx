import React from 'react';
import ToastPlayground from '../ToastPlayground';
import { useEscapeKey } from '../Hooks';

export const ToastContext = React.createContext();

export default function ToastProvider() {
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    setToasts(() => toasts.filter((toast) => toast.id !== id));
  }
  function createToast(msg = 'default msg', variant = 'notice') {
    const id = crypto.randomUUID();
    return { id, msg, variant };
  }

  const clearToast = React.useCallback(() => setToasts([]), []);
  useEscapeKey(clearToast);

  return (
    <ToastContext.Provider value={{ toasts, setToasts, removeToast, createToast }}>
      <ToastPlayground />
    </ToastContext.Provider>
  );
}
