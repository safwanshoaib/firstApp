import React, { useEffect, useState } from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';

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
    <View>
      <Text style={{fontSize:28,backgroundColor:'black',paddingBottom:12,textAlign:'center',color:"white"}}>List API call with FlatList</Text>
      {
        data ?
        <FlatList 
        data={data}
        renderItem={({item})=> <View style={{backgroundColor:"#212121", padding:12, borderBottomColor:"white", borderBottomWidth:1,marginBottom:10}}>
          <Text style={{fontSize:20,backgroundColor:'grey'}}>Id : {item.id}</Text>
          <Text style={{fontSize:20}}>Title : {item.title}</Text>
          <Text style={{fontSize:20}}>Body : {item.body}</Text>
        </View>}
        />
        : null
      }
    </View>
  );
};

export default App;
