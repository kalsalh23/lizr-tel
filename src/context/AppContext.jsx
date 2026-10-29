import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export const CHATS = [
  {
    id: 'c1',
    name: 'أحمد خليل',
    initial: 'أخ',
    time: 'صباحاً',
    product: 'آي فون 13',
    preview: 'هل الجهاز متاح للتسليم اليدوي؟',
    unread: 2,
    online: true,
    color: 'blue',
  },
  {
    id: 'c2',
    name: 'سارة محمود',
    initial: 'سم',
    time: 'الأمس',
    product: 'ماك برو إير',
    preview: 'ما هو آخر سعر للجهاز؟',
    unread: 0,
    online: false,
    color: 'pink',
  },
  {
    id: 'c3',
    name: 'عمر يوسف',
    initial: 'ع ي',
    time: 'الجمعة',
    product: 'أيباد برو',
    preview: 'أتفق معك على السعر.',
    unread: 1,
    online: true,
    color: 'green',
  },
  {
    id: 'c4',
    name: 'ليلى عادل',
    initial: 'ل ع',
    time: 'الأربعاء',
    product: 'ساعة أبل',
    preview: 'هل شملت الضمان؟',
    unread: 0,
    online: false,
    color: 'indigo',
  },
];

export const CATEGORIES = ['الكل', 'هواتف', 'أجهزة كمبيوتر', 'أجهزة لوحية', 'ساعات', 'ملحقات'];

const LOCAL_PRODUCTS = [
  {
    id: 'p1',
    title: 'آي فون 13 برو ماكس',
    price: '850000',
    currency: 'ل.س',
    category: 'هواتف',
    condition: 'جيد جداً',
    location: 'حماه، سوريا',
    image: 'https://images.unsplash.com/photo-1678924340416-b9e0e77e4e42?w=400&q=80',
    badge: 'رائج',
    description: 'آي فون 13 برو ماكس بحالة ممتازة، سعة 256 جيجابايت، مع الشاحن والصندوق الأصلي.',
    specs: { السعة: '256 جيجابايت', اللون: 'أزرق ألباين', البطارية: '92%', الشبكة: '5G' },
  },
  {
    id: 'p2',
    title: 'سامسونغ جالكسي إس 24',
    price: '720000',
    currency: 'ل.س',
    category: 'هواتف',
    condition: 'مثل الجديد',
    location: 'دمشق، سوريا',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80',
    badge: 'جديد',
    description: 'سامسونغ جالكسي إس 24 جديد بالكامل، ضمان عام، سعة 128 جيجابايت.',
    specs: { السعة: '128 جيجابايت', اللون: 'أسود فانتوم', البطارية: '100%', الشبكة: '5G' },
  },
  {
    id: 'p3',
    title: 'لابتوب ماك برو إير',
    price: '1450000',
    currency: 'ل.س',
    category: 'أجهزة كمبيوتر',
    condition: 'مستعمل',
    location: 'حلب، سوريا',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80',
    badge: 'أعلى مبيعاً',
    description: 'لابتوب ماك برو إير شريحة M1، سعة 512 جيجابايت، حالة جيدة.',
    specs: { الشريحة: 'Apple M1', السعة: '512 جيجابايت', الرام: '8 جيجابايت', اللون: 'ذهبي' },
  },
  {
    id: 'p4',
    title: 'أيباد برو 11 بوصة',
    price: '580000',
    currency: 'ل.س',
    category: 'أجهزة لوحية',
    condition: 'جيد',
    location: 'حماه، سوريا',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80',
    badge: null,
    description: 'أيباد برو 11 بوصة مع قلم أبل ولوحة مفاتيح.',
    specs: { الحجم: '11 بوصة', السعة: '256 جيجابايت', اللون: 'رمادي فضي', الجيل: 'الرابع' },
  },
  {
    id: 'p5',
    title: 'ساعة أبل واتش سيريس 9',
    price: '280000',
    currency: 'ل.س',
    category: 'ساعات',
    condition: 'مثل جديد',
    location: 'دمشق، سوريا',
    image: 'https://images.unsplash.com/photo-1579586337278-b3befd3346c8?w=400&q=80',
    badge: null,
    description: 'ساعة أبل واتش سيريس 9، GPS + cellular، case ألومنيوم 41 ملم.',
    specs: { الحجم: '41 ملم', الاتصال: 'GPS + Cellular', اللون: 'ضوء النجوم', الحالة: 'مثل جديد' },
  },
  {
    id: 'p6',
    title: 'سماعات سوني WH-1000XM5',
    price: '320000',
    currency: 'ل.س',
    category: 'ملحقات',
    condition: 'جيد جداً',
    location: 'حماه، سوريا',
    image: 'https://images.unsplash.com/photo-1583394838336-acd677277681?w=400&q=80',
    badge: null,
    description: 'سماعات سوني WH-1000XM5 مع علبة الشحن الأصلية، حالة ممتازة.',
    specs: { النوع: 'لاسلكية', 'إلغاء الضوضاء': 'نعم', اللون: 'أسود', الشحن: 'USB-C' },
  },
];

export function AppProvider({ children }) {
  const [products, setProducts] = useState(LOCAL_PRODUCTS);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }, []);

  const showToast = useCallback((message) => {
    const evt = new CustomEvent('lizr-toast', { detail: { message } });
    window.dispatchEvent(evt);
  }, []);

  const value = {
    products,
    favorites,
    toggleFavorite,
    showToast,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
