import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MapPreview from '../components/MapPreview'


const LocationSelector = () => {
    const [location, setLocation] = useState({latitude: "", longitude:""})
    useEffect(()=>{
        (async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status=! "granted"){
                setError("Permission to access location was denied")
            }
            let location  = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })()
    }, [])
  return (
    <View>
      <Text>Mi locacion</Text>
      {location.latitude? (
        <Text>Lat:{location.latitude}, long:{location.longitude}</Text>
      ): null }
      <MapPreview location = {location}/>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({})