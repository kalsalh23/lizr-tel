import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function ListingCard({ product, isFav, onToggleFavorite }) {
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
        <div className="listing-divider" />
        <div className="listing-meta-row">
          <span className="listing-location">
            📍 {product.location}
          </span>
          <span className="listing-price">{product.price} {product.currency}</span>
        </div>
        <div className="listing-date">منذ ساعتين</div>
      </div>
      <button
        className="listing-fav-btn"
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
        style={{
          position: 'absolute',
          bottom: 8,
          left: 8,
        }}
      >
        <Heart
          size={18}
          strokeWidth={2}
          fill={isFav ? '#e53935' : 'none'}
          stroke={isFav ? '#e53935' : 'var(--text-secondary)'}
        />
      </button>
    </div>
  );
}
