import React from 'react';
import {Link} from 'react-router-dom';
import BackgroundImage from './SectionOne-bg.jpg';



export const SectionOne = () => {

    return (
        <section className="w-full h-screen">
          <img src={BackgroundImage} alt="" className="object-cover w-full h-screen absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" />
          
          <div className="relative h-full w-full pt-40 px-5 md:px-10">
            <h1 className="text-[24px] font-bold md:text-[30px] text-black">HANGS TECH LIMITED</h1>
            <h2 className="text-[18px] md:text-[24px] text-black">您貼身的企業顧問</h2>
            <p className="text-[14px] md:text-[18px] text-gray-500 pb-10">專門度身訂造適合你的網站及系統</p>
            {/* <button type="button" id='section-2' onClick={id} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">更多內容</button> */}
            {/* <button type="button" onClick={ContactUSClick} className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">聯絡我們</button> */}
            {/* <Link to="/" className="py-5 px-3 text-gray-800 border border-l-black">更多內容</Link> */}
            <Link to="/ContactUS" className="py-3 px-5 inline-block bg-gray-500 text-white font-semibold rounded shadow hover:bg-sky-500">聯絡我們</Link>
          </div>
        </section>
    );
};

export default SectionOne;