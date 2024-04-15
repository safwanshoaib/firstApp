import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [show, setShow] = useState(false);

  const displayIndicator = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size={150} color="grey" animating={show} />
      <TouchableOpacity onPress={displayIndicator}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>ActivityIndicator</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
  },
  buttonStyle:{
    backgroundColor:'orange',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:25,
    paddingRight:25,
    borderRadius:30,
    marginTop:15
  }
});

export default App;
