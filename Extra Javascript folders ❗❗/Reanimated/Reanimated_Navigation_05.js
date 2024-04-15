import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
  const [select, setSelect] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);

  //* For button
  const animatedBtn1Y = useSharedValue(0);
  const animatedBtn2Y = useSharedValue(0);
  const animatedBtn3Y = useSharedValue(0);

  //* For focused button colour
  const [color1, setcolor1] = useState('white');
  const [color2, setcolor2] = useState('white');
  const [color3, setcolor3] = useState('white');

  useEffect(() => {
    if (select === 0) {
      setcolor2('white');
      setcolor3('white');
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(0, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-150,{duration:500});
        animatedY.value = withDelay(100,withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedBtn1Y.value = withTiming(0,{duration:500});
          animatedY.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            withDelay(100,setcolor1('black'));
          }, 200);
        }, 500);
      }, 1000);
    } else if (select === 1) {
      setcolor1('white');
      setcolor3('white');
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(138, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-150,{duration:500});
        animatedY.value = withDelay(100,withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedBtn2Y.value = withTiming(0,{duration:500});
          animatedY.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            withDelay(100,setcolor2('black'));
          }, 200);
        }, 500);
      }, 1000);
    } else {
      setcolor1('white');
      setcolor2('white');
      animatedY.value = withTiming(50, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(275, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-150,{duration:500});
        animatedY.value = withDelay(100,withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedBtn3Y.value = withTiming(0,{duration:500});
          animatedY.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            withDelay(100,setcolor3('black'));
          }, 200);
        }, 500);
      }, 1000);
    }
  }, [select]);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });
  //* For button Animations
  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn1Y.value}],
    };
  });
  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn2Y.value}],
    };
  });
  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn3Y.value}],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          width: '100%',
          elevation: 0.5,
          justifyContent: 'space-around',
          height: 70,
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          flexDirection: 'row',
        }}>
        <Animated.View
          style={[
            {
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: 'orange',
              position: 'absolute',
            },
            animatedStyle,
          ]}></Animated.View>
        {/* 1st Button */}
        <AnimatedBtn
          style={[{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }, animatedBtnStyle1]}
          onPress={() => setSelect(0)}>
          <Image
            source={require('./assets/bag.png')}
            style={{height: 32, width: 32, tintColor: color1}}
          />
        </AnimatedBtn>
        {/* 2nd Button */}
        <AnimatedBtn
          style={[{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }, animatedBtnStyle2]}
          onPress={() => setSelect(1)}>
          <Image
            source={require('./assets/bag.png')}
            style={{height: 32, width: 32, tintColor: color2}}
          />
        </AnimatedBtn>
        {/* 3rd Button */}
        <AnimatedBtn
          style={[{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }, animatedBtnStyle3]}
          onPress={() => setSelect(2)}>
          <Image
            source={require('./assets/bag.png')}
            style={{height: 32, width: 32, tintColor: color3}}
          />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default App;
