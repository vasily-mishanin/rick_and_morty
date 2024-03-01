export function debounce(fn: Function, milliseconds: number) {
  let timeoutId: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), milliseconds);
  };
}
