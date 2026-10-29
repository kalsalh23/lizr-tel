import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './screens/Home.jsx';
import Search from './screens/Search.jsx';
import Post from './screens/Post.jsx';
import Chat from './screens/Chat.jsx';
import Account from './screens/Account.jsx';
import Favorites from './screens/Favorites.jsx';
import ProductDetail from './screens/ProductDetail.jsx';
import BottomNav from './components/BottomNav.jsx';
import FilterSheet from './components/FilterSheet.jsx';
import Toast from './components/Toast.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { AppProvider } from './context/AppContext.jsx';

const MAIN_ROUTES = ['/', '/search', '/post', '/favorites', '/account'];

export default function App() {
  const location = useLocation();
  const isMain = MAIN_ROUTES.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AppProvider>
      <ErrorBoundary>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/post" element={<Post />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/account" element={<Account />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>

          {isMain && <BottomNav />}

          <FilterSheet />
          <Toast />
        </div>
      </ErrorBoundary>
    </AppProvider>
  );
}
