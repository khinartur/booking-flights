export function debounce(func: (...args: any[]) => void, timeout: number) {
  let timeoutId: NodeJS.Timeout
  return function (...args: any[]) {
    clearTimeout(timeoutId)
    // @todo
    // @ts-ignore
    timeoutId = setTimeout(() => func.apply(this, args), timeout)
  }
}
