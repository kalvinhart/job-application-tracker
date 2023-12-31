import { useCallback, useEffect } from "react";

export const useClickOutside = (element: React.RefObject<HTMLElement>, callback: () => void): void => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (element.current && !element.current.contains(e.target as Node)) {
        callback();
      }
    },
    [element, callback]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return (): void => window.removeEventListener("click", handleClick);
  }, [handleClick]);
};
