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
import AuthStack from './src/screens/AuthStack.js'

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