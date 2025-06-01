import React, { useState } from 'react';
import { View, } from 'react-native';

import styles from './styled';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header/Header';
import Typography from '../../components/Typography/Typography';

export default function Talk() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Header/>

      <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
      }}
      >
      <Typography
      style={{
      color: '#000',
      size: 18,
      fontWeight:'700'
      }}
      >Печатайте сообщение, чтобы показать и озвучить собеседнику</Typography>
      </View>
        
    </View>
  );
}
