import DividerLeft from "../Divider/DividerLeft";
import S3_Image from "./SectionThree_image.jpeg";


export const SectionThree = () => {
    return (
        <section className="mt-5 w-full bg-gray-100">
          <div className="grid md:grid-cols-2 pt-10">
            <div className="px-10 pb-5 md:pb-0">
              <DividerLeft/>
              <h2 className="pt-2 mb-4 text-[24px] font-bold text-gray-600">公司的背景</h2>
                  <p className="mb-4 text-[14px] text-gray-800">
                    實瀚科技成立於2023年，團隊成員均有15年以上系統開發經驗，是一家專注於「企業級數位化解決方案」的高科技服務商。我們服務超過200家企業的專業IT服務商， 深知各行各業的痛點以及正在面臨數位化轉型的壓力。
                  </p>
                <h3 class="pt-2 mb-4 text-[18px] font-bold text-gray-500">技術體系：現代化架構賦能企業</h3>
                <p class="text-[14px] text-gray-800">
                
                  <li>核心框架：React.js + TypeScript </li>
                  <li>輔助技術：Next.js、Figma、Python </li>
                  <li>效能指標：平均首屏載入時間少於 800ms </li>
                  <li>UML概念：架構設計確稿，提高完工的效率 </li>
                </p>
            </div>
            <div className="px-10 flex items-center">
                <img src={S3_Image} alt="Section Three Image" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 pb-3">
            <div className="px-10">
              <h2 class="pt-6 mb-4 text-[18px] font-bold text-gray-500">行業解決方案矩陣</h2>
                    <p class="text-[14px] text-gray-800">
                      <li>項目/統籌：Project Management System </li>
                      <li>網店/電商：E-Commence /Data Analytics  </li>
                      <li>服務業/公關：Customer Relationship Management </li>
                      <li>預約管理：Booking System</li>
                      <li>零售業：Point of Sales System</li>
                      <li>供應商管理：Supply Chain Connect</li>
                      <li>轉營企業：提供線上線下支援系統</li>
                      <li>會計/律師行：Local Depoly LLM</li>
                      <li>線上客服：Chatbot</li>
                      <li>建造業/產品：自動生成3D圖模式</li>
                      <li>廣告業/推廣：線上排名及關鍵字</li>
                      <li>商業培訓：提供技術轉移</li>
                      <li>托管：提供網站/系統維護</li>
                      <li>支援：提供上門ITSM</li>
                    </p>
              </div>
          </div>
        </section>



    );
};

export default SectionThree;