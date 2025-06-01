import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styled';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header/Header';
import Typography from '../../components/Typography/Typography';
import MicrophoneStatus from '../../components/MicrophoneStatus/MicrophoneStatus';
import DefaultText from './components/DefaultText/DefaultText';
import MessageInput from './components/MessageInput/MessageInput';

export default function Talk() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E6ECF0',
          width: '100%',
          paddingTop: 8,

          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
          }}
        >
          <MicrophoneStatus />
        </View>
        <View style={{ width: '100%' }}>
          <DefaultText />
          <MessageInput />
        </View>
      </View>
    </View>
  );
}
