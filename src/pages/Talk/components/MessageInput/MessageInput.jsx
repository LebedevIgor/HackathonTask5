import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
// Импортируй свои SVG-иконки, например:
// import MenuIcon from './icons/MenuIcon';
// import SendIcon from './icons/SendIcon';
import styles from './styled';
import SendBtn from '../../../../../assets/icons/SendBtn';
import Burger from '../../../../../assets/icons/Burger';

export default function MessageInput() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <View
      style={styles.inputContainer}
      accessible={true}
      accessibilityRole="form"
      accessibilityLabel="Форма отправки сообщения"
    >
      {/* Левая иконка */}
      <View>{/* <MenuIcon /> */}</View>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 8,
        }}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Открыть меню"
        accessibilityHint="Нажмите для открытия дополнительных опций"
      >
        <Burger />
      </TouchableOpacity>
      {/* Инпут */}
      <TextInput
        style={{
          flex: 1,
          backgroundColor: '#f5f4f2',
          borderRadius: 30,
          paddingHorizontal: 16,
          height: 40,
          color: '#262222',
          fontSize: 16,
        }}
        placeholder="Сообщение..."
        placeholderTextColor="rgba(38, 34, 34, 0.5)"
        value={message}
        onChangeText={setMessage}
        accessible={true}
        accessibilityRole="textbox"
        accessibilityLabel="Поле ввода сообщения"
        accessibilityHint="Введите текст сообщения здесь"
        returnKeyType="send"
        onSubmitEditing={handleSend}
        blurOnSubmit={false}
        multiline={false}
      />
      {/* Кнопка отправки */}
      <TouchableOpacity
        style={{
          backgroundColor: message.trim() ? '#FFE600' : '#FFE60080',
          borderRadius: 999,
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 8,
        }}
        onPress={handleSend}
        disabled={!message.trim()}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Отправить сообщение"
        accessibilityHint="Нажмите для отправки введенного сообщения"
        accessibilityState={{ disabled: !message.trim() }}
      >
        {/* <SendIcon /> */}
        <SendBtn />
      </TouchableOpacity>
    </View>
  );
}
