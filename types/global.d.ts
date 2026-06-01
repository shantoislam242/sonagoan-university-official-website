export {};

declare global {
  interface Window {
    jQuery?: any;
    $?: any;
    suInit?: Record<string, () => void>;
  }
}
