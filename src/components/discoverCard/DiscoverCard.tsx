import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from '../body/Body'
import { theme } from '../../assets/Theme'
import { useTheme } from '@react-navigation/native'

//SVG
import ChevronRight from '../../assets/svg/ChevronRight.svg'

type DiscoverCardProps = {
    item: {
        location: string
        city: string
        image: string
    }
    onPress: () => void
}

const DiscoverCard = ({ ...props }: DiscoverCardProps) => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
            <View>
                <Image source={{ uri: props.item.image }} style={[styles.image]} />
                <Body style={[theme.textVariants.t15Bold, styles.locationText, { color: colors.white }]}>
                    {props.item.location}
                </Body>

                <TouchableOpacity activeOpacity={0.3} style={[styles.btn]} onPress={props.onPress}>
                    <ChevronRight width={17.5} height={17.5} fill={colors.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default DiscoverCard

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100,
        borderRadius: theme.radius.default,
        opacity: 0.75
    },

    locationText: {
        position: 'absolute',
        bottom: 5,
        left: 5
    },
    btn: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})
