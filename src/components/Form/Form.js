import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import { styles } from './FormStyle';
import MaskInput, { Masks, createNumberMask } from 'react-native-mask-input';
import api from '../../../config/api';

export function Form({typeReq, navigation, route}) {
    const [title, setTitle] = useState('')
    const [local, setLocal] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const updateTask = async() => {
      try {
        const {id} = route.params

        const obj = {title, local, date, description}
        if(!obj.title || !obj.date) throw new Error('Erro', 'Campos Título e Data são obrigatórios.')
        
        await api.patch(`/${id}`, obj)
        await Alert.alert('Sucesso', 'Sua tarefa foi atualizada.')
        navigation.navigate('task', {id: route.params.id})
      } catch (error) {
        Alert.alert('Erro', error.message)
      }
    }
    const getTask = async() => {
      try {
        const {id} = route.params
        const response = await api.get(`/${id}`)

        setTitle(response.data.title)
        setLocal(response.data.local)
        setDate(response.data.date)
        setDescription(response.data.description)
      } catch (error) {
        Alert.alert('Erro', error.message)
      }
    }

    const newTask = async() => {
      try {
        if(title === '' || date === '') throw new Error('Campos Título e Data são obrigatórios.')
        const obj = {title, date, local, description}
        
        await api.post('/', obj)

        await Alert.alert('Sucesso', 'Sua tarefa foi adicionada.')
        navigation.navigate('home')
      } catch (error) {
        Alert.alert('Erro', error.message)
      }
    }

    useEffect(()=>{
      if(typeReq!='post') getTask()
    }, [])

  return (
    <View>
      <ScrollView>
        <Text style={styles.label}>Título:</Text>
        <TextInput value={title} onChangeText={setTitle} style={styles.input} placeholder='Levar o cachorro para passear, ir às compras...'></TextInput>
        
        <Text style={styles.label}>Local:</Text>
        <TextInput value={local} onChangeText={setLocal} style={styles.input} placeholder='Rua Almeida nº 123...'></TextInput>
        
        <Text style={styles.label}>Data:</Text>
        <MaskInput value={date} onChangeText={setDate} style={[styles.input, {width: 135}]} keyboardType='numeric' mask={Masks.DATE_DDMMYYYY}/>
        
        <Text style={styles.label}>Descrição:</Text>
        <TextInput value={description} onChangeText={setDescription} style={[styles.input, {textAlignVertical: "top", paddingTop: 10}]} placeholder='Dê mais detalhes sobre sua tarefa...' multiline={true} numberOfLines={10} ></TextInput>
    
        <Pressable style={styles.buttonLong} onPress={typeReq==='post'?newTask:updateTask}>
          <Text style={styles.whiteText}>Confirmar</Text>
        </Pressable>
        {typeReq==='update' && (
          <Pressable style={[styles.buttonLong, {marginBottom: 10}]} onPress={()=>navigation.navigate('task', {id: route.params.id})}>
            <Text style={styles.whiteText}>Cancelar</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
}