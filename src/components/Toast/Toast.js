import React from 'react';
import { ToastContext } from '../ToastProvider';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ msg, variant, id }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { removeToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`} data-id={id}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {msg}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => removeToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
