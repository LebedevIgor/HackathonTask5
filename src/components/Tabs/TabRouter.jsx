import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

// import Chat from '../../pages/Chat/Chat';
import Talk from '../../pages/Talk/Talk';
import Dictionary from '../../pages/Dictionary/Dictionary';
import Settings from '../../pages/Settings/Settings';

import { Colors } from '../../shared/tokens';
import { tabRouterStyles } from './styled';

import MenuSettings from '../../../assets/icons/MenuSettings';
import MenuDictionary from '../../../assets/icons/MenuDictionary';
import MenuTalk from '../../../assets/icons/MenuTalk';

// import ChatIcon from '@expo/vector-icons/Ionicons';
// import WalletIcon from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tabRouterStyles['tab-bar'],
        tabBarActiveTintColor: Colors.green,
        tabBarInactiveTintColor: Colors.gray,
        tabBarLabelStyle: tabRouterStyles['tab-label'],
        tabBarItemStyle: {
          ...tabRouterStyles['tab-item'],
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Talk"
        component={Talk}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MenuTalk width={48} height={48} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MenuDictionary width={48} height={48} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MenuSettings width={48} height={48} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
