import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {
  const products = [
    {
      name: 'Samsung',
      color: 'Phantom Black',
      price: 100000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Iphone',
      color: 'Deep Purple',
      price: 150000,
      image:
        'https://static.vecteezy.com/system/resources/previews/007/081/049/non_2x/phone-device-smart-app-business-watch-brand-cellphone-telephone-free-vector.jpg',
    },
    {
      name: 'Xiaomi',
      color: 'Prism White',
      price: 25000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'OnePlus',
      color: 'Grey',
      price: 50000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Pixel',
      color: 'White',
      price: 80000,
      image:
        'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
export default App;
