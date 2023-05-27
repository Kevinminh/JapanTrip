import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabNavigatorParamList } from '../NavigationTypes'
import { hapticsLight } from '../../utils/Haptics'

import { useTheme } from '@react-navigation/native'

// SCREENS
import HomeScreen from '../../screens/home/HomeScreen'
import DiscoverScreen from '../../screens/discover/DiscoverScreen'
import CurrencyScreen from '../../screens/currency/CurrencyScreen'
import MapScreen from '../../screens/map/MapScreen'
import InfoScreen from '../../screens/info/InfoScreen'

// SVG
import Shop from '../../assets/svg/Shop.svg'
import Map from '../../assets/svg/Map.svg'
import Currency from '../../assets/svg/Currency.svg'
import Compass from '../../assets/svg/Compass.svg'
import Info from '../../assets/svg/Info.svg'
import CompassFilled from '../../assets/svg/CompassFilled.svg'

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>()

const Navbar = () => {
    const { colors } = useTheme()
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarStyle: {
                    paddingTop: 5,
                    backgroundColor: colors.background,
                    borderTopWidth: 0
                },
                headerStyle: {
                    backgroundColor: colors.background
                }
            }}
        >
            <Tab.Screen
                component={HomeScreen}
                name="HomeTab"
                options={{
                    tabBarLabel: 'Food',
                    title: 'Food',
                    headerShown: true,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Shop width={25} height={25} fill={colors.primary} />
                        ) : (
                            <Shop width={25} height={25} fill={colors.text} />
                        )
                }}
                listeners={{
                    tabPress: () => {
                        hapticsLight()
                    }
                }}
            />

            <Tab.Screen
                component={MapScreen}
                name="MapTab"
                options={{
                    tabBarLabel: 'Map',
                    title: 'Map',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Map width={25} height={25} fill={colors.primary} />
                        ) : (
                            <Map width={25} height={25} fill={colors.text} />
                        )
                }}
                listeners={{
                    tabPress: () => {
                        hapticsLight()
                    }
                }}
            />

            <Tab.Screen
                component={DiscoverScreen}
                name="DiscoverTab"
                options={{
                    tabBarLabel: 'Explore',
                    title: 'Explore',
                    headerShown: true,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <CompassFilled width={25} height={25} fill={colors.primary} />
                        ) : (
                            <Compass width={25} height={25} fill={colors.text} />
                        )
                }}
                listeners={{
                    tabPress: () => {
                        hapticsLight()
                    }
                }}
            />

            <Tab.Screen
                component={CurrencyScreen}
                name="CurrencyTab"
                options={{
                    tabBarLabel: 'Currency',
                    title: 'Valutakalkulator',
                    headerShown: true,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Currency width={25} height={25} fill={colors.primary} />
                        ) : (
                            <Currency width={25} height={25} fill={colors.text} />
                        )
                }}
                listeners={{
                    tabPress: () => {
                        hapticsLight()
                    }
                }}
            />

            <Tab.Screen
                component={InfoScreen}
                name="InfoTab"
                options={{
                    tabBarLabel: 'Info',
                    title: 'Info',
                    headerShown: true,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Info width={25} height={25} fill={colors.primary} />
                        ) : (
                            <Info width={25} height={25} fill={colors.text} />
                        )
                }}
                listeners={{
                    tabPress: () => {
                        hapticsLight()
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Navbar

const styles = StyleSheet.create({})
