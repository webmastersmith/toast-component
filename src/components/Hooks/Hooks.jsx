import React from 'react';

export const useEscapeKey = (cb) => {
  console.log('useEscapeKey ran');
  React.useEffect(() => {
    console.log('useEscapeKey useEffect ran');
    function handleKeyPress(e) {
      if (e.code === 'Escape') {
        cb();
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [cb]);
};
