import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhrasesList from './PhrasesList';
import PhraseView from './PhraseView';
import AddPhraseModal from './AddPhraseModal';
import EditPhraseModal from './EditPhraseModal';

const Stack = createNativeStackNavigator();

export default function Dictionary() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
      }}
    >
      <Stack.Screen name="PhrasesList" component={PhrasesList} />
      <Stack.Screen name="PhraseView" component={PhraseView} />
      <Stack.Screen 
        name="AddPhrase" 
        component={AddPhraseModal}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen 
        name="EditPhrase" 
        component={EditPhraseModal}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
