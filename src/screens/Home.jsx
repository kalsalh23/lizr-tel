import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Filter, Home as HomeIcon, Heart, Bell } from 'lucide-react';
import ListingCard from '../components/ListingCard.jsx';
import { useApp } from '../context/AppContext.jsx';

export default function Home() {
  const navigate = useNavigate();
  const { products, favorites, toggleFavorite, showToast } = useApp();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const isFav = (id) => favorites.includes(id);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <div className="location-chip">
              <span className="location-dot" />
              <span>حماه-سوريا</span>
            </div>
          </div>
          <div className="brand-logo">
            <span className="brand-name-lizr">lizr.</span>
            <span className="brand-name-tel">tel</span>
          </div>
          <div className="top-bar-right">
            <button className="notification-btn" onClick={() => showToast('الإشعارات')}>
              <Bell size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-search-wrap">
          <button className="hero-clear" onClick={() => navigate('/search')}>
            <SearchIcon size={18} strokeWidth={1.8} />
          </button>
          <input
            className="hero-search-input"
            placeholder="ابحث عن جهاز..."
          />
        </div>
        <button className="hero-filter-btn" onClick={() => navigate('/search')}>
          <Filter size={16} strokeWidth={1.8} />
          فلترة
        </button>
        <div className="hero-shortcuts">
          <div className="shortcut-chip active">الكل</div>
          <div className="shortcut-chip">جديد</div>
          <div className="shortcut-chip">مستعمل</div>
          <div className="shortcut-chip">استبدال</div>
          <div className="shortcut-chip">اكسسوارات</div>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        {products.length === 0 ? (
          <div className="empty-state">
            <div className="icon-wrap">
              <Heart size={32} strokeWidth={1.8} />
            </div>
            <h3>لا توجد أجهزة متاحة حالياً</h3>
            <p>لا توجد إعلانات معروضة في الوقت الحالي</p>
          </div>
        ) : (
          <div className="listings-grid">
            {products.map((product) => (
              <ListingCard
                key={product.id}
                product={product}
                isFav={isFav(product.id)}
                onToggleFavorite={() => toggleFavorite(product.id)}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
