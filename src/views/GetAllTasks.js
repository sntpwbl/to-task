import React, {useState, useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';

import { global } from '../styles/global';
import { Line } from '../components/Line/Line';
import { Task } from '../components/Task/Task';
import api from '../../config/api';



export function GetAllTasks({navigation}) {
  const [tasks, setTasks] = useState([])

  const getTasks = async() =>{
    try{
      const taskReq = await api.get('/')
      setTasks(taskReq.data)
    }catch(error){
      console.log(error.message)
    }
  }

  
  useEffect(() =>{
    getTasks()
  }, [])

  return (
    <View style={global.container}>
      <Text style={global.title}>Tarefas</Text>
      <Text style={global.subtitle}>Veja suas tarefas aqui.</Text>
      <Line />

      {tasks[0] ? <FlatList data={tasks.reverse()} 
      keyExtractor={item=>item._id}
      renderItem={({item}) => <Task task={item} navigation={navigation}/>} /> : <Text style={global.text}>Não há tarefas recentes para serem mostradas.</Text>}

    </View>
  );
}