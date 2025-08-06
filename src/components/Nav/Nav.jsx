import logo from './logo.png';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../../css/chatbotcss.css';
import { createChat } from '@n8n/chat';


export const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const updateNavbar = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
    return () => {
      window.removeEventListener('scroll', updateNavbar);
    };
  }, []);

  // n8n
  createChat({
    webhookUrl: 'http://localhost:5678/webhook/7d2f04f5-5159-4df6-abc3-387964b16684/chat',
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto pr-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center py-2 px-1 text-gray-700">
              <img src={logo} alt="Hangs Logo" className="h-10" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 text-gray-800 hover:text-sky-300">關於Hangs</Link>
            <Link to="/ContactUS" className="py-5 px-3 text-gray-800 hover:text-sky-300">聯絡我們</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-gray-800 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col items-center justify-center h-full space-y-8 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full transition-transform duration-300'}`}>
          <Link to="/" className="text-white text-2xl hover:text-sky-300 transition-colors duration-300">關於Hangs</Link>
          <Link to="/ContactUS" className="text-white text-2xl hover:text-sky-300 transition-colors duration-300">聯絡我們</Link>
          <button onClick={toggleMobileMenu} className="text-white absolute top-3 right-3 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
