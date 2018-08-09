import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/component/Home'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 22}}>Hello World</Text>
          <Text style={{fontSize: 25}}>Welcome to the Coin Market</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
