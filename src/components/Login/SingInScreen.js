import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

import logo from '../../images/logo.png'
import SingInForm from './SingInForm.js'

export default class SingInScreen extends React.Component {
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/*<View style={styles.container}>*/}
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>App Ciudad</Text>
        </View>
        <SingInForm />
    {/* </View> */}
      </KeyboardAvoidingView>
    )
  }
}
  

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 150,
    height: 150,
  },
  logoText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
})