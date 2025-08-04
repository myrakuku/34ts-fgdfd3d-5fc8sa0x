import React from 'react';
import {Link} from 'react-router-dom';
import S5_image from './SectionFive_image.jpg';
import DividerLeft from '../Divider/DividerLeft';

export const SectionFive = () => {
    return (
        <section className="my-10 px-5">
          <div className="grid md:grid-cols-2">
            <div className="p-10">
                <img src={S5_image} alt="" />
            </div>
            <div>
            <DividerLeft/>
              <h2 className="pt-2 mb-4 text-[18px] font-bold text-gray-600">網頁及系統的開發流程</h2>
              <p className="text-[13px] md:text-[15px] text-center text-gray-400 mb-8">---需時3-9個月視乎公司/企業的需要以及提供資料的完整度</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2">收集數據及流程</h6>
                <p className="text-[14px] text-gray-800">分析企業提供的工作流程和數據，確定關鍵需求。</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2">開發與製作</h6>
                <p className="text-[14px] text-gray-800">根據收集到的資料進行數據化，模擬操作的可行性。</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2"> 核對與確認</h6>
                <p className="text-[14px] text-gray-800">驗證初稿並加以改進，確保系統無誤。</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2">試用與評測</h6>
                <p className="text-[14px] text-gray-800">進行內部測試，並多次改進以達至最佳效果。</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2">確認無誤</h6>
                <p className="text-[14px] text-gray-800">取代舊有系統並實施新方案，邁向可持續發展。</p>
                <h6 className="text-[16px] font-bold text-gray-500 pt-2">實行培訓</h6>
                <p className="text-[14px] text-gray-800">提供流程簡介，提升客戶員工使用系統的熟練度，進而提高客戶公司的生產力。</p>
            </div>
          </div>
          <div className="mt-20 text-center">
            <Link to="/ContactUS" className="py-3 px-6 inline-block bg-gray-500 text-white font-semibold rounded-full shadow hover:bg-lime-500">歡迎聯絡我們查詢細節</Link>
          </div>
        </section>
    );
};

export default SectionFive;