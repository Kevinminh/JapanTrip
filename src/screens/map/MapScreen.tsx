import { StyleSheet, Text, View } from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'

const MapScreen = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    useEffect(() => {
        ;(async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
        })()
    }, [])

    let text = 'Waiting..'
    if (errorMsg) {
        text = errorMsg
    } else if (location) {
        text = JSON.stringify(location)
    }

    if (location === null) return <Loader />
    console.log(location.coords.latitude)

    return (
        <View style={{ flex: 1 }}>
            <MapView
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                style={{ flex: 1 }}
                userInterfaceStyle="dark"
                mapType="mutedStandard"
                showsUserLocation={true}
            ></MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
