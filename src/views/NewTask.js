import React from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';

import {global} from '../styles/global' 
import { Form } from '../components/Form/Form';
import { Line } from '../components/Line/Line';

export function NewTask({navigation}) {
  return (
    <View style={global.container}>
      <Text style={global.title}>Nova tarefa</Text>
      <Text style={global.subtitle}>Não se preocupe. Depois você pode alterá-la.</Text>
      <Line />
    
        <Form typeReq='post' navigation={navigation}/>
    </View>
  );
}