import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Plus } from 'lucide-react';
import ListingCard from '../components/ListingCard.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function Home() {
  const navigate = useNavigate();
  const { products } = useApp();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <header className="hero-header">
        <div className="brand-logo">
          <span className="brand-name-lizr">lizr.</span>
          <span className="brand-name-tel">tel</span>
        </div>
        <div className="hero-actions">
          <button className="hero-icon-btn" onClick={() => navigate('/search')}>
            <SearchIcon size={20} strokeWidth={1.8} />
          </button>
          <button className="hero-icon-btn" onClick={() => navigate('/post')}>
            <Plus size={20} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <section style={{ padding: '16px 16px 8px' }}>
          <div
            className="product-viewer-3d"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
              background: 'var(--bg-soft)',
              borderRadius: 16,
              color: 'var(--text-tertiary)',
              fontSize: '0.9rem',
              border: '1px solid var(--border)',
            }}
          >
           preview ثلاثي الأبعاد قريباً
          </div>
        </section>

        {products.length === 0 ? (
          <div style={{ padding: '40px 16px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            لا توجد منتجات متاحة حالياً
          </div>
        ) : (
          <section style={{ padding: '0 12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <Plus size={16} strokeWidth={2} />
              <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>الأجهزة المتاحة</span>
            </div>
            <div className="listings-grid">
              {products.map((product) => (
                <ListingCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
