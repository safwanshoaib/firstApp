import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {

  const [data,setData] = useState(undefined)

  const getApiData = () => {
    let a = fetch('https://jsonplaceholder.typicode.com/posts/1')
    a.then((value1)=>{
      return value1.json();
    }).then((value2)=>{
      setData(value2); 
    })
  };

  useEffect(() => {
    getApiData();
  },[])

  return (
    <View>
      <Text style={{fontSize:30}}>API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize:20}}>{data.id}</Text>
          <Text style={{fontSize:20}}>{data.userId}</Text>
          <Text style={{fontSize:20,color:'green'}}>"{data.title}"</Text>
          <Text style={{fontSize:20,color:'orange'}}>"{data.body}"</Text>
        </View> : null
      }
    </View>
  );
};

export default App;
