import React from 'react';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.length > 0 &&
        toasts.map(({ id, variant, msg }) => {
          return (
            <li key={id} className={styles.toastWrapper}>
              <Toast variant={variant} msg={msg} id={id} />
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
