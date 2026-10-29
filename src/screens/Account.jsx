import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Settings, Heart, ShoppingBag, HelpCircle,
  LogOut, Star, Check, Instagram, Facebook, Phone,
  User, Bell as BellIcon, CreditCard, Truck, Shield,
} from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function Account() {
  const navigate = useNavigate();
  const { favorites, showToast } = useApp();

  const SHORTCUTS = [
    { label: 'المفضلة', Icon: Heart, badge: favorites.length > 0 ? favorites.length : null, onClick: () => navigate('/favorites') },
    { label: 'طلباتي', Icon: ShoppingBag, onClick: () => showToast('سيتم فتح طلباتي') },
    { label: 'إعلاناتي', Icon: User, onClick: () => showToast('سيتم فتح إعلاناتك') },
    { label: 'إشعاراتي', Icon: BellIcon, onClick: () => showToast('سيتم فتح الإشعارات') },
  ];

  const MENU_1 = [
    { label: 'البيانات الشخصية', Icon: User, onClick: () => showToast('سيتم فتح البيانات الشخصية') },
    { label: 'طرق الدفع', Icon: CreditCard, onClick: () => showToast('سيتم فتح طرق الدفع') },
    { label: 'عنوان التوصيل', Icon: Truck, onClick: () => showToast('سيتم فتح عنوان التوصيل') },
    { label: 'الأمان والخصوصية', Icon: Shield, onClick: () => showToast('سيتم فتح الإعدادات الأمنية') },
  ];

  const MENU_2 = [
    { label: 'الإعدادات', Icon: Settings, onClick: () => showToast('سيتم فتح الإعدادات') },
    { label: 'المساعدة والدعم', Icon: HelpCircle, onClick: () => showToast('سيتم فتح المساعدة') },
    { label: 'تسجيل الخروج', Icon: LogOut, danger: true, onClick: () => showToast('سيتم تسجيل الخروج') },
  ];

  return (
    <>
      <div className="app-header">
        <button className="header-back" onClick={() => navigate(-1)} aria-label="رجوع">
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div className="header-title centered">حسابي</div>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => showToast('الإعدادات')}>
            <Settings size={17} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="account-container">
        <div className="account-hero-card">
          <div className="account-hero-top">
            <div className="account-avatar">أ</div>
            <div className="account-hero-info">
              <div className="account-hero-name">
                أحمد سامي
                <span className="account-hero-verified"><Check size={10} strokeWidth={3} /></span>
              </div>
              <div className="account-hero-meta">
                <span className="account-hero-stats">
                  <Star size={10} fill="#FFD700" stroke="#FFD700" strokeWidth={1} />
                  4.9
                </span>
                <span className="account-hero-dot" />
                <span>عضو منذ 2021</span>
                <span className="account-hero-dot" />
                <span>حماه، سوريا</span>
              </div>
            </div>
          </div>

          <div className="account-hero-actions">
            {SHORTCUTS.map((item, idx) => (
              <div key={item.label} className="account-shortcut" onClick={item.onClick}>
                <div className="account-shortcut-icon">
                  <item.Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="account-shortcut-label">{item.label}</span>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="account-section-title">القائمة الرئيسية</div>

        <div className="account-menu-section">
          {MENU_1.map(({ label, Icon, onClick }) => (
            <div key={label} className="account-menu-item" onClick={onClick}>
              <div className="menu-icon">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <span className="menu-text">{label}</span>
              <svg className="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          ))}
        </div>

        <div className="account-section-title" style={{ marginTop: 16 }}>المزيد</div>

        <div className="account-menu-section">
          {MENU_2.map(({ label, Icon, onClick, danger }) => (
            <div key={label} className="account-menu-item" onClick={onClick}>
              <div className={`menu-icon ${danger ? 'red' : ''}`}>
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <span className={`menu-text ${danger ? 'danger' : ''}`}>{label}</span>
              <svg className="menu-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </div>
          ))}
        </div>

        <div className="contact-section">
          <h4>اتصل بنا</h4>
          <div className="contact-item" style={{ cursor: 'default' }}>
            <div className="menu-icon" style={{ background: 'var(--bg-soft)', color: 'var(--text-secondary)' }}>
              <Instagram size={18} strokeWidth={1.8} />
            </div>
            <span className="menu-text">lasertel</span>
            <a href="https://www.instagram.com/lasertel?exln=MW1jN2g2Mm1mZWRwcw==" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem', marginLeft: 'auto', textDecoration: 'underline' }}>
              opening in new tab
            </a>
          </div>
          <div className="contact-item" style={{ cursor: 'default' }}>
            <div className="menu-icon" style={{ background: 'var(--bg-soft)', color: 'var(--text-secondary)' }}>
              <Facebook size={18} strokeWidth={1.8} />
            </div>
            <span className="menu-text">lizr.tel</span>
            <a href="https://www.facebook.com/share/1C3k5pVzz1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', fontSize: '0.72rem', marginLeft: 'auto', textDecoration: 'underline' }}>
              opening in new tab
            </a>
          </div>
          <div className="contact-item" style={{ cursor: 'default' }}>
            <div className="menu-icon" style={{ background: 'var(--bg-soft)', color: 'var(--text-secondary)' }}>
              <Phone size={18} strokeWidth={1.8} />
            </div>
            <span className="menu-text">الجوال: 09577451969</span>
          </div>
          <div className="contact-item" style={{ cursor: 'default' }}>
            <div className="menu-icon" style={{ background: 'var(--bg-soft)', color: 'var(--text-secondary)' }}>
              <Phone size={18} strokeWidth={1.8} />
            </div>
            <span className="menu-text">الأرضي: 0332225294</span>
          </div>
        </div>
      </div>

      <div className="app-footer">© 2025 lizr.tel — الإصدار 1.0</div>
    </>
  );
}
