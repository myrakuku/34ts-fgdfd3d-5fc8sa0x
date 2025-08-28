import React, { useState, useEffect } from 'react';
import '../../css/chatbotcss.css';
import { createChat } from '@n8n/chat';

export const Footer = () => {
  // n8n
    createChat({
      webhookUrl: 'https://n8n.cx/webhook/71428b74-637f-48ff-9b80-1b3383863367/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        '您好! 👋 請問有什麼服務想查詢？'
      ],
      i18n: {
        en: {
          title: '',
          subtitle: "",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: '請在此輸入文字..',
        },
      },
      enableStreaming: false,
    });
    
    return (
        <footer className="w-full bg-gray-200 text-gray-700 py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-start space-y-4 md:space-y-0">
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-[12px]">info@hang-tech.pro</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-[12px]">3163 9373</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
                </svg>
                <span className="text-[12px]">2120 8709</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-[12px]">Shop 143, 1/F, Godfrey Centre, 175-185 Lai Chi Kok Road, Sham Shui Po, Kowloon</span>
              </div>
            </div>
      
            <div className="text-[10px] opacity-70 pt-10">
              <p>© <span id="current-year"></span> Hangs Tech Limited. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;