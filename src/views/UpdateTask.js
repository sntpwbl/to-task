import React from 'react';
import { Text, View } from 'react-native';

import { global } from '../styles/global';
import { Form } from '../components/Form/Form';
import { Line } from '../components/Line/Line';

export function UpdateTask({navigation, route}) {
  return (
    <View style={global.container}>
      <Text style={global.title}>Atualizar tarefa</Text>
      <Text style={global.subtitle}>Se não quiser mais alterar, clique em cancelar.</Text>
      <Line />
      < Form typeReq='update' navigation={navigation} route={route}/>
    </View>
  );
}