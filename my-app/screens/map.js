import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const Map = ({ data }) => {
  // here from database getting coordinates, once it's mapped it automatically adds marker in the GoogleMap
  const pinData = data.map((marker, index) => {
    return (
      <Marker
        key={marker._id}
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        title={marker.title}
        description={marker.description}
        // onPress={() => navigation.navigate('SingleList')}
      />
    )
  }
  )

  return (

    <View style={StyleSheet.absoluteFillObject}>

      <MapView
        style={StyleSheet.absoluteFillObject}
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

export default Map
