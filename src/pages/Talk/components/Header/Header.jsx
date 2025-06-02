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
  };

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityRole="header"
      accessibilityLabel="Панель управления разговором"
    >
      <View
        style={styles.topWrapper}
        accessible={true}
        accessibilityRole="toolbar"
        accessibilityLabel="Панель инструментов"
      >
        <ChatSwitch
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Переключить режим чата"
        />
        <MicroBtn
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={
            mode === 'talk'
              ? 'Включить микрофон для разговора'
              : 'Включить микрофон для прослушивания'
          }
          accessibilityHint="Нажмите для начала записи голоса"
        />
        <PlusBtn
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Добавить новую функцию"
        />
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
        accessible={true}
        accessibilityRole="radiogroup"
        accessibilityLabel="Выбор режима взаимодействия"
      >
        <Button
          styleContainer={{
            marginBottom: 3,
            marginTop: 3,
            marginLeft: 3,
            flex: 1,
            borderRadius: 11,
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
            overflow: 'hidden',
          }}
          onPress={() => setMode('talk')}
          accessible={true}
          accessibilityRole="radio"
          accessibilityState={{ checked: mode === 'talk' }}
          accessibilityLabel="Режим разговора"
          accessibilityHint="Нажмите для переключения в режим разговора"
        >
          <Typography
            color={mode === 'talk' ? '#262222' : 'rgba(33, 32, 31, 0.70)'}
            size={20}
            accessible={true}
            accessibilityElementsHidden={true}
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
            borderRadius: 11,
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
            overflow: 'hidden',
          }}
          onPress={() => setMode('listen')}
          accessible={true}
          accessibilityRole="radio"
          accessibilityState={{ checked: mode === 'listen' }}
          accessibilityLabel="Режим прослушивания"
          accessibilityHint="Нажмите для переключения в режим прослушивания"
        >
          <Typography
            color={mode === 'listen' ? '#262222' : 'rgba(33, 32, 31, 0.70)'}
            size={20}
            accessible={true}
            accessibilityElementsHidden={true}
          >
            Слушать
          </Typography>
        </Button>
      </View>
    </View>
  );
}
