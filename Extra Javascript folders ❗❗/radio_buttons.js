import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const [selectRadio, setSelectRadio] = useState(1);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setSelectRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectRadio === 2 ? (
              <View style={[styles.radioBg, {backgroundColor: 'red'}]}></View>
            ) : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: '#212121',
  },
  radio: {
    height: 28,
    width: 28,
    borderColor: '#212121',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: '#212121',
    height: 18,
    width: 18,
    borderRadius: 20,
    margin: 3,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
