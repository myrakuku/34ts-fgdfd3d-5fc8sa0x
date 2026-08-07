'use client';

export const ServiceDetail = () => {
  return (
    <main className="bg-white text-slate-800">
      {/* ========== 首屏 Hero 區 (SEO H1 標題 + 核心關鍵字) ========== */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <h1 className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-center leading-tight mb-4">
          雲端數據安全服務｜企業資料保密與防泄漏解決方案
        </h1>
        <p className="text-center text-blue-600 text-sm font-medium mb-8">
          目標 SEO 關鍵字：雲端數據安全服務、企業資料保密、數據防泄漏
        </p>
        <p className="text-slate-600 text-center max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          專為企業打造的雲端數據安全服務，確保系統自主可控、資料不外流、杜絕競爭者資料盜取風險，協助企業建立完整資安防護體系。
        </p>

        {/* 首屏主要 CTA 按鈕 */}
        <div className="text-center mt-10">
          <a
            href="/#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-blue-200 transition-all"
          >
            免費諮詢｜索取專屬報價
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-10 pb-20">
        {/* ========== 模塊1：目標受眾 ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
            適合對象｜目標受眾
          </h2>
          <p className="text-slate-600 leading-relaxed">
            適用產業：中大型製造業、科技企業、跨境貿易公司、連鎖服務業；
            適配決策者：CTO、IT 部門經理、行政採購主管、企業營運負責人。
          </p>
        </section>

        {/* ========== 模塊2：競品差異化優勢 ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
            核心差異｜為什麼選擇我們
          </h2>
          <p className="text-slate-600 leading-relaxed">
            市面多數資安廠商僅提供第三方雲代管模式，企業數據寄存第三方平台存在外泄風險。我們採用企業獨立私有化部署架構，所有營運數據 100% 留存於企業自有環境，無第三方後門；搭配完整操作稽核日誌、多層權限分級管控，專門對機密營運資料高度敏感的企業設計。
          </p>
        </section>

        {/* ========== 模塊3：服務落地流程 ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
            標準服務流程
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              '需求評估 & 風險盤點',
              '獨立系統架構部署',
              '權限分層與稽核搭建',
              '漏洞修復與安全加固',
              '上線驗證與內部培訓'
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center border border-slate-100">
                <div className="w-8 h-8 mx-auto mb-3 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== 模塊4：案例與授權數據 ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
            落地案例與成果數據
          </h2>
          <p className="text-slate-600 mb-4">
            已協助20餘家企業完成數據安全升級，覆蓋製造業營運機密、貿易客戶資源、內部ERP系統防護，上線至今客戶零資料外泄事故。
          </p>
          <div className="flex flex-wrap gap-3">
            {/* 可放置客戶Logo，已取得授權才可填入 */}
            <div className="w-28 h-14 bg-slate-100 rounded flex items-center justify-center text-slate-400 text-xs">客戶Logo區</div>
            <div className="w-28 h-14 bg-slate-100 rounded flex items-center justify-center text-slate-400 text-xs">客戶Logo區</div>
            <div className="w-28 h-14 bg-slate-100 rounded flex items-center justify-center text-slate-400 text-xs">客戶Logo區</div>
          </div>
        </section>

        {/* ========== 模塊5：圖片/影片素材區 ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
            服務素材｜架構圖 & 實景畫面
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 h-56 bg-slate-100">
              {/* <img src="架構圖路徑" alt="數據安全架構示意圖" className="w-full h-full object-cover"/> */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">系統架構圖位置</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 h-56 bg-slate-100">
              {/* <img src="實景照片路徑" alt="上線部署現場" className="w-full h-full object-cover"/> */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">部署現場照片位置</div>
            </div>
          </div>
          {/* 影片嵌入位置 */}
          <div className="mt-6 rounded-xl overflow-hidden bg-slate-100 h-72 flex items-center justify-center text-slate-400">
            服務介紹影片嵌入區
          </div>
        </section>

        {/* ========== 模塊6：FAQ 問答（SEO增益） ========== */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
            常見問題 FAQ
          </h2>
          <div className="space-y-5">
            {[
              {
                q: '中小企業規模不大，還需要部署數據安全服務嗎？',
                a: '無論企業規模大小，客戶名單、報價單、訂單數據都屬核心資產，提前做好防護，避免遭到爬取與外洩，降低商業損失風險。'
              },
              {
                q: '企業數據會經過你們的伺服器嗎？',
                a: '不會，採私有化部署模式，所有數據完全存放在企業自有伺服器或指定雲端帳戶，我方僅提供搭建與維護技術支援，無法存取客戶資料。'
              },
              {
                q: '「部署過程是否會中斷公司現有業務系統？」',
                a: '採階段並行部署方案，全程不停機作業，不會影響企業日常營運系統運行。'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-2">Q：{item.q}</h3>
                <p className="text-slate-600 text-sm">A：{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== 模塊7：中間轉化CTA區 ========== */}
        <section className="bg-blue-50 rounded-2xl p-8 md:p-10 text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-3">
            想要了解完整方案與報價？
          </h2>
          <p className="text-slate-600 mb-6">
            免費資安風險評估、索取服務白皮書、預約線上Demo演示
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              免費風險諮詢
            </a>
            <a
              href="/#whitepaper"
              className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
            >
              下載資安白皮書
            </a>
            <a
              href="/#contact"
              className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
            >
              預約 Demo 展示
            </a>
          </div>
        </section>

        {/* ========== 模塊8：聯絡資訊、服務區域、支援語言 ========== */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
            服務資訊與聯繫方式
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-600 text-sm">
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">服務覆蓋區域</h3>
              <p>全境遠端技術支援，可安排工程師上門駐場服務</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">支援語言</h3>
              <p>繁體中文、英文技術文件、雙語正式報價單</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">聯絡渠道</h3>
              <p>網站表單、業務專線、企業郵件技術諮詢</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};