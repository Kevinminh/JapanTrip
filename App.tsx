import { useFonts } from 'expo-font'

import Navigation from './src/navigation/stack/Navigation'

export default function App() {
    // LOADING FONTS
    const [fontsLoaded] = useFonts({
        MontserratLight: require('./src/assets/fonts/Montserrat-Light.ttf'),
        MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
        MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
        MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
        MontserratSemiBold: require('./src/assets/fonts/Montserrat-SemiBold.ttf')
    })

    if (!fontsLoaded) {
        return null
    }

    return <Navigation />
}
