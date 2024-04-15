// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Safwan',
      //* Must use 'data' in nested array for section list
      data: ['Angular', 'Vue', 'React JS'],
    },
    {
      id: 2,
      name: 'Ali',
      //* Must use 'data' in nested array for section list
      data: ['C', 'C++', 'C#'],
    },
    {
      id: 3,
      name: 'Noman',
      //* Must use 'data' in nested array for section list
      data: ['Python', 'Ruby', 'R'],
    },
    {
      id: 4,
      name: 'Ahsan',
      //* Must use 'data' in nested array for section list
      data: ['Next JS', 'Express JS', 'Typescript'],
    },
    {
      id: 5,
      name: 'Usman',
      //* Must use 'data' in nested array for section list
      data: ['CSS', 'Bootstrap', 'HTML'],
    },
  ];

  return (
    <View>
      <Text style={styles.topHdr}>Section List</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.hdr}>{name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topHdr: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    padding: 10,
    paddingBottom: 22,
    color: 'white',
  },
  hdr: {fontSize: 25, color: 'red', marginLeft: 8},
  item: {fontSize: 20, marginLeft: 35, color: 'white'},
});

export default App;
