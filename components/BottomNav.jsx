import { NavLink } from 'react-router-dom';
import { Home, Search, Plus, Heart, User } from 'lucide-react';

const ITEMS = [
  { to: '/', label: 'الرئيسية', Icon: Home, end: true },
  { to: '/search', label: 'البحث', Icon: Search },
  { to: '/post', label: 'إضافة', Icon: Plus, isPost: true },
  { to: '/favorites', label: 'المفضلة', Icon: Heart },
  { to: '/account', label: 'حسابي', Icon: User },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {ITEMS.map(({ to, label, Icon, end, isPost }) => {
        if (isPost) {
          return (
            <NavLink key={to} to={to} className="nav-item post-btn" aria-label="أضف إعلان">
              <Icon size={24} strokeWidth={2.2} />
            </NavLink>
          );
        }
        return (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={21} strokeWidth={1.7} />
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
}