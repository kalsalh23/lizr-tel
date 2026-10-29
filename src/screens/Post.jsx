import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Camera } from 'lucide-react';

export default function Post() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('هواتف');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <div className="app-header">
        <button className="header-back" onClick={() => navigate(-1)} aria-label="رجوع">
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div className="header-title centered">إضافة إعلان</div>
        <div className="header-actions" />
      </div>

      <form onSubmit={handleSubmit} className="post-form">
        <div className="post-image-placeholder" onClick={() => {}}>
          <Camera size={24} strokeWidth={2} />
          <div>إضافة صورة الجهاز</div>
        </div>

        <select className="post-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="هواتف">هواتف</option>
          <option value="أجهزة كمبيوتر">أجهزة كمبيوتر</option>
          <option value="أجهزة لوحية">أجهزة لوحية</option>
          <option value="ساعات">ساعات</option>
          <option value="ملحقات">ملحقات</option>
        </select>

        <input
          className="post-field"
          placeholder="عنوان الإعلان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="post-field"
          placeholder="السعر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <textarea
          className="post-field post-textarea"
          placeholder="وصف الجهاز..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit" className="post-submit">
          نشر الإعلان
        </button>
      </form>
    </>
  );
}
