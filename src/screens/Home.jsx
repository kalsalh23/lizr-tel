import { useNavigate } from 'react-router-dom';
import { Grid, Search as SearchIcon, Plus } from 'lucide-react';
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
      <div className="app-header">
        <div className="header-title">الرئيسية</div>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => navigate('/search')}>
            <SearchIcon size={17} strokeWidth={1.8} />
          </button>
          <Grid size={17} strokeWidth={1.8} />
        </div>
      </div>

      <section style={{ padding: '16px 16px 8px' }}>
        <div
          className="product-viewer-3d"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 260,
            background: 'var(--bg-soft)',
            borderRadius: 14,
            color: 'var(--text-tertiary)',
            fontSize: '0.9rem',
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
        <section style={{ padding: '0 16px 16px' }}>
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
    </>
  );
}
