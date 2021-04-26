import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ListComponent from '../components/listComponent'

const dataUrl = 'http://192.168.1.219:3003/list'

export default function List () {
  // was not able to manage this part with fetchin API here yet. It will be changed and passed from Parent file
  const [data, setData] = useState([])

  const gettingData = async () => {
    const response = await fetch(dataUrl)
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    gettingData()
  }, [])

  // Getting from components folder

  const dataList = data.map(data => <ListComponent key={data._id} list={data} />)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView indicatorStyle= 'black'>
        <StatusBar style='inverted' />
        <View style={styles.dataList}>{dataList}</View>
      </ScrollView>
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
  }
})
