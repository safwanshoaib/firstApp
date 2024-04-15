import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const [count, setcount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const scale = useSharedValue(0);
  const scaleCount = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedX.value},
        {translateY: animatedY.value},
        {scale: scale.value},
      ],
    };
  });
  
  const animatedCount = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: scaleCount.value},
      ],
    };
  });

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.7)'}}>
      {/* <StatusBar translucent backgroundColor={'rgba(0,0,0,0.3)'} animated /> */}
      <Image
        source={require('./assets/car.jpg')}
        style={{height: 300, width: '100%'}}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '800',
          marginTop: 10,
          marginLeft: 10,
        }}>
        Mercedes Benz AMG C63
      </Text>
      <Text
        style={{
          width: '92%',
          alignSelf: 'center',
          marginTop: 10,
          fontSize: 16,
          textAlign: 'justify',
          lineHeight: 22,
        }}>
        The Mercedes Benz AMG C63 is a high-performance model of the
        Mercedes-Benz C-Class, built by Mercedes-AMG. It's known for its
        powerful V8 engine, luxurious interior, and exceptional handling. The
        AMG C63 combines the elegance and comfort of a Mercedes with the raw
        power and sportiness of AMG. Whether you're cruising on the highway or
        taking on the racetrack, he AMG C63 delivers an exhilarating driving
        experience.
      </Text>
      <Animated.View
        style={[
          {
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            alignSelf: 'center',
            zIndex: 1,
          },
          animatedStyle,
        ]}>
        <Text style={{fontSize: 16, color: 'white'}}>{'+1'}</Text>
      </Animated.View>
      <TouchableOpacity
        disabled={isDisabled}
        style={{
          width: '92%',
          height: 60,
          backgroundColor: 'brgb(110, 125, 49)',
          alignSelf: 'center',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 50,
          position: 'absolute',
        }}
        onPress={() => {
          if (animatedX.value === 0) {
            setIsDisabled(true);
            scale.value = 1;
            animatedX.value = withTiming(175, {duration: 1500});
            animatedY.value = withTiming(-685, {duration: 1500});
            setTimeout(() => {
              scale.value = 0;
              scaleCount.value = withSpring(1.8);
              setcount(count + 1);
              animatedX.value = withTiming(0, {duration: 1500});
              animatedY.value = withTiming(0, {duration: 1500});
              setTimeout(() => {
                scaleCount.value = withSpring(1);
              }, 150);
              setIsDisabled(false);
            }, 1500);
          }
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '800',
          }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 60,
          width: 60,
          backgroundColor: 'white',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          right: 15,
          top: 15,
        }}>
        <Image
          source={require('./assets/bag.png')}
          style={{height: 30, width: 30}}
          tintColor={'rgb(110, 125, 49)'}
        />
        <Animated.View
          style={[{
            width: 25,
            height: 25,
            borderRadius: 15,
            backgroundColor: 'red',
            position: 'absolute',
            right: 0,
            top: 0,
          },animatedCount]}>
          <Text
            style={{
              fontWeight: '800',
              alignSelf: 'center',
              color: 'white',
            }}>
            {count}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default App;
