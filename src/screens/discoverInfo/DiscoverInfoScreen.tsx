import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import Body from '../../components/body/Body'
import { styling, theme } from '../../assets/Theme'

// DATA

type ParamList = {
    param: {
        data: {
            image: string
            city: string
            location: string
            address: string
            info: string
            openingHours: string
            link: string
        }
    }
}

const DiscoverInfoScreen = () => {
    const route = useRoute<RouteProp<ParamList, 'param'>>()

    const { data } = route.params

    console.log(data)

    return (
        <View style={[styling.flex1, styling.ph20]}>
            <ScrollView>
                <Image style={[styles.image]} source={{ uri: data.image }} />

                <Body>By: {data.city}</Body>
                <Body>Navn: {data.location}</Body>
                <Body>Åningstider: {data.openingHours}</Body>
                <Body>Info: {data.info}</Body>
                <Body>Addresse: {data.address}</Body>
                <Body>Nettside: {data.link}</Body>
            </ScrollView>
        </View>
    )
}

export default DiscoverInfoScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
        borderRadius: theme.radius.default
    }
})
