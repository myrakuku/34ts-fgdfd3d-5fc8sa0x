'use client';
import { useState } from 'react';

// 10 項 IT 服務範例數據
const serviceList = [
  {
    id: 1,
    title: '數據安全及保密',
    category: '資安服務',
    priceRange: '中價',
    status: '上線服務',
    desc: '我們重視您的市場數據，確保系統自主擁有，防止數據泄漏至競爭者手中',
    img: '/images/service-security.jpg',
    slug: 'data-security-confidential'
  },
  {
    id: 2,
    title: '可持續性開發（CI/CD）',
    category: '系統開發',
    priceRange: '中高價',
    status: '上線服務',
    desc: '需求被更快驗證，避免產品上線後才發現重大缺陷及分攤分年的開發成本',
    img: '/images/service-cicd.jpg',
    slug: 'sustainable-dev-cicd'
  },
  {
    id: 3,
    title: '技術轉移培訓',
    category: '技術顧問',
    priceRange: '入門價',
    status: '上線服務',
    desc: '為客戶提供系統使用的培訓以及適當的技能概念，團隊可自主維護系統',
    img: '/images/service-transfer.jpg',
    slug: 'technology-transfer'
  },
  {
    id: 4,
    title: '企業私有雲搭建',
    category: '雲端運維',
    priceRange: '高價',
    status: '上線服務',
    desc: '搭建企業專屬私有雲架構，隔離公網環境，兼顧彈性擴容與資料隱私',
    img: '/images/cloud-private.jpg',
    slug: 'private-cloud-build'
  },
  {
    id: 5,
    title: '網站滲透測試',
    category: '資安服務',
    priceRange: '中價',
    status: '上線服務',
    desc: '模擬駭客攻擊方式檢測網站漏洞，輸出修復報告，避免被入侵竊取資料',
    img: '/images/pen-test.jpg',
    slug: 'penetration-test'
  },
  {
    id: 6,
    title: '客製化ERP系統開發',
    category: '系統開發',
    priceRange: '高價',
    status: '預約開發',
    desc: '依照企業營運流程定做ERP进销存、財務模組，對接原有舊系統無痛遷移',
    img: '/images/erp-dev.jpg',
    slug: 'erp-custom-dev'
  },
  {
    id: 7,
    title: '伺服器7×24監控維運',
    category: '雲端運維',
    priceRange: '入門價',
    status: '上線服務',
    desc: '全天候監控伺服器負載、異常告警，自動備份資料，大幅降低宕機風險',
    img: '/images/server-monitor.jpg',
    slug: 'server-ops-monitor'
  },
  {
    id: 8,
    title: '數位化流程顧問診斷',
    category: '技術顧問',
    priceRange: '中價',
    status: '上線服務',
    desc: '走訪企業各部門梳理流程痛點，規劃數位轉型落地路線圖與時程規劃',
    img: '/images/digital-consult.jpg',
    slug: 'digital-consulting'
  },
  {
    id: 9,
    title: '員工資安教育課程',
    category: '資安服務',
    priceRange: '入門價',
    status: '預約開發',
    desc: '釣魚郵件演練、機密資料管控教學，從人為層面杜絕資安外泄風險',
    img: '/images/security-train.jpg',
    slug: 'staff-sec-training'
  },
  {
    id: 10,
    title: 'App跨平台定制開發',
    category: '系統開發',
    priceRange: '中高價',
    status: '上線服務',
    desc: 'React Native跨平台APP開發，一套程式同時上架iOS與Android，節省雙端開發成本',
    img: '/images/app-dev.jpg',
    slug: 'cross-app-dev'
  }
];

// 所有分類選項
const categoryList = ['全部分類', '資安服務', '系統開發', '雲端運維', '技術顧問'];
// 價格篩選
const priceList = ['全部價位', '入門價', '中價', '中高價', '高價'];
// 服務狀態
const statusList = ['全部狀態', '上線服務', '預約開發'];

export const AllServicesPage = () => {
  // 篩選狀態
  const [searchKey, setSearchKey] = useState('');
  const [filterCategory, setFilterCategory] = useState('全部分類');
  const [filterPrice, setFilterPrice] = useState('全部價位');
  const [filterStatus, setFilterStatus] = useState('全部狀態');

  // 過濾邏輯
  const filteredServices = serviceList.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchKey.toLowerCase()) || item.desc.toLowerCase().includes(searchKey.toLowerCase());
    const matchCategory = filterCategory === '全部分類' || item.category === filterCategory;
    const matchPrice = filterPrice === '全部價位' || item.priceRange === filterPrice;
    const matchStatus = filterStatus === '全部狀態' || item.status === filterStatus;
    return matchSearch && matchCategory && matchPrice && matchStatus;
  });

  return (
    <section className="py-16 mt-12 mb-4 md:px-8 lg:px-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* 頁面標題區，和首頁Service區風格統一 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-12">
          <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-slate-800 text-center lg:text-right border-r lg:pr-8 border-slate-200">
            全套IT數位服務總覽
          </h2>
          <p className="text-slate-500 text-sm lg:text-base text-center lg:text-left">
            覆蓋資安、系統開發、雲維運、技術顧問四大領域，按需挑選對應解決方案，點擊卡片查看完整服務細節。
          </p>
        </div>

        {/* 篩選欄位 */}
        <div className="bg-slate-50 rounded-xl p-5 mb-10 flex flex-col md:flex-row gap-4 flex-wrap items-center">
          {/* 關鍵字搜尋 */}
          <input
            type="text"
            placeholder="搜尋服務名稱 / 關鍵描述..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            className="flex-1 min-w-[220px] px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />

          {/* 分類下拉 */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            {categoryList.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {/* 價位篩選 */}
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            {priceList.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>

          {/* 狀態篩選 */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            {statusList.map((stat) => (
              <option key={stat} value={stat}>{stat}</option>
            ))}
          </select>

          {/* 重置篩選按鈕 */}
          <button
            onClick={() => {
              setSearchKey('');
              setFilterCategory('全部分類');
              setFilterPrice('全部價位');
              setFilterStatus('全部狀態');
            }}
            className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors text-slate-700"
          >
            重置篩選
          </button>
        </div>

        {/* 篩選結果統計 */}
        <div className="text-slate-500 mb-6">
          共找到 <span className="text-blue-600 font-semibold">{filteredServices.length}</span> 項服務
        </div>

        {/* 服務卡片網格 */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 text-slate-400 text-lg">
            沒有符合條件的服務，請更換篩選條件
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredServices.map((item) => (
              <a
                key={item.id}
                href={`/services/${item.slug}`}
                className="group block bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-slate-100"
              >
                {/* 服務圖片 */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                {/* 卡片內容 */}
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">{item.category}</span>
                    <span className={`text-xs px-2 py-1 rounded ${item.status === '上線服務' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-500 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-3">{item.desc}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    價格區間：{item.priceRange}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};