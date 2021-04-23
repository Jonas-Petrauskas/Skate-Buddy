import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from './screens/landingScreen'
import HomePage from './screens/homePage'

export default function App () {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='List' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// headerMode="none"