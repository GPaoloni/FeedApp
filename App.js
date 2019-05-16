import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';
//import Ionicons to show the icon for bottom options

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

//import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';


import AppStack from './src/screens/AppStack.js'
import AuthLoadingScreen from './src/screens/AuthLoading.js'
import AuthScreen from './src/components/Login/SingInScreen.js'
//import AuthStack from './src/components/Navigation/AuthStack.js';

// This should be removed as is used only for testing
const AuthStack = createStackNavigator(
  {
    SingIn: { screen: AuthScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00796B',
      },
      headerTintColor: '#FFFFFF',
      title: 'SingIn',
    },
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
)


export default createAppContainer(SwitchNavigator);