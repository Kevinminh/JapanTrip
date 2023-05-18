import { StyleSheet, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

// DATA

type ParamList = {
    param: {
        data: {
            image: string
            city: string
            location: string
        }
    }
}

const DiscoverInfoScreen = () => {
    const route = useRoute<RouteProp<ParamList, 'param'>>()

    const { data } = route.params

    console.log(data)

    return <View></View>
}

export default DiscoverInfoScreen

const styles = StyleSheet.create({})
