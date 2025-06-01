import React, { useState } from 'react';
import { View, } from 'react-native';

import styles from './styled';
import { Colors, FontSize } from '../../shared/tokens';
import Typography from '../../components/Typography/Typography';
import { useNavigation } from '@react-navigation/native';


export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

        <Typography size={FontSize.LARGE} color={Colors.black}>
          Yandex
        </Typography>
        
        
        
    </View>
  );
}
