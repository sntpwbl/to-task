import React from 'react';

import imgnewtask from '../../images/imgnewtask.png'
import imgseetask from '../../images/imgseetask.png'

import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './HomeDisplayStyle';

export function HomeDisplay({navigation}) {

    const navToNew = ()=>{
        navigation.navigate('new')
    }
    const navToSee = ()=>{
        navigation.navigate('tasks')
    }

  return (
    <View style={styles.container}>
        <View style={styles.newTask}>
            <TouchableOpacity onPress={navToNew}>
                <Image source={imgnewtask}/>
            </TouchableOpacity>

            <Text style={styles.text}>Nova tarefa</Text>
        </View>
        <View style={styles.seeTask}>
            <TouchableOpacity onPress={navToSee}>
                <Image source={imgseetask}/>
            </TouchableOpacity>
            <Text style={styles.text}>Ver tarefas</Text>
        </View>
    </View>
  );
}