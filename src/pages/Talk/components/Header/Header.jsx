import React from 'react';
import { View, Text } from 'react-native';
import styles from './styled';
import MicroBtn from '../../../../components/MicroBtn/MicroBtn';
import ChatSwitch from '../../../../../assets/icons/ChatSwitch';
import PlusBtn from '../../../../../assets/icons/PlusBtn';


export default function Header() {
  return (
    <View style={styles.container}>
      <ChatSwitch/>
      <MicroBtn />
      <PlusBtn/>
    </View>
  );
}
