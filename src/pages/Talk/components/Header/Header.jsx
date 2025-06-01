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

  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  };

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
          justifyContent: 'space-between',
          marginBottom: 12,
          marginLeft: 12,
          marginRight: 12,
          borderRadius: 13,
          backgroundColor: '#F5F4F2',
        }}
      >
        <Button
          styleContainer={{
            marginBottom: 3,
            marginTop: 3,
            marginLeft: 3,
            flex: 1,
          }}
          styleBtn={{
            backgroundColor: mode === 'talk' ? '#FFFFFF' : 'transparent',
            paddingHorizontal: 16,
            paddingVertical: 11,
            borderRadius: 11,
            ...(mode === 'talk' ? shadowStyle : {}),
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
          onPress={() => setMode('talk')}
        >
          <Typography
            color={mode === 'talk' ? '#262222' : 'rgba(33, 32, 31, 0.70)'}
            size={20}
          >
            Разговаривать
          </Typography>
        </Button>
        <Button
          styleContainer={{
            marginBottom: 3,
            marginTop: 3,
            marginRight: 3,
            flex: 1,
          }}
          styleBtn={{
            backgroundColor: mode === 'listen' ? '#FFFFFF' : 'transparent',
            paddingHorizontal: 16,
            paddingVertical: 11,
            borderRadius: 11,
            ...(mode === 'listen' ? shadowStyle : {}),
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
          }}
          onPress={() => setMode('listen')}
        >
          <Typography
            color={mode === 'listen' ? '#262222' : 'rgba(33, 32, 31, 0.70)'}
            size={20}
          >
            Слушать
          </Typography>
        </Button>
      </View>
    </View>
  );
}
