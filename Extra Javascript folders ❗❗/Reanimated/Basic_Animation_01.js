import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

//* 5 built-in Reanimated Components:
/*  View, Text, Flatlist, ScrollView, Image */

//* Custom Components:
/*  createAnimatedComponent */

//* 'useSharedValue' work like state

//* Animated Functions
/*  withSpring, withTiming */

const App = () => {
  const animatedValue = useSharedValue(100); //* pass value in terms of number, string, boolean, array, object
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          height: animatedValue,
          width: animatedValue,
          backgroundColor: 'red',
        }}></Animated.View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
        onPress={() => {
          let temp;
          if (animatedValue.value <= 300) {
            animatedValue.value = withSpring(animatedValue.value + 50);
            if (animatedValue.value == 300){
              temp == 300;
            }
          } else {
            if (temp >= 100) {
              animatedValue.value = withSpring(animatedValue.value - 50);
            }
          }
          // animatedValue.value += 50;
          // animatedValue.value = withTiming(animatedValue.value + 50,{duration:800});
        }}
        onLongPress={() => {
          animatedValue.value = withTiming(animatedValue.value + 50, {
            duration: 800,
          });
        }}>
        <Text style={{color: 'black', fontSize: 15}}>Scale View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
