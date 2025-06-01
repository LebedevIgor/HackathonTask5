import React, { useState } from 'react';
import { View, } from 'react-native';

import styles from './styled';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header/Header';


export default function Talk() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Header/>
        
    </View>
  );
}
