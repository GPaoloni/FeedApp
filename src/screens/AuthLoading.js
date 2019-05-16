import React from 'react'
import { ActivityIndicator, AsyncStorage, View, StyleSheet } from 'react-native'

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props)
    this.loadApp()
  }

  //react AsincStorage was deprecated. Use comunity solution instead
  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken')

    this.props.navigation.navigate(userToken ? 'Feed' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          color = '#00796B'
          size = "large"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})