import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Plus, Smartphone } from 'lucide-react';
import { CHATS } from '../data/chats.js';
import { useApp } from '../context/AppContext.jsx';

export default function Chat() {
  const navigate = useNavigate();
  const { showToast } = useApp();

  return (
    <>
      <header className="app-header">
        <button className="header-back" onClick={() => navigate(-1)} aria-label="رجوع">
          <ArrowRight size={18} strokeWidth={2} />
        </button>
        <div className="header-title centered">الدردشة</div>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => showToast('سيتم فتح البحث')}>
            <Search size={17} strokeWidth={1.8} />
          </button>
          <button className="icon-btn" onClick={() => showToast('سيتم فتح محادثة جديدة')}>
            <Plus size={17} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <div className="chats-list">
        {CHATS.map((c) => (
          <div key={c.id} className="chat-item" onClick={() => showToast('سيتم فتح المحادثة')}>
            <div className={`chat-avatar ${c.color}`}>
              {c.initial}
              {c.online && <span className="online-dot" />}
            </div>
            <div className="chat-info">
              <div className="chat-name-row">
                <span className="chat-name">{c.name}</span>
                <span className="chat-time">{c.time}</span>
              </div>
              <div className="chat-preview-row">
                <div className={`chat-preview ${c.unread > 0 ? 'unread' : ''}`}>
                  <div className="chat-product-tag">
                    <Smartphone size={9} strokeWidth={2.4} />
                    {c.product}
                  </div>
                  <div style={{ marginTop: 2 }}>{c.preview}</div>
                </div>
                {c.unread > 0 && <span className="chat-badge">{c.unread}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}