import { useEffect } from 'react';
import ChatServiceInstance from '../services/chat.service';

const useChat = () => {
  const flush = async () => {
    try {
      await ChatServiceInstance.flush();
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  };

  const sendMessage = async (userId, text) => {
    try {
      await ChatServiceInstance.sendMessage(userId, text);
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error);
    }
  };

  const initChat = async (userId, navigate) => {
    try {
      await ChatServiceInstance.initChat(userId, navigate);
    } catch (error) {
      console.error('Ошибка инициализации чата:', error);
    }
  };

  useEffect(() => {
    return () => {
      ChatServiceInstance.disconnect();
    };
  }, []);

  return {
    sendMessage,
    initChat,
    flush,
  };
};

export default useChat;
