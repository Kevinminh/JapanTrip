import { View } from 'react-native'
import NavStack from './NavStack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { darkMode, lightMode } from '../../assets/Theme'

const Navigation = () => {
    const isDark = true
    return (
        <View style={{ flex: 1, backgroundColor: isDark ? '#000000' : '#ffffff' }}>
            <NavigationContainer theme={isDark ? darkMode : lightMode}>
                <StatusBar style={isDark ? 'light' : 'dark'} />

                <NavStack />
            </NavigationContainer>
        </View>
    )
}

export default Navigation
