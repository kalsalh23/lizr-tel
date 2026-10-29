import { useEffect } from 'react';

export default function Toast() {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);

    const handler = (e) => {
      const { message } = e.detail || {};
      if (!message) return;

      const el = document.createElement('div');
      el.className = 'toast';
      el.textContent = message;
      container.appendChild(el);

      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50%) translateY(12px)';
        setTimeout(() => el.remove(), 250);
      }, 2500);
    };

    window.addEventListener('lizr-toast', handler);

    return () => {
      window.removeEventListener('lizr-toast', handler);
      container.remove();
    };
  }, []);

  return null;
}
