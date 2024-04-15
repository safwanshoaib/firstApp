import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View} from 'react-native';

const App = () => {

  const [data,setData] = useState(undefined)

  const getApiData = () => {
    let a = fetch('https://jsonplaceholder.typicode.com/posts')
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
    <ScrollView>
      <Text style={{fontSize:30}}>List API Call</Text>
      {
        data ? 
        data.map((item)=><View style={{padding:10,borderBottomColor:'#fff',borderBottomWidth:1}}>
          <Text style={{fontSize:20,backgroundColor:'#212121'}}>Id : {item.id}</Text>
          <Text style={{fontSize:20}}>Title : {item.title}</Text>
          <Text style={{fontSize:20}}>Body : {item.body}</Text>
        </View>)
        : null
      }
    </ScrollView>
  );
};

export default App;
