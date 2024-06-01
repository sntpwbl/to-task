import React, {useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';

import { HomeDisplay } from '../components/HomeDisplay/HomeDisplay';
import { global } from '../styles/global';
import { Task } from '../components/Task/Task';
import { Line } from '../components/Line/Line';
import api from '../../config/api';

export function Home({navigation}) {
  const [tasks, setTasks] = useState([])
  
  const getLastTwoTasks = async()=>{
    try {
      const allTasks = await api.get('/')
      const data = allTasks.data

      if(data.length>=2) setTasks([data.at(-1), data.at(-2)])
      else if (data.length===1) setTasks(data)
      else setTasks([])

    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getLastTwoTasks()
  }, [tasks])
  return (
    <View style={global.container}>

      <View>
        <Text style={global.title}>Bem vindo!</Text>
        <Text style={global.subtitle}>O que deseja fazer?</Text>
        <Line />
      </View>
      
      <HomeDisplay navigation={navigation}/>

      <Text style={[global.subtitle, {marginTop: 20}]}>Recentes</Text>
      {tasks && tasks.length>=1 ? 
        <FlatList data={tasks} keyExtractor={item=>item._id} renderItem={({item})=><Task task={item} navigation={navigation}/>}/>
        : 
        <Text style={global.text}>Não há tarefas recentes para serem mostradas.</Text>
      }
    </View>
  );
}