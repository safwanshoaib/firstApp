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
      name: 'ahsan',
    },
    {
      id: 6,
      name: 'usama',
    },
    {
      id: 7,
      name: 'sermad',
    },
    {
      id: 8,
      name: 'usman',
    },
    {
      id: 9,
      name: 'zubair',
    },
    {
      id: 10,
      name: 'danial',
    },
    {
      id: 11,
      name: 'farhan',
    },
    {
      id: 12,
      name: 'bilal',
    },
    {
      id: 13,
      name: 'zohaib',
    },
    {
      id: 14,
      name: 'farzeen',
    },
    {
      id: 15,
      name: 'faiq',
    },
    {
      id: 16,
      name: 'hannan',
    },
    {
      id: 17,
      name: 'rafay',
    },
    {
      id: 18,
      name: 'qasim',
    },
    {
      id: 19,
      name: 'daud',
    },
    {
      id: 20,
      name: 'arham',
    },
  ];
  return (
    <View style={{backgroundColor:'#333333',flex:1}}>
      <Text style={styles.hdr}>Grid</Text>
      <ScrollView style={{marginBottom:5,marginTop:5}}>
        <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        {
        users.map((item)=> <Text style={styles.item}> {item.id}: {item.name} </Text>)
        }
        </View>
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
    padding: 5,
    color: 'black',
    backgroundColor: 'orange',
    margin: 5,
    height:125,
    width:125,
    borderRadius:20,
    textAlignVertical:'center',
    textAlign:'center'
  },
});

export default App;
