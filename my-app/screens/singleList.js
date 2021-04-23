import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function SingleList({ data }) {

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Here we go</Text>
      <StatusBar style="inverted" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(18, 18, 20)'
  },
  text: {
    color: 'white'
  }
})