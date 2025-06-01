import React, { useState } from 'react';
import { View, } from 'react-native';

import styles from './styled';
import { Colors, FontSize } from '../../shared/tokens';
import Typography from '../../components/Typography/Typography';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
import StartIcon from '../../../assets/icons/StartIcon';

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={{
          marginTop: 244,
          marginleft: 106,
          textAlign: 'center',
        }}>
          <StartIcon
              name="StartIcon"
              size={24}
            />
        </View>
        <Button 
          onPress={() => navigation.navigate('Home')}>
            <Typography size={FontSize.MEDIUM} color={Colors.white} tac>
              Старт
            </Typography>
          </Button>
        <View style={{
          marginTop: 0,
          textAlign: 'center'
        }}>
          <View style={{
          marginTop: 0,
          
        }}>
        <Typography size={FontSize.LARGE} color={Colors.black}>
          Разговор
        </Typography>
        </View>
        <View style={{
          marginTop: 16,
          textAlign: 'center',
        }}> 
        <Typography 
        marginTop={16}
        size={FontSize.SMALL} 
        color={Colors.black}
        >
          Ваш помощник в общении — быстро, удобно, доступно.
        </Typography>
        </View>
        </View>

        

        <View style={{
          marginTop: 100,
          width: '50%',
          textAlign: 'center',
        }}>
          
        </View>
        
    </View>
  );
}
