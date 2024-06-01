import React from 'react';
import { Text, View, Pressable } from 'react-native';

import { styles } from './TaskStyle';

export function Task({navigation, task: {title, date, _id}}) {
  return (
    <View style={styles.container}>
      
        <Text style={styles.text}>{title}</Text>
        <Text style={[styles.text, {fontSize: 15}]}>{date}</Text>
      
        <Pressable style={styles.button} onPress={() => navigation.navigate('task', {id: _id})}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Ver mais</Text>
        </Pressable>
    </View>
  );
}