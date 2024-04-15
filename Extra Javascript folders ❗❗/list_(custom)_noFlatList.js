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
    {
      id: 5,
      name: 'safwan',
    },
    {
      id: 6,
      name: 'ali',
    },
    {
      id: 7,
      name: 'hamza',
    },
    {
      id: 8,
      name: 'hammad',
    },
    {
      id: 9,
      name: 'safwan',
    },
    {
      id: 10,
      name: 'ali',
    },
    {
      id: 11,
      name: 'hamza',
    },
    {
      id: 12,
      name: 'hammad',
    },
    {
      id: 13,
      name: 'safwan',
    },
    {
      id: 14,
      name: 'ali',
    },
    {
      id: 15,
      name: 'hamza',
    },
    {
      id: 16,
      name: 'hammad',
    },
  ];
  return (
    <View style={{backgroundColor:'#333333',flex:1}}>
      <Text style={styles.hdr}>FlatList</Text>
      <ScrollView style={{marginBottom:15}}>
        {
        users.map((item)=> <Text style={styles.item}> {item.id}: {item.name} </Text>)
        }
      </ScrollView>
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
