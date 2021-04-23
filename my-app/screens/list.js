import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
// import Data from '../apiService'

const dataUrl = 'http://192.168.1.219:3003/list'

export default function List () {
  
  // const [smth, setData ] = useState([]);

  // useEffect( async () => {
  // const data = await Data.gettingData()
  // console.log(data)
  // setData(data)
  // },  [])

  const [data, setData] = useState([])

  const gettingData = async () => {
    const response = await fetch(dataUrl)
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    gettingData()
  }, [])

  const dataList = data.map(list => <Text key={list._id}>{list.title}</Text>)
  const dataDescription = data.map(list => <Text key={list._id}>{list.description}</Text>)

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.dataList}>{dataList}</View>
      {/* <View style={styles.dataList}>{dataDescription}</View> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  dataList: {
    // backgroundColor: 'red'
  }

})
