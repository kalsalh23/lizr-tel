export default function FilterSheet() {
  return (
    <div className="filter-sheet-overlay">
      <div className="filter-sheet">
        <h3>تصفية النتائج</h3>
        <div className="filter-row">
          <span className="filter-label">الفئة</span>
          <span className="filter-value">الكل</span>
        </div>
        <div className="filter-row">
          <span className="filter-label">الحالة</span>
          <span className="filter-value">الكل</span>
        </div>
        <div className="filter-row">
          <span className="filter-label">نطاق السعر</span>
          <span className="filter-value">الكل</span>
        </div>
        <div className="filter-row">
          <span className="filter-label">الموقع</span>
          <span className="filter-value">الكل</span>
        </div>
      </div>
    </div>
  );
}
