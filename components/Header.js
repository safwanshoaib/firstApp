import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {

  const cartData = useSelector((state)=>state.reducer);
  const [cartItems,setCartItems] = useState(0);

  useEffect(()=>{
    setCartItems(cartData.length)
  },[cartData])

  return (
    <View style={styles.cart}>
      <Text style={styles.cartNum}>{cartItems}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartNum: {
    fontSize: 28,
    textAlign: 'right',
    padding: 10,
    backgroundColor: 'orange',
    color: 'black',
    }
});
export default Header;
