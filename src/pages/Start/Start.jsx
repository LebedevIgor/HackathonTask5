import React, { useState } from 'react';
import { View, } from 'react-native';

import styles from './styled';
import { Colors, FontSize } from '../../shared/tokens';
import Typography from '../../components/Typography/Typography';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';


export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

        <Typography size={FontSize.LARGE} color={Colors.black}>
          Yandex
        </Typography>
        
        <View style={styles.BtnWrapper}>
          <Button onPress={() => navigation.navigate('Home')}>
            <Typography size={FontSize.MEDIUM} color={Colors.white} tac>
              Старт
            </Typography>
          </Button>
        </View>
        
    </View>
  );
}
