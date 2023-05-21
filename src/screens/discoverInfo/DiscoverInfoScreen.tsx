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
            galleryImages?: [string, string, string]
        }
    }
}

const DiscoverInfoScreen = () => {
    const route = useRoute<RouteProp<ParamList, 'param'>>()
    const { colors } = useTheme()

    const { data } = route.params

    console.log(data)

    return (
        <View style={[styling.flex1]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={[styles.image]} source={{ uri: data.image }} />

                <Body style={[theme.textVariants.t23Bold, styling.mt10, styling.textCenter]}>{data.location}</Body>
                <Body style={[theme.textVariants.t13Regular, styling.textCenter, { color: colors.secondaryText }]}>
                    {data.city}
                </Body>

                <View style={[styles.infoContainer, styling.mv10, styling.mh20, { backgroundColor: colors.card }]}>
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

                <View style={{ flex: 1 }}>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            gap: 10,
                            marginHorizontal: 10,
                            marginVertical: 15,
                            paddingBottom: 25
                        }}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                    >
                        {data.galleryImages &&
                            data.galleryImages.map((item, index) => (
                                <TouchableOpacity activeOpacity={0.3} key={index}>
                                    <Image style={[styles.singleImage]} source={{ uri: item }} />
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default DiscoverInfoScreen

const styles = StyleSheet.create({
    image: {
        width: '90%',
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
        height: 200,
        // width: '100%',
        width: 325,
        borderRadius: theme.radius.default,
        resizeMode: 'cover'
    },

    imageContainer: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // flexWrap: 'wrap',
        flex: 1,
        paddingBottom: 25
    }
})
