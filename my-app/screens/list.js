import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import ListComponent from '../components/listComponent';

const dataUrl = 'http://192.168.1.219:3003/list';

export default function List ({ navigation }) {

  
  const [data, setData] = useState([])
  
  const gettingData = async () => {
    const response = await fetch(dataUrl)
    const json = await response.json()
    setData(json)
  }
  
  useEffect(() => {
    gettingData()
  }, [])
  
  const dataList = data.map(data => <ListComponent list={data}/>
    // (<TouchableOpacity onPress={() => navigation.navigate('SingleList')} > 
    //   <Text 
    //     style={{
    //       borderWidth: 4,
    //       backgroundColor: 'red', 
    //       // height: '50%',

    //     }} 
    //     key={list._id}>
    //     {list.title}
    //   </Text>
    // </TouchableOpacity>)
    )

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.dataList}>{dataList}</View>
      </ScrollView>
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
    // backgroundColor: 'rgb(18, 18, 20)'
  },
  dataList: {
    backgroundColor: 'orange',
  }
})
