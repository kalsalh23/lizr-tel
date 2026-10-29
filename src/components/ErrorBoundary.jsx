import { useState } from 'react';

export default function ErrorBoundary({ children, fallback }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    if (fallback) return fallback();
    return (
      <div style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <h3 style={{ color: 'var(--danger)', marginBottom: 8 }}>حدث خطأ في تحميل الصفحة</h3>
        <button
          onClick={() => setHasError(false)}
          style={{
            background: 'linear-gradient(135deg, var(--orange-deep), var(--orange))',
            color: '#fff', border: 'none', padding: '10px 24px',
            borderRadius: 10, fontWeight: 700, cursor: 'pointer',
          }}
        >
          جرب مرة أخرى
        </button>
      </div>
    );
  }

  return children;
}
