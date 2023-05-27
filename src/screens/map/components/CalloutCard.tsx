import { StyleSheet, View } from 'react-native'
import { Callout } from 'react-native-maps'
import { useTheme } from '@react-navigation/native'
import { styling, theme } from '../../../assets/Theme'

// COMP
import Body from '../../../components/body/Body'

// SVG
import Compass from '../../../assets/svg/Compass.svg'
import Dollar from '../../../assets/svg/Dollar.svg'

type CalloutCardExploreProps = {
    data: {
        location: string
        address: string
        phone: string
        priceRange: string
    }
}

const CalloutCardExplore = ({ ...props }: CalloutCardExploreProps) => {
    const { colors } = useTheme()

    return (
        <Callout tooltip>
            <View style={[styles.bubble, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <Body style={[styling.mb5, theme.textVariants.t15SemiBold]}>{props.data.location}</Body>
                <View style={[styling.gap5]}>
                    <View style={[styling.flexCenter, styling.gap5]}>
                        <Compass width={14} height={14} fill={colors.primary} />
                        <Body style={[theme.textVariants.bodySecondary]}>{props.data.address}</Body>
                    </View>
                    <View style={[styling.flexCenter, styling.gap5]}>
                        <Dollar width={12} height={12} fill={colors.primary} />
                        <Body style={[theme.textVariants.bodySecondary]}>Price: {props.data.priceRange}</Body>
                    </View>
                    <View style={[styling.flexCenter, styling.gap5]}>
                        <Compass width={12} height={12} fill={colors.primary} />
                        <Body style={[theme.textVariants.bodySecondary]}>Phone: {props.data.phone}</Body>
                    </View>
                </View>
            </View>
            <View style={[styles.arrowBorder, { borderTopColor: colors.card }]} />
            <View style={[styles.arrow, { borderTopColor: colors.card }]} />
        </Callout>
    )
}

export default CalloutCardExplore

const styles = StyleSheet.create({
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        borderRadius: theme.radius.default,
        borderWidth: 0.5,
        padding: 15,
        width: 175
    },

    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5
    },

    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32
    },

    image: {
        width: 120,
        height: 80
    }
})
