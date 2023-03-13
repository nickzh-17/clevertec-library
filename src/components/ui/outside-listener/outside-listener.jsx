import { useEffect, useRef } from 'react';

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export const OutsideListener = ({ children, callback }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
};
