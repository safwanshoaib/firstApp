import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <Text style={styles.indexNum}>{props.item+1}</Text>
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 28,
    height: 28,
    backgroundColor: '#55BCF6',
    opacity:0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color:'black',
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 10,
  },
  indexNum:{
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
  }
});

export default Task;
