import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

const Typography = ({ size, color, children, tac, fontWeight, ...props }) => {
  const [fontsLoaded] = useFonts({
    'YS-Text-Regular': require('../../../assets/fonts/YS Text-Regular.ttf'),
    'YS-Text-Bold': require('../../../assets/fonts/YS Text-Bold.ttf'),
  });
  const textStyle = {
    fontSize: size,
    color: color,
    textAlign: tac ? 'center' : 'start',
    fontWeight: fontWeight ? fontWeight : '400',
    lineHeight: 28,
  };
  const fontFamily =
    textStyle?.fontWeight === '700' || textStyle?.fontWeight === 700
      ? 'YS-Text-Bold'
      : 'YS-Text-Regular';

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
  // <Text style={textStyle}>{children}</Text>;
};

export default Typography;
