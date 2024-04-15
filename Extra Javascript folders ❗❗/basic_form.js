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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, useDisplay] = useState(false);

  const resetFormData = () => {
    useDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Basic Form</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => useDisplay(true)}
        />
      </View>
      <View style={{marginBottom: 10, marginLeft: 10, marginRight: 10}}>
        <Button title="Clear Details" onPress={resetFormData} />
      </View>
      <View>
        {display ? (
          <View>
            <Text style={{textAlign:'center'}}>-------------------</Text>
            <Text style={{fontSize: 20}}>Your Name is: {name}</Text>
            <Text style={{fontSize: 20}}>Your Email is: {email}</Text>
            <Text style={{fontSize: 20}}>Your Password is: {password}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'white',
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
});

export default App;
