import React from 'react'
import { View, StyleSheet, Alert, Button } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const SbMap = ({ data }) => {

  // here from database getting coordinates, once it's mapped it automatically adds marker in the GoogleMap
  // const pinData = data.map((marker, index) => {
  //   return (
  //     <Marker
  //       key={marker._id}
  //       coordinate={{ latitude: marker.latitude, longitude: marker.longitude}}
  //       title={marker.title}
  //       description={marker.description}
        // onPress={() => Alert.alert('pressed')}
        
      // />
    // )
  // }
  // )

  return (

    <View >

      <MapView
        // style={StyleSheet.absoluteFillObject}
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
        {/* {pinData} */}
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
