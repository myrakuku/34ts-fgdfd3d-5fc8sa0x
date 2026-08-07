'use client';
import { useState, useRef, useEffect } from 'react';

const serviceList = [
  {
    groupKey: 'custom',
    groupName: '自訂開發 Custom Build',
    items: [
      { label: '自訂', value: '自訂' },
    ],
  },
  {
    groupKey: 'crm',
    groupName: 'CRM 客戶管理系統',
    items: [
      { label: '客戶資料管理', value: '客戶資料管理' },
      { label: '銷售跟進記錄', value: '銷售跟進記錄' },
      { label: '銷售漏斗', value: '銷售漏斗' },
      { label: '會員積分', value: '會員積分' },
      { label: '簡訊/郵件推送', value: '簡訊郵件推送' },
    ],
  },
  {
    groupKey: 'ecom',
    groupName: '電商系統 E-commerce',
    items: [
      { label: '商城網站', value: '商城網站' },
      { label: '訂單管理', value: '訂單管理' },
      { label: '支付整合', value: '支付整合' },
      { label: '庫存管理', value: '庫存管理' },
      { label: '優惠券/促銷模組', value: '優惠券促銷模組' },
    ],
  },
  {
    groupKey: 'pm',
    groupName: 'Project Management System',
    items: [
      { label: '任務派發', value: '任務派發' },
      { label: '進度追蹤', value: '進度追蹤' },
      { label: '甘特圖', value: '甘特圖' },
      { label: '成員權限管控', value: '成員權限管控' },
      { label: '文件共享+工時統計', value: '文件共享工時統計' },
    ],
  },
];

export const ServiceSelectSection = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());
  const groupCheckboxRefs = useRef({});

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    serviceList.forEach((group) => {
      const el = groupCheckboxRefs.current[group.groupKey];
      if (!el) return;
      const vals = group.items.map(i => i.value);
      const selectedNum = vals.filter(v => selectedServices.has(v)).length;
      const allChecked = selectedNum === vals.length;
      const partial = selectedNum > 0 && !allChecked;
      el.checked = allChecked;
      el.indeterminate = partial;
    });
  }, [selectedServices]);

  const checkAllGroup = (group, checked) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      group.items.forEach(item => {
        if (checked) next.add(item.value);
        else next.delete(item.value);
      });
      return next;
    });
  };

  const toggleItem = (val, checked) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (checked) next.add(val);
      else next.delete(val);
      return next;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '請填寫稱呼';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '請填寫電話';
    } else if (!/^[\d\s\-+()]{8,}$/.test(formData.phone)) {
      newErrors.phone = '請填寫有效電話號碼';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '請填寫有效電郵地址';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const submitData = {
      ...formData,
      services: Array.from(selectedServices)
    };

    console.log('提交資料：', submitData);

    alert('已提交，我們會盡快聯絡您。');
  };

  const selectedList = Array.from(selectedServices);

  return (
    <section className="w-full px-4 py-8 md:px-6 md:py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 border border-slate-100">
          <hr className="w-16 h-0.5 mx-auto bg-blue-500 mb-6" />

          <h3 className="text-lg text-blue-800 md:text-xl font-semibold text-center mb-2">
            有意查詢/報價？
          </h3>
          <h3 className="text-xl text-blue-800 md:text-2xl font-semibold text-center mb-2">
            勾選心儀服務，即獲專人回覆
          </h3>

          <p className="text-slate-400 text-xs md:text-sm text-center mb-6">
            點擊分類可一鍵全選整組服務，點擊卡片可單獨選取/取消
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {serviceList.map((group) => {
                const values = group.items.map(i => i.value);
                const allChecked = values.every(v => selectedServices.has(v));
                const wrapClass = allChecked ? 'rounded-lg px-4 py-4 pb-5 transition-colors duration-300 bg-blue-500' : 'rounded-lg px-4 py-4 pb-5 transition-colors duration-300 border-b border-slate-100 last:border-b-0';
                const titleColor = allChecked ? 'text-white' : 'text-slate-700';

                return (
                  <div key={group.groupKey} className={wrapClass}>
                    <label className="flex items-center gap-3 mb-4 cursor-pointer">
                      <input
                        ref={el => { groupCheckboxRefs.current[group.groupKey] = el; }}
                        type="checkbox"
                        checked={allChecked}
                        onChange={e => checkAllGroup(group, e.target.checked)}
                        className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className={`font-medium text-base ${titleColor}`}>
                        {group.groupName}
                      </span>
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                      {group.items.map(item => {
                        const isItemChecked = selectedServices.has(item.value);
                        const cardClass = isItemChecked ? 'relative px-3 py-3 rounded-lg border cursor-pointer transition-all duration-250 select-none bg-blue-100 border-white shadow-sm' : 'relative px-3 py-3 rounded-lg border cursor-pointer transition-all duration-250 select-none border-blue-300 bg-transparent';
                        const textClass = isItemChecked ? 'text-xs md:text-sm text-center font-medium text-blue-700' : 'text-xs md:text-sm text-center font-medium text-black';

                        return (
                          <div
                            key={item.value}
                            onClick={() => toggleItem(item.value, !isItemChecked)}
                            className={cardClass}
                          >
                            {isItemChecked && (
                              <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                              </div>
                            )}
                            <p className={textClass}>{item.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedList.length > 0 && (
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-700 font-medium mb-2 text-sm">
                  已選服務 ({selectedList.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedList.map(name => (
                    <span
                      key={name}
                      className="px-2.5 py-1.5 bg-blue-500 text-white rounded-full text-xs flex items-center gap-1.5"
                    >
                      {name}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItem(name, false);
                        }}
                        className="hover:text-blue-100"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                稱呼 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="陳先生 / 李小姐"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  電話 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="98765432"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  電郵
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="info@company.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* 新增：詳細諮詢內容，選填 */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                詳細諮詢內容
              </label>
              <textarea
                name="detail"
                value={formData.detail}
                onChange={handleInputChange}
                rows={3}
                placeholder="可描述更多..."
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
              />
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                disabled={selectedList.length === 0}
                className={selectedList.length > 0 ? 'px-8 py-3 rounded-lg font-medium transition-all duration-200 bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-blue-200' : 'px-8 py-3 rounded-lg font-medium transition-all duration-200 bg-slate-200 text-slate-400 cursor-not-allowed'}
              >
                提交需求
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};