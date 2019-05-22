import React from 'react';
import { Dimensions, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import {
  createStackNavigator,
} from 'react-navigation';

// Screens of main app
import SingInScreen from '../components/Login/SingInScreen';
import SingUpScreen from '../components/Login/SingInScreen';

const { width: WIDTH } = Dimensions.get('window')

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} > 
      <TouchableOpacity style={styles.buttonContainer}
      onPress={() => navigation.navigate('SingIn')}>
        <Text style={styles.buttonText}>SingIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}
      onPress={() => navigation.navigate('SingUp')}>
        <Text style={styles.buttonText}>SingUp</Text>
      </TouchableOpacity>
    </View>
  )
}

const AuthStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    SingIn: { screen: SingInScreen },
    SingUp: { screen: SingUpScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00796B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Welcome',
    },
    initialRouteName: 'Welcome',
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: WIDTH - 55,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 50,
    backgroundColor: '#00796B',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFF',
    fontWeight: '700',
    padding: 10
  },
})

export default AuthStack