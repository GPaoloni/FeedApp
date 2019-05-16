import React from 'react';

import { Ionicons } from 'react-native-vector-icons';
//import Ionicons to show the icon for bottom options

import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// Screens of main app
import FeedScreen from '../components/Feed/Feed.js';
import SettingsScreen from '../components/SettingsScreen.js';

const FeedStack = createStackNavigator(
  {
    // Defination of Navigaton from home screen
    Feed: { screen: FeedScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00796B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Noticias',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00796B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Menú',
    },
  }
);

const BottomNavigatior= createBottomTabNavigator(
  {
    Feed: { screen: FeedStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-today`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF9800',
      inactiveTintColor: 'gray',
    },
  }
);

export default BottomNavigatior;