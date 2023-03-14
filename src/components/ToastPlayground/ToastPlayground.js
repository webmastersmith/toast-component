import React from 'react';

import Button from '../Button';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [shape, setShape] = React.useState('notice');
  const [msg, setMsg] = React.useState('');
  const { toasts, setToasts, removeToast } = React.useContext(ToastContext);

  function handleSubmit(e) {
    e.preventDefault();
    // setShow(true);
    const id = crypto.randomUUID();
    setToasts((t) => [...t, <Toast variant={shape} msg={msg} removeToast={() => removeToast(id)} id={id} />]);
    setMsg('');
    setShape('notice');
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
              return (
                <div key={variant}>
                  <label htmlFor={`variant-${variant}`}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name={variant}
                      value={variant}
                      checked={shape === variant}
                      onChange={(e) => setShape(variant)}
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
