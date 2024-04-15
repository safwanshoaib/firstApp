// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Hook mount when load');
  },[]); //* useEffect hook call when it is mount by using => []

  return (
    <View>
      <Text style={styles.topHdr}>Life Cycle with the useEffect {count}</Text>
      <View style={styles.button}>
        <Button title="Update Count" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHdr: {
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 22,
    color: 'white',
  },
  button: {
    margin: 15,
  },
});

export default App;
