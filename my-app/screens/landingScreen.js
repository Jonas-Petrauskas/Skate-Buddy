import React from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'

const image = require('../assets/loadingImg.png')

const landingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={stylesButton.container}>
          <Pressable
            style={stylesButton.button} onPress={() => navigation.navigate('List')}
          >
            <Text style={stylesButton.text}>Click here</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 2,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})

const stylesButton = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 15,
    width: 150,
    marginTop: 550,
    backgroundColor: 'rgb(44, 102, 110)'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.25
  }
})

export default landingPage
