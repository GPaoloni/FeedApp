import React from 'react';
import { Dimensions, 
         KeyboardAvoidingView,
         StyleSheet, 
         Text,
         TextInput, 
         TouchableOpacity } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const SingInForm = (props) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <TextInput style={styles.input} 
        placeholder={'username or email'}
        placeholderTextColor={'rgba(0,0,0,0.4)'}
        underlineColorAndroid='transparent'
        returnKeyType='next'
        keyboardType='email-address'
        autoCapitalize='none'
        onChange={props.handleUser}
        onSubmitEditing={() => this.passwordInput.focus()}
      />
      <TextInput style={styles.input} 
        placeholder={'password'}
        placeholderTextColor={'rgba(0,0,0,0.4)'}
        underlineColorAndroid='transparent'
        returnKeyType='go'
        secureTextEntry
        onChange={props.handlePassword}
        ref={(input) => this.passwordInput = input}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: 'rgba(200,200,200,0.2)',
    color: '#444',
    padding: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
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

export default SingInForm