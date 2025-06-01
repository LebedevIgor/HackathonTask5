import { BehaviorSubject } from 'rxjs';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ChatService {
  initialState = {
    loading: false,
    error: null,
    messages: [],
    activeSocket: false,
  };

  state$ = new BehaviorSubject(this.initialState);
  socket = null;

  async connect(userId, navigation) {
    const token = await AsyncStorage.getItem('auth_token');

    this.socket = io('http://saturn.fanil.ru:3011', {
      auth: {
        token, // Передаем токен авторизации
      },
    });

    this.socket.on('connect', (data) => {
      this.state$.next({
        ...this.state$.value,
        activeSocket: true,
      });
      console.log('Connected to socket');
    });

    this.socket.on('disconnect', () => {
      this.state$.next({
        ...this.state$.value,
        activeSocket: false,
      });
      console.log('Disconnected from socket');
    });

    this.socket.on('error', (error) => {
      this.state$.next({
        ...this.state$.value,
        error: error.message,
      });
    });

    this.socket.on('errorMessage', (error) => {
      this.state$.next({
        ...this.state$.value,
        error: error.message,
      });
    });

    this.socket.on('chatMessage', (message) => {
      this.state$.next({
        ...this.state$.value,
        messages: [...this.state$.value.messages, message],
      });
    });

    this.socket.on('chatHistory', (messages) => {
      this.state$.next({
        ...this.state$.value,
        messages,
      });
    });
    this.socket.on('authError', (error) => {
      console.error('Ошибка авторизации:', error);
      // Показываем пользователю сообщение об ошибке
      // Перенаправляем на страницу авторизации
    });

    this.socket.on('connect_error', (err) => {
      if (err.message.includes('Authentication error')) {
        // Обработка ошибок авторизации
        console.error('Ошибка подключения:', err.message);
        navigation.navigate('Auth'); // Перенаправляем на страницу авторизации
      } else {
        // Обработка других ошибок подключения
        console.error('Ошибка подключения:', err.message);
      }
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  async sendMessage(userId, text) {
    if (!this.socket) return;
    console.log('emit serv');
    this.socket.emit('message', text);
  }

  async flush() {
    if (!this.socket) return;

    this.socket.emit('flush');
  }

  async initChat(userId, navigate) {
    this.connect(userId, navigate);
    return userId;
  }
}

const ChatServiceInstance = new ChatService();
export default ChatServiceInstance;
