import React from 'react';

export const useKeyDown = (key, callback) => {
  // console.log('useEscapeKey ran');
  React.useEffect(() => {
    // console.log('useEscapeKey useEffect ran');
    function handleKeyPress(e) {
      if (e.code === key) {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [key, callback]);
};
