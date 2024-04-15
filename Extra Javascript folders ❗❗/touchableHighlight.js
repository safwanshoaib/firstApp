import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.topHdr}>TouchableHighlight</Text>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  topHdr: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 22,
    color: 'white',
  },
  button: {
    backgroundColor: 'hotpink',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 15,
    shadowOpacity: 1,
  },
  success: {backgroundColor: 'green'},
  primary: {backgroundColor: 'purple'},
  warning: {backgroundColor: 'orange'},
  error: {backgroundColor: 'red'},
});

export default App;
