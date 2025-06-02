import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MicroModaSvg from '../../../assets/icons/MicroModaSvg';
import ArrowSvg from '../../../assets/icons/ArrowSvg';
import styles from './styled';
import Typography from '../Typography/Typography';
import { FontSize } from '../../shared/tokens'; 
export default function MicrophoneStatus() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SpeakingInstructions');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}><MicroModaSvg style={{marginBottom: 5}} />
          <Typography size={FontSize.MEDIUM} color={"#48C600"}>Микрофон включен</Typography></View>
          <ArrowSvg />
        </View>
        <Typography size={FontSize.MEDIUM} color={"#FFFFFF"}>Сообщить собеседнику</Typography>

      </View>
    </TouchableOpacity>
  );
}
