import React from 'react';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.length > 0 &&
        toasts.map((toast) => {
          return (
            <li key={toast.props.id} className={styles.toastWrapper}>
              {toast}
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
