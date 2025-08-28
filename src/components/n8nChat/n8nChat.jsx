
import React, { useState, useEffect } from 'react';
import '../../css/chatbotcss.css';
import { createChat } from '@n8n/chat';


export const n8nChat = () => {

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
      <><div className='hidden'>123</div></>
  );
};

export default n8nChat;
