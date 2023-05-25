import { Dimensions, Image, Platform, StyleSheet, Animated, View } from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { useEffect, useRef, useState } from 'react'
import Loader from '../../components/loader/Loader'
import { styling, theme } from '../../assets/Theme'
import CalloutCardExplore from './components/CalloutCard'
import CardSliderExplore from './components/CardSlider'
import { MapData } from '../../assets/data/MapData'

export type MapStateProps = {
    location: string
    address: string
    city: string
    category: string
    image: string
    priceRange: number
    info: string
    coordinates: [number, number]
    openingHours: string
    link: string
    galleryImages: [string, string, string]
}

const MapScreen = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const [mapState, setMapState] = useState<any>(MapData)

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
        console.log(text)
    }

    const _map = useRef<any>(null)
    const _scrollView = useRef<any>(null)

    // ANIMATING THE SCREEN
    let mapAnimation = new Animated.Value(0)
    let mapIndex = 0
    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3) // animate 30% away from landing on the next item
            if (index >= mapState.length) {
                index = mapState.length - 1
            }
            if (index <= 0) {
                index = 0
            }
            clearTimeout(regionTimeout) // FIX WHY?

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index
                    // const { coordinate } = mapState
                    // console.log(coordinate[index])

                    // console.log(mapState[index].coordinates[0])
                    console.log('FUNCTION RUN')

                    _map?.current?.animateToRegion(
                        {
                            // ...coordinate,
                            latitude: mapState[index].coordinates[0],
                            longitude: mapState[index].coordinates[1],
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        },
                        350
                    )
                }
            }, 10)
        })
    })

    // // ANIMATING THE MARKERS
    const { width } = Dimensions.get('window')
    const CARD_WIDTH = width * 0.8
    const interpolations = mapState.map((marker, index) => {
        const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH]

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp'
        })

        return { scale }
    })

    // PRESSING ON MARKERS
    const SPACING_FOR_CARD_INSET = width * 0.1 - 10
    const handleMarkerPress = (mapEventData: { _targetInst: { return: { key: any } } } | undefined) => {
        const markerID = mapEventData?._targetInst.return.key
        let x = markerID * CARD_WIDTH + markerID * 20

        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET
        }

        _scrollView?.current?.scrollTo({ x: x, y: 0, animated: true })
    }

    if (location === null) return <Loader />

    return (
        <View style={styling.flex1}>
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
                ref={_map}
            >
                {mapState.map((item, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolations[index].scale
                            }
                        ]
                    }

                    return (
                        <Marker
                            key={index}
                            coordinate={{ latitude: item.coordinates[0], longitude: item.coordinates[1] }}
                            onPress={(e: any) => handleMarkerPress(e)}
                        >
                            <Image
                                source={{ uri: item.image }}
                                style={[styles.markerImage, { borderColor: item.type === 'FOOD' ? 'orange' : 'pink' }]}
                            />
                            <CalloutCardExplore data={item} />
                        </Marker>
                    )
                })}
            </MapView>

            <CardSliderExplore
                data={mapState}
                mapState={mapState}
                mapAnimation={mapAnimation}
                _map={_map}
                _scrollView={_scrollView}
            />
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    markerImage: {
        width: 55,
        height: 55,
        borderRadius: theme.radius.rounded,
        borderWidth: 3
    }
})
