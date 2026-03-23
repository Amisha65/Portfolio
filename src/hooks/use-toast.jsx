import { useState, useEffect } from "react";

let toastId = 0;
const listeners = new Set();

export function toast({ title, description, variant }) {
  const newToast = {
    id: ++toastId,
    title,
    description,
    variant,
  };
  listeners.forEach((listener) => listener(newToast));
}

export function useToast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const listener = (newToast) =>
      setToasts((current) => [...current, newToast]);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  return { toasts };
}
