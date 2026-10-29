import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data/products.js';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = PRODUCTS[id];

  if (!product) {
    return (
      <div style={{ padding: 24, textAlign: 'center', color: 'var(--text-secondary)' }}>
        الجهاز غير موجود
      </div>
    );
  }

  return (
    <>
      <div className="app-header">
        <button className="header-back" onClick={() => navigate(-1)} aria-label="رجوع">
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div className="header-title centered">تفاصيل الجهاز</div>
        <div className="header-actions">
          <button className="icon-btn">
            <MoreHorizontal size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="product-detail-image">
        <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div className="product-meta">
        {product.badge && (
          <span style={{
            background: '#fdecea',
            color: 'var(--danger)',
            fontSize: '0.7rem',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: 10,
            alignSelf: 'flex-start',
          }}>
            {product.badge}
          </span>
        )}
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price} {product.currency}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', gap: 6, marginTop: 4 }}>
          <span>{product.category}</span>
          <span>•</span>
          <span>{product.condition}</span>
          <span>•</span>
          <span>{product.location}</span>
        </div>
        <div className="product-desc">{product.description}</div>
      </div>

      <div className="product-specs">
        {Object.entries(product.specs).map(([key, val]) => (
          <div key={key} className="spec-row">
            <span className="spec-label">{key}</span>
            <span className="spec-value">{val}</span>
          </div>
        ))}
      </div>

      <div className="product-detail-actions">
        <button className="btn-outline">
          <Share2 size={20} strokeWidth={2} />
        </button>
        <button className="btn-outline">
          <MessageSquare size={20} strokeWidth={2} />
        </button>
        <button className="btn-outline">
          <Phone size={20} strokeWidth={2} />
        </button>
        <button className="btn-primary">
          تواصل مع البائع
        </button>
      </div>
    </>
  );
}
