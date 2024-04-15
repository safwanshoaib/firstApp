import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

//* Custom Animated Component
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const App = () => {
  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animatedScale = useSharedValue(0);
  const animatedMobileView = useSharedValue(0);
  const animatedTabView = useSharedValue(0);

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [{translateY: animatedImgY.value}],
    };
  });

  const animatedMobileStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedMobileView.value}],
    };
  });

  const animatedTabStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedTabView.value}],
    };
  });

  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
      <AnimatedBtn
        style={[
          {
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginLeft: 20,
          },
          animatedBtnStyle,
        ]}
        onPress={() => {
          animatedMobileView.value = withTiming(0, {duration: 500});
          animatedTabView.value = withTiming(0, {duration: 500});
          animatedScale.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(70, {duration: 500});
          animatedImgHeight.value = withTiming(70, {duration: 500});
          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Text style={{color: 'white', fontSize: 24}}>X</Text>
      </AnimatedBtn>

      <TouchableOpacity
        style={{height: 70, width: 70, marginLeft: 20}}
        onPress={() => {
          if (animatedImgWidth.value === 70) {
            animatedMobileView.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 200},
            );
            animatedTabView.value = withTiming(
              -Dimensions.get('window').width,
              {duration: 200},
            );
            animatedScale.value = withTiming(1, {duration: 500});
            animatedImgWidth.value = withTiming(350, {duration: 500});
            animatedImgHeight.value = withTiming(350, {duration: 500});
            animatedImgY.value = withTiming(150, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={require('./assets/Earth.png')}
          style={[
            {
              height: 70,
              width: 70,
              resizeMode: 'contain',
              justifyContent: 'center',
              alignItems: 'center',
            },
            animatedImgStyle,
          ]}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            width: '90%',
            height: 100,
            backgroundColor: 'rgba(38, 38, 38, 1)',
            marginTop: 20,
            alignSelf: 'center',
            borderRadius: 10,
          },
          animatedMobileStyle,
        ]}>
        <Text style={{color: 'white', marginLeft: 20, marginTop: 10}}>
          Mobile: +92 1234567890
        </Text>
        <Text style={{color: 'white', marginLeft: 20, marginTop: 10}}>
          Email: safwanshoaib2002@gmail.com
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            width: '100%',
            height: 70,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            borderTopWidth: 0.4,
            borderTopColor: '#9e9e9e',
          },
          animatedTabStyle,
        ]}>
        <Text style={{color: 'white', fontSize: 30}}>+</Text>
        <Text style={{color: 'white', fontSize: 30}}>{`>`}</Text>
        <Text style={{color: 'white', fontSize: 30}}>{`&`}</Text>
        <Text style={{color: 'white', fontSize: 30}}>%</Text>
        <Text style={{color: 'white', fontSize: 30}}>#</Text>
      </Animated.View>
    </View>
  );
};

export default App;
