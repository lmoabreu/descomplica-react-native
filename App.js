/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, mundo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 50,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default App;
