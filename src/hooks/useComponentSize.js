/* eslint-disable */
import { useState, useCallback, useEffect } from 'react';

const getSize = (element) => {
  if (!element) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
  };
};

const useComponentSize = (ref) => {
  const _useState = useState(getSize(ref ? ref.current : {}));
  const ComponentSize = _useState[0];
  const setComponentSize = _useState[1];

  const handleResize = useCallback(() => {
    if (ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }, [ref, setComponentSize]);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) {
      return;
    }

    handleResize();

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(currentRef);

      return () => {
        resizeObserver.disconnect(currentRef);
        resizeObserver = null;
      };
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, ref]);

  return ComponentSize;
};

export default useComponentSize;
