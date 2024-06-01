import React, {useEffect} from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

import { styles } from './FullTaskStyle';
import { global } from '../../styles/global';
import api from '../../../config/api';

export function FullTask({navigation, route, task: {title, date, local, description}}) {
    
    const deleteTask = () =>{
        try {
            Alert.alert('Aviso', 'Você deseja deletar a tarefa? Esta ação é irreversível.', [
                {
                text: 'Sim',
                onPress: async() => {
                    const {id} = route.params
                    await api.delete(`/${id}`)

                    Alert.alert('Sucesso', 'Tarefa deletada com sucesso.')
                    navigation.navigate('home')
                    }
                },
                {
                text: 'Não',
                onPress: () => {return}
                }
            ])
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateTask = () =>{
        try {
            const {id} = route.params
            navigation.navigate('update', {id: id})
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <View style={styles.container}>
        <View style={{margin: 20}}>
            <Text style={global.subtitle}>{title}</Text>

            <Text>
                <Text style={[global.subtitle, {fontSize:20}]}>Data: </Text>
                <Text style={[global.text, {fontWeight: 'bold'}]}>{date}</Text>
            </Text>

            {local && (
            <>
                <Text>
                    <Text style={[global.subtitle, {fontSize:20}]}>Local: </Text>
                    <Text style={[global.text, {fontWeight: 'bold'}]}>{local}</Text>
                </Text>
            </>
            )}
            {description &&(
                <Text>
                    <Text style={[global.subtitle, {fontSize:20}]}>Descrição: </Text>
                    <Text style={[global.text, {fontWeight: 'bold'}]}>{description}</Text>
                </Text>
            )}

            <View style={styles.containerButton}>
                <Pressable style={[styles.button, {backgroundColor: '#00A31A'}]}>
                    <Text style={styles.btnText}>Concluir</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#C7BF00'}]} onPress={updateTask}>
                    <Text style={styles.btnText}>Atualizar</Text>
                </Pressable>
                <Pressable style={[styles.button, {backgroundColor: '#FF0000'}]} onPress={deleteTask}>
                    <Text style={styles.btnText}>Deletar</Text>
                </Pressable>
            </View>
        </View>
    </View>
  );
}