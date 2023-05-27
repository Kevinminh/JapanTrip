import { StyleSheet, View, Animated, Dimensions, Image, Platform } from 'react-native'
import { useTheme, useNavigation } from '@react-navigation/native'
import { styling, theme } from '../../../assets/Theme'
import { MapStateProps } from '../MapScreen'
import { RootStackParamList } from '../../../navigation/NavigationTypes'
import { ScreenNames } from '../../../navigation/stack/ScreenNames'
import { MutableRefObject } from 'react'

// COMP
import Body from '../../../components/body/Body'

// SVG
// import Star from '../../../../assets/svg/misc/Star.svg'
// import StarFilled from '../../../../assets/svg/misc/StarFilled.svg'
import Dollar from '../../../assets/svg/Dollar.svg'

import Button from '../../../components/button/Button'

type CardSliderExploreProps = {
    data: MapStateProps | null
    mapState: any
    _map: any
    _scrollView: MutableRefObject<null>
    mapAnimation: any
}

const { width } = Dimensions.get('window')
const CARD_HEIGHT = 200
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10

const CardSliderExplore = ({ ...props }: CardSliderExploreProps) => {
    const { colors } = useTheme()
    const navigation = useNavigation<RootStackParamList>()

    function handleNavigate(item: object) {
        navigation.navigate(ScreenNames.DiscoverInfoScreen, { data: item })
    }

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
                        {
                            backgroundColor: colors.background,
                            borderWidth: 2,
                            borderColor: colors.border
                        }
                    ]}
                    key={index}
                >
                    <View style={[styles.cardImage]}>
                        <Image source={{ uri: item.image }} resizeMode="cover" style={[styles.cardImage]} />
                        <View
                            style={[
                                styles.labelText,
                                styling.flexCenter,
                                styling.gap10,
                                {
                                    backgroundColor:
                                        item.type === 'FOOD'
                                            ? colors.primary
                                            : item.type === 'DESERT'
                                            ? 'pink'
                                            : 'brown'
                                }
                            ]}
                        >
                            <Body style={[theme.textVariants.t13SemiBold]}>
                                {item.priceRange === 1 ? (
                                    <Dollar width={12} height={12} fill={colors.white} />
                                ) : item.priceRange === 2 ? (
                                    <View style={styling.flexCenter}>
                                        <Dollar width={12} height={12} fill={colors.white} />
                                        <Dollar width={12} height={12} fill={colors.white} />
                                    </View>
                                ) : item.priceRange === 3 ? (
                                    <View style={styling.flexCenter}>
                                        <Dollar width={12} height={12} fill={colors.white} />
                                        <Dollar width={12} height={12} fill={colors.white} />
                                        <Dollar width={12} height={12} fill={colors.white} />
                                    </View>
                                ) : (
                                    <></>
                                )}
                            </Body>
                            <Body style={[theme.textVariants.t13SemiBold]}>
                                {item.type === 'DESERT' ? 'Dessert' : item.type === 'FOOD' ? 'Food' : 'Drinks'}
                            </Body>
                        </View>
                        <View style={[styles.cityText, { backgroundColor: colors.border }]}>
                            <Body>{item.city}</Body>
                        </View>
                    </View>

                    <View style={[styles.textContent]}>
                        <Body numberOfLines={1} style={[theme.textVariants.t15SemiBold]}>
                            {item.location}
                        </Body>
                        <Body
                            style={[theme.textVariants.t13Regular, { color: colors.secondaryText }]}
                            numberOfLines={1}
                        >
                            {item.address}
                        </Body>

                        <Button text="Read more" onPress={() => handleNavigate(item)} />
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
        borderRadius: theme.radius.default,
        padding: 5,
        paddingHorizontal: 7.5
    },
    cityText: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        padding: 5,
        paddingHorizontal: 7.5,
        borderRadius: theme.radius.default
    }
})
