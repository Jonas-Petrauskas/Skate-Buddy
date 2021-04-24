import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'

export default function ListComponent ({ list }) {
  const navigation = useNavigation()

  // getting title and description rendered on the screen and passing to the list.js

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleList')}>
      <View
        style={{
          backgroundColor: 'rgb(55, 53, 57)',
          color: 'rgb(240, 237, 238)',
          height: 390,
          width: 325,
          borderRadius: 20,
          marginBottom: 40,
          alignItems: 'left'
        }}
        key={list._id}
      >
        <View style={styles.image}>

          <Image source={require('../assets/universitat.png')} />
        </View>
        <Text style={styles.text}>
          {list.title}
        </Text>
        <Text style={styles.description}>
          {list.description}
        </Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  text: {
    color: 'rgb(240, 237, 238)',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingLeft: 25
  },
  description: {
    color: 'rgb(240, 237, 238)',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 25
  },
  image: {
    paddingLeft: 25,
    paddingTop: 15
  }
})
