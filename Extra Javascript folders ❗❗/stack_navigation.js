import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const Home = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Home Screen</Text>
    </View>
  )
}
const Login = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>props.navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle:{
    fontSize:30,
    color:'#000'
  }
})
export default App;
