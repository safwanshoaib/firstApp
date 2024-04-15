// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
  ];
  return (
    <View>
      <Text style={{fontSize:27}}>Component in loop with Flatlist</Text>
      <FlatList
      data={users} 
      renderItem={({item})=> <UserData item={item}/>}
      />
    </View>
  );
};
//* it can be export from external file
const UserData = (props) => {
  const item = props.item
  return(
    <View style={styles.box}>
        <Text style={styles.item}>{item.id}</Text>
        <Text style={styles.item}>{item.name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  item:{
    fontSize:24,
    color:'white',
    flex:1,
    margin:2,
    textAlign:'center'
  },
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'orange',
    margin:10
  }
});

export default App;
