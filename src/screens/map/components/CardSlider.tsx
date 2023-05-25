import { StyleSheet, View, Animated, Dimensions, Image, Platform } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native'
import { theme } from '../../../assets/Theme'
import { MapStateProps } from '../MapScreen'
import { RootStackParamList } from '../../../navigation/NavigationTypes'
import { ScreenNames } from '../../../navigation/stack/ScreenNames'
import { MutableRefObject, useEffect } from 'react'

// COMP
import Body from '../../../components/body/Body'

// SVG
// import Star from '../../../../assets/svg/misc/Star.svg'
// import StarFilled from '../../../../assets/svg/misc/StarFilled.svg'

import Button from '../../../components/button/Button'

type CardSliderExploreProps = {
    data: MapStateProps | null
    mapState: any
    _map: any
    _scrollView: MutableRefObject<null>
    mapAnimation: any
}

const { width } = Dimensions.get('window')
const CARD_HEIGHT = 235
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10

const CardSliderExplore = ({ ...props }: CardSliderExploreProps) => {
    const { colors } = useTheme()
    const navigation = useNavigation<RootStackParamList>()

    // function handleNavigate(id: number) {
    //     navigation.navigate(ScreenNames.BarberProfileScreen, { barberId: id })
    // }

    let mapAnimation = new Animated.Value(0)
    let mapIndex = 0
    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3) // animate 30% away from landing on the next item
            if (index >= props.mapState.length) {
                index = props.mapState.length - 1
            }
            if (index <= 0) {
                index = 0
            }

            clearTimeout(regionTimeout) // FIX WHY?

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index
                    // const { coordinate } = props.mapState.coordinates[index]
                    // console.log('ASDASD', coordinate)
                    props._map.current.animateToRegion(
                        {
                            // ...coordinate,
                            latitude: props.mapState[index].coordinates[0],
                            longitude: props.mapState[index].coordinates[1],
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        },
                        350
                    )
                }
            }, 10)
        })
    })

    // console.log(props.mapState[0].coordinates)

    return (
        <Animated.ScrollView
            ref={props._scrollView}
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollView]}
            pagingEnabled
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="center"
            contentInset={{
                top: 0,
                left: SPACING_FOR_CARD_INSET,
                bottom: 0,
                right: SPACING_FOR_CARD_INSET
            }}
            contentContainerStyle={{
                paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
            }}
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                x: props.mapAnimation
                            }
                        }
                    }
                ],
                { useNativeDriver: true }
            )}
        >
            {props.data?.map((item, index) => (
                <View
                    style={[
                        styles.card,
                        { backgroundColor: colors.background, borderWidth: 2, borderColor: colors.border }
                    ]}
                    key={index}
                >
                    <View style={[styles.cardImage]}>
                        <Image source={{ uri: item.image }} resizeMode="cover" style={[styles.cardImage]} />
                        <View style={[styles.labelText, { backgroundColor: colors.primary }]}>
                            <Body style={[theme.textVariants.t13SemiBold]}>Prisklasse {item.priceRange}</Body>
                        </View>
                    </View>

                    <View style={[styles.textContent]}>
                        <Body numberOfLines={1} style={[theme.textVariants.t15SemiBold]}>
                            {item.location}
                        </Body>
                        <Body style={[theme.textVariants.t13Regular]}>{item.address}</Body>

                        <Button text="Bestill" />
                    </View>
                </View>
            ))}
        </Animated.ScrollView>
    )
}

export default CardSliderExplore

const styles = StyleSheet.create({
    scrollView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10
    },
    card: {
        // padding: 10,
        elevation: 2,
        // borderRadius: theme.radius.default,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: 'hidden'
    },
    cardImage: {
        flex: 2,
        width: '100%',
        height: '100%',
        alignSelf: 'center'
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH
    },
    textContent: {
        flex: 2,
        padding: 10,
        gap: 3
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: 'bold'
    },
    cardDescription: {
        fontSize: 12,
        color: '#444'
    },

    labelText: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        borderRadius: theme.radius.rounded,
        padding: 5,
        paddingHorizontal: 7.5
    }
})
