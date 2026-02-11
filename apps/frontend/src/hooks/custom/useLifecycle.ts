import { useEffect } from "react";

/**
 * Hook für Effekte, die beim Mounting/Unmounting einer Komponente ausgeführt werden
 */
export function useMount(callback: () => void | (() => void)) {
  useEffect(callback, []);
}

/**
 * Hook für Cleanup-Effekte
 */
export function useUnmount(callback: () => void) {
  useEffect(() => callback, []);
}