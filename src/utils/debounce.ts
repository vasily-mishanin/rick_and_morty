type DebouncedFunction = (text: string) => void;

export function debounce(fn: DebouncedFunction, milliseconds: number) {
  let timeoutId: NodeJS.Timeout;

  return function (text: string) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(text), milliseconds);
  };
}
