import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import  SingleList from './singleList';

import ListView from './list'
import MapView from './map'

const Tab = createBottomTabNavigator();

const ListStack = createStackNavigator();

const ListStackScreen = () => (
  <ListStack.Navigator   
    headerMode="none"
  >
    <ListStack.Screen name="ListView" component={ListView}/>
    <ListStack.Screen name="SingleList" component={SingleList}/>
  </ListStack.Navigator>
)

const dataUrl = 'http://192.168.1.219:3003/list';


const homeScreen = () => {


  const [data, setData] = useState([])
  
  const gettingData = async () => {
    const response = await fetch(dataUrl)
    const json = await response.json()
    setData(json)
  }
  
  useEffect(() => {
    gettingData()
  }, [])
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'white',
      style: {
        backgroundColor: 'rgb(18, 18, 20)',
        borderTopWidth: 0
      },
      labelStyle: {
        fontSize: 18
      }
    }}
    >
      <Tab.Screen name='Map' children={() => <MapView data={data}/>} />
      <Tab.Screen name='List' children={() => <ListStackScreen data={data}/>} />
    </Tab.Navigator>
  )
}

export default homeScreen
