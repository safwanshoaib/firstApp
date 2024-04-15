import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const skills = [
    {
      id: 1,
      name: 'Python',
    },
    {
      id: 2,
      name: 'JavaScript',
    },
    {
      id: 3,
      name: 'Node JS',
    },
    {
      id: 4,
      name: 'React-Native',
    },
    {
      id: 5,
      name: 'Java',
    },
    {
      id : 6,
      name: 'C, C++, C#'
    },
    {
      id : 7,
      name: 'Golang'
    },
    {
      id : 8,
      name: 'BASIC'
    },
    {
      id : 9,
      name: 'Kotlin'
    },
    {
      id : 10,
      name: 'Swift'
    },
  ];

  const [selectRadio, setSelectRadio] = useState(4);

  return (
    <View style={styles.main}>
      <View style={styles.box}>
      {
        skills.map((item, index) => (
          <TouchableOpacity key={index}
          onPress={() => setSelectRadio(item.id)}>
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selectRadio === item.id ? <View style={styles.radioBg}></View> : null}
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box:{
    flex:1,
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
