// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

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
  TextInput,
  FlatList,
} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'safwan',
    },
    {
      id: 2,
      name: 'ali',
    },
    {
      id: 3,
      name: 'hamza',
    },
    {
      id: 4,
      name: 'hammad',
    },
  ];
  return (
    <View style={{backgroundColor:'#333333',flex:1}}>
      <Text style={styles.hdr}>FlatList</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.id}: {item.name}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hdr: {
    fontSize: 30,
    textAlign:'center',
    backgroundColor:'black',
    padding:10,
    paddingBottom:22,
    color:'white'
  },
  item: {
    fontSize: 18,
    padding: 10,
    color: 'black',
    backgroundColor: 'orange',
    margin: 15,
    marginBottom:5,
    borderRadius:15
  },
});

export default App;
