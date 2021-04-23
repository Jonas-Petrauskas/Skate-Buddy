import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native'



export default function ListComponent({ list }) {

  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleList')} > 
      <Text 
        style={{
          borderWidth: 4,
          backgroundColor: 'red', 
          height: 200,
          width: 200,
          fontSize: 30
          // color: 'black'

        }} 
        key={list._id}>
        {list.title}
      </Text>
    </TouchableOpacity>
    
  ) 
}