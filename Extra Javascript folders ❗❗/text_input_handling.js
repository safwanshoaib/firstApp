// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

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
  TextInput
} from 'react-native';

const App = () => {
  const [name,setName] = useState('')
  return (
    <View>
      <Text style={{fontSize:30}}>Text Handling</Text>
      <Text style={{fontSize:20}}>Your Name is: {name}</Text>
      <TextInput style={styles.textInput}
      placeholder='Enter Your Name' 
      value = {name}
      onChangeText={(text)=>setName(text)}/>
      <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput:{
    fontSize:18,
    color:'white',
    borderWidth:2,
    borderColor:'black'
  }
})

export default App;