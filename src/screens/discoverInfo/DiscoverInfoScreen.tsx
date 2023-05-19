import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import Body from '../../components/body/Body'
import { useTheme } from '@react-navigation/native'

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
            image1?: string
            image2?: string
            image3?: string
        }
    }
}

const DiscoverInfoScreen = () => {
    const route = useRoute<RouteProp<ParamList, 'param'>>()
    const { colors } = useTheme()

    const { data } = route.params

    console.log(data)

    return (
        <View style={[styling.flex1, styling.ph20]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={[styles.image]} source={{ uri: data.image }} />

                <Body style={[theme.textVariants.t23Bold, styling.mt10, styling.textCenter]}>{data.city}</Body>
                <Body style={[theme.textVariants.t13Regular, styling.textCenter, { color: colors.secondaryText }]}>
                    {data.location}
                </Body>

                <View style={[styles.infoContainer, styling.mv10, { backgroundColor: colors.card }]}>
                    <Body>ℹ️ {data.info}</Body>
                    <Body style={[theme.textVariants.t13Regular, { color: colors.secondaryText }]}>
                        🕒 {data.openingHours}
                    </Body>
                    <Body style={[theme.textVariants.t13Regular, { color: colors.secondaryText }]}>
                        📍 {data.address}
                    </Body>
                    <TouchableOpacity activeOpacity={0.3}>
                        <Body>🌐 {data.link}</Body>
                    </TouchableOpacity>
                </View>

                <View style={[styles.imageContainer]}>
                    {data.image1 && (
                        <TouchableOpacity activeOpacity={0.3} style={[styles.singleImage]}>
                            <Image style={[styles.singleImage]} source={{ uri: data.image1 }} />
                        </TouchableOpacity>
                    )}
                    {data.image2 && (
                        <TouchableOpacity activeOpacity={0.3} style={[styles.singleImage]}>
                            <Image style={[styles.singleImage]} source={{ uri: data.image2 }} />
                        </TouchableOpacity>
                    )}
                    {data.image3 && (
                        <TouchableOpacity activeOpacity={0.3} style={[styles.singleImage]}>
                            <Image style={[styles.singleImage]} source={{ uri: data.image3 }} />
                        </TouchableOpacity>
                    )}
                </View>
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
    },

    infoContainer: {
        padding: 20,
        borderRadius: theme.radius.default,
        gap: 10
    },

    singleImage: {
        height: 175,
        width: '100%',
        borderRadius: theme.radius.default
    },

    imageContainer: {
        flexWrap: 'wrap',
        flex: 1,
        gap: 10,
        paddingBottom: 25
    }
})
