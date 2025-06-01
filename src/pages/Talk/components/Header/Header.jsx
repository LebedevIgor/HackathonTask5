import React, { useState } from 'react';
import { View } from 'react-native';
import styles from './styled';
import MicroBtn from '../../../../components/MicroBtn/MicroBtn';
import ChatSwitch from '../../../../../assets/icons/ChatSwitch';
import PlusBtn from '../../../../../assets/icons/PlusBtn';
import Button from '../../../../components/Button/Button';
import Typography from '../../../../components/Typography/Typography';

export default function Header() {
  const [mode, setMode] = useState('talk'); // 'talk' или 'listen'

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <ChatSwitch />
        <MicroBtn />
        <PlusBtn />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
          gap: 12,
          width: '100%',

          backgroundColor: 'gray',
        }}
      >
        <Button
          styleBtn={{
            backgroundColor: mode === 'talk' ? '#FF4081' : '#E0E0E0',
            paddingHorizontal: 16,
            paddingVertical: 11,
            borderRadius: 24,
            width: '50%',
          }}
          onPress={() => setMode('talk')}
        >
          <Typography
            color={mode === 'talk' ? '#fff' : '#333'}
            size={16}
            fontWeight={mode === 'talk' ? '700' : '400'}
          >
            Разговаривать
          </Typography>
        </Button>
        <Button
          styleBtn={{
            backgroundColor: mode === 'listen' ? '#FF4081' : '#E0E0E0',
            paddingHorizontal: 16,
            paddingVertical: 11,
            borderRadius: 24,
            width: '50%',
          }}
          onPress={() => setMode('listen')}
        >
          <Typography
            color={mode === 'listen' ? '#fff' : '#333'}
            size={16}
            fontWeight={mode === 'listen' ? '700' : '400'}
          >
            Слушать
          </Typography>
        </Button>
      </View>
    </View>
  );
}
