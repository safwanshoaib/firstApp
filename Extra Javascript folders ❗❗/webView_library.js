import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <WebView source={{uri: 'https://reactnative.dev/docs/getting-started'}} />
    // <WebView source={{uri:'https://www.movi.pk'}}/>
  );
};

export default App;
