import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
import ListingCard from '../components/ListingCard.jsx';
import { CATEGORIES, useApp } from '../context/AppContext.jsx';

export default function Search() {
  const navigate = useNavigate();
  const { products } = useApp();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'الكل' || p.category === activeCategory;
    const matchQuery = p.title.includes(query) || p.category.includes(query);
    return matchCat && matchQuery;
  });

  return (
    <>
      <div className="search-bar">
        <div className="search-input-wrap">
          <SearchIcon size={16} strokeWidth={1.8} className="search-btn-icon" />
          <input
            className="search-input"
            placeholder="ابحث عن جهاز..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')}>
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="search-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="listings-grid">
        {filtered.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: 'var(--text-secondary)' }}>
            لا توجد نتائج للبحث
          </div>
        ) : (
          filtered.map((product) => (
            <ListingCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
}
