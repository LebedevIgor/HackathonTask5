import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';

const Typography = ({ size, color, children, tac, fontWeight, ...props }) => {
  const [fontsLoaded] = useFonts({
    'Comfortaa-Regular': require('@expo-google-fonts/comfortaa')
      .Comfortaa_400Regular,
    'Comfortaa-Bold': require('@expo-google-fonts/comfortaa').Comfortaa_700Bold,
  });
  const textStyle = {
    fontSize: size,
    color: color,
    textAlign: tac ? 'center' : 'start',
    fontWeight: fontWeight ? fontWeight : 400,
    lineHeight: 28,
  };
  const fontFamily =
    textStyle?.fontWeight === '700' ? 'Comfortaa-Bold' : 'Comfortaa-Regular';

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
