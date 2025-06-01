import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import SendBtn from '../../../../../assets/icons/SendBtn';
import MenuDictionary from '../../../../../assets/icons/MenuDictionary';
// Импортируй свои SVG-иконки, например:
// import MenuIcon from './icons/MenuIcon';
// import SendIcon from './icons/SendIcon';
import styles from './styled';

export default function MessageInput() {
  return (
    <View style={styles.inputContainer}>
      {/* Левая иконка */}
      
      {/* Инпут */}
      <TextInput
        style={{
          flex: 1,
          backgroundColor: '#f5f4f2',
          borderRadius: 30,
          paddingHorizontal: 16,
          height: 40,
        }}
        placeholder="Сообщение..."
        placeholderTextColor="#888"
      />
      {/* Кнопка отправки */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FFE600',
          borderRadius: 999,
          width: 48,
          height: 48,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 8,
        }}
      >
        <SendBtn />
      </TouchableOpacity>
    </View>
  );
}
