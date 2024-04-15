import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>
      <Pressable
      delayLongPress={2000}
      onPress={()=>{console.warn("onPress Called");}}
      onLongPress={()=>{console.warn("onLongPress Called");}}
      // onPressIn={()=>{console.warn("onPressIn Called");}}
      // onPressOut={()=>{console.warn("onPressOut Called");}}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  },
  pressableBtn:{
    backgroundColor:'#212121',
    color:'white',
    padding:10,
    margin:10,
    borderRadius:10,
    fontSize:20,
    textAlign:'center',
    shadowColor:'black',
    elevation:10
  }
});

export default App;
