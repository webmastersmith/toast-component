import React from 'react';
import ToastPlayground from '../ToastPlayground';
import { useEscapeKey } from '../Hooks';

export const ToastContext = React.createContext();

export default function ToastProvider() {
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    setToasts((t) => t.filter((toast) => toast?.props?.id !== id));
  }
  const clearToast = React.useCallback(() => setToasts([]));
  useEscapeKey(clearToast);

  return (
    <ToastContext.Provider value={{ toasts, setToasts, removeToast }}>
      <ToastPlayground />
    </ToastContext.Provider>
  );
}
