import { useEffect, RefObject } from "react";

/**
 * 특정 요소의 바깥을 클릭했을 때 콜백 함수를 실행하는 훅 (함수 선언식 버전)
 */
export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;

      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return function cleanup() {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
