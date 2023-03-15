import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [status, setStatus] = React.useState(VARIANT_OPTIONS[0]);
  const [msg, setMsg] = React.useState('');
  const { toasts, setToasts, createToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    setToasts((toasts) => [...toasts, createToast(msg, status)]);
    setMsg('');
    setStatus('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && <ToastShelf toasts={toasts} />}

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={msg}
              onChange={(event) => {
                setMsg(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`;
              return (
                <div key={variant}>
                  <label htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={status === variant}
                      onChange={(e) => setStatus(variant)}
                    />
                    {variant}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
