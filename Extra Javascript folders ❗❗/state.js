/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Safwan');
  let data = 'unknown';

  function testName() {
    setName('Ali');
    data = 'Khan';
  }
  return (
    <View>
        <Text style={{fontSize:30}}>{name}</Text>
        <Text style={{fontSize:30}}>{data}</Text>

        <Button title='Update Name' onPress={testName}/>
    </View>
  );
};

export default App;
