import { Image, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { styling, theme } from '../../assets/Theme'
import Body from '../body/Body'

// SVG
import Close from '../../assets/svg/Close.svg'
import Check from '../../assets/svg/Check.svg'

type HotelCardProps = {
    data: {
        image: string
        name: string
        date: string
        address: string
        checkIn: string
        checkOut: string
        city: string
    }
}

const HotelCard = ({ ...props }: HotelCardProps) => {
    const { colors } = useTheme()

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            <View>
                <Image style={[styles.image]} source={{ uri: props.data.image }} />
                <View style={[styles.textLabel, { backgroundColor: colors.card }]}>
                    <Body style={[styles.date]}>{props.data.date}</Body>
                </View>

                <View style={[styles.infoWrapper]}>
                    <Body style={[]}>{props.data.city}</Body>
                    <Body style={[theme.textVariants.t19SemiBold, styles.title]} numberOfLines={1}>
                        {props.data.name}
                    </Body>
                </View>
            </View>

            <View style={[styling.flexCenter, styling.spaceBetween, styling.p10]}>
                <View style={[styling.flexCenter, styling.gap5]}>
                    <Check width={15} height={15} fill={colors.primary} />
                    <Body>Check in kl {props.data.checkIn}</Body>
                </View>
                <View style={[styling.flexCenter, styling.gap5]}>
                    <Close width={15} height={15} fill={colors.primary} />
                    <Body>Check out kl {props.data.checkOut}</Body>
                </View>
            </View>
        </View>
    )
}

export default HotelCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        borderRadius: theme.radius.default,
        width: 350
    },

    image: {
        width: '100%',
        height: 150,
        // borderRadius: theme.radius.default,
        borderTopLeftRadius: theme.radius.default,
        borderTopRightRadius: theme.radius.default,
        opacity: 0.7
    },
    title: {
        // position: 'absolute',
        // padding: 10
    },

    date: {},
    textLabel: {
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: theme.radius.default,
        position: 'absolute',
        left: 10,
        top: 10
    },

    infoWrapper: {
        position: 'absolute',
        bottom: 10,
        left: 10
    }
})
