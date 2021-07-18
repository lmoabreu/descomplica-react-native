/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/Home';
import Gretting from './src/Gretting';

const App = () => {
  return (
    <>
    <Home />
    <Gretting nome="Lucas" />
    </>
  );
};

export default App;
