import React, {useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState('default');

  return (
    <View style={styles.main}>
      <StatusBar
        // backgroundColor="black"
        // barStyle="dark-content"
        // hidden={true}
        backgroundColor="orange"
        barStyle={barStyle}
        hidden={hide}
      />
      <View style={styles.buttonStyle}>
        <Button title="Toggle StatusBar" onPress={() => setHide(!hide)} />
        <Button
          title="Update Style"
          color={'green'}
          onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  buttonStyle: {
    margin: 10,
  },
});

export default App;
