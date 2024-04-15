import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={styles.topHdr}>Show / Hide Component</Text>
      <View style={{margin: 15}}>
        <Button title="Toggle Component" onPress={() => setShow(!show)} />
      </View>
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 24, color: '#fff',textAlign:'center'}}>User Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topHdr: {
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 22,
    color: 'white',
  },
});

export default App;
