'use client';
import img1 from '../../images/event.png'

const serviceItems = [
  {
    title: '數據安全及保密',
    desc: '我們重視您的市場數據，確保系統自主擁有，防止數據泄漏至競爭者手中',
    img: img1,
    slug: 'data-security-confidential'
  },
  {
    title: '可持續性開發（CI/CD）',
    desc: '需求被更快驗證，避免產品上線後才發現重大缺陷及分攤分年的開發成本',
    img: img1,
    slug: 'sustainable-dev-cicd'
  },
  {
    title: '技術轉移',
    desc: '為客戶提供系統使用的培訓以及適當的技能概念',
    img: img1,
    slug: 'technology-transfer'
  }
];

export const ServiceIntroSection = () => {
  return (
    <section className="py-14 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-slate-800 text-center lg:text-right border-r lg:pr-8 border-slate-200">
            客戶成功，即是我們的成功
          </h2>
          <p className="text-slate-400 text-sm lg:text-base text-center lg:text-left">
            堅持穩定交付、安全管控與技術落地，陪伴企業長期數位化成長，從系統搭建到內部上手全程支援。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {serviceItems.map((item) => (
            <a
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group cursor-pointer block bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="bg-white py-4 text-center p-2">
                <h3 className="text-base font-semibold text-slate-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-gray-500 transition-colors">
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/services"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded transition-colors shadow-md hover:shadow-blue-200"
          >
            查看更多服務 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}