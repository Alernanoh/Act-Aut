import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'

import MapView from 'react-native-maps';

export default function MapaScreen() {
  return (
    <View>
      <MapView style={styles.map} 
        
      />
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
      },
})