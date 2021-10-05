import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';


import { COLORS } from '../constants';

const PlaceSelector = props => {


const handlePickMap = () => props.navigation.push('Map')

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
          <Text>No hay ubicación...</Text>     
      </View>
      <Button
        title="Ver Mapa"
        onPress= {handlePickMap}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "blue",
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default PlaceSelector;