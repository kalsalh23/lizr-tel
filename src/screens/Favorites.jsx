import { useNavigate } from 'react-router-dom';
import { Heart, Search as SearchIcon } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';
import ListingCard from '../components/ListingCard.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function Favorites() {
  const navigate = useNavigate();
  const { favorites } = useApp();

  return (
    <>
      <header className="app-header">
        <div className="header-title">المفضلة</div>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => navigate('/search')} aria-label="البحث">
            <SearchIcon size={17} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <div className="icon-wrap">
            <Heart size={32} strokeWidth={1.8} />
          </div>
          <h3>لا توجد أجهزة في المفضلة</h3>
          <p>اضغط على أيقونة القلب في أي إعلان لحفظه هنا</p>
          <button
            onClick={() => navigate('/search')}
            style={{
              marginTop: 20,
              background: 'linear-gradient(135deg, var(--orange-deep), var(--orange))',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: 12,
              fontSize: '.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: '0 6px 16px -6px rgba(154,52,18,.5)',
            }}
          >
            تصفح الإعلانات
          </button>
        </div>
      ) : (
        <>
          <div style={{ padding: '12px 16px 4px', fontSize: '.78rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            {favorites.length} جهاز محفوظ
          </div>
          <div className="listings-grid">
            {favorites.map((id) =>
              PRODUCTS[id] ? <ListingCard key={id} product={PRODUCTS[id]} /> : null
            )}
          </div>
        </>
      )}
    </>
  );
}
