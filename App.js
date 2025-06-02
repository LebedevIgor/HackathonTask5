import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from './src/pages/Start/Start';
import { HomeTabs } from './src/components/Tabs/TabRouter';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SpeakingInstructions from './src/pages/SpeakingInstructions/SpeakingInstructions';
import { AccessibilityProvider } from './src/contexts/AccessibilityContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AccessibilityProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Start"
              screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                animation: 'slide_from_right',
              }}
            >
              <Stack.Screen name="Start" component={Start} />
              <Stack.Screen name="Home" component={HomeTabs} />
              <Stack.Screen
                name="SpeakingInstructions"
                component={SpeakingInstructions}
                options={{
                  presentation: 'modal',
                  animation: 'slide_from_bottom',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </AccessibilityProvider>
  );
}
