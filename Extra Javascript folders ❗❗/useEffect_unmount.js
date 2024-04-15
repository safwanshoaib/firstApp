import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={styles.topHdr}>UserEffect for Unmount Component</Text>
      <View style={{margin: 15}}>
        <Button title="Toggle Component" onPress={() => setShow(!show)} />
      </View>
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  useEffect(() => {
    return () => {
      console.warn('UseEffect called on Unmount');
    };
  });
  return (
    <View>
      <Text style={styles.text}>User Component 😎</Text>
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
  text: {
    fontSize: 20, 
    color: 'black', 
    textAlign: 'center',
    backgroundColor:'orange',
    marginTop:15,
    padding:10,
    marginLeft:20,
    marginRight:20,
    borderRadius:15
  },
});

export default App;
