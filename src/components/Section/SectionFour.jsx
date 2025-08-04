import Divider from "../Divider/Divider";
import Reactlogo from "./react_logo.svg";

export const SectionFour = () => {
    return (
        <section className="w-full py-10 md:px-50">
          <Divider/>
          <img src={Reactlogo} alt="React Logo" className="h-20 mx-auto mt-10"/>
          <h2 className="pt-10 mb-4 text-[24px] font-bold text-center text-gray-600">香港地所欠缺的技術：全棧網頁架構</h2>
          <p className="m-4 text-[12px] md:text-[14px] text-center text-gray-400 mb-8 px-[10px]">
          時至今天，香港最受歡迎的網頁開發工具乃WordPress/GoDaddy/Wix，因為開發成本低和容易理解。
          </p>
          <p className="m-4 text-[12px] md:text-[14px] text-center text-gray-400 mb-8 px-[10px]">
          壞處是網頁處度甚慢，及太多不合理性，例如同一個時段同一個人物的預約沒有設限便會造成預約重疊的情況。在智能手機出現後，人們對網頁要求越多越高，尤其瀏覽速度上，因為所有人都在電話上下載APP幫助工作和便利生活，而App是網頁的附屬品來的，它們可共用同一個數據庫，只是排版設計上略有不同。
          </p>
          <p className="m-4 text-[12px] md:text-[14px] text-center text-gray-400 mb-8 px-[10px]">
          因此全棧網頁架構的需求開始暴升，該技術性質與 WordPress / Godady / Wix 等完全相反，更有多間上市公司靠App上市，而該技術稱為：全棧網頁架構。
          </p>
          <Divider/>
          
        </section>
    );
};

export default SectionFour;