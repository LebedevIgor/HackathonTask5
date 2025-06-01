import React, { useState } from 'react';

import Typography from '../../../../components/Typography/Typography';
import { View } from 'react-native';
import ArrowBottomSvg from '../../../../../assets/icons/ArrowBottomSvg';

import styles from './styled';

export default function DefaultText() {
  return (
    <View style={styles.container}>
      <View>
        <Typography size={20} color={'rgba(38, 34, 34, 0.7)'} tac>
          Печатайте сообщение, чтобы
        </Typography>
        <Typography size={20} color={'rgba(38, 34, 34, 0.7)'} tac>
          показать и озвучить
        </Typography>
        <Typography size={20} color={'rgba(38, 34, 34, 0.7)'} tac>
          собеседнику
        </Typography>
      </View>
      <ArrowBottomSvg />
    </View>
  );
}
