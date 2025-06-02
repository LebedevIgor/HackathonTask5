import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MicroModaSvg from '../../../assets/icons/MicroModaSvg';
import ArrowSvg from '../../../assets/icons/ArrowSvg';
import styles from './styled';

export default function MicrophoneStatus() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SpeakingInstructions');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.row}>
          <MicroModaSvg style={{ marginRight: 8 }} />
          <Text style={styles.statusText}>Микрофон включен</Text>
          <ArrowSvg />
        </View>
        <Text style={styles.subText}>Сообщить собеседнику</Text>
      </View>
    </TouchableOpacity>
  );
}
