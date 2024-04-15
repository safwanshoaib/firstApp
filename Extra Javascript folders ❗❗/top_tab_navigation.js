import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: { backgroundColor: '#212121' }
        }}>
        <Tab.Screen name="Login"  component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Others" component={Others} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Login Screen</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>SignUp Screen</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Enter name"
        placeholderTextColor={'grey'}
        />
    </View>
  );
};

const Others = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Safwan</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    padding: 20,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  textBox: {
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
    margin: 20,
    padding: 10,
    width: 280,
  }
});
export default App;
