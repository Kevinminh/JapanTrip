import { StyleSheet, View } from 'react-native'
import Body from '../body/Body'
import { useTheme } from '@react-navigation/native'
import { theme } from '../../assets/Theme'

const HotelCard = () => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            <Body>Hotel name</Body>
            <Body>Stay date:</Body>
            <Body>Hotel address</Body>
            <Body>Check in:</Body>
            <Body>check out: </Body>
            <Body>Link: </Body>
            <Body>City: </Body>
        </View>
    )
}

export default HotelCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        borderRadius: theme.radius.default
    }
})
