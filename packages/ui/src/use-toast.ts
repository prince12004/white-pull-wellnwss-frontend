'use client';

import * as React from 'react';

export interface ToastItem {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

type Listener = (toasts: ToastItem[]) => void;

let toasts: ToastItem[] = [];
const listeners: Listener[] = [];

function emit() {
  listeners.forEach((listener) => listener(toasts));
}

export function toast(item: Omit<ToastItem, 'id'>) {
  const id = crypto.randomUUID();
  toasts = [...toasts, { ...item, id }];
  emit();
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    emit();
  }, 4000);
}

export function useToast() {
  const [items, setItems] = React.useState<ToastItem[]>(toasts);

  React.useEffect(() => {
    listeners.push(setItems);
    return () => {
      const idx = listeners.indexOf(setItems);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return { toasts: items, toast };
}
