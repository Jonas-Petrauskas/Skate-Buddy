import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function SingleList () {
  // Not fisnished, but this is how all information will be rendered in the Singlelist

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <Image source={require('../assets/universitat.png')} />
          <Text style={styles.text}>Universitat Skate Spot</Text>
          <Text style={styles.description}>Perfect for flatground tricks. Have few medium height ledges.
            Ussually prety crowded, suggested time to hit this spot in the morning or late evening.
          </Text>
          <Text style={styles.location}>Location</Text>
          <Text style={styles.address}>Universitat, 08007 Barcelona</Text>
          <Image style={styles.mapImage} source={require('../assets/map.png')} />
        </View>
      </ScrollView>
      <StatusBar style='inverted' />
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
  view: {
    backgroundColor: 'rgb(55, 53, 57)',
    width: 325,
    height: 760,
    paddingLeft: 25,
    paddingTop: 15,
    borderRadius: 20
  },
  text: {
    color: 'rgb(240, 237, 238)',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20
  },
  description: {
    color: 'rgb(240, 237, 238)',
    fontSize: 15,
    paddingTop: 20,
    paddingRight: 20
  },
  location: {
    color: 'rgb(240, 237, 238)',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20
  },
  address: {
    color: 'rgb(240, 237, 238)',
    fontSize: 15,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 25
  }
})
