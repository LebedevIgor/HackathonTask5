import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Chat from '../../pages/Chat/Chat';
import Talk from '../../pages/Talk/Talk';
import Dictionary from '../../pages/Dictionary/Dictionary';
import Settings from '../../pages/Settings/Settings';

import { Colors } from '../../shared/tokens';
import { tabRouterStyles } from './styled';

import ProfileIcon from '@expo/vector-icons/Ionicons';
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
          paddingTop: 10,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Talk"
        component={Talk}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon
              name="people-circle"
              size={24}
              color={Colors.pinkDark}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon
              name="people-circle"
              size={24}
              color={Colors.pinkDark}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon
              name="people-circle"
              size={24}
              color={Colors.pinkDark}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
