// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import Exstyles from './style.js';

const App = () => {
  return (
    <View>
      <Text style={{fontSize:30,color:'white',backgroundColor:'#C115bf'}}>Inline Style</Text>
      <Text style={styles.textBox}>Internal Styling 1</Text>
      <Text style={styles.textBox}>Internal Styling 2</Text>
      <Text style={styles.textBox}>Internal Styling 3</Text>
      <Text style={Exstyles.textBox}>External Styling</Text>
      <Text style={[styles.textBox,Exstyles.textBox,{marginTop:20}]}>Inline , Internal & External Styling</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox:{
    color:'black',
    fontSize:25,
    backgroundColor:'pink',
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    padding:10,
    borderRadius:10,
    height:100,
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:2
  }
})

export default App;