import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function ListingCard({ product }) {
  const { favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(product.id);

  return (
    <div className="listing-card" style={{ cursor: 'pointer' }}>
      <div className="listing-image">
        <img src={product.image} alt={product.title} />
        {product.badge && (
          <span className="listing-badge">{product.badge}</span>
        )}
      </div>
      <div className="listing-body">
        <div className="listing-title">{product.title}</div>
        <div className="listing-meta">
          <span>{product.category}</span>
          <span>•</span>
          <span>{product.condition}</span>
        </div>
        <div className="listing-price">
          {product.price} {product.currency}
        </div>
      </div>
      <button
        className="fav-btn"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(product.id);
        }}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 32,
          height: 32,
          borderRadius: 8,
          border: 'none',
          background: 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Heart
          size={16}
          strokeWidth={2}
          fill={isFav ? '#e53935' : 'none'}
          stroke={isFav ? '#e53935' : 'var(--text-secondary)'}
        />
      </button>
    </div>
  );
}
