// import { useCallback, useRef } from "react";


// const debounce = <T extends (...args: any[]) => void>(
//   callback: T,
//   delay: number
// ) => {
//   const timer = useRef<number | null>(null);

//   const debouncedFunction = useCallback(
//     (...args: Parameters<T>) => {
//       if (timer.current) {
//         clearTimeout(timer.current);
//       }

//       timer.current = setTimeout(() => {
//         callback(...args);
//       }, delay);
//     },
//     [callback, delay]
//   );

//   return debouncedFunction;
// };

// export default debounce;
