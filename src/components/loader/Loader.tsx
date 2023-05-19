import { ActivityIndicator, View } from 'react-native'
import { styling } from '../../assets/Theme'

const Loader = () => {
    return (
        <View style={[styling.flex1, { justifyContent: 'center' }]}>
            <ActivityIndicator size="large" />
        </View>
    )
}

export default Loader
