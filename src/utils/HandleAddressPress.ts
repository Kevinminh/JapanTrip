import { Linking, Button } from 'react-native'

export const openMaps = (address: string) => {
    // const address = 'Your destination address' // Replace with the desired destination address

    // Create a deep linking URL with the destination address
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

    // Open the map application with the provided URL
    Linking.openURL(mapUrl)
}
