import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListView from './list'
import MapView from './map'

const Tab = createBottomTabNavigator()

const homeScreen = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'white',
      style: {
        backgroundColor: 'rgb(44, 102, 110)'
      }
    }}
    >
      <Tab.Screen name='Map' component={MapView} />
      <Tab.Screen name='List' component={ListView} />
    </Tab.Navigator>
  )
}

export default homeScreen
