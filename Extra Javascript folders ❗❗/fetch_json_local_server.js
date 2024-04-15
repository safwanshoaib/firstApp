import React, { useEffect, useState } from 'react';
import {Text, View, FlatList} from 'react-native';

const App = () => {
  
  const [data,setData] = useState([])

  const getApiData = () => {
    let a = fetch('http://10.0.2.2:3000/users');
    a.then((value1)=>{
      return value1.json();
    }).then((value2)=>{
      setData(value2); 
    }).catch((error)=>{console.warn(error);})
  };

  useEffect(() => {
    getApiData();
  },[])

  return (
    <View>
      <Text style={{fontSize:28,backgroundColor:'black',paddingBottom:12,textAlign:'center',color:"white"}}>Fetch data from Json Server</Text>
      {
        data.length ? 
        data.map((item)=><View style={{padding:10,borderBottomColor:'#000',borderBottomWidth:1, margin:10}}>
          <Text style={{fontSize:20,backgroundColor:'grey'}}>Id : {item.id}</Text>
          <Text style={{fontSize:20}}>Name : {item.name}</Text>
          <Text style={{fontSize:20}}>Email : {item.email}</Text>
        </View>)
        : null
      }
    </View>
  );
};

export default App;
