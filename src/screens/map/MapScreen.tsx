import { Image, StyleSheet, Text, View } from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader'
import { FoodData } from '../../assets/data/FoodData'
import { theme } from '../../assets/Theme'

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

    function asd(item) {
        console.log(item)
    }

    return (
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
        >
            {FoodData.map((item, index) => (
                <Marker key={index} coordinate={{ latitude: item.coordinates[0], longitude: item.coordinates[1] }}>
                    <Image source={{ uri: item.image }} style={styles.markerImage} />
                </Marker>
            ))}
        </MapView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    markerImage: {
        width: 55,
        height: 55,
        borderRadius: theme.radius.rounded,
        borderColor: 'orange',
        borderWidth: 3
    }
})
