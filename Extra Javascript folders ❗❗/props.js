import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [name,setName]=useState("Safwan")
  return (
    <View>
      <Text style={{fontSize: 30}}>Props in Reat Native</Text>
      <Button title='Update Props Name' onPress={()=>setName("Ali")}/>
      {/*//* Passing Multiple Props */}
      <NameUpdate name={name} age ={20}/>
    </View>
  );
};

const NameUpdate = (props) => {
  return (
    <View style={{backgroundColor: 'green',padding:5}}>
      <Text style={{fontSize:22}}>Name: {props.name}</Text>
      <Text style={{fontSize:22}}>Age: {props.age}</Text>
    </View>
  );
};

export default App;