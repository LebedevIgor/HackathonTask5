import React from 'react';

import Typography from '../../../../components/Typography/Typography';
import { View } from 'react-native';
import ArrowBottomSvg from '../../../../../assets/icons/ArrowBottomSvg';

import styles from './styled';

export default function DefaultText() {
  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityRole="text"
      accessibilityLabel="Инструкция по использованию"
      importantForAccessibility="yes"
    >
      <View accessible={true} accessibilityLiveRegion="polite">
        <Typography
          size={20}
          color={'#262222'}
          tac
          style={{ lineHeight: 28 }}
          accessible={true}
          accessibilityRole="text"
        >
          Печатайте сообщение, чтобы
        </Typography>
        <Typography
          size={20}
          color={'#262222'}
          tac
          style={{ lineHeight: 28 }}
          accessible={true}
          accessibilityRole="text"
        >
          показать и озвучить
        </Typography>
        <Typography
          size={20}
          color={'#262222'}
          tac
          style={{ lineHeight: 28 }}
          accessible={true}
          accessibilityRole="text"
        >
          собеседнику
        </Typography>
      </View>
      <ArrowBottomSvg
        accessible={true}
        accessibilityRole="image"
        accessibilityLabel="Стрелка вниз"
        accessibilityElementsHidden={true}
      />
    </View>
  );
}
