import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  }

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name))
  }
  useEffect(()=>{
    let result = cartItems.filter((element)=>{
      return element.name === item.name
    });
    if(result.length){
      setIsAdded(true);
    }
    else{
      setIsAdded(false);
    }
  },[cartItems])
  return (
    <View style={styles.items}>
      <Text
        style={[
          styles.viewText,
          {fontWeight: 'bold', fontSize: 28, color: 'orange'},
        ]}>
        {item.name}
      </Text>
      <Text style={styles.viewText}>Color: {item.color}</Text>
      <Text style={styles.viewText}>Rs: {item.price}</Text>
      <Image style={styles.image} source={{uri: item.image}} />
      {
        isAdded ? <TouchableOpacity onPress={()=>handleRemoveFromCart(item)}>
        <Text style={[styles.button,{backgroundColor:'grey'}]}>Remove To Cart</Text>
        </TouchableOpacity> : <TouchableOpacity onPress={()=>handleAddToCart(item)}>
        <Text style={styles.button}>Add To Cart</Text>
        </TouchableOpacity>
      }
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewText: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  items: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    marginLeft: 25,
    marginRight: 25,
  },
});
export default Product;
