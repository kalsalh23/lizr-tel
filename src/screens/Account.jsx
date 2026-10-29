import { useNavigate } from 'react-router-dom';
import {
  Settings, Heart, ShoppingBag, HelpCircle,
  LogOut, Star, Check,
} from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function Account() {
  const navigate = useNavigate();
  const { favorites, showToast } = useApp();

  const MENU_1 = [
    {
      label: 'المفضلة',
      Icon: Heart,
      badge: favorites.length > 0 ? favorites.length : null,
      onClick: () => navigate('/favorites'),
    },
    {
      label: 'طلباتي',
      Icon: ShoppingBag,
      onClick: () => showToast('سيتم فتح طلباتي'),
    },
  ];

  const MENU_2 = [
    { label: 'الإعدادات', Icon: Settings, onClick: () => showToast('سيتم فتح الإعدادات') },
    { label: 'المساعدة والدعم', Icon: HelpCircle, onClick: () => showToast('سيتم فتح المساعدة') },
    { label: 'تسجيل الخروج', Icon: LogOut, danger: true, onClick: () => showToast('سيتم تسجيل الخروج') },
  ];

  return (
    <>
      <header className="app-header" style={{ background: 'var(--bg)', borderBottom: 'none' }}>
        <div className="header-title">حسابي</div>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => showToast('سيتم فتح الإعدادات')}>
            <Settings size={17} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">أ</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="profile-name-row">
              <span className="profile-name">أحمد سامي</span>
              <span className="verified-badge"><Check size={10} strokeWidth={3} /></span>
            </div>
            <div className="profile-meta">
              <span className="star">
                <Star size={10} fill="#FFD700" stroke="#FFD700" strokeWidth={1} />
                4.9
              </span>
              <span className="dot-sep" />
              <span>عضو منذ 2021</span>
              <span className="dot-sep" />
              <span>حماه، سوريا</span>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-card">
        <div className="stat-item">
          <div className="stat-value">48</div>
          <div className="stat-label">إعلان نشط</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">126</div>
          <div className="stat-label">تم البيع</div>
        </div>
        <div class="stat-item">
          <div className="stat-value">3.2K</div>
          <div className="stat-label">مشاهدة</div>
        </div>
      </div>

      {[MENU_1, MENU_2].map((group, gi) => (
        <div key={gi} className="menu-section">
          {group.map(({ label, Icon, badge, onClick, danger }) => (
            <div key={label} className="menu-item" onClick={onClick}>
              <div className={`menu-icon ${danger ? 'red' : ''}`}>
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <span className="menu-text" style={danger ? { color: 'var(--danger)' } : undefined}>
                {label}
              </span>
              {badge && <span className="menu-badge">{badge}</span>}
              <svg className="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          ))}
        </div>
      ))}

      <div className="app-footer">© 2025 lizr.tel — الإصدار 1.0</div>
    </>
  );
}
