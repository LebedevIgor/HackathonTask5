import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableWithoutFeedback } from 'react-native';

// import Chat from '../../pages/Chat/Chat';
import Talk from '../../pages/Talk/Talk';
import Dictionary from '../../pages/Dictionary/Dictionary';
import Settings from '../../pages/Settings/Settings';

import { Colors } from '../../shared/tokens';
import { tabRouterStyles } from './styled';

import MenuSettings from '../../../assets/icons/MenuSettings';
import MenuDictionary from '../../../assets/icons/MenuDictionary';
import MenuTalk from '../../../assets/icons/MenuTalk';

import MenuDictionaryActive from '../../../assets/icons/MenuDictionaryActive';
import MenuTalkActive from '../../../assets/icons/MenuTalkActive';
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
          flex: 1,
        },
        tabBarShowLabel: false,
        tabBarButton: (props) => (
          <TouchableWithoutFeedback {...props}>
            <View style={{ flex: 1 }}>{props.children}</View>
          </TouchableWithoutFeedback>
        ),
      }}
    >
      <Tab.Screen
        name="Talk"
        component={Talk}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              {focused ? (
                <MenuTalkActive width={48} height={48} />
              ) : (
                <MenuTalk width={48} height={48} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              {focused ? (
                <MenuDictionaryActive width={48} height={48} />
              ) : (
                <MenuDictionary width={48} height={48} />
              )}
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
                flex: 1,
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
