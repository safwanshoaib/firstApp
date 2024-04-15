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
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn('count hook call');
  // }, [count]); //* Only count is used in useEffect Hook. For multiple [count,name,rollno]

  // useEffect(() => {
  //   console.warn('Data hook call');
  // }, [data]); //* Only count is used in useEffect Hook. For multiple [count,name,rollno]

  return (
    <View>
      <Text style={styles.topHdr}>UseEffect as componentDidUpdate</Text>
      <Text style={{fontSize: 20, color: 'orange', marginBottom: 15}}>
        Data: {data}
      </Text>
      <Text style={{fontSize: 20, color: 'orange', marginBottom: 15}}>
        Count: {count}
      </Text>
      <View style={styles.button}>
        <Button title="Update Count" onPress={() => setCount(count + 1)} />
      </View>
      <View style={styles.button}>
        <Button
          title="Update Data"
          color={'green'}
          onPress={() => setData(data + 5)}
        />
      </View>
      <User info={{data, count}} />
    </View>
  );
};

const User = props => {
  useEffect(() => {
    console.warn('Run this code when data prop is updated');
  }, [props.info.data]);

  useEffect(() => {
    console.warn('Run this code when count prop is updated');
  }, [props.info.count]);

  return (
    <View>
      <Text style={{fontSize: 24, color: 'pink'}}>Data: {props.info.data}</Text>
      <Text style={{fontSize: 24, color: 'pink'}}>
        Count: {props.info.count}
      </Text>
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
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default App;
