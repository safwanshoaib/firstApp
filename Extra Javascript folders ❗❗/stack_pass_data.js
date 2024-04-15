import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn('Left Button Call');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 28,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Button title="Left" onPress={btnAction} />,
            headerRight: () => <Header />,
            title: 'User Login',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 28,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return <TextInput placeholder="Enter Name" />;
};

const Home = (props) => {
  console.warn(props.route.params);
  const {name, age} = props.route.params;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Text style={[styles.textStyle,{fontSize:20}]}>Name: {name}</Text>
      <Text style={[styles.textStyle,{fontSize:20}]}>Age: {age}</Text>
    </View>
  );
};
const Login = (props) => {
  const [name, setName] = useState('');
  age = 20;
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Login Screen</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
        placeholderTextColor={"grey"}
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    color: '#000',
  },
  textBox: {
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    color:'black',
    margin:10,
    padding:10,
  },
});
export default App;
