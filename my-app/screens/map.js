import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'



const Map = ({ data }) => {


  const pinData = data.map((marker, index) => {
    return (
      <Marker
        key={marker._id}
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
      />
    )
  }
  )

  return (

    <View style={StyleSheet.absoluteFillObject}>

      <MapView
        style={StyleSheet.absoluteFillObject}
        style={{ flex: 1 }}
        provider='google'
        loadingEnabled
        region={{
          latitude: 41.390205,
          longitude: 2.154007,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {pinData}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Map
