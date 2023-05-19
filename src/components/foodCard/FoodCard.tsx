import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Body from '../body/Body'
import { styling, theme } from '../../assets/Theme'
import { useTheme } from '@react-navigation/native'

//SVG
import ChevronRight from '../../assets/svg/ChevronRight.svg'
import Dollar from '../../assets/svg/Dollar.svg'

type FoodCardProps = {
    item: {
        location: string
        image: string
        name: string
        priceRange: number
    }
    onPress: () => void
}

const FoodCard = ({ ...props }: FoodCardProps) => {
    const { colors } = useTheme()

    return (
        <TouchableOpacity activeOpacity={0.3} onPress={props.onPress}>
            <View>
                <Image source={{ uri: props.item.image }} style={[styles.image]} />
                <Body style={[theme.textVariants.t15Bold, styles.nameText, { color: colors.white }]}>
                    {props.item.name.length > 19 ? props.item.name.slice(0, 19) + '...' : props.item.name}
                </Body>
                <Body style={[theme.textVariants.bodySecondary, styles.locationText]}>
                    {props.item.location.length > 25 ? props.item.location.slice(0, 25) + '...' : props.item.location}
                </Body>

                {props.item.priceRange === 1 && (
                    <View style={[styling.flexCenter, styles.currencyIcon]}>
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Body style={[theme.textVariants.bodySecondary, { color: colors.white }]}> - Billig</Body>
                    </View>
                )}
                {props.item.priceRange === 2 && (
                    <View style={[styling.flexCenter, styles.currencyIcon]}>
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Body style={[theme.textVariants.bodySecondary, { color: colors.white }]}> - Middels</Body>
                    </View>
                )}
                {props.item.priceRange === 3 && (
                    <View style={[styling.flexCenter, styles.currencyIcon]}>
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Dollar width={12.5} height={12.5} fill={colors.white} />
                        <Body style={[theme.textVariants.bodySecondary, { color: colors.white }]}> - Dyr</Body>
                    </View>
                )}

                <TouchableOpacity activeOpacity={0.3} style={[styles.btn]}>
                    <ChevronRight width={17.5} height={17.5} fill={colors.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 100,
        borderRadius: theme.radius.default,
        opacity: 0.65
    },

    nameText: {
        position: 'absolute',
        bottom: 25,
        left: 5
    },

    locationText: {
        position: 'absolute',
        bottom: 5,
        left: 5
    },

    currencyIcon: {
        position: 'absolute',
        top: 5,
        left: 5
    },

    btn: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})
