import { StyleSheet, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// SCREENS
import HomeScreen from '../../screens/home/HomeScreen'
import DiscoverScreen from '../../screens/discover/DiscoverScreen'
import DiscoverInfoScreen from '../../screens/discoverInfo/DiscoverInfoScreen'

import Navbar from '../navbar/Navbar'

import { useNavigation, useTheme } from '@react-navigation/native'
import { RootStackParamList } from '../NavigationTypes'

import { ScreenNames } from './ScreenNames'

// SVG
import ChevronLeft from '../../assets/svg/ChevronLeft.svg'

const Nav = createNativeStackNavigator()

const NavStack = () => {
    const navigation = useNavigation<RootStackParamList>()
    const { colors } = useTheme()

    return (
        <Nav.Navigator
            screenOptions={{
                headerShown: true,
                animationDuration: 250,
                fullScreenGestureEnabled: true,
                headerStyle: {
                    backgroundColor: colors.background
                },
                headerBackTitleVisible: false,
                headerBackTitle: '',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ChevronLeft width={20} height={20} fill={colors.primary} />
                    </TouchableOpacity>
                )
            }}
            initialRouteName="Navbar"
        >
            <Nav.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
            <Nav.Screen name={ScreenNames.HomeSreen} component={HomeScreen} />
            <Nav.Screen name={ScreenNames.DiscoverScreen} component={DiscoverScreen} />
            <Nav.Screen name={ScreenNames.DiscoverInfoScreen} component={DiscoverInfoScreen} />
        </Nav.Navigator>
    )
}

export default NavStack

const styles = StyleSheet.create({})
