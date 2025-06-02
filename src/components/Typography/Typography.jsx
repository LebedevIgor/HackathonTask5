import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

const Typography = ({ size, color, children, tac, fontWeight, ...props }) => {
  const [fontsLoaded] = useFonts({
    'YS-Text-Regular': require('../../../assets/fonts/YS Text-Regular.ttf'),
    'InterTight-Black': require('../../../assets/fonts/InterTight-Black.ttf'),
  });

  const textStyle = {
    fontSize: size,
    color: color,
    textAlign: tac ? 'center' : 'start',
    lineHeight: size,
  };

  // Determine font family based on desired weight
  const isBlackWeight = fontWeight === '900' || fontWeight === 900;
  const fontFamily = isBlackWeight ? 'InterTight-Black' : 'YS-Text-Regular';

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
