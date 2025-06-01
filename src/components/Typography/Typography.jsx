import React from 'react';
import { Text, Platform } from 'react-native';
import { useFonts } from 'expo-font';

const Typography = ({ size, color, children, tac, fontWeight, ...props }) => {
  const [fontsLoaded] = useFonts({
    'YS-Text-Regular': require('../../../assets/fonts/YS Text-Regular.ttf'),
    'YS-Text-Bold': require('../../../assets/fonts/YS Text-Bold.ttf'),
  });

  const isBold = fontWeight === '900' || fontWeight === 900 || fontWeight === 'bold';
  
  const textStyle = {
    fontSize: size,
    color: color,
    textAlign: tac ? 'center' : 'start',
    fontWeight: Platform.OS === 'ios' ? fontWeight : undefined,
    lineHeight: size,
  };

  const fontFamily = isBold ? 'YS-Text-Bold' : 'YS-Text-Regular';

  if (!fontsLoaded) {
    return (
      <Text {...props} style={textStyle}>
        {children}
      </Text>
    );
  }

  return (
    <Text {...props} style={[textStyle, { fontFamily }]}>
      {children}
    </Text>
  );
};

export default Typography;
