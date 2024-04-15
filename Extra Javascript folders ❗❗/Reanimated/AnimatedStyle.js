import {View, Text, TouchableOpacity, StatusBar, TextInput} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';


const App = () => {
  const h = useSharedValue(100);
  const w = useSharedValue(100);
  const r = useSharedValue(0);
  const bg = useSharedValue('red');
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      borderRadius: r.value,
      backgroundColor : bg.value
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar
        // translucent
        backgroundColor="transparent"
        animated
      />
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'red'},
          animatedStyle,
        ]}></Animated.View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
          borderRadius: 50,
          position:'absolute',
          top:'55%'
        }}
        onPress={()=>{
          if (w.value == 100) {
            w.value = withDelay(0,withSpring(200));
            h.value = withDelay(300,withSpring(200));
            r.value = withDelay(700,withSpring(100));
            bg.value = withSpring('orange');
          }
          else {
            w.value = withSpring(100);
            h.value = withSpring(100);
            r.value = withSpring(0);
            bg.value = withTiming('red',{duration:800});
          }
        }}
        >
        <Text style={{color: 'black'}}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
