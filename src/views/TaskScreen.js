import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';

import { global } from '../styles/global';
import { Line } from '../components/Line/Line';
import { FullTask } from '../components/FullTask/FullTask';

import api from '../../config/api';

export function TaskScreen({route, navigation}) {
    const [task, setTask] = useState({})

    const getTask = async() =>{
        try {
            const {id} = route.params

            const response = await api.get(`/${id}`)
            setTask(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getTask()
    }, [task])
  return (
    <View style={global.container}>
        <Text style={[global.subtitle, {marginTop: 20}]}>Informações detalhadas sobre sua tarefa</Text>
        <Line />
        <FullTask navigation={navigation} route={route} task={task}/>

        <Text style={[global.subtitle, {marginTop: 15, fontSize: 15}]}>Ao tocar em Concluir, sua tarefa deixará de estar visível na aba Tarefas, mas estará disponível para ser visualizada na aba Histórico.</Text>
    </View>
  );
}