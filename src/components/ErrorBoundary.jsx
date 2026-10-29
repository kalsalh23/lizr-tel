import { useState } from 'react';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  if (hasError) {
    return (
      <div style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <h3 style={{ color: 'var(--danger)', marginBottom: 12 }}>حدث خطأ في تحميل الصفحة</h3>
        <p style={{ marginBottom: 16, fontSize: '0.9rem', maxWidth: 400, margin: '0 auto 16px' }}>
          {error?.message || 'خطأ غير معروف'}
        </p>
        <button
          onClick={() => {
            setError(null);
            setHasError(false);
          }}
          style={{
            background: 'linear-gradient(135deg, var(--orange-deep), var(--orange))',
            color: '#fff', border: 'none', padding: '10px 24px',
            borderRadius: 10, fontWeight: 700, cursor: 'pointer',
          }}
        >
          إعادة تحميل الصفحة
        </button>
      </div>
    );
  }

  return children;
}
