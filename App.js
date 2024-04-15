import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

const App = () => {
  const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
  const animatedWidth = useSharedValue(300);
  const animatedRadius = useSharedValue(20);
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedRadius.value,
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ['purple', 'blue'],
      ),
    };
  });

  //* interpolateColor

  // const animatedColorStyle = useAnimatedStyle(() => {
  //   return {
  //     backgroundColor: interpolateColor(
  //       progress.value,
  //       [0, 1],
  //       ['red', 'green']
  //     ),
  //   };
  // });
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <AnimatedBtn
          style={[
            {
              width: 300,
              height: 60,
              backgroundColor: `${
                isExpanded === false
                  ? setInterval(() => {
                      progress.value = withTiming(1 - progress.value, {
                        duration: 1000,
                      });
                    }, 1500)
                  : null
              }`,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              elevation: 30,
              shadowColor: 'rgba(255,255,255,0.4)',
            },
            animatedStyle,
          ]}
          onPress={() => {
            if (animatedWidth.value === 300) {
              animatedWidth.value = withTiming(60, {duration: 500});
              animatedRadius.value = withTiming(30, {duration: 500});
              setIsExpanded(true);
            } else {
              animatedWidth.value = withTiming(300, {duration: 500});
              animatedRadius.value = withTiming(20, {duration: 500});
              setTimeout(() => {
                setIsExpanded(false);
              }, 500);
            }
          }}>
          {isExpanded ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            <Text style={{color: 'white', fontSize: 20}}>Press Me</Text>
          )}
        </AnimatedBtn>
        {/* <Animated.View style={[{ width: 100, height: 100 }, animatedColorStyle]} />
      <Button
        onPress={() => {
          progress.value = withTiming(1 - progress.value, { duration: 1000 });
        }}
        title="run animation"
      /> */}
      </View>
    </View>
  );
};

export default App;
